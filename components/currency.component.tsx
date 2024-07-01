import type { NextPage } from 'next';
import { useMemo, type CSSProperties } from 'react';

export type CurrencyComponentType = {
  className?: string;
  logo?: string;
  asset?: string;
  balance?: string;

  /** Style props */
  propWidth?: CSSProperties['width'];
};

const CurrencyComponent: NextPage<CurrencyComponentType> = ({ className = '', logo, asset, balance, propWidth }) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`w-[7.625rem] flex flex-col items-start justify-start gap-[0.562rem] text-left text-[1.25rem] text-gray-100 font-roboto ${className}`}
      style={frameDivStyle}>
      <div className="self-stretch bg-black flex flex-row items-center justify-center py-[0.5rem] px-[0.75rem] gap-[0.5rem]">
        <img
          className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0 min-h-[2rem]"
          loading="lazy"
          alt=""
          src={logo}
        />
        <div className="flex-1 flex flex-row items-center justify-start gap-[0.25rem]">
          <div className="flex-1 relative font-medium overflow-hidden text-ellipsis whitespace-nowrap mq450:text-[1rem]">
            {asset}
          </div>
          <img
            className="h-[2rem] w-[1rem] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/weuiarrowoutlined.svg"
          />
        </div>
      </div>
      <div className="w-[6.313rem] flex flex-row items-start justify-start gap-[0.25rem] text-[0.875rem] text-zinc-50">
        <div className="flex-1 relative overflow-hidden text-ellipsis whitespace-nowrap">Balance:</div>
        <div className="w-[2.688rem] relative text-royalblue inline-block overflow-hidden text-ellipsis whitespace-nowrap">
          {balance}
        </div>
      </div>
    </div>
  );
};

export default CurrencyComponent;
