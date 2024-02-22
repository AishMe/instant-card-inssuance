import type { NextPage } from "next";
import FrameComponent3 from "./frame-component3";

export type LayoutVerticalThemePurpleType = {
  bankLogo?: boolean;
};

const LayoutVerticalThemePurple: NextPage<LayoutVerticalThemePurpleType> = ({
  bankLogo = true,
}) => {
  return (
    <div className="w-[24.938rem] rounded-13xl bg-gray-1600 [backdrop-filter:blur(20px)] overflow-hidden flex flex-col items-center justify-start pt-[2.5rem] px-[2rem] pb-[2rem] box-border relative gap-[4rem_0rem] max-w-full text-left text-[1.5rem] text-white font-heading-four-semibold-20p mq450:gap-[4rem_0rem] mq750:pt-[1.625rem] mq750:pb-[1.313rem] mq750:box-border">
      <div className="w-[15.625rem] h-[15.625rem] absolute my-0 mx-[!important] top-[-7.562rem] left-[-4.75rem] rounded-[50%] [background:linear-gradient(180deg,_rgba(142,_0,_254,_0),_rgba(254,_0,_198,_0.4))]" />
      <div className="w-[15.625rem] h-[15.625rem] absolute my-0 mx-[!important] top-[-2.312rem] left-[-6.5rem] rounded-[50%] [background:linear-gradient(180deg,_rgba(142,_0,_254,_0),_rgba(254,_0,_198,_0.4))] z-[1]" />
      <FrameComponent3
        bank="/typemastercard.svg"
        propGap="0.75rem 0rem"
        propWidth="unset"
        propPadding="unset"
        propAlignSelf="stretch"
        propGap1="9.063rem 0rem"
        propOverflow="hidden"
        propColor="#c4c4c4"
        propColor1="#fff"
      />
      <div className="self-stretch flex flex-row items-start justify-start">
        <div className="w-[14.5rem] relative uppercase font-medium inline-block [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] z-[2] mq450:text-[1.188rem]">
          BAHADIR NUROGLU
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-[1.25rem] text-silver">
        <div className="h-[15.625rem] w-[15.625rem] absolute my-0 mx-[!important] top-[-9.937rem] right-[-10.875rem] rounded-[50%] [background:linear-gradient(180deg,_rgba(142,_0,_254,_0),_rgba(254,_0,_198,_0.4))]" />
        <div className="h-[15.625rem] w-[15.625rem] absolute my-0 mx-[!important] right-[-9.062rem] bottom-[-7.312rem] rounded-[50%] [background:linear-gradient(180deg,_rgba(142,_0,_254,_0),_rgba(254,_0,_198,_0.4))] z-[1]" />
        <div className="flex-1 flex flex-row items-start justify-start max-w-full">
          <div className="flex flex-col items-start justify-start gap-[0.75rem_0rem]">
            <div className="relative font-medium mq450:text-[1rem]">
              Expirty Date
            </div>
            <div className="w-[3.5rem] relative font-semibold text-white inline-block [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] mq450:text-[1rem]">
              10/25
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutVerticalThemePurple;
