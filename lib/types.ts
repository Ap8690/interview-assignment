export type AssetType = {
  name: string;
  logo: string;
  lastTradeAmount: number;
  changeInADayPercent: number;
  changeInADayAmount: number;
};

export type LiType = {
  key: number;
  logo: string;
  name: string;
  lastTradeAmount: number;
  changeInADayPercent: number;
  changeInADayAmount: number;
  className?: string;
};
