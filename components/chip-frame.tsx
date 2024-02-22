import type { NextPage } from "next";
import LayoutHorizontalMaterialBr from "./layout-horizontal-material-br";
import LayoutVerticalMaterialMeta from "./layout-vertical-material-meta";
import LayoutHorizontalMaterialDe from "./layout-horizontal-material-de";
import LayoutVerticalMaterialBron from "./layout-vertical-material-bron";
import LayoutVerticalMaterialDefa from "./layout-vertical-material-defa";

const ChipFrame: NextPage = () => {
  return (
    <div className="w-[93.375rem] flex flex-row items-start justify-end max-w-full text-left text-[1.25rem] text-label-color-light-primary font-heading-four-semibold-20p">
      <div className="w-[90.25rem] rounded-21xl box-border overflow-hidden shrink-0 flex flex-row items-start justify-start p-[5.5rem] gap-[0rem_2.813rem] max-w-full border-[1px] border-dashed border-blueviolet-100 lg:flex-wrap lg:py-[3.563rem] lg:px-[2.75rem] lg:box-border mq750:gap-[0rem_2.813rem] mq750:py-[1.5rem] mq750:px-[1.375rem] mq750:box-border mq1050:pt-[2.313rem] mq1050:pb-[2.313rem] mq1050:box-border">
        <div className="flex-1 flex flex-col items-end justify-start gap-[12.5rem_0rem] min-w-[26.375rem] max-w-full mq450:gap-[12.5rem_0rem] mq750:gap-[12.5rem_0rem] mq750:min-w-full">
          <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <LayoutHorizontalMaterialBr
              bankLogo
              propAlignSelf="unset"
              propWidth="35.875rem"
              propBackground="linear-gradient(rgba(220, 207, 255, 0.2), rgba(220, 207, 255, 0.2)), linear-gradient(143.15deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0)), linear-gradient(244.71deg, #576265, #757a7b 10.42%, #576265 18.75%, #576265 45.9%, #848b8a 52.1%, #9ea1a1 84.96%, #576265)"
            />
          </div>
          <div className="w-[29.625rem] flex flex-row items-start justify-start pt-[0rem] pb-[0.813rem] px-[0rem] box-border max-w-full">
            <LayoutVerticalMaterialMeta bankLogo />
          </div>
          <LayoutHorizontalMaterialDe bankLogo />
        </div>
        <div className="w-[35.875rem] flex flex-col items-start justify-start gap-[12.5rem_0rem] min-w-[35.875rem] max-w-full lg:flex-1 mq450:gap-[12.5rem_0rem] mq750:gap-[12.5rem_0rem] mq1050:min-w-full">
          <LayoutHorizontalMaterialBr bankLogo />
          <div className="w-[31.938rem] flex flex-col items-start justify-start gap-[7.188rem_0rem] max-w-full text-[1.5rem] mq450:gap-[7.188rem_0rem] mq750:gap-[7.188rem_0rem]">
            <LayoutVerticalMaterialBron bankLogo />
            <div className="self-stretch flex flex-row items-start justify-end max-w-full text-[1.25rem]">
              <LayoutVerticalMaterialDefa bankLogo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChipFrame;
