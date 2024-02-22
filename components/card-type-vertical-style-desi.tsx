import type { NextPage } from "next";
import BankFrame from "./bank-frame";

export type CardTypeVerticalStyleDesiType = {
  bankLogo?: boolean;
};

const CardTypeVerticalStyleDesi: NextPage<CardTypeVerticalStyleDesiType> = ({
  bankLogo = true,
}) => {
  return (
    <div className="w-[24.938rem] rounded-13xl bg-gray-500 [backdrop-filter:blur(40px)] overflow-hidden flex flex-col items-center justify-start pt-[2.5rem] pb-[1.75rem] pr-[2rem] pl-[2.063rem] box-border relative gap-[4rem_0rem] max-w-full text-left text-[1.5rem] text-white font-heading-four-semibold-20p mq450:gap-[4rem_0rem] mq900:pt-[1.625rem] mq900:pb-[1.25rem] mq900:box-border">
      <img
        className="w-[31.194rem] h-[14.331rem] absolute my-0 mx-[!important] right-[-3.225rem] bottom-[6.363rem] object-contain"
        alt=""
        src="/vector-2-11.svg"
      />
      <img
        className="w-full h-full absolute my-0 mx-[!important] top-[0rem] right-[-0.031rem] bottom-[0rem] max-h-full object-cover z-[1]"
        alt=""
        src="/texture-1@2x.png"
      />
      <BankFrame propFlex="unset" propAlignSelf="stretch" propPadding="unset" />
      <div className="self-stretch flex flex-row items-start justify-start">
        <div className="w-[14.5rem] relative uppercase font-medium inline-block [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] z-[2] mq450:text-[1.188rem]">
          BAHADIR NUROGLU
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start text-[1.25rem] text-silver">
        <div className="flex flex-col items-start justify-start gap-[0.5rem_0rem]">
          <div className="relative font-medium z-[2] mq450:text-[1rem]">
            Expirty Date
          </div>
          <div className="w-[3.5rem] relative font-semibold text-white inline-block [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] z-[2] mq450:text-[1rem]">
            10/25
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTypeVerticalStyleDesi;
