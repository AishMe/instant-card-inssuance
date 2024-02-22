import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import TypeRuPayIcon from "./type-ru-pay-icon";

export type CardTypeHorizontalStyleDe1Type = {
  vector?: string;
  bankLogo?: boolean;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propRight?: CSSProperties["right"];
  propBottom?: CSSProperties["bottom"];
  propGap?: CSSProperties["gap"];
  propPadding1?: CSSProperties["padding"];
};

const CardTypeHorizontalStyleDe1: NextPage<CardTypeHorizontalStyleDe1Type> = ({
  vector,
  bankLogo = true,
  propPadding,
  propWidth,
  propHeight,
  propTop,
  propLeft,
  propRight,
  propBottom,
  propGap,
  propPadding1,
}) => {
  const cardTypeHorizontalStyleDeStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const vectorIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
      top: propTop,
      left: propLeft,
      right: propRight,
      bottom: propBottom,
    };
  }, [propWidth, propHeight, propTop, propLeft, propRight, propBottom]);

  const frameDiv10Style: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const frameDiv11Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div
      className="self-stretch rounded-13xl bg-gray-500 [backdrop-filter:blur(40px)] overflow-hidden flex flex-col items-center justify-start pt-[2.5rem] pb-[2rem] pr-[2.438rem] pl-[2.5rem] box-border relative gap-[4rem_0rem] max-w-full text-left text-[1.5rem] text-white font-heading-four-semibold-20p mq450:gap-[4rem_0rem] mq450:pt-[1.625rem] mq450:pb-[1.313rem] mq450:box-border mq900:gap-[4rem_0rem]"
      style={cardTypeHorizontalStyleDeStyle}
    >
      <img
        className="w-[39.3rem] h-[44.969rem] absolute my-0 mx-[!important] top-[-12.812rem] left-[-17.094rem] object-contain"
        alt=""
        src={vector}
        style={vectorIconStyle}
      />
      <img
        className="w-full h-full absolute my-0 mx-[!important] top-[0rem] right-[-0.094rem] bottom-[0rem] max-h-full object-cover z-[1]"
        alt=""
        src="/texture@2x.png"
      />
      <div
        className="self-stretch flex flex-col items-start justify-start gap-[2.813rem_0rem] max-w-full mq900:gap-[2.813rem_0rem]"
        style={frameDiv10Style}
      >
        <div className="w-[14.5rem] relative uppercase font-medium inline-block [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] z-[2] mq450:text-[1.188rem]">
          BAHADIR NUROGLU
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem_0rem] max-w-full text-[1.25rem] text-silver">
          <div className="self-stretch flex flex-col items-end justify-start">
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
            <div className="self-stretch flex flex-row items-start justify-start mt-[-0.062rem]">
              <div className="relative z-[2] mq450:text-[1rem]">
                Card Number
              </div>
            </div>
          </div>
          <div className="relative text-[2rem] font-semibold text-white inline-block [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] max-w-full z-[2] mq450:text-[1.188rem] mq900:text-[1.625rem]">
            2243 6652 9435 9982
          </div>
        </div>
      </div>
      <div
        className="self-stretch flex flex-row items-start justify-between py-[0rem] pr-[0.063rem] pl-[0rem] gap-[1.25rem] text-[1.25rem] text-silver mq450:flex-wrap"
        style={frameDiv11Style}
      >
        <div className="flex flex-col items-start justify-start gap-[0.5rem_0rem]">
          <div className="relative font-medium z-[2] mq450:text-[1rem]">
            Expirty Date
          </div>
          <div className="w-[3.5rem] relative font-semibold text-white inline-block [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] z-[2] mq450:text-[1rem]">
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

export default CardTypeHorizontalStyleDe1;
