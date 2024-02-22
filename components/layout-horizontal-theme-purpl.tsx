import type { NextPage } from "next";
import TypeRuPayIcon from "./type-ru-pay-icon";

export type LayoutHorizontalThemePurplType = {
  bankLogo?: boolean;
};

const LayoutHorizontalThemePurpl: NextPage<LayoutHorizontalThemePurplType> = ({
  bankLogo = true,
}) => {
  return (
    <div className="self-stretch rounded-13xl bg-gray-1600 [backdrop-filter:blur(20px)] overflow-hidden flex flex-col items-center justify-start pt-[2.75rem] pb-[2rem] pr-[2rem] pl-[2.5rem] box-border gap-[4rem_0rem] max-w-full text-left text-[1.5rem] text-white font-heading-four-semibold-20p mq450:gap-[4rem_0rem] mq450:pt-[1.813rem] mq450:pb-[1.313rem] mq450:box-border mq750:gap-[4rem_0rem]">
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.5rem] pl-[0rem] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[2.563rem_0rem] max-w-full mq750:gap-[2.563rem_0rem]">
          <div className="w-[14.5rem] relative uppercase font-medium inline-block [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] z-[1] mq450:text-[1.188rem]">
            BAHADIR NUROGLU
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.625rem_0rem] max-w-full text-[1.25rem] text-silver">
            <div className="self-stretch flex flex-col items-end justify-start max-w-full">
              <div className="flex flex-row items-start justify-start relative">
                <img
                  className="h-[22.775rem] w-[22.775rem] absolute my-0 mx-[!important] top-[-21.312rem] left-[-14.656rem] rounded-[40.97px]"
                  alt=""
                  src="/polygon-7-1.svg"
                />
                <div className="rounded-lg bg-gray-1800 overflow-hidden flex flex-row items-start justify-start py-[0rem] pr-[0.125rem] pl-[0rem] gap-[0rem_0.75rem] z-[2] border-[2px] border-solid border-gray-1700">
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
              <div className="self-stretch flex flex-row items-start justify-start relative max-w-full mt-[-0.187rem]">
                <img
                  className="h-[22.775rem] w-[22.775rem] absolute my-0 mx-[!important] top-[-14.375rem] right-[-11.431rem] rounded-[40.97px] z-[1]"
                  alt=""
                  src="/polygon-7-1.svg"
                />
                <div className="flex-1 flex flex-row items-start justify-start max-w-full">
                  <div className="relative font-medium mq450:text-[1rem]">
                    Card Number
                  </div>
                </div>
              </div>
            </div>
            <div className="relative text-[2rem] font-semibold text-white inline-block [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] max-w-full z-[2] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
              2243 6652 9435 9982
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-end justify-between gap-[1.25rem] text-[1.25rem] text-silver mq450:flex-wrap">
        <div className="flex flex-col items-start justify-start gap-[0.75rem_0rem]">
          <div className="relative font-medium mq450:text-[1rem]">
            Expirty Date
          </div>
          <div className="w-[3.5rem] relative font-semibold text-white inline-block [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] mq450:text-[1rem]">
            10/25
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
          propPosition="relative"
          propLeft="unset"
          propTop="unset"
          propTransform="unset"
          propMargin="unset"
        />
      </div>
    </div>
  );
};

export default LayoutHorizontalThemePurpl;
