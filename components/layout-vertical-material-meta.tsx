import type { NextPage } from "next";
import FrameComponent3 from "./frame-component3";

export type LayoutVerticalMaterialMetaType = {
  bankLogo?: boolean;
};

const LayoutVerticalMaterialMeta: NextPage<LayoutVerticalMaterialMetaType> = ({
  bankLogo = true,
}) => {
  return (
    <div className="w-[24.938rem] flex flex-col items-center justify-start pt-[2.5rem] px-[0rem] pb-[0rem] box-border relative gap-[4rem_0rem] max-w-full text-left text-[1.25rem] text-label-color-light-primary font-heading-four-semibold-20p mq450:gap-[4rem_0rem]">
      <div className="w-full h-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-13xl [background:linear-gradient(rgba(220,_207,_255,_0.2),_rgba(220,_207,_255,_0.2)),_linear-gradient(143.15deg,_rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0)),_linear-gradient(244.71deg,_#576265,_#757a7b_10.42%,_#576265_18.75%,_#576265_45.9%,_#848b8a_52.1%,_#9ea1a1_84.96%,_#576265)]" />
      <FrameComponent3 bank="/bank.svg" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[2rem_0rem] text-[1.5rem] mq450:gap-[2rem_0rem]">
        <div className="flex flex-row items-start justify-start py-[0rem] px-[2rem]">
          <div className="relative uppercase font-medium z-[1] mq450:text-[1.188rem]">
            BAhadır Nuroğlu
          </div>
        </div>
        <div className="self-stretch rounded-t-none rounded-b-13xl bg-gray-300 overflow-hidden flex flex-row items-start justify-start py-[1.75rem] px-[1.875rem] relative z-[1] text-[1.25rem] text-silver">
          <img
            className="h-[13.75rem] w-[40.875rem] absolute my-0 mx-[!important] top-[-3.937rem] right-[-15.937rem] object-cover"
            alt=""
            src="/texture@2x.png"
          />
          <div className="relative font-medium z-[1] mq450:text-[1rem]">
            Expirty Date
          </div>
          <div className="flex flex-col items-start justify-start pt-[2rem] px-[0rem] pb-[0rem] ml-[-3.312rem] text-white">
            <div className="relative font-semibold z-[1] mq450:text-[1rem]">
              10/25
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutVerticalMaterialMeta;
