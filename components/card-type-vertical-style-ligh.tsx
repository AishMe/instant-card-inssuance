import type { NextPage } from "next";
import TypeRuPayIcon from "./type-ru-pay-icon";

export type CardTypeVerticalStyleLighType = {
  bankLogo?: boolean;
};

const CardTypeVerticalStyleLigh: NextPage<CardTypeVerticalStyleLighType> = ({
  bankLogo = true,
}) => {
  return (
    <div className="w-[24.938rem] rounded-13xl bg-whitesmoke-600 [backdrop-filter:blur(40px)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[2.5rem] px-[1.75rem] pb-[1.75rem] gap-[4rem_0rem] max-w-full text-left text-[1.25rem] text-gray-500 font-heading-four-semibold-20p border-[1px] border-solid border-gray-1200 mq450:gap-[4rem_0rem] mq750:pt-[1.625rem] mq750:pb-[1.25rem] mq750:box-border">
      <div className="self-stretch flex flex-col items-start justify-start py-[0rem] px-[0.188rem] gap-[0.75rem_0rem]">
        <div className="self-stretch flex flex-col items-start justify-start py-[0rem] pr-[0.063rem] pl-[0rem] gap-[9.563rem_0rem] mq450:gap-[9.563rem_0rem]">
          <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
            <TypeRuPayIcon
              typeRuPay="/bank-1.svg"
              propHeight="3.5rem"
              propWidth="5rem"
              propAlignSelf="unset"
              propFlex="unset"
              propOverflow="unset"
              propMaxHeight="unset"
              propMinHeight="unset"
              propPosition="relative"
              propLeft="unset"
              propTop="unset"
              propTransform="unset"
              propMargin="unset"
            />
            <div className="rounded-lg bg-gray-1400 overflow-hidden flex flex-row items-start justify-start py-[0rem] pr-[0.125rem] pl-[0rem] gap-[0rem_0.75rem] border-[2px] border-solid border-gray-1300">
              <img
                className="self-stretch w-[1.375rem] relative max-h-full min-h-[3.125rem]"
                alt=""
                src="/vector-41.svg"
              />
              <div className="h-[3.125rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0rem] box-border">
                <img
                  className="mt-[-0.125rem] w-[1.813rem] h-[3.219rem] relative"
                  alt=""
                  src="/vector-51.svg"
                />
              </div>
            </div>
          </div>
          <div className="relative mq450:text-[1rem]">Card Number</div>
        </div>
        <div className="relative text-[1.75rem] font-semibold [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] mq450:text-[1.375rem]">
          2243 6652 9435 9982
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.188rem] text-[1.5rem]">
        <div className="relative uppercase font-medium mq450:text-[1.188rem]">
          BAHADIR NUROGLU
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.188rem]">
        <div className="flex flex-col items-start justify-start gap-[0.5rem_0rem]">
          <div className="relative font-medium mq450:text-[1rem]">
            Expirty Date
          </div>
          <div className="relative font-semibold mq450:text-[1rem]">10/25</div>
        </div>
      </div>
    </div>
  );
};

export default CardTypeVerticalStyleLigh;
