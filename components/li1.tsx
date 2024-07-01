import type { NextPage } from 'next';

export type Li1Type = {
  className?: string;
  cryptocurrencyColordoge?: string;
  dOGE?: string;
  prop?: string;
  prop1?: string;
  prop2?: string;
};

const Li1: NextPage<Li1Type> = ({ className = '', cryptocurrencyColordoge, dOGE, prop, prop1, prop2 }) => {
  return (
    <div
      className={`self-stretch grid grid-cols-6 gap-2 py-[0.5rem] px-[0rem] [row-gap:20px] text-left text-[1.125rem] text-zinc-50 font-roboto mq1225:flex-wrap ${className}`}>
      <div className="col-span-2 flex flex-row items-center justify-start py-[0rem] pr-[6.625rem] pl-[0rem] box-border gap-[0.75rem] min-w-[8.75rem] mq450:flex-wrap mq450:pr-[1.25rem] mq450:box-border mq450:flex-1">
        <img
          className="h-[4rem] w-[4rem] relative rounded-lg overflow-hidden shrink-0 min-h-[4rem]"
          loading="lazy"
          alt=""
          src={cryptocurrencyColordoge}
        />
        <div className="w-[4.75rem] flex flex-col items-start justify-start py-[1.25rem] px-[0rem] box-border">
          <div className="w-[5.563rem] flex flex-row items-start justify-start">
            <div className="flex-1 relative font-medium overflow-hidden text-ellipsis whitespace-nowrap">{dOGE}</div>
            <div className="relative font-medium text-dimgray inline-block overflow-hidden text-ellipsis whitespace-nowrap">
              USD
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 relative font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[3.375rem]">
        {prop}
      </div>
      <div className="col-span-1 relative font-medium text-aquamarine inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[3.375rem]">
        {prop1}
      </div>
      <div className="col-span-1 relative font-medium text-aquamarine inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[3.375rem]">
        {prop2}
      </div>
      <div className="w-[4.125rem] bg-springgreen flex flex-row items-center justify-center p-[0.625rem] box-border text-darkslategray-200">
        <div className="col-span-1 relative font-medium overflow-hidden text-ellipsis whitespace-nowrap">Trade</div>
      </div>
    </div>
  );
};

export default Li1;
