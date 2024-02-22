import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type GroupComponent3Type = {
  creditCard1?: string;
  dBLBank?: string;
  january?: string;
  william?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
};

const GroupComponent3: NextPage<GroupComponent3Type> = ({
  creditCard1,
  dBLBank,
  january,
  william,
  propBackgroundColor,
  propBackgroundColor1,
}) => {
  const frameDiv7Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const rectangleDiv3Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  return (
    <div className="self-stretch rounded-xl bg-white overflow-x-auto flex flex-row items-center justify-start py-[0.938rem] pr-[1.875rem] pl-[0.938rem] gap-[2.125rem] text-left text-[1rem] text-gray-200 font-heading-four-semibold-20p mq750:gap-[2.125rem]">
      <div className="h-[5.625rem] w-[45.625rem] relative rounded-xl bg-white shrink-0 hidden" />
      <div className="flex flex-row items-center justify-start py-[0rem] pr-[0.563rem] pl-[0rem] gap-[0rem_0.938rem]">
        <div
          className="rounded-xl bg-lavender-100 flex flex-row items-center justify-center p-[1.063rem] z-[1]"
          style={frameDiv7Style}
        >
          <div
            className="h-[3.75rem] w-[3.75rem] relative rounded-xl bg-lavender-100 hidden"
            style={rectangleDiv3Style}
          />
          <img
            className="h-[1.625rem] w-[1.625rem] relative overflow-hidden shrink-0 z-[2]"
            alt=""
            src={creditCard1}
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem]">
          <div className="relative font-medium z-[1]">Card Type</div>
          <div className="relative text-[0.938rem] text-steelblue z-[1]">
            Secondary
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.625rem] pl-[0rem] gap-[0.438rem_0rem]">
        <div className="relative font-medium z-[1]">Bank</div>
        <div className="relative text-[0.938rem] text-steelblue z-[1]">
          {dBLBank}
        </div>
      </div>
      <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.813rem] pl-[0rem] gap-[0.438rem_0rem]">
        <div className="relative font-medium z-[1]">Card Number</div>
        <div className="relative text-[0.938rem] text-steelblue z-[1]">
          {january}
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem]">
        <div className="relative font-medium z-[1]">Namain Card</div>
        <div className="relative text-[0.938rem] text-steelblue z-[1]">
          {william}
        </div>
      </div>
      <div className="relative text-[0.938rem] font-medium text-blue-200 z-[1]">
        View Details
      </div>
    </div>
  );
};

export default GroupComponent3;
