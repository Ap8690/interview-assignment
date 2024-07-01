import { NextApiRequest, NextApiResponse } from "next";
import ConnectDb from "../../lib/database";
import Assets from "../../models/assets";

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    await ConnectDb()
    const assets = await Assets.find();
    res.status(200).json({ assets })
  } catch (error: any) {
    res.status(500).json({ message: error.message || "Something went wrong on server side!" })
  }
}
