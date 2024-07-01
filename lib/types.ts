export type AssetType = {
    name: string,
    logo: string,
    lastTradeAmount: Number,
    changeInADayPercent: Number,
    changeInADayAmount: Number
}

export type LiType = {
    key: number
    logo: string;
    name: string;
    lastTradeAmount: Number,
    changeInADayPercent: Number,
    changeInADayAmount: Number
    className?: string;
};