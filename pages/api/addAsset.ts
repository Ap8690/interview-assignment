import { NextApiRequest, NextApiResponse } from "next";
import ConnectDb from "../../lib/database";
import Assets from "../../models/assets";
import { AssetType } from "../../lib/types";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    try {
        console.log("this one calling")
        await ConnectDb()
        const { body: { name, logo, lastTradeAmount, changeInADayPercent, changeInADayAmount } } = req;
        const asset = await Assets.findOne({ name })
        if (asset) throw new Error("Asset already exists in database!")
        const assetObj: AssetType = { name, logo, lastTradeAmount, changeInADayPercent, changeInADayAmount }
        await Assets.create(assetObj)
        res.status(200).json({ success: true })
    } catch (error: any) {
        res.status(500).json({ message: error.message || "Something went wrong on server side!" })
    }
}