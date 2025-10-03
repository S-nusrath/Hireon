// routes/auth.js
import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { findUserByEmail, createUser } from '../models/User.js';

dotenv.config();
const router = express.Router();

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const existingUser = await findUserByEmail(email);

  if (existingUser) return res.status(400).json({ msg: 'Email already exists' });

  const hashedPassword = await bcrypt.hash(password, 10);
  await createUser(name, email, hashedPassword);

  res.status(201).json({ msg: 'User registered' });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);

  if (!user) return res.status(404).json({ msg: 'User not found' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ msg: 'Invalid credentials' });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  });
});

export default router;
