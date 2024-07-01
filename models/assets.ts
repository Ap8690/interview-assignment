import mongoose, { Schema } from "mongoose";

const assetSchema = new Schema({
    logo: String,
    name: String,
    lastTradeAmount: Number,
    changeInADayPercent: Number,
    changeInADayAmount: Number,
}, {
    timestamps: true,
})

const Assets = mongoose.models.Assets || mongoose.model('Assets', assetSchema)

export default Assets;