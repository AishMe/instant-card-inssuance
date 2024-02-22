import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponentType = {
  group875?: string;
  samsungMobile?: string;
  eCommerceMarketplace?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  group875,
  samsungMobile,
  eCommerceMarketplace,
  propPadding,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className="flex flex-row items-center justify-start py-[0rem] pr-[0.75rem] pl-[0rem] gap-[0rem_1.25rem] text-left text-[1rem] text-gray-200 font-heading-four-semibold-20p"
      style={frameDivStyle}
    >
      <img
        className="h-[3.75rem] w-[3.75rem] relative z-[1]"
        loading="eager"
        alt=""
        src={group875}
      />
      <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem]">
        <div className="relative font-medium z-[1]">{samsungMobile}</div>
        <div className="relative text-[0.938rem] text-steelblue z-[1]">
          {eCommerceMarketplace}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
