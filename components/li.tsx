import type { NextPage } from "next";
import { LiType } from "../lib/types";
import { ShootColor } from "../lib/helper";

const Li: NextPage<LiType> = ({
  key,
  className = "",
  logo,
  name,
  lastTradeAmount,
  changeInADayPercent,
  changeInADayAmount,
}) => {
  return (
    <div
      key={key}
      className={`self-stretch grid grid-cols-6 gap-2 py-[0.5rem] px-[0rem] [row-gap:20px] text-left text-[1.125rem] text-zinc-50 font-roboto mq1225:flex-wrap ${className} items-center`}
    >
      <div className="col-span-2 flex-[0.5891] flex flex-row items-center justify-start py-[0rem] pl-[0rem] box-border gap-[0.75rem] min-w-[8.75rem] mq450:flex-wrap mq450:pr-[1.25rem] mq450:box-border mq450:flex-1">
        <img
          className="h-[4rem] w-[4rem] relative rounded-lg overflow-hidden shrink-0 min-h-[4rem]"
          loading="lazy"
          alt=""
          src={logo}
        />
        <div className="flex-1 flex flex-col items-start justify-start py-[1.25rem] px-[0rem] box-border">
          <div className="self-stretch flex flex-row items-start justify-start">
            <div className="pr-1 relative font-medium overflow-hidden text-ellipsis whitespace-nowrap">
              {name}/
            </div>
            <div className="flex-1 relative font-medium text-dimgray overflow-hidden text-ellipsis whitespace-nowrap">
              USD
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 relative font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[4.438rem]">
        ${lastTradeAmount?.toLocaleString()}
      </div>
      <div
        className={`col-span-1 relative font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[4.438rem] ${ShootColor(
          Number(changeInADayPercent)
        )}`}
      >
        {changeInADayPercent?.toLocaleString()}%
      </div>
      <div
        className={`col-span-1 relative font-medium  inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[4.438rem] ${ShootColor(
          Number(changeInADayAmount)
        )}`}
      >
        {Number(changeInADayAmount) < 0 && "-"}$
        {Math.abs(Number(changeInADayAmount))?.toLocaleString()}
      </div>
      <div className="col-span-1 flex items-center justify-end  box-border text-darkslategray-200">
        <div className=" w-[3.125rem] bg-springgreen p-[0.625rem] flex flex-row items-center justify-end relative font-medium overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer">
          Trade
        </div>
      </div>
    </div>
  );
};

export default Li;
