import mongoose from 'mongoose';

export default async function ConnectDb() {
  await mongoose.connect(process.env.NEXT_APP_MONGO_URL || '');
}
