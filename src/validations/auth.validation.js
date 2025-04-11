import Joi from 'joi';

const passwordSchema = Joi.string().min(8).max(20).required().messages({
  'any.required': 'Password is required',
  'string.min': 'Password must be at least 6 characters long',
  'string.max': 'Password must not exceed 20 characters',
});

const usernameSchema = Joi.string()
  .alphanum()
  .min(3)
  .max(20)
  .required()
  .messages({
    'any.required': 'Username is required',
    'string.min': 'Username must be at least 3 characters long',
    'string.max': 'Username must not exceed 20 characters',
    'string.alphanum': 'Username can only contain letters and numbers',
  });

const emailSchema = Joi.string().email().required().messages({
  'any.required': 'Email is required',
  'string.email': 'Invalid email format',
});

export const signupSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'Name is required',
  }),
  username: usernameSchema,
  email: emailSchema,
  password: passwordSchema,
});

export const loginSchema = Joi.object({
  identifier: Joi.alternatives()
    .try(usernameSchema, emailSchema)
    .required()
    .messages({
      'alternatives.match': 'Invalid Username or Email.',
      'any.required': 'Username or Email is required',
    }),
  password: passwordSchema,
});
