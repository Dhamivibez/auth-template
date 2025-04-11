import mongoose from 'mongoose';

export const configDB = async () => {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;
    await mongoose.connect(MONGODB_URI, {
      dbName: process.env.dbName,
      maxPoolSize: 10,
    });
    console.log('Database Connected');
  } catch (err) {
    console.log('Database Failed to connect', err);
  }
};
