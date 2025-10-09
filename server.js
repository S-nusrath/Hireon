// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import authRoutes from "./routes/auth.js";
// import dashboardRoutes from "./routes/dashboard.js";

// dotenv.config();
// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/api/auth", authRoutes);
// app.use("/api/dashboard", dashboardRoutes);

// app.get("/", (req, res) => {
//   res.send("Hireon backend running...");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./config/db.js";
import authRoutes from "./routes/auth.js";
import { protect} from "./middleware/authMiddleware.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Root test
app.get("/", (req, res) => res.send("Hireon backend running..."));

// Public routes
app.use("/api/auth", authRoutes);

// Protected route
app.get("/api/dashboard", protect, (req, res) => {
  res.json({ message:` Welcome to dashboard, ${req.user.email} `});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
