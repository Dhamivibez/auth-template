import express from 'express';
import { login, signup } from '../controllers/auth.controller.js';
import {
  validateLogin,
  validateSignup,
} from '../middlewares/authValidation.js';

const router = express.Router();

router.post('/signup', validateSignup, signup);
router.post('/login', validateLogin, login);

export default router;
