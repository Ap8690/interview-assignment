import mongoose from "mongoose";

export default async function ConnectDb() {
    // console.l
    await mongoose.connect(process.env.NEXT_APP_MONGO_URL || '')
}