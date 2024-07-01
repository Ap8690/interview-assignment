import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-end justify-start pt-[1.062rem] px-[8.125rem] mq1225:px-8 pb-[13.812rem] box-border gap-[6.687rem] leading-[normal] tracking-[normal] mq450:gap-[1.688rem] mq450:box-border mq750:gap-[3.313rem] mq750:box-border">
      <div className="w-full h-[52.438rem] absolute !m-[0] top-[0rem] right-[0rem] left-[0rem]">
        <img
          className="absolute h-full top-[0rem] bottom-[0rem] left-[-5rem] max-h-full w-[100rem] object-cover"
          alt=""
          src="/bg@2x.png"
        />
      </div>
      <header className="w-full flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq750:w-full">
        <img className="w-[12.063rem] h-[1.563rem] z-[1]" loading="lazy" alt="" src="/frame-9.svg" />

        <nav className="m-0 w-[27.75rem] flex flex-row items-center justify-between pt-[0.625rem] px-[0rem] pb-[0rem] box-border max-w-full mq750:hidden">
          <nav className="m-0 self-stretch flex flex-row items-center justify-between text-left text-[0.875rem] text-white font-roboto gap-6">
            <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block z-[1]">Exchage</a>
            <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block whitespace-nowrap z-[1]">
              Last Transactions
            </a>
            <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block whitespace-nowrap z-[1]">
              Invite Friend
            </a>
            <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block z-[1]">
              Notifications
            </a>
          </nav>
        </nav>
        <div className="flex flex-row items-start justify-start gap-[1rem]">
          <button className="cursor-pointer py-[0.5rem] px-[0.562rem] bg-[transparent] w-[4rem] [backdrop-filter:blur(4px)] rounded-tl-lg rounded-tr-none rounded-br-lg rounded-bl-none box-border flex flex-row items-start justify-start z-[1] border-[1px] border-solid border-blueviolet hover:bg-darkorchid-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkorchid-100">
            <a className="[text-decoration:none] relative text-[0.875rem] font-medium font-roboto text-white text-left inline-block min-w-[2.75rem] whitespace-nowrap">
              LOG IN
            </a>
          </button>
          <button className="cursor-pointer [border:none] p-[0.625rem] bg-blueviolet [backdrop-filter:blur(4px)] rounded-tl-lg rounded-tr-none rounded-br-lg rounded-bl-none flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-darkorchid-100">
            <a className="[text-decoration:none] relative text-[0.875rem] font-medium font-roboto text-white text-left inline-block min-w-[3.375rem]">
              SIGN UP
            </a>
          </button>
        </div>
      </header>
      <main className="w-full overflow-auto">{children}</main>
    </div>
  );
}
