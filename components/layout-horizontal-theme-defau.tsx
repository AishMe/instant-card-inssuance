import type { NextPage } from "next";
import TypeRuPayIcon from "./type-ru-pay-icon";

const LayoutHorizontalThemeDefau: NextPage = () => {
  return (
    <div className="rounded-13xl bg-gray-1600 [backdrop-filter:blur(20px)] flex flex-row items-end justify-start py-[2rem] px-[2.5rem] box-border gap-[0rem_3.813rem] max-w-full text-left text-[1.25rem] text-silver font-heading-four-semibold-20p mq450:gap-[0rem_3.813rem] mq450:pt-[1.313rem] mq450:pb-[1.313rem] mq450:box-border mq750:flex-wrap mq750:gap-[0rem_3.813rem]">
      <div className="flex flex-col items-start justify-start gap-[4rem_0rem] max-w-full mq450:gap-[4rem_0rem]">
        <div className="w-[14.5rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.375rem] box-border text-[1.5rem] text-white">
          <div className="flex-1 relative uppercase font-medium [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] mq450:text-[1.188rem]">
            BAHADIR NUROGLU
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[0.75rem_0rem]">
          <div className="relative font-medium mq450:text-[1rem]">
            Card Number
          </div>
          <div className="relative text-[2rem] font-semibold text-white [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
            2243 6652 9435 9982
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[0.75rem_0rem]">
          <div className="relative font-medium mq450:text-[1rem]">
            Expirty Date
          </div>
          <div className="w-[3.5rem] relative font-semibold text-white inline-block [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] mq450:text-[1rem]">
            10/25
          </div>
        </div>
      </div>
      <div className="h-[20.375rem] w-[5rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.5rem] box-border">
        <div className="self-stretch flex-1 flex flex-col items-end justify-start gap-[13.25rem_0rem]">
          <TypeRuPayIcon
            typeRuPay="/typemastercard.svg"
            propHeight="unset"
            propWidth="unset"
            propAlignSelf="stretch"
            propFlex="1"
            propOverflow="hidden"
            propMaxHeight="100%"
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
      </div>
    </div>
  );
};

export default LayoutHorizontalThemeDefau;
