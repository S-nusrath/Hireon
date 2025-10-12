// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";

// dotenv.config();

// export const protect = (req, res, next) => {
//   let token = req.headers.authorization?.split(" ")[1];

//   if (!token) {
//     return res.status(401).json({ message: "Not authorized, no token" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: "Not authorized, token failed" });
//   }
// };



// import jwt from "jsonwebtoken";
// import db from "../config/db.js";

// export const protect = async (req, res, next) => {
//   try {
//     const auth = req.headers.authorization || "";
//     const token = auth.startsWith("Bearer ") ? auth.split(" ")[1] : null;
//     if (!token) return res.status(401).json({ message: "Not authorized, no token" });

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const [rows] = await db.query("SELECT id, name, email FROM users WHERE id = ?", [decoded.id]);
//     if (!rows.length) return res.status(401).json({ message: "Not authorized, user not found" });

//     req.user = rows[0];
//     next();
//   } catch (err) {
//     console.error("Auth middleware error:", err);
//     res.status(401).json({ message: "Not authorized, token failed" });
//   }
// };



// import jwt from "jsonwebtoken";

// export const protect = (req, res, next) => {
//   let token;
//   console.log("Authorization Header:",req.headers.authorization);

//   if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
//     try {
//       token = req.headers.authorization.split(" ")[1];

//       const decoded = jwt.verify(token, process.env.JWT_SECRET);

//       req.user = decoded;
//       return next();
//     } catch (error) {
//       return res.status(401).json({ message: "Not authorized, token failed" });
//     }
//   }

//   if (!token) {
//     return res.status(401).json({ message: "Not authorized, no token" });
//   }
// };


// import jwt from "jsonwebtoken";

// const protect = (req, res, next) => {
//   let token;

//   if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
//     try {
//       token = req.headers.authorization.split(" ")[1];

//       // 🔍 Debug
//       console.log("Token received:", token);

//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       req.user = decoded;
//       return next();
//     } catch (error) {
//       console.error("JWT verify error:", error.message);
//       return res.status(401).json({ message: "Not authorized, token failed" });
//     }
//   }

//   if (!token) {
//     return res.status(401).json({ message: "Not authorized, no token" });
//   }
// };

// export default protect;


// import jwt from "jsonwebtoken";

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJudXNodUBleGFtcGxlLmNvbSIsImlhdCI6MTc1OTk0ODIyNSwiZXhwIjoxNzU5OTUxODI1fQ.H8Zn78UCjrSBALxmweiS_A9FX16RsIpge50-NUIKoME";
// try {
//   const decoded = jwt.verify(token, "secretkey@7");
//   console.log(decoded);
// } catch (err) {
//   console.error("Token invalid:", err.message);
//}


// import jwt from "jsonwebtoken";

// export const protect = (req, res, next) => {
//   let token;

//   if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
//     try {
//       token = req.headers.authorization.split(" ")[1];

//       // Debug messages
//       console.log("👉 Full Auth Header:", req.headers.authorization);
//       console.log("👉 Extracted Token:", token);

//       const decoded = jwt.verify(token, process.env.JWT_SECRET);

//       console.log("👉 Decoded Payload:", decoded);

//       req.user = decoded;
//       return next();
//     } catch (error) {
//       console.error("JWT verify error:", error.message);
//       return res.status(401).json({ message: "Not authorized, token failed" });
//     }
//   }

//   if (!token) {
//     return res.status(401).json({ message: "Not authorized, no token" });
//   }
// };

// export default protect;


// middleware/authMiddleware.js
import jwt from "jsonwebtoken";
import db from "../config/db.js";

const protect = async (req, res, next) => {
  let token;
  try {
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
      if (!process.env.JWT_SECRET) return res.status(500).json({ message: "JWT secret missing" });

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const [rows] = await db.query("SELECT id, name, email, userRole FROM users WHERE id = ?", [decoded.id]);
      if (!rows.length) return res.status(401).json({ message: "Not authorized, user not found" });

      req.user = rows[0]; // includes userRole
      return next();
    }
    return res.status(401).json({ message: "Not authorized, no token" });
  } catch (err) {
    console.error("Auth middleware error:", err);
    return res.status(401).json({ message: "Not authorized, token failed" });
  }
};

export default protect;