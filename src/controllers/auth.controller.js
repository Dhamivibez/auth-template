import { addUser, validateUser } from '../services/auth.service.js';

export const signup = async (req, res, next) => {
  try {
    const signupData = req.body;
    await addUser(signupData);
    res.status(201).json({ message: 'Account Created Successfully' });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const loginData = req.body;
    const token = await validateUser(loginData);

    res.cookie('auth_token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 86400000,
    });

    res.status(200).json({ message: 'Login Successful' });
  } catch (err) {
    next(err);
  }
};
