import type { NextPage } from "next";
import TypeRuPayIcon from "./type-ru-pay-icon";

export type CardTypeVerticalStyleDarkType = {
  bankLogo?: boolean;
};

const CardTypeVerticalStyleDark: NextPage<CardTypeVerticalStyleDarkType> = ({
  bankLogo = true,
}) => {
  return (
    <div className="w-[24.938rem] rounded-13xl bg-gray-400 [backdrop-filter:blur(40px)] box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[2.5rem] pb-[1.75rem] pr-[2rem] pl-[1.5rem] gap-[4rem_0rem] max-w-full text-left text-[1.25rem] text-silver font-heading-four-semibold-20p border-[1px] border-solid border-gray-1100 mq450:gap-[4rem_0rem] mq750:pt-[1.625rem] mq750:pb-[1.25rem] mq750:box-border">
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem_0rem] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[9.563rem_0rem] mq450:gap-[9.563rem_0rem]">
          <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
            <TypeRuPayIcon
              typeRuPay="/bank.svg"
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
          <div className="flex flex-row items-start justify-start py-[0rem] px-[0.5rem]">
            <div className="relative mq450:text-[1rem]">Card Number</div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-[0rem] px-[0.5rem] box-border max-w-full text-[1.75rem] text-white">
          <div className="relative font-semibold [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] mq450:text-[1.375rem]">
            2243 6652 9435 9982
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-[0rem] px-[0.375rem] text-[1.5rem] text-white">
        <div className="relative uppercase font-medium mq450:text-[1.188rem]">
          BAHADIR NUROGLU
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-[0rem] px-[0.5rem]">
        <div className="flex flex-col items-start justify-start gap-[0.5rem_0rem]">
          <div className="relative font-medium mq450:text-[1rem]">
            Expirty Date
          </div>
          <div className="relative font-semibold text-white mq450:text-[1rem]">
            10/25
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTypeVerticalStyleDark;
