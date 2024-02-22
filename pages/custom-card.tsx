import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Header from "../components/header";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent2 from "../components/frame-component2";

const CustomCard: NextPage = () => {
  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    router.push("/metal-bronze");
  }, [router]);

  const onGroupContainer1Click = useCallback(() => {
    router.push("/glassmorphism-cards");
  }, [router]);

  const onGroupContainer2Click = useCallback(() => {
    router.push("/gradient-cards");
  }, [router]);

  const onGroupedFramesContainerClick = useCallback(() => {
    router.push("/gradient-cards");
  }, [router]);

  const onGroupedFramesContainer1Click = useCallback(() => {
    router.push("/gradient-cards");
  }, [router]);

  const onGroupedFramesContainer2Click = useCallback(() => {
    router.push("/gradient-cards");
  }, [router]);

  const onGroupedFramesContainer3Click = useCallback(() => {
    router.push("/gradient-cards");
  }, [router]);

  const onGroupContainer3Click = useCallback(() => {
    router.push("/checkout");
  }, [router]);

  return (
    <div className="w-full relative bg-gray-2000 overflow-hidden flex flex-col items-start justify-start gap-[0.063rem_0rem] tracking-[normal]">
      <div className="w-[15.625rem] h-[64rem] relative bg-ghostwhite hidden" />
      <Header />
      <main className="self-stretch bg-gray-600 flex flex-col items-center justify-start pt-[1.563rem] pb-[3.688rem] pr-[11.563rem] pl-[3.5rem] box-border gap-[2.313rem_0rem] max-w-full text-center text-[2rem] text-white font-lekton mq700:pb-[1.563rem] mq700:box-border mq975:gap-[2.313rem_0rem] mq975:pt-[1.25rem] mq975:pb-[2.375rem] mq975:pr-[5.75rem] mq975:pl-[1.75rem] mq975:box-border mq450:pr-[1.25rem] mq450:box-border">
        <div className="w-[90rem] h-[61.313rem] relative bg-gray-600 hidden max-w-full" />
        <section className="self-stretch flex flex-row items-start justify-start gap-[0rem_2rem] max-w-full text-left text-[2rem] text-gray-100 font-jetbrains-mono mq700:gap-[0rem_2rem]">
          <FrameComponent1 />
          <div className="flex-1 flex flex-row items-end justify-start gap-[0rem_2rem] max-w-[calc(100%_-_198px)] mq700:gap-[0rem_2rem] mq975:max-w-full">
            <div className="h-[34.625rem] w-[10.375rem] flex flex-col items-start justify-start gap-[1.563rem_0rem] mq700:hidden">
              <FrameComponent2
                style1="Style 2"
                propHeight="unset"
                propFlex="1"
                propBackground="linear-gradient(180deg, #ba8e6b, #906848)"
                onFrameContainerClick={onGroupContainerClick}
              />
              <div
                className="self-stretch flex flex-col items-start justify-start gap-[0.375rem_0rem] cursor-pointer z-[2]"
                onClick={onGroupContainer1Click}
              >
                <div className="w-[8.813rem] flex flex-row items-start justify-start py-[0rem] px-[0.75rem] box-border">
                  <div className="h-[7.5rem] flex-1 relative">
                    <img
                      className="absolute top-[1.25rem] left-[0rem] w-[6.25rem] h-[6.25rem] z-[1]"
                      loading="eager"
                      alt=""
                      src="/group-912.svg"
                    />
                    <div className="absolute top-[0rem] left-[1.063rem] rounded-181xl [background:linear-gradient(180deg,_rgba(142,_0,_254,_0),_rgba(254,_0,_198,_0.4))] w-[6.25rem] h-[6.25rem]" />
                  </div>
                </div>
                <div className="self-stretch h-[2.625rem] relative tracking-[0.12em] uppercase inline-block mq975:text-[1.625rem] mq450:text-[1.188rem]">
                  Style 2
                </div>
              </div>
              <div
                className="self-stretch flex flex-col items-center justify-start gap-[1.625rem_0rem] cursor-pointer z-[1]"
                onClick={onGroupContainer2Click}
              >
                <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.75rem] pl-[1.25rem]">
                  <div className="h-[6.25rem] w-[6.25rem] relative rounded-181xl [background:linear-gradient(90.49deg,_rgba(21,_230,_243,_0.9),_rgba(21,_243,_43,_0.9))]" />
                </div>
                <div className="self-stretch h-[2.625rem] relative tracking-[0.12em] uppercase inline-block mq975:text-[1.625rem] mq450:text-[1.188rem]">
                  Style 2
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-end justify-start gap-[15.125rem_0rem] max-w-[calc(100%_-_198px)] mq700:max-w-full mq975:gap-[15.125rem_0rem] mq450:gap-[15.125rem_0rem]">
              <div className="w-[21.875rem] h-[0.063rem] relative max-w-full z-[1]" />
              <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                <div className="w-[47.5rem] flex flex-row flex-wrap items-start justify-start gap-[0rem_2rem] max-w-full mq975:gap-[0rem_2rem]">
                  <div
                    className="flex-1 flex flex-col items-center justify-start gap-[1.625rem_0rem] min-w-[7.75rem] max-w-[10.375rem] cursor-pointer z-[1]"
                    onClick={onGroupedFramesContainerClick}
                  >
                    <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.75rem] pl-[1.25rem]">
                      <div className="h-[6.25rem] w-[6.25rem] relative rounded-181xl bg-gradient-style-3" />
                    </div>
                    <div className="self-stretch h-[2.625rem] relative tracking-[0.12em] uppercase inline-block mq975:text-[1.625rem] mq450:text-[1.188rem]">
                      Style 3
                    </div>
                  </div>
                  <div
                    className="flex-1 flex flex-col items-center justify-start gap-[1.625rem_0rem] min-w-[7.75rem] max-w-[10.375rem] cursor-pointer z-[1]"
                    onClick={onGroupedFramesContainer1Click}
                  >
                    <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.75rem] pl-[1.25rem]">
                      <div className="h-[6.25rem] w-[6.25rem] relative rounded-181xl [background:linear-gradient(267.69deg,_rgba(115,_134,_60,_0.75),_rgba(255,_233,_39,_0.61))]" />
                    </div>
                    <div className="self-stretch h-[2.625rem] relative tracking-[0.12em] uppercase inline-block mq975:text-[1.625rem] mq450:text-[1.188rem]">
                      Style 4
                    </div>
                  </div>
                  <div
                    className="flex-1 flex flex-col items-center justify-start gap-[1.625rem_0rem] min-w-[7.75rem] max-w-[10.375rem] cursor-pointer z-[1]"
                    onClick={onGroupedFramesContainer2Click}
                  >
                    <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.75rem] pl-[1.25rem]">
                      <div className="h-[6.25rem] w-[6.25rem] relative rounded-181xl [background:linear-gradient(92.63deg,_rgba(223,_0,_120,_0.9),_rgba(189,_255,_0,_0.9))]" />
                    </div>
                    <div className="self-stretch h-[2.625rem] relative tracking-[0.12em] uppercase inline-block mq975:text-[1.625rem] mq450:text-[1.188rem]">
                      Style 5
                    </div>
                  </div>
                  <div
                    className="flex-1 flex flex-col items-center justify-start gap-[1.625rem_0rem] min-w-[7.75rem] max-w-[10.375rem] cursor-pointer z-[1]"
                    onClick={onGroupedFramesContainer3Click}
                  >
                    <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.75rem] pl-[1.25rem]">
                      <div className="h-[6.25rem] w-[6.25rem] relative rounded-181xl [background:linear-gradient(91.64deg,_rgba(0,_255,_71,_0.9),_rgba(106,_143,_255,_0.9)_53.65%,_rgba(189,_0,_255,_0.9))]" />
                    </div>
                    <div className="self-stretch h-[2.625rem] relative tracking-[0.12em] uppercase inline-block mq975:text-[1.625rem] mq450:text-[1.188rem]">
                      Style 6
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-[34.938rem] flex flex-row items-start justify-end max-w-full">
          <div
            className="w-[26.875rem] rounded-lg bg-blue-100 shadow-[0px_0px_20px_5px_#1a16f3] flex flex-row items-center justify-center pt-[1.813rem] px-[1.813rem] pb-[1.875rem] box-border max-w-full whitespace-nowrap cursor-pointer z-[1]"
            onClick={onGroupContainer3Click}
          >
            <div className="h-[5.688rem] w-[26.844rem] relative rounded-lg bg-blue-100 shadow-[0px_0px_20px_5px_#1a16f3] hidden max-w-full" />
            <b className="relative z-[1]">Move To Cart</b>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CustomCard;
