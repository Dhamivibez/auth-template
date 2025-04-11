import express from 'express';
import authRoutes from './auth.route.js';
import { authLimiter } from '../middlewares/authLimiter.js';

const router = express.Router();

router.use('/auth', authLimiter, authRoutes);

export default router;
