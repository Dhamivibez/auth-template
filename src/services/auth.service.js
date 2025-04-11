import User from '../models/User.js';
import { generateToken } from '../utils/jwtUtils.js';
import { comparePassword, passwordHasher } from '../utils/passwordUtils.js';

export const addUser = async (signupData) => {
  const { name, username, email, password } = signupData;
  let err;

  const usernameExists = await User.findOne({ username });
  const emailExists = await User.findOne({ email });

  if (usernameExists) {
    err = new Error('Username is already taken');
    err.statusCode = 400;
    throw err;
  }

  if (emailExists) {
    err = new Error('Email is already registered');
    err.statusCode = 400;
    throw err;
  }

  const hashedPassword = await passwordHasher(password);

  const newUser = new User({ name, username, email, password: hashedPassword });
  await newUser.save();
};

export const validateUser = async (loginData) => {
  const { identifier, password } = loginData;
  const user = await User.findOne({
    $or: [{ username: identifier }, { email: identifier }],
  });

  let err;

  if (!user) {
    err = new Error('No user found with the email or username provided');
    err.statusCode = 404;
    throw err;
  }

  const passwordMatch = await comparePassword(password, user.password);
  if (!passwordMatch) {
    err = new Error('Invalid credentials');
    err.statusCode = 401;
    throw err;
  }

  const token = generateToken(user._id, user.email);
  return token;
};
