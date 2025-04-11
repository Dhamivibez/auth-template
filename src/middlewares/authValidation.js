import { loginSchema, signupSchema } from '../validations/auth.validation.js';

export const validateSignup = (req, res, next) => {
  if (!req.body) {
    const err = new Error('All fields are required');
    err.statusCode = 400;
    return next(err);
  }

  const { error, value } = signupSchema.validate(req.body);
  if (error) {
    const err = new Error(error.details[0].message);
    err.statusCode = 400;
    throw err;
  }

  req.body = value;
  next();
};

export const validateLogin = (req, res, next) => {
  if (!req.body) {
    const err = new Error('All fields are required');
    err.statusCode = 400;
    return next(err);
  }

  const { error, value } = loginSchema.validate(req.body);

  if (error) {
    const err = new Error(error.details[0].message);
    err.statusCode = 400;
    return next(err);
  }

  req.body = value;
  next();
};
