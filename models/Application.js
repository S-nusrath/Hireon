import db from "../config/db.js";

export const applyToJob = async (userId, jobId) => {
  const [result] = await db.query(
    "INSERT INTO applications (userId, jobId) VALUES (?, ?)",
    [userId, jobId]
  );
  return result.insertId;
};

export const getApplicationsByJob = async (jobId) => {
  const [rows] = await db.query("SELECT a.*, u.name, u.email FROM applications a JOIN users u ON a.userId = u.id WHERE a.jobId = ?", [jobId]);
  return rows;
};

export const getApplicationsByUser = async (userId) => {
  const [rows] = await db.query("SELECT a.*, j.title FROM applications a JOIN jobs j ON a.jobId = j.id WHERE a.userId = ?", [userId]);
  return rows;
};