import type { NextPage } from "next";
import TypeRuPayIcon from "./type-ru-pay-icon";

export type LayoutVerticalThemeDefaultType = {
  bankLogo?: boolean;
};

const LayoutVerticalThemeDefault: NextPage<LayoutVerticalThemeDefaultType> = ({
  bankLogo = true,
}) => {
  return (
    <div className="flex-1 rounded-13xl bg-gray-1600 [backdrop-filter:blur(20px)] overflow-hidden flex flex-col items-center justify-start pt-[2.5rem] px-[2rem] pb-[2rem] box-border gap-[4rem_0rem] max-w-full text-left text-[1.25rem] text-silver font-heading-four-semibold-20p mq450:gap-[4rem_0rem] mq750:pt-[1.625rem] mq750:pb-[1.313rem] mq750:box-border">
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem_0rem]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[9.063rem_0rem] mq450:gap-[9.063rem_0rem]">
          <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
            <TypeRuPayIcon
              typeRuPay="/typemastercard.svg"
              propHeight="3.5rem"
              propWidth="5rem"
              propAlignSelf="unset"
              propFlex="unset"
              propOverflow="hidden"
              propMaxHeight="unset"
              propMinHeight="unset"
              propPosition="relative"
              propLeft="unset"
              propTop="unset"
              propTransform="unset"
              propMargin="unset"
            />
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
          <div className="relative font-medium mq450:text-[1rem]">
            Card Number
          </div>
        </div>
        <div className="relative text-[1.75rem] font-semibold text-white [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] mq450:text-[1.375rem]">
          2243 6652 9435 9982
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start text-[1.5rem] text-white">
        <div className="w-[14.5rem] relative uppercase font-medium inline-block [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] mq450:text-[1.188rem]">
          BAHADIR NUROGLU
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start">
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
  );
};

export default LayoutVerticalThemeDefault;
