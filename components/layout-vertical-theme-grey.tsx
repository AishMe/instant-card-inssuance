import type { NextPage } from "next";
import TypeRuPayIcon from "./type-ru-pay-icon";

export type LayoutVerticalThemeGreyType = {
  bankLogo?: boolean;
};

const LayoutVerticalThemeGrey: NextPage<LayoutVerticalThemeGreyType> = ({
  bankLogo = true,
}) => {
  return (
    <div className="flex-1 rounded-13xl bg-gray-1600 [backdrop-filter:blur(20px)] overflow-hidden flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.063rem] box-border relative gap-[6.063rem_0rem] max-w-full text-left text-[1.25rem] text-silver font-heading-four-semibold-20p mq450:gap-[6.063rem_0rem]">
      <div className="w-[15.625rem] h-[15.625rem] absolute my-0 mx-[!important] top-[-2.312rem] left-[-6.5rem] rounded-[50%] [background:linear-gradient(180deg,_rgba(251,_251,_251,_0.8),_rgba(251,_251,_251,_0))] z-[1]" />
      <div className="w-[22.938rem] h-[8.063rem] flex flex-row items-start justify-end py-[0rem] px-[0rem] box-border max-w-full mq750:h-auto">
        <div className="mt-[-7.562rem] w-[27.688rem] flex flex-row items-end justify-between gap-[1.25rem] max-w-[121%] shrink-0 mq750:flex-wrap">
          <div className="h-[15.625rem] w-[15.625rem] relative rounded-[50%] [background:linear-gradient(180deg,_rgba(251,_251,_251,_0.8),_rgba(251,_251,_251,_0))]" />
          <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.438rem]">
            <div className="rounded-lg bg-gray-1800 overflow-hidden flex flex-row items-start justify-start py-[0rem] pr-[0.125rem] pl-[0rem] gap-[0rem_0.75rem] border-[2px] border-solid border-gray-1700">
              <img
                className="self-stretch w-[1.375rem] relative max-h-full min-h-[3.125rem]"
                alt=""
                src="/vector-21.svg"
              />
              <div className="h-[3.125rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0rem] box-border">
                <img
                  className="mt-[-0.125rem] w-[1.813rem] h-[3.219rem] relative"
                  alt=""
                  src="/vector-31.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[2rem] box-border max-w-full">
        <div className="w-[31.813rem] flex flex-col items-start justify-start gap-[0.75rem_0rem] max-w-[139%] shrink-0">
          <div className="relative leading-[1.813rem] font-medium mq450:text-[1rem] mq450:leading-[1.438rem]">
            Card Number
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.188rem_0rem] text-[1.75rem] text-white">
            <div className="relative leading-[2.438rem] font-semibold [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] mq450:text-[1.375rem] mq450:leading-[1.938rem]">
              2243 6652 9435 9982
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_1.688rem] text-[1.5rem] mq750:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-[1.875rem] px-[0rem] pb-[0rem] box-border min-w-[14.5rem] mq750:flex-1">
                <div className="flex flex-col items-start justify-start gap-[4rem_0rem]">
                  <div className="flex flex-row items-start justify-start relative">
                    <div className="h-[15.625rem] w-[15.625rem] absolute my-0 mx-[!important] right-[-15.5rem] bottom-[-15.062rem] rounded-[50%] [background:linear-gradient(180deg,_rgba(251,_251,_251,_0.8),_rgba(251,_251,_251,_0))] z-[1]" />
                    <div className="relative leading-[2.125rem] uppercase font-medium [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] z-[2] mq450:text-[1.188rem] mq450:leading-[1.688rem]">
                      BAHADIR NUROGLU
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[0.75rem_0rem] text-[1.25rem] text-silver">
                    <div className="relative font-medium mq450:text-[1rem]">
                      Expirty Date
                    </div>
                    <div className="w-[3.5rem] relative font-semibold text-white inline-block [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] mq450:text-[1rem]">
                      10/25
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[15.625rem] flex-1 relative rounded-[50%] [background:linear-gradient(180deg,_rgba(251,_251,_251,_0.8),_rgba(251,_251,_251,_0))] min-w-[10.125rem]" />
            </div>
          </div>
        </div>
      </div>
      <TypeRuPayIcon
        typeRuPay="/typemastercard.svg"
        propHeight="3.5rem"
        propWidth="5rem"
        propAlignSelf="unset"
        propFlex="unset"
        propOverflow="hidden"
        propMaxHeight="unset"
        propMinHeight="unset"
        propPosition="absolute"
        propLeft="2rem"
        propTop="2.5rem"
        propTransform="unset"
        propMargin="0 !important"
      />
    </div>
  );
};

export default LayoutVerticalThemeGrey;
