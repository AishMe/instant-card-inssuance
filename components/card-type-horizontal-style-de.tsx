import type { NextPage } from "next";
import TypeRuPayIcon from "./type-ru-pay-icon";

export type CardTypeHorizontalStyleDeType = {
  bankLogo?: boolean;
};

const CardTypeHorizontalStyleDe: NextPage<CardTypeHorizontalStyleDeType> = ({
  bankLogo = true,
}) => {
  return (
    <div className="self-stretch h-[24.375rem] rounded-13xl bg-gray-500 [backdrop-filter:blur(40px)] overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[0rem] pb-[2rem] pr-[2.438rem] pl-[2.563rem] box-border relative gap-[0.25rem_0rem] max-w-full text-left text-[1.25rem] text-silver font-heading-four-semibold-20p mq900:h-auto">
      <div className="self-stretch h-[6.25rem] flex flex-row items-start justify-start py-[0rem] pr-[0.875rem] pl-[0.75rem] box-border max-w-full">
        <div className="h-[6.25rem] w-[29.25rem] relative rounded-[50%] [filter:blur(116.49px)] box-border max-w-[114%] shrink-0 border-[0px] border-solid border-gradient-style-6" />
      </div>
      <img
        className="w-full h-full absolute my-0 mx-[!important] top-[0rem] right-[-0.094rem] bottom-[0rem] rounded-13xl max-h-full object-cover z-[1]"
        alt=""
        src="/texture-2@2x.png"
      />
      <div className="self-stretch flex flex-row items-end justify-start gap-[0rem_3.813rem] max-w-full shrink-0 mq900:flex-wrap mq900:gap-[0rem_3.813rem]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[3.938rem_0rem] min-w-[14.313rem] max-w-full mq450:gap-[3.938rem_0rem]">
          <div className="flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.75rem] text-[1.5rem] text-white">
            <div className="relative uppercase font-medium z-[2] mq450:text-[1.188rem]">
              BAHADIR NUROGLU
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem_0rem]">
            <div className="relative z-[2] mq450:text-[1rem]">Card Number</div>
            <div className="relative text-[2rem] font-semibold text-white [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] z-[2] mq450:text-[1.188rem] mq900:text-[1.625rem]">
              2243 6652 9435 9982
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.5rem_0rem]">
            <div className="relative z-[2] mq450:text-[1rem]">Expirty Date</div>
            <div className="w-[3.5rem] relative font-semibold text-white inline-block [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] z-[2] mq450:text-[1rem]">
              10/25
            </div>
          </div>
        </div>
        <div className="h-[20.375rem] w-[5rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.5rem] box-border">
          <div className="self-stretch flex-1 flex flex-col items-end justify-start gap-[13.25rem_0rem]">
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
        </div>
      </div>
    </div>
  );
};

export default CardTypeHorizontalStyleDe;
