import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type CharleneReedType = {
  dateOfBirth?: string;
  january1990?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const CharleneReed: NextPage<CharleneReedType> = ({
  dateOfBirth,
  january1990,
  propWidth,
}) => {
  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[0.688rem_0rem] max-w-full text-left text-[1rem] text-gray-200 font-heading-four-semibold-20p">
      <div className="relative z-[1]">{dateOfBirth}</div>
      <div className="self-stretch rounded-mini bg-white box-border flex flex-row items-center justify-between py-[1rem] pr-[1.563rem] pl-[1.25rem] gap-[1.25rem] max-w-full whitespace-nowrap z-[1] text-[0.938rem] text-steelblue border-[1px] border-solid border-aliceblue-500">
        <div
          className="h-[3.125rem] w-[26.125rem] relative rounded-mini bg-white box-border hidden max-w-full border-[1px] border-solid border-aliceblue-500"
          style={rectangleDivStyle}
        />
        <div className="relative z-[2]">{january1990}</div>
        <img
          className="h-[0.375rem] w-[0.75rem] relative z-[2]"
          alt=""
          src="/vector-4.svg"
        />
      </div>
    </div>
  );
};

export default CharleneReed;
