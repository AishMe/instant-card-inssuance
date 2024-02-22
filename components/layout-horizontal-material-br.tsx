import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import TypeRuPayIcon from "./type-ru-pay-icon";

export type LayoutHorizontalMaterialBrType = {
  bankLogo?: boolean;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propBackground?: CSSProperties["background"];
};

const LayoutHorizontalMaterialBr: NextPage<LayoutHorizontalMaterialBrType> = ({
  bankLogo = true,
  propAlignSelf,
  propWidth,
  propBackground,
}) => {
  const layoutHorizontalMaterialBrStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const ironBodyStyle: CSSProperties = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground]);

  return (
    <div
      className="self-stretch flex flex-col items-center justify-start pt-[2.75rem] px-[0rem] pb-[0rem] box-border relative gap-[2.5rem_0rem] max-w-full text-left text-[1.25rem] text-label-color-light-primary font-heading-four-semibold-20p mq450:pt-[1.813rem] mq450:box-border mq750:gap-[2.5rem_0rem]"
      style={layoutHorizontalMaterialBrStyle}
    >
      <div
        className="w-full h-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-13xl [background:linear-gradient(rgba(255,_107,_0,_0.32),_rgba(255,_107,_0,_0.32)),_linear-gradient(143.15deg,_rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0)),_linear-gradient(244.71deg,_#576265,_#757a7b_10.42%,_#576265_18.75%,_#576265_45.9%,_#848b8a_52.1%,_#9ea1a1_84.96%,_#576265)]"
        style={ironBodyStyle}
      />
      <div className="w-[30.875rem] flex flex-row items-start justify-start max-w-full text-[1.5rem]">
        <div className="relative uppercase font-medium z-[1] mq450:text-[1.188rem]">
          BAHADIR NUROGLU
        </div>
      </div>
      <div className="w-[30.875rem] flex flex-col items-start justify-start gap-[0.75rem_0rem] max-w-full">
        <div className="self-stretch flex flex-col items-end justify-start">
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
          <div className="self-stretch flex flex-row items-start justify-start">
            <div className="relative font-medium z-[1] mq450:text-[1rem]">
              Card Number
            </div>
          </div>
        </div>
        <div className="relative text-[2rem] font-semibold inline-block [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] max-w-full z-[1] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
          2243 6652 9435 9982
        </div>
      </div>
      <div className="self-stretch rounded-t-none rounded-b-13xl bg-gray-300 overflow-hidden flex flex-row items-start justify-between py-[1.75rem] px-[2.5rem] relative gap-[1.25rem] z-[1] text-silver mq450:flex-wrap">
        <img
          className="h-[13.75rem] w-[40.875rem] absolute my-0 mx-[!important] top-[-3.937rem] right-[-5rem] object-cover"
          alt=""
          src="/texture@2x.png"
        />
        <div className="flex flex-col items-start justify-start gap-[0.5rem_0rem]">
          <div className="relative font-medium z-[1] mq450:text-[1rem]">
            Expirty Date
          </div>
          <div className="relative font-semibold text-white z-[1] mq450:text-[1rem]">
            10/25
          </div>
        </div>
        <TypeRuPayIcon
          typeRuPay="/bank.svg"
          propHeight="unset"
          propWidth="5rem"
          propAlignSelf="stretch"
          propFlex="unset"
          propOverflow="unset"
          propMaxHeight="100%"
          propMinHeight="3.5rem"
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

export default LayoutHorizontalMaterialBr;
