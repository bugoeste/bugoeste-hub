import mongoose from 'mongoose';

export async function initDb() {
  console.log('Connecting to mongodb...');
  await mongoose.connect('mongodb://localhost/bugoeste_hub', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  console.log(`Mongoose connected to ${mongoose.connection.name}`);
}
