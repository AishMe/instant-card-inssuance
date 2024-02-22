import type { NextPage } from "next";
import BankFrame from "./bank-frame";

export type CardTypeVerticalStyleDesi1Type = {
  bankLogo?: boolean;
};

const CardTypeVerticalStyleDesi1: NextPage<CardTypeVerticalStyleDesi1Type> = ({
  bankLogo = true,
}) => {
  return (
    <div className="w-[24.938rem] rounded-13xl bg-gray-500 [backdrop-filter:blur(40px)] overflow-hidden flex flex-col items-center justify-start pt-[2.5rem] pb-[1.75rem] pr-[2rem] pl-[1.875rem] box-border relative gap-[4rem_0rem] max-w-full text-left text-[1.25rem] text-silver font-heading-four-semibold-20p mq450:gap-[4rem_0rem] mq900:pt-[1.625rem] mq900:pb-[1.25rem] mq900:box-border">
      <img
        className="w-[36.194rem] h-[10.369rem] absolute my-0 mx-[!important] bottom-[-2.681rem] left-[-6.406rem] rounded-11xl object-contain"
        alt=""
        src="/line-15.svg"
      />
      <div className="w-full my-0 mx-[!important] absolute top-[0rem] left-[0.094rem] flex flex-row items-start justify-start h-full max-w-full">
        <img
          className="h-[22.563rem] w-[12.688rem] absolute my-0 mx-[!important] top-[-1.812rem] left-[-5.375rem] object-contain"
          alt=""
          src="/vector-1.svg"
        />
        <div className="h-[7.55rem] w-[21.344rem] absolute my-0 mx-[!important] top-[-1.812rem] left-[-0.062rem] z-[1] flex items-center justify-center">
          <img
            className="h-full w-full z-[1] object-contain absolute left-[0rem] top-[0rem] [transform:scale(2.788)]"
            alt=""
            src="/vector-2.svg"
          />
        </div>
        <img
          className="h-[35rem] flex-1 relative max-w-full overflow-hidden object-cover z-[2]"
          alt=""
          src="/texture-1@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.125rem] box-border max-w-full">
        <BankFrame />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start text-[1.5rem] text-white">
        <div className="w-[14.5rem] relative uppercase font-medium inline-block [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] z-[3] mq450:text-[1.188rem]">
          BAHADIR NUROGLU
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.188rem]">
        <div className="flex flex-col items-start justify-start gap-[0.5rem_0rem]">
          <div className="relative font-medium z-[3] mq450:text-[1rem]">
            Expirty Date
          </div>
          <div className="w-[3.5rem] relative font-semibold text-white inline-block [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] z-[3] mq450:text-[1rem]">
            10/25
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTypeVerticalStyleDesi1;
