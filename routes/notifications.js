// routes/notifications.js
import express from "express";
import protect from "../middleware/authMiddleware.js";
import { getNotificationsForUser, markNotificationRead } from "../models/Notification.js";

const router = express.Router();

router.get("/", protect, async (req, res) => {
  const notifications = await getNotificationsForUser(req.user.id);
  res.json(notifications);
});

router.put("/:id/read", protect, async (req, res) => {
  await markNotificationRead(req.params.id);
  res.json({ message: "Marked read" });
});

export default router;