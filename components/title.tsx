import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type TitleType = {
  metalBronze?: string;

  /** Style props */
  expiryDateFramePadding?: CSSProperties["padding"];
  topFrameGap?: CSSProperties["gap"];
  groupDivTextAlign?: CSSProperties["textAlign"];

  /** Action props */
  onGroupContainer1Click?: () => void;
  onLayoutVerticalMaterialClick?: () => void;
};

const Title: NextPage<TitleType> = ({
  metalBronze,
  expiryDateFramePadding,
  topFrameGap,
  groupDivTextAlign,
  onGroupContainer1Click,
  onLayoutVerticalMaterialClick,
}) => {
  const titleStyle: CSSProperties = useMemo(() => {
    return {
      padding: expiryDateFramePadding,
    };
  }, [expiryDateFramePadding]);

  const expiryDateFrameStyle: CSSProperties = useMemo(() => {
    return {
      gap: topFrameGap,
    };
  }, [topFrameGap]);

  const metalBronzeStyle: CSSProperties = useMemo(() => {
    return {
      textAlign: groupDivTextAlign,
    };
  }, [groupDivTextAlign]);

  return (
    <div
      className="self-stretch bg-gray-600 overflow-hidden flex flex-col items-start justify-start py-[0rem] px-[8.875rem] box-border gap-[3.375rem_0rem] max-w-full text-right text-[5rem] text-white font-poppins lg:pl-[4.438rem] lg:pr-[4.438rem] lg:box-border mq750:gap-[3.375rem_0rem] mq750:pl-[2.188rem] mq750:pr-[2.188rem] mq750:box-border"
      style={titleStyle}
    >
      <div
        className="w-[94.375rem] flex flex-col items-start justify-start gap-[0.688rem_0rem] max-w-full shrink-0"
        style={expiryDateFrameStyle}
      >
        <header className="self-stretch flex flex-row items-start justify-end max-w-full text-left text-[1.563rem] text-white font-montserrat">
          <div className="w-[90rem] bg-gray-2000 flex flex-row items-center justify-between py-[1.25rem] pr-[2.5rem] pl-[2.438rem] box-border relative gap-[1.25rem] max-w-full">
            <div className="h-[6.25rem] w-[90rem] relative bg-gray-2000 hidden max-w-full z-[0]" />
            <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-2000 z-[1]" />
            <div className="w-[20.5rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.125rem] box-border max-w-full">
              <div className="self-stretch flex flex-row items-end justify-between gap-[1.25rem]">
                <div className="flex flex-row items-end justify-start gap-[0rem_0.375rem]">
                  <img
                    className="h-[2.25rem] w-[2.25rem] relative overflow-hidden shrink-0 object-cover z-[2]"
                    loading="eager"
                    alt=""
                    src="/iconfinder-vector-65-09-473792-1@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.125rem]">
                    <div className="relative font-extrabold whitespace-nowrap z-[2]">
                      UTCards
                    </div>
                  </div>
                </div>
                <h3 className="m-0 relative text-[1.75rem] font-semibold font-heading-four-semibold-20p whitespace-nowrap z-[2]">
                  Cards
                </h3>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[0rem_1.875rem] max-w-full text-[0.938rem] text-lightsteelblue font-heading-four-semibold-20p">
              <div className="rounded-21xl bg-whitesmoke-100 flex flex-row items-center justify-start py-[0.938rem] pr-[2.688rem] pl-[1.563rem] gap-[0.938rem] whitespace-nowrap z-[2] mq450:pr-[1.25rem] mq450:box-border">
                <div className="h-[3.125rem] w-[15.938rem] relative rounded-21xl bg-whitesmoke-100 hidden" />
                <img
                  className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 min-h-[1.25rem] z-[1]"
                  alt=""
                  src="/magnifyingglass-1.svg"
                />
                <div className="relative whitespace-nowrap z-[1]">
                  Search for something
                </div>
              </div>
              <div
                className="h-[3.125rem] flex flex-col items-end justify-start pt-[0.813rem] pb-[1.625rem] pr-[0.688rem] pl-[1.75rem] box-border relative cursor-pointer z-[2] text-center text-[0.5rem] text-label-color-light-primary font-poppins"
                onClick={onGroupContainer1Click}
              >
                <div className="w-[3.125rem] h-[3.125rem] absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
                  <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-[50%] bg-whitesmoke-100" />
                  <img
                    className="absolute top-[1.063rem] left-[0.688rem] w-[1.375rem] h-[1.25rem] z-[1]"
                    loading="eager"
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-center justify-start">
                  <div className="w-[0.688rem] h-[0.688rem] relative rounded-[50%] bg-whitesmoke-100 box-border z-[2] border-[0px] border-solid border-label-color-light-primary" />
                  <div className="relative font-medium z-[3] mt-[-0.625rem]">
                    2
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.313rem] pl-[0rem]">
                <img
                  className="w-[3.125rem] h-[3.125rem] relative z-[2]"
                  loading="eager"
                  alt=""
                  src="/group-3.svg"
                />
              </div>
              <img
                className="h-[3.75rem] w-[3.75rem] relative object-cover z-[2]"
                loading="eager"
                alt=""
                src="/mask-group@2x.png"
              />
            </div>
          </div>
        </header>
        <h1
          className="m-0 relative text-inherit capitalize font-medium font-inherit inline-block max-w-full mq450:text-[1.5rem] mq1050:text-[2.5rem]"
          style={metalBronzeStyle}
        >
          {metalBronze}
        </h1>
      </div>
      <div className="rounded-6xl bg-white shadow-[0px_5px_10px_rgba(0,_0,_0,_0.25)_inset,_0px_4px_20px_5px_rgba(24,_20,_243,_0.37)] flex flex-row items-center justify-start py-[0rem] pr-[1.688rem] pl-[0.75rem] gap-[0.438rem] z-[1] text-left text-[2.125rem] text-label-color-light-primary">
        <div className="self-stretch w-[10.969rem] relative rounded-6xl bg-white shadow-[0px_5px_10px_rgba(0,_0,_0,_0.25)_inset,_0px_4px_20px_5px_rgba(24,_20,_243,_0.37)] hidden" />
        <img
          className="h-[2.225rem] w-[2.625rem] relative object-contain cursor-pointer z-[1]"
          alt=""
          src="/vector-1.svg"
          onClick={onLayoutVerticalMaterialClick}
        />
        <div className="h-[3.575rem] relative font-semibold flex items-center z-[1] mq450:text-[1.25rem] mq1050:text-[1.688rem]">
          Back
        </div>
      </div>
    </div>
  );
};

export default Title;
