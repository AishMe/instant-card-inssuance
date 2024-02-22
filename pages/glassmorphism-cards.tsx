import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Title from "../components/title";
import FrameComponent4 from "../components/frame-component4";
import LayoutHorizontalThemePurpl from "../components/layout-horizontal-theme-purpl";
import LayoutVerticalThemePurple from "../components/layout-vertical-theme-purple";
import LayoutVerticalThemeDefault from "../components/layout-vertical-theme-default";
import CUSTOMIZE1 from "../components/c-u-s-t-o-m-i-z-e1";

const GlassmorphismCards: NextPage = () => {
  const router = useRouter();

  const onGroupContainer1Click = useCallback(() => {
    router.push("/checkout");
  }, [router]);

  const onVectorIconClick = useCallback(() => {
    router.push("/custom-card");
  }, [router]);

  return (
    <div className="w-full relative bg-gray-800 overflow-hidden flex flex-col items-center justify-start pt-[0rem] pb-[5.5rem] pr-[0.063rem] pl-[0rem] box-border gap-[7.75rem_0rem] tracking-[normal] mq750:gap-[7.75rem_0rem] mq1050:gap-[7.75rem_0rem]">
      <Title
        metalBronze="Glassmorphism"
        expiryDateFramePadding="0.688rem 8.875rem 0rem"
        topFrameGap="unset"
        groupDivTextAlign="left"
        onGroupContainer1Click={onGroupContainer1Click}
        onLayoutVerticalMaterialClick={onVectorIconClick}
      />
      <main className="w-[108rem] flex flex-col items-center justify-start py-[0rem] px-[1.25rem] box-border gap-[8.25rem_0rem] max-w-full lg:gap-[8.25rem_0rem] mq450:gap-[8.25rem_0rem] mq750:gap-[8.25rem_0rem]">
        <section className="w-[90.25rem] rounded-21xl box-border overflow-hidden flex flex-row items-start justify-start p-[5.5rem] gap-[0rem_2.813rem] max-w-full border-[1px] border-dashed border-blueviolet-100 lg:flex-wrap lg:py-[3.563rem] lg:px-[2.75rem] lg:box-border mq750:gap-[0rem_2.813rem] mq750:py-[1.5rem] mq750:px-[1.375rem] mq750:box-border mq1050:pt-[2.313rem] mq1050:pb-[2.313rem] mq1050:box-border">
          <FrameComponent4 />
          <div className="w-[35.875rem] flex flex-col items-start justify-start gap-[12.5rem_0rem] min-w-[35.875rem] max-w-full lg:flex-1 mq450:gap-[12.5rem_0rem] mq750:gap-[12.5rem_0rem] mq1050:min-w-full">
            <LayoutHorizontalThemePurpl bankLogo />
            <div className="w-[27.813rem] flex flex-row items-start justify-start py-[0rem] px-[0.375rem] box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[7.5rem_0rem] max-w-full mq450:gap-[7.5rem_0rem]">
                <LayoutVerticalThemePurple bankLogo />
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[2.125rem] box-border max-w-full">
                  <LayoutVerticalThemeDefault bankLogo />
                </div>
              </div>
            </div>
          </div>
        </section>
        <CUSTOMIZE1 />
      </main>
    </div>
  );
};

export default GlassmorphismCards;
