// import express from "express";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import { createUser, findUserByEmail } from "../models/User.js";

// const router = express.Router();

// // router.post("/register", async (req, res) => {
// //   const { name, email, password } = req.body;

// //   try {
// //     const userExists = await findUserByEmail(email);
// //     if (userExists) {
// //       return res.status(400).json({ message: "User already exists" });
// //     }w

// //     const hashedPassword = await bcrypt.hash(password, 10);
// //     const userId = await createUser(name, email, hashedPassword);

// //     return res.json({ message: "User registered", userId });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // });

// router.post("/register", async (req, res) => {
//   console.log("✅ Register route hit");
//   console.log("Request body:", req.body);

//   try {
//     const { name, email, password } = req.body;
//     res.json({ message: "TEMP test response", name, email, password });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error" });
//   }
// });
// // router.post("/login", async (req, res) => {
// //   const { email, password } = req.body;

// //   try {
// //     const user = await findUserByEmail(email);
// //     if (!user) {
// //       return res.status(400).json({ message: "Invalid credentials" });
// //     }

// //     const isMatch = await bcrypt.compare(password, user.password);
// //     if (!isMatch) {
// //       return res.status(400).json({ message: "Invalid credentials" });
// //     }

// //     const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
// //       expiresIn: "1h",
// //     });

// //     res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // });

// // export default router;
// //✅ LOGIN ROUTE
// router.post("/login", async (req, res) => {
//   console.log("✅ Login route hit");
//   console.log("Request body:", req.body);

//   try {
//     const { email, password } = req.body;

//     // 1. Check if user exists
//     const [users] = await db.query("SELECT * FROM users WHERE email = ?", [email]);

//     if (users.length === 0) {
//       console.log("❌ User not found");
//       return res.status(400).json({ error: "User not found" });
//     }

//     const user = users[0];

//     // 2. Compare passwords
//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       console.log("❌ Invalid password");
//       return res.status(400).json({ error: "Invalid credentials" });
//     }

//     // 3. Generate JWT
//     const token = jwt.sign(
//       { id: user.id, email: user.email },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );

//     console.log("✅ Login successful for:", user.email);

//     res.json({
//       token,
//       user: {
//         id: user.id,
//         name: user.name,
//         email: user.email,
//       },
//     });
//   } catch (err) {
//     console.error("🔥 Login error:", err.message);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// export default router;
// routes/auth.js
// routes/auth.js
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../config/db.js";

const router = express.Router();

// ---------- REGISTER ----------
// router.post("/register", async (req, res) => {
//   try {
//     const { name, email, password, userRole = "student" } = req.body;
//     if (!name || !email || !password) {
//       return res.status(400).json({ message: "Missing fields" });
//     }

//     const [existing] = await db.query("SELECT id FROM users WHERE email = ?", [email]);
//     if (existing.length) return res.status(400).json({ message: "User already exists" });

//     const hashed = await bcrypt.hash(password, 10);
//     const [result] = await db.query(
//       "INSERT INTO users (name, email, password, userRole) VALUES (?, ?, ?, ?)",
//       [name, email, hashed, userRole]
//     );

//     res.json({ message: "User registered", userId: result.insertId });
//   } catch (err) {
//     console.error("Register error:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });
// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, userRole = "student" } = req.body;

    console.log("📩 Register input:", req.body);

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Missing fields" });
    }

    // check if user exists
    const [existing] = await db.query("SELECT id FROM users WHERE email = ?", [email]);
    if (existing.length) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // insert new user
    const [result] = await db.query(
      "INSERT INTO users (name, email, password, userRole) VALUES (?, ?, ?, ?)",
      [name, email, hashedPassword, userRole]
    );

    res.status(201).json({
      message: "User registered successfully",
      userId: result.insertId,
    });
  } catch (err) {
    console.error("❌ Register error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ---------- LOGIN ----------
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Missing fields" });

    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    if (!rows.length) return res.status(400).json({ message: "Invalid credentials" });

    const user = rows[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;