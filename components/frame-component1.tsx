import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent2 from "./frame-component2";

const FrameComponent1: NextPage = () => {
  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/metal-bronze");
  }, [router]);

  const onFrameContainer2Click = useCallback(() => {
    router.push("/glassmorphism-cards");
  }, [router]);

  const onFrameContainer1Click = useCallback(() => {
    router.push("/gradient-cards");
  }, [router]);

  const onFrameContainer22Click = useCallback(() => {
    router.push("/simple-cards");
  }, [router]);

  return (
    <div className="w-[10.375rem] flex flex-col items-start justify-start gap-[1.563rem_0rem] text-left text-[2rem] text-gray-100 font-jetbrains-mono mq975:hidden">
      <FrameComponent2
        style1="Style 1"
        onFrameContainerClick={onFrameContainerClick}
      />
      <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.375rem] gap-[1.563rem_0rem]">
        <div
          className="self-stretch flex flex-col items-center justify-start gap-[1.625rem_0rem] cursor-pointer z-[1]"
          onClick={onFrameContainer2Click}
        >
          <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.75rem] pl-[1.25rem]">
            <div className="h-[6.25rem] w-[6.25rem] relative rounded-181xl [background:linear-gradient(180deg,_rgba(251,_251,_251,_0.8),_rgba(251,_251,_251,_0))]" />
          </div>
          <div className="self-stretch h-[2.625rem] relative tracking-[0.12em] uppercase inline-block mq975:text-[1.625rem] mq450:text-[1.188rem]">
            Style 1
          </div>
        </div>
        <div
          className="self-stretch flex flex-col items-center justify-start gap-[1.625rem_0rem] cursor-pointer z-[1]"
          onClick={onFrameContainer1Click}
        >
          <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.75rem] pl-[1.25rem]">
            <div className="h-[6.25rem] w-[6.25rem] relative rounded-181xl [background:linear-gradient(92.32deg,_rgba(216,_21,_243,_0.9),_rgba(21,_123,_243,_0.9))]" />
          </div>
          <div className="self-stretch h-[2.625rem] relative tracking-[0.12em] uppercase inline-block mq975:text-[1.625rem] mq450:text-[1.188rem]">
            Style 1
          </div>
        </div>
      </div>
      <div
        className="self-stretch flex flex-col items-center justify-start gap-[1.625rem_0rem] cursor-pointer z-[1]"
        onClick={onFrameContainer22Click}
      >
        <div className="w-[3.75rem] flex flex-row items-start justify-start py-[0rem] pr-[0.563rem] pl-[0rem] box-border">
          <img
            className="h-[6.25rem] flex-1 relative rounded-181xl max-w-full overflow-hidden"
            loading="eager"
            alt=""
            src="/rectangle-1.svg"
          />
        </div>
        <div className="self-stretch h-[2.625rem] relative tracking-[0.12em] uppercase inline-block mq975:text-[1.625rem] mq450:text-[1.188rem]">
          Style 1
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
