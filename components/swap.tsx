import type { NextPage } from "next";
import CurrencyComponent from "./currency.component";

export type ComponentType = {
  className?: string;
};

const Swap: NextPage<ComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`mx-auto mt-6 w-full [backdrop-filter:blur(30px)] rounded-3xs bg-gray-300 box-border overflow-hidden flex flex-col items-start justify-start py-[2.375rem] px-[2.437rem] gap-[1.875rem] max-w-full text-left text-[1.25rem] text-zinc-50 font-roboto border-[1px] border-solid border-darkslategray-100 mq450:pt-[2.375rem] mq450:pb-[1.563rem] mq450:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.25rem] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq450:flex-wrap">
          <div className="w-[8.563rem] flex flex-col items-start justify-start pt-[0.281rem] px-[0rem] pb-[0rem] box-border">
            <div className="self-stretch relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap mq450:text-[1rem]">
              SWAP TOKENS
            </div>
          </div>
          <img
            className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/letsiconssettingaltfill.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[0.187rem] max-w-full text-[3.125rem] mq1225:flex-wrap">
        <div className="flex-1 rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-gray-200 flex flex-row items-start justify-between py-[1.25rem] px-[3.125rem] box-border min-w-[22.313rem] max-w-full gap-[1.25rem] mq450:flex-wrap mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq750:min-w-full">
          <div className="w-[6.25rem] flex flex-col items-start justify-start gap-[0.25rem]">
            <div className="self-stretch relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap mq450:text-[1.875rem] mq750:text-[2.5rem]">
              0.00
            </div>
            <div className="w-[2.25rem] relative text-[0.875rem] font-medium text-dimgray inline-block overflow-hidden text-ellipsis whitespace-nowrap">
              $0.00
            </div>
          </div>
          <CurrencyComponent
            logo="/phcurrencybtcbold.svg"
            asset="BTC"
            balance="24,240"
          />
        </div>
        <div className="flex-1 rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-gray-200 flex flex-row items-start justify-between py-[1.25rem] px-[3.125rem] box-border relative min-w-[22.313rem] max-w-full gap-[1.25rem] mq450:flex-wrap mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq750:min-w-full">
          <div className="w-[6.25rem] flex flex-col items-start justify-start gap-[0.25rem]">
            <div className="self-stretch relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap mq450:text-[1.875rem] mq750:text-[2.5rem]">
              0.00
            </div>
            <div className="w-[2.25rem] relative text-[0.875rem] font-medium text-dimgray inline-block overflow-hidden text-ellipsis whitespace-nowrap">
              $0.00
            </div>
          </div>
          <CurrencyComponent
            logo="/mingcutebnbline.svg"
            asset="BNB"
            balance="63,790"
            propWidth="7.75rem"
          />
          <img
            className="h-[3.125rem] w-[3.125rem] absolute !m-[0] top-[2.125rem] left-[-1.562rem] rounded-6xl overflow-hidden shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src="/frame-36.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] text-[0.875rem]">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem]">
          <button className="cursor-pointer [border:none] py-[1rem] px-[4.375rem] bg-blueviolet [backdrop-filter:blur(4px)] rounded-tl-lg rounded-tr-none rounded-br-lg rounded-bl-none flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkorchid-100 mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
            <div className="relative text-[1rem] font-medium font-roboto text-white text-left inline-block min-w-[6.875rem]">
              SWOP TOKENS
            </div>
          </button>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap mq450:justify-center">
          <div className="w-[8.313rem] flex flex-col items-start justify-start gap-[0.25rem]">
            <div className="self-stretch relative overflow-hidden text-ellipsis whitespace-nowrap">
              1 BTC = 32.4039 ETH
            </div>
            <div className="w-[5.188rem] relative text-royalblue inline-block overflow-hidden text-ellipsis whitespace-nowrap">
              Free exchage
            </div>
          </div>
          <div className="w-[5.313rem] flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem] box-border text-dimgray">
            <div className="self-stretch relative overflow-hidden text-ellipsis whitespace-nowrap">
              Updates in 4s
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swap;
