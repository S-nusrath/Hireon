// // config/db.js
// import mysql from "mysql2/promise";
// import dotenv from "dotenv";

// dotenv.config();

// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// try {
//   const connection = await pool.getConnection();
//   console.log("Connected to MySQL");
//   connection.release();
// } catch (err) {
//   console.error("MySQL connection failed:", err.message);
// }

// export default pool;
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
});

db.getConnection()
  .then(() => console.log("✅ Connected to MySQL"))
  .catch((err) => console.error("❌ MySQL Connection Error:", err.message));

export default db;