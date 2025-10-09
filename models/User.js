import db from "../config/db.js";

// Find user by email
export const findUserByEmail = async (email) => {
  const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
  return rows[0];
};

// Create new user
export const createUser = async (name, email, hashedPassword, userRole = "student") => {
  const [result] = await db.query(
    "INSERT INTO users (name, email, password, userRole) VALUES (?, ?, ?, ?)",
    [name, email, hashedPassword, userRole] // createdAt auto-fills
  );
  return result.insertId;
};