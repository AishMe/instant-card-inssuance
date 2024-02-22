import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type GroupComponent1Type = {
  briefcase1?: string;
  checkingAccounts?: string;

  /** Style props */
  propOverflowX?: CSSProperties["overflowX"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propOverflow?: CSSProperties["overflow"];
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propPadding2?: CSSProperties["padding"];
  propBorder?: CSSProperties["border"];
  propColor?: CSSProperties["color"];
  propBorder1?: CSSProperties["border"];
};

const GroupComponent1: NextPage<GroupComponent1Type> = ({
  briefcase1,
  checkingAccounts,
  propOverflowX,
  propBackgroundColor,
  propBackgroundColor1,
  propOverflow,
  propPadding,
  propPadding1,
  propPadding2,
  propBorder,
  propColor,
  propBorder1,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      overflowX: propOverflowX,
    };
  }, [propOverflowX]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const rectangleDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const briefcase1IconStyle: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const frameDiv5Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const viewDetailsStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const rectangleDiv2Style: CSSProperties = useMemo(() => {
    return {
      border: propBorder1,
    };
  }, [propBorder1]);

  return (
    <div
      className="self-stretch rounded-xl bg-white flex flex-row items-center justify-between py-[0.938rem] pr-[1.875rem] pl-[0.938rem] box-border gap-[1.25rem] max-w-full z-[1] text-left text-[1rem] text-gray-200 font-heading-four-semibold-20p mq1050:flex-wrap"
      style={groupDivStyle}
    >
      <div className="h-[5.625rem] w-[69.375rem] relative rounded-xl bg-white hidden max-w-full" />
      <div className="flex flex-row items-center justify-start gap-[0rem_1.25rem] mq450:flex-wrap">
        <div
          className="rounded-xl bg-cornsilk flex flex-row items-center justify-center pt-[1.125rem] pb-[1.063rem] pr-[1.063rem] pl-[1.125rem] z-[1]"
          style={frameDiv2Style}
        >
          <div
            className="h-[3.75rem] w-[3.75rem] relative rounded-xl bg-cornsilk hidden"
            style={rectangleDiv1Style}
          />
          <img
            className="h-[1.563rem] w-[1.563rem] relative overflow-hidden shrink-0 z-[2]"
            loading="eager"
            alt=""
            src={briefcase1}
            style={briefcase1IconStyle}
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem]">
          <div className="relative font-medium z-[1]">{checkingAccounts}</div>
          <div className="relative text-[0.938rem] text-steelblue z-[1]">{`It is a long established `}</div>
        </div>
      </div>
      <div
        className="flex flex-col items-start justify-start gap-[0.438rem_0rem]"
        style={frameDiv3Style}
      >
        <div className="relative font-medium z-[1]">Lorem Ipsum</div>
        <div className="relative text-[0.938rem] text-steelblue z-[1]">
          Many publishing
        </div>
      </div>
      <div
        className="flex flex-col items-start justify-start gap-[0.438rem_0rem]"
        style={frameDiv4Style}
      >
        <div className="relative font-medium z-[1]">Lorem Ipsum</div>
        <div className="relative text-[0.938rem] text-steelblue z-[1]">
          Many publishing
        </div>
      </div>
      <div
        className="flex flex-col items-start justify-start gap-[0.438rem_0rem]"
        style={frameDiv5Style}
      >
        <div className="relative font-medium z-[1]">Lorem Ipsum</div>
        <div className="relative text-[0.938rem] text-steelblue z-[1]">
          Many publishing
        </div>
      </div>
      <div
        className="rounded-31xl flex flex-row items-center justify-center pt-[0.563rem] pb-[0.5rem] pr-[1.625rem] pl-[1.938rem] z-[1] text-center text-[0.938rem] text-steelblue border-[1px] border-solid border-steelblue"
        style={groupDiv1Style}
      >
        <div className="relative font-medium" style={viewDetailsStyle}>
          View Details
        </div>
        <div
          className="h-[2.188rem] w-[9.375rem] relative rounded-31xl box-border hidden border-[1px] border-solid border-steelblue"
          style={rectangleDiv2Style}
        />
      </div>
    </div>
  );
};

export default GroupComponent1;
