import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Title from "../components/title";
import FrameComponent6 from "../components/frame-component6";
import FrameComponent5 from "../components/frame-component5";
import CUSTOMIZE2 from "../components/c-u-s-t-o-m-i-z-e2";

const GradientCards: NextPage = () => {
  const router = useRouter();

  const onGroupContainer1Click = useCallback(() => {
    router.push("/checkout");
  }, [router]);

  const onCustomizeFrameIconClick = useCallback(() => {
    router.push("/custom-card");
  }, [router]);

  return (
    <div className="w-full relative bg-gray-800 overflow-hidden flex flex-col items-center justify-start pt-[0rem] pb-[5.5rem] pr-[0.063rem] pl-[0rem] box-border gap-[13.625rem_0rem] tracking-[normal] mq900:gap-[13.625rem_0rem] mq1325:gap-[13.625rem_0rem]">
      <main className="self-stretch flex flex-col items-center justify-start gap-[8rem_0rem] max-w-full mq900:gap-[8rem_0rem] mq1325:gap-[8rem_0rem]">
        <Title
          metalBronze="Gradient"
          expiryDateFramePadding="0rem 8.875rem"
          topFrameGap="0.688rem 0rem"
          groupDivTextAlign="left"
          onGroupContainer1Click={onGroupContainer1Click}
          onLayoutVerticalMaterialClick={onCustomizeFrameIconClick}
        />
        <section className="w-[90.25rem] rounded-21xl box-border overflow-hidden flex flex-row flex-wrap items-start justify-start p-[5.5rem] gap-[0rem_7.5rem] max-w-full border-[1px] border-dashed border-blueviolet-100 mq450:gap-[0rem_7.5rem] mq900:gap-[0rem_7.5rem] mq900:py-[1.5rem] mq900:px-[1.375rem] mq900:box-border mq1325:py-[2.313rem] mq1325:px-[2.75rem] mq1325:box-border">
          <FrameComponent6 />
          <FrameComponent5 />
        </section>
      </main>
      <CUSTOMIZE2 />
    </div>
  );
};

export default GradientCards;
