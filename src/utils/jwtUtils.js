import jwt from 'jsonwebtoken';

export const generateToken = async (id, email) => {
  const token = jwt.sign({ id, email }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
  return token;
};
