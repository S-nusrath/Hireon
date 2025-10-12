import db from "../config/db.js";

export const createNotification = async (userId, message, data = null) => {
  const [result] = await db.query("INSERT INTO notifications (userId, message, data) VALUES (?, ?, ?)", [userId, message, data ? JSON.stringify(data) : null]);
  return result.insertId;
};

export const getNotificationsForUser = async (userId) => {
  const [rows] = await db.query("SELECT * FROM notifications WHERE userId = ? ORDER BY createdAt DESC", [userId]);
  return rows;
};

export const markNotificationRead = async (id) => {
  await db.query("UPDATE notifications SET isRead = 1 WHERE id = ?", [id]);
};