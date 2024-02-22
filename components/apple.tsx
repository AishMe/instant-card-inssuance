import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type AppleType = {
  apple21?: string;
  appleStore?: string;
  hAgo?: string;
  emptyFrame?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
};

const Apple: NextPage<AppleType> = ({
  apple21,
  appleStore,
  hAgo,
  emptyFrame,
  propBackgroundColor,
  propBackgroundColor1,
}) => {
  const groupDiv2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const rectangleDiv4Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  return (
    <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem] text-left text-[1rem] text-darkgray-200 font-heading-four-semibold-20p mq450:flex-wrap">
      <div className="flex flex-row items-center justify-start gap-[0rem_1.25rem]">
        <div
          className="rounded-xl bg-lightcyan flex flex-row items-center justify-center pt-[1.125rem] pb-[1.063rem] pr-[1.063rem] pl-[1.125rem] z-[1]"
          style={groupDiv2Style}
        >
          <div
            className="h-[3.75rem] w-[3.75rem] relative rounded-xl bg-lightcyan hidden"
            style={rectangleDiv4Style}
          />
          <img
            className="h-[1.563rem] w-[1.563rem] relative overflow-hidden shrink-0 z-[1]"
            alt=""
            src={apple21}
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem]">
          <div className="relative font-medium z-[1]">{appleStore}</div>
          <div className="relative text-[0.938rem] text-steelblue z-[1]">
            {hAgo}
          </div>
        </div>
      </div>
      <div className="relative text-steelblue text-right whitespace-nowrap z-[1]">
        {emptyFrame}
      </div>
    </div>
  );
};

export default Apple;
