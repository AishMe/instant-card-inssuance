import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import TypeRuPayIcon from "./type-ru-pay-icon";

export type CardTypeHorizontalStyleLi1Type = {
  vector?: string;
  vector1?: string;
  bank?: string;
  bankLogo?: boolean;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propBorder?: CSSProperties["border"];
  propColor1?: CSSProperties["color"];
  propColor2?: CSSProperties["color"];
  propBackgroundColor2?: CSSProperties["backgroundColor"];
  propColor3?: CSSProperties["color"];
  propColor4?: CSSProperties["color"];
};

const CardTypeHorizontalStyleLi1: NextPage<CardTypeHorizontalStyleLi1Type> = ({
  vector,
  vector1,
  bank,
  bankLogo = true,
  propBackgroundColor,
  propColor,
  propBackgroundColor1,
  propBorder,
  propColor1,
  propColor2,
  propBackgroundColor2,
  propColor3,
  propColor4,
}) => {
  const cardTypeHorizontalStyleLiStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const bAHADIRNUROGLUStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const chipStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
      border: propBorder,
    };
  }, [propBackgroundColor1, propBorder]);

  const cardNumber1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const bottomframeStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const bottomStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  const expirtyDateStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const emptyframeStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  return (
    <div
      className="w-[35.875rem] rounded-13xl bg-whitesmoke-600 [backdrop-filter:blur(40px)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[2.75rem] px-[0rem] pb-[0rem] gap-[2.5rem_0rem] max-w-full text-left text-[1.25rem] text-gray-500 font-heading-four-semibold-20p border-[1px] border-solid border-gray-1100 mq450:pt-[1.813rem] mq450:box-border mq750:gap-[2.5rem_0rem]"
      style={cardTypeHorizontalStyleLiStyle}
    >
      <div className="w-[30.875rem] flex flex-row items-start justify-start max-w-full text-[1.5rem]">
        <div
          className="relative uppercase font-medium mq450:text-[1.188rem]"
          style={bAHADIRNUROGLUStyle}
        >
          BAHADIR NUROGLU
        </div>
      </div>
      <div className="w-[30.875rem] flex flex-col items-start justify-start gap-[0.75rem_0rem] max-w-full">
        <div className="self-stretch flex flex-col items-end justify-start">
          <div
            className="rounded-lg bg-gray-1400 overflow-hidden flex flex-row items-start justify-start py-[0rem] pr-[0.125rem] pl-[0rem] gap-[0rem_0.75rem] border-[2px] border-solid border-gray-1300"
            style={chipStyle}
          >
            <img
              className="self-stretch w-[1.375rem] relative max-h-full min-h-[3.125rem]"
              alt=""
              src={vector}
            />
            <div className="h-[3.125rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0rem] box-border">
              <img
                className="mt-[-0.125rem] w-[1.813rem] h-[3.219rem] relative"
                alt=""
                src={vector1}
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start">
            <div
              className="relative mq450:text-[1rem]"
              style={cardNumber1Style}
            >
              Card Number
            </div>
          </div>
        </div>
        <div
          className="relative text-[2rem] font-semibold inline-block [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] max-w-full mq450:text-[1.188rem] mq750:text-[1.625rem]"
          style={bottomframeStyle}
        >
          2243 6652 9435 9982
        </div>
      </div>
      <div
        className="self-stretch rounded-t-none rounded-b-13xl bg-white overflow-hidden flex flex-row items-start justify-between py-[1.75rem] px-[2.5rem] gap-[1.25rem] mq450:flex-wrap"
        style={bottomStyle}
      >
        <div className="flex flex-col items-start justify-start gap-[0.5rem_0rem]">
          <div
            className="relative font-medium mq450:text-[1rem]"
            style={expirtyDateStyle}
          >
            Expirty Date
          </div>
          <div
            className="relative font-semibold mq450:text-[1rem]"
            style={emptyframeStyle}
          >
            10/25
          </div>
        </div>
        <TypeRuPayIcon
          typeRuPay="/bank-1.svg"
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

export default CardTypeHorizontalStyleLi1;
