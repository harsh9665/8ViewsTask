import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('❌ Please define MONGODB_URI in your .env.local file');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  // Already connected — reuse existing connection
  if (cached.conn) {
    console.log('✅ Using existing MongoDB connection');
    return cached.conn;
  }

  // Create new connection
  if (!cached.promise) {
    console.log('🔄 Connecting to MongoDB...');

    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    })
    .then((conn) => {
      console.log('✅ MongoDB connected successfully');
      return conn;
    })
    .catch((err) => {
      console.error('❌ MongoDB connection failed:', err.message);
      cached.promise = null; // reset so it can retry
      throw err;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}