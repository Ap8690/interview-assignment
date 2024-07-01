import Li from '../components/li';
import { AssetType } from '../lib/types';
import Swap from '../components/swap';

const Main = ({ assets }: { assets: AssetType[] }) => {
  return (
    <div className="self-stretch flex flex-col items-end justify-start gap-[3.125rem] max-w-full mq750:gap-[1.563rem] ">
      <section className="mx-auto flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-center text-[4.25rem] text-white font-roboto">
        <div className="w-[48.563rem] flex flex-col items-start justify-start gap-[1.875rem] max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[0.68px] leading-[4.725rem] font-normal font-inherit z-[1] mq450:text-[2.563rem] mq450:leading-[2.813rem] mq750:text-[3.375rem] mq750:leading-[3.75rem]">
            Easy send and Request Crypto.
          </h1>
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-[1.25rem]">
            <div className="w-[34.813rem] relative leading-[1.706rem] inline-block shrink-0 max-w-full z-[1] mq450:text-[1rem] mq450:leading-[1.375rem]">
              Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone
              in between.
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row flex-wrap items-end justify-start max-w-full z-[1] text-left text-[1.25rem] text-zinc-50 font-roboto">
        <div className="flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-4 box-border min-h-auto max-w-full">
          <div className="self-stretch [backdrop-filter:blur(30px)] rounded-3xs bg-gray-300 overflow-auto flex flex-col items-start justify-start py-[1.75rem] px-[2.5rem] gap-[0.5rem] border-[1px] border-solid border-darkslategray-100 mq750:pt-[1.25rem] mq750:pb-[1.25rem] mq750:box-border">
            <div className="self-stretch h-[3.125rem] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0.812rem] box-border gap-[0.812rem] mq1225:h-auto !border-b !border-darkslategray-100">
              <div className="self-stretch grid grid-cols-6 gap-2 [row-gap:20px] mq1225:flex-wrap">
                <div className="col-span-2 relative font-semibold inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[5.688rem] mq450:text-[1rem]">
                  ASSETS
                </div>
                <div className="col-span-1 relative font-semibold inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[5.688rem] mq450:text-[1rem]">
                  LAST TRADE
                </div>
                <div className="col-span-1 relative font-semibold inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[5.688rem] mq450:text-[1rem]">
                  24H %
                </div>
                <div className="col-span-1 relative font-semibold inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0 mq450:text-[1rem]">
                  24H CHANGE
                </div>
                <div className="col-span-1 relative font-semibold text-royalblue text-right inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0 mq450:text-[1rem]">{`MORE >`}</div>
              </div>
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full"
                loading="lazy"
                alt=""
                src="/border.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              {assets?.length > 0 &&
                assets?.map((asset: AssetType, index: number) => {
                  return (
                    <Li
                      key={index}
                      logo={asset?.logo}
                      name={asset?.name}
                      lastTradeAmount={asset?.lastTradeAmount}
                      changeInADayPercent={asset?.changeInADayPercent}
                      changeInADayAmount={asset?.changeInADayAmount}
                    />
                  );
                })}
            </div>
          </div>
        </div>
        <Swap />
      </section>
    </div>
  );
};

export async function getServerSideProps() {
  const response = await fetch('http:localhost:3000/api/assets');
  const { assets } = await response.json();
  return { props: { assets } };
}

export default Main;
