import mongoose from 'mongoose';

export async function initDb() {
  await mongoose.connect('mongodb://localhost/bugoeste_hub');
  console.log(`Mongoose connected to ${mongoose.connection.name}`);
}
