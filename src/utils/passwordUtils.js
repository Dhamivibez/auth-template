import bcrypt from 'bcryptjs';

export const passwordHasher = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};

export const comparePassword = async (password, hashedPassword) => {
  const passwordMatch = await bcrypt.compare(password, hashedPassword);
  if (!passwordMatch) {
    return false;
  }
  return true;
};
