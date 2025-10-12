import db from "../config/db.js";

export const createJob = async (title, description, location, posterId) => {
  const [result] = await db.query(
    "INSERT INTO jobs (title, description, location, posterId) VALUES (?, ?, ?, ?)",
    [title, description, location, posterId]
  );
  return result.insertId;
};

export const getJobs = async () => {
  const [rows] = await db.query("SELECT j.*, u.name AS posterName FROM jobs j JOIN users u ON j.posterId = u.id ORDER BY j.createdAt DESC");
  return rows;
};

export const getJobById = async (id) => {
  const [rows] = await db.query("SELECT j.*, u.name AS posterName FROM jobs j JOIN users u ON j.posterId = u.id WHERE j.id = ?", [id]);
  return rows[0];
};