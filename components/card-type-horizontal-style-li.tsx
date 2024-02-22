import type { NextPage } from "next";
import TypeRuPayIcon from "./type-ru-pay-icon";

export type CardTypeHorizontalStyleLiType = {
  bankLogo?: boolean;
};

const CardTypeHorizontalStyleLi: NextPage<CardTypeHorizontalStyleLiType> = ({
  bankLogo = true,
}) => {
  return (
    <div className="w-[35.875rem] rounded-13xl bg-whitesmoke-600 [backdrop-filter:blur(40px)] box-border flex flex-row items-center justify-start py-[0.063rem] pr-[0.125rem] pl-[2.438rem] gap-[0rem_3.563rem] max-w-full text-left text-[1.25rem] text-gray-500 font-heading-four-semibold-20p border-[1px] border-solid border-gray-1500 mq750:flex-wrap mq750:gap-[0rem_3.563rem]">
      <div className="flex-1 flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] box-border min-w-[14.313rem] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[3.688rem_0rem] mq450:gap-[3.688rem_0rem]">
          <div className="flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[2rem] text-[1.5rem]">
            <div className="relative uppercase font-medium mq450:text-[1.188rem]">
              BAHADIR NUROGLU
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem_0rem]">
            <div className="relative mq450:text-[1rem]">Card Number</div>
            <div className="relative text-[2rem] font-semibold [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] mq450:text-[1.188rem] mq750:text-[1.625rem]">
              2243 6652 9435 9982
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-[0rem] px-[0.188rem]">
            <div className="flex flex-col items-start justify-start gap-[0.5rem_0rem]">
              <div className="relative mq450:text-[1rem]">Expirty Date</div>
              <div className="relative font-semibold mq450:text-[1rem]">
                10/25
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[24.25rem] w-[7.688rem] relative rounded-tl-none rounded-tr-13xl rounded-br-13xl rounded-bl-none bg-gray-500">
        <div className="absolute top-[2rem] right-[1.313rem] w-[5rem] h-[19.688rem] flex flex-col items-center justify-start gap-[13.063rem_0rem]">
          <TypeRuPayIcon
            typeRuPay="/bank.svg"
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
          <div className="rounded-lg bg-gray-1800 overflow-hidden flex flex-row items-start justify-start py-[0rem] pr-[0.125rem] pl-[0rem] gap-[0rem_0.75rem] z-[1] border-[2px] border-solid border-gray-1700">
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

export default CardTypeHorizontalStyleLi;
