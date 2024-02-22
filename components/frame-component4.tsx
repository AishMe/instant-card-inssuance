import type { NextPage } from "next";
import LayoutHorizontalThemeGrey from "./layout-horizontal-theme-grey";
import LayoutVerticalThemeGrey from "./layout-vertical-theme-grey";
import LayoutHorizontalThemeDefau from "./layout-horizontal-theme-defau";

const FrameComponent4: NextPage = () => {
  return (
    <div className="flex-1 flex flex-col items-end justify-start gap-[12.563rem_0rem] min-w-[26.375rem] max-w-full text-left text-[1.25rem] text-silver font-heading-four-semibold-20p mq450:gap-[12.563rem_0rem] mq750:gap-[12.563rem_0rem] mq750:min-w-full">
      <div className="self-stretch flex flex-row items-start justify-start max-w-full text-[1.5rem] text-white">
        <LayoutHorizontalThemeGrey bankLogo />
      </div>
      <div className="w-[34.313rem] flex flex-row items-start justify-start py-[0rem] px-[4.688rem] box-border max-w-full mq750:pl-[2.313rem] mq750:pr-[2.313rem] mq750:box-border">
        <LayoutVerticalThemeGrey bankLogo />
      </div>
      <LayoutHorizontalThemeDefau />
    </div>
  );
};

export default FrameComponent4;
