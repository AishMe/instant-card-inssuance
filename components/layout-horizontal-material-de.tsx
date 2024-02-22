import type { NextPage } from "next";
import TypeRuPayIcon from "./type-ru-pay-icon";

export type LayoutHorizontalMaterialDeType = {
  bankLogo?: boolean;
};

const LayoutHorizontalMaterialDe: NextPage<LayoutHorizontalMaterialDeType> = ({
  bankLogo = true,
}) => {
  return (
    <div className="flex flex-row items-end justify-start py-[2rem] px-[2.5rem] box-border relative gap-[0rem_3.813rem] max-w-full text-left text-[1.25rem] text-label-color-light-primary font-heading-four-semibold-20p mq450:gap-[0rem_3.813rem] mq450:pt-[1.313rem] mq450:pb-[1.313rem] mq450:box-border mq750:flex-wrap mq750:gap-[0rem_3.813rem]">
      <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-13xl [background:linear-gradient(rgba(220,_207,_255,_0.2),_rgba(220,_207,_255,_0.2)),_linear-gradient(143.15deg,_rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0)),_linear-gradient(244.71deg,_#576265,_#757a7b_10.42%,_#576265_18.75%,_#576265_45.9%,_#848b8a_52.1%,_#9ea1a1_84.96%,_#576265)]" />
      <div className="flex flex-col items-start justify-start gap-[3.938rem_0rem] max-w-full mq450:gap-[3.938rem_0rem]">
        <div className="flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.75rem] text-[1.5rem]">
          <div className="relative uppercase font-medium z-[1] mq450:text-[1.188rem]">
            BAHADIR NUROGLU
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[0.75rem_0rem]">
          <div className="relative font-medium z-[1] mq450:text-[1rem]">
            Card Number
          </div>
          <div className="relative text-[2rem] font-semibold [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] z-[1] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
            2243 6652 9435 9982
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[0.5rem_0rem]">
          <div className="relative font-medium z-[1] mq450:text-[1rem]">
            Expirty Date
          </div>
          <div className="relative font-semibold z-[1] mq450:text-[1rem]">
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

export default LayoutHorizontalMaterialDe;
