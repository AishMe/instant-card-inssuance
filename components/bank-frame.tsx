import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import TypeRuPayIcon from "./type-ru-pay-icon";

export type BankFrameType = {
  /** Style props */
  propFlex?: CSSProperties["flex"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding?: CSSProperties["padding"];
};

const BankFrame: NextPage<BankFrameType> = ({
  propFlex,
  propAlignSelf,
  propPadding,
}) => {
  const bankFrameStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propAlignSelf]);

  const frameDiv9Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className="flex-1 flex flex-col items-start justify-start gap-[0.75rem_0rem] max-w-full text-left text-[1.25rem] text-silver font-heading-four-semibold-20p"
      style={bankFrameStyle}
    >
      <div
        className="self-stretch flex flex-col items-start justify-start py-[0rem] pr-[0.063rem] pl-[0rem] gap-[9.563rem_0rem] mq450:gap-[9.563rem_0rem]"
        style={frameDiv9Style}
      >
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
          <div className="rounded-lg bg-gray-1800 overflow-hidden flex flex-row items-start justify-start py-[0rem] pr-[0.125rem] pl-[0rem] gap-[0rem_0.75rem] z-[3] border-[2px] border-solid border-gray-1700">
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
        <div className="relative z-[3] mq450:text-[1rem]">Card Number</div>
      </div>
      <div className="relative text-[1.75rem] font-semibold text-white [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] z-[3] mq450:text-[1.375rem]">
        2243 6652 9435 9982
      </div>
    </div>
  );
};

export default BankFrame;
