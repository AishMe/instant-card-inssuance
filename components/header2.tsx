import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Header2Type = {
  loans?: string;

  /** Style props */
  uTCardsPadding?: CSSProperties["padding"];
  loansPadding?: CSSProperties["padding"];
  maskGroupWidth?: CSSProperties["width"];
};

const Header2: NextPage<Header2Type> = ({
  loans,
  uTCardsPadding,
  loansPadding,
  maskGroupWidth,
}) => {
  const frameDiv6Style: CSSProperties = useMemo(() => {
    return {
      padding: uTCardsPadding,
    };
  }, [uTCardsPadding]);

  const loansTextStyle: CSSProperties = useMemo(() => {
    return {
      padding: loansPadding,
    };
  }, [loansPadding]);

  const magnifyingglassIconStyle: CSSProperties = useMemo(() => {
    return {
      width: maskGroupWidth,
    };
  }, [maskGroupWidth]);

  return (
    <header className="self-stretch flex flex-row items-center justify-start py-[1.25rem] pr-[2.5rem] pl-[2.563rem] box-border gap-[0.563rem] max-w-full z-[1] text-left text-[1.563rem] text-primary-2 font-montserrat">
      <div className="h-[6.25rem] w-[90rem] relative bg-white hidden max-w-full" />
      <div
        className="flex flex-col items-start justify-start pt-[1.125rem] px-[0rem] pb-[0rem]"
        style={frameDiv6Style}
      >
        <img
          className="w-[2.25rem] h-[2.25rem] relative overflow-hidden shrink-0 object-cover z-[2]"
          loading="eager"
          alt=""
          src="/iconfinder-vector-65-09-473792-1@2x.png"
        />
      </div>
      <div
        className="flex-1 flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] box-border max-w-full"
        style={loansTextStyle}
      >
        <div
          className="w-[17.875rem] flex flex-row items-end justify-between gap-[1.25rem]"
          style={magnifyingglassIconStyle}
        >
          <h3 className="m-0 relative text-inherit font-extrabold font-inherit whitespace-nowrap z-[2]">
            UTCards
          </h3>
          <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.5rem] text-[1.75rem] font-heading-four-semibold-20p">
            <h2 className="m-0 relative text-inherit font-semibold font-inherit whitespace-nowrap z-[1]">
              {loans}
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start py-[0rem] pr-[1.313rem] pl-[0rem] text-[0.938rem] text-lightsteelblue font-heading-four-semibold-20p">
        <div className="rounded-21xl bg-whitesmoke-100 flex flex-row items-center justify-start py-[0.938rem] pr-[2.688rem] pl-[1.563rem] gap-[0.938rem] whitespace-nowrap z-[1] mq450:pr-[1.25rem] mq450:box-border">
          <div className="h-[3.125rem] w-[15.938rem] relative rounded-21xl bg-whitesmoke-100 hidden" />
          <img
            className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 min-h-[1.25rem] z-[1]"
            alt=""
            src="/magnifyingglass-1.svg"
          />
          <div className="relative z-[1]">Search for something</div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start py-[0rem] pr-[1.313rem] pl-[0rem]">
        <img
          className="w-[3.125rem] h-[3.125rem] relative z-[1]"
          loading="eager"
          alt=""
          src="/group-4.svg"
        />
      </div>
      <div className="flex flex-col items-start justify-start py-[0rem] pr-[1.625rem] pl-[0rem]">
        <img
          className="w-[3.125rem] h-[3.125rem] relative z-[1]"
          loading="eager"
          alt=""
          src="/group-3.svg"
        />
      </div>
      <img
        className="h-[3.75rem] w-[3.75rem] relative object-cover z-[1]"
        loading="eager"
        alt=""
        src="/mask-group@2x.png"
      />
    </header>
  );
};

export default Header2;
