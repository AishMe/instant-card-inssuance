import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import TypeRuPayIcon from "./type-ru-pay-icon";

export type FrameComponent3Type = {
  bank?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propGap1?: CSSProperties["gap"];
  propOverflow?: CSSProperties["overflow"];
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({
  bank,
  propGap,
  propWidth,
  propPadding,
  propAlignSelf,
  propGap1,
  propOverflow,
  propColor,
  propColor1,
}) => {
  const frameDiv8Style: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
      width: propWidth,
      padding: propPadding,
      alignSelf: propAlignSelf,
    };
  }, [propGap, propWidth, propPadding, propAlignSelf]);

  const bAhadirNurogluTextStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap1,
    };
  }, [propGap1]);

  const typeRuPayIconStyle: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const cardNumberStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const innerCardFrameStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div
      className="w-[23.438rem] flex flex-col items-start justify-start py-[0rem] px-[1.25rem] box-border gap-[0.75rem_0rem] max-w-full text-left text-[1.25rem] text-label-color-light-primary font-heading-four-semibold-20p"
      style={frameDiv8Style}
    >
      <div
        className="self-stretch flex flex-col items-start justify-start gap-[9.813rem_0rem] mq450:gap-[9.813rem_0rem]"
        style={bAhadirNurogluTextStyle}
      >
        <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem] mq450:flex-wrap">
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
        <div
          className="relative font-medium z-[1] mq450:text-[1rem]"
          style={cardNumberStyle}
        >
          Card Number
        </div>
      </div>
      <div
        className="relative text-[1.75rem] font-semibold [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] z-[1] mq450:text-[1.375rem]"
        style={innerCardFrameStyle}
      >
        2243 6652 9435 9982
      </div>
    </div>
  );
};

export default FrameComponent3;
