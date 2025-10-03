// routes/dashboard.js
import express from 'express';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', verifyToken, (req, res) => {
  res.json({ msg: `Welcome to dashboard, user ID: ${req.user.id}` });
});

export default router;
