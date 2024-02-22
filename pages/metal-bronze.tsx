import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Title from "../components/title";
import ChipFrame from "../components/chip-frame";
import CUSTOMIZE from "../components/c-u-s-t-o-m-i-z-e";

const MetalBronze: NextPage = () => {
  const router = useRouter();

  const onGroupContainer1Click = useCallback(() => {
    router.push("/checkout");
  }, [router]);

  const onLayoutVerticalMaterialClick = useCallback(() => {
    router.push("/custom-card");
  }, [router]);

  return (
    <div className="w-full relative bg-gray-800 overflow-hidden flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[5.875rem] box-border gap-[7.75rem_0rem] tracking-[normal] mq750:gap-[7.75rem_0rem] mq1050:gap-[7.75rem_0rem]">
      <Title
        metalBronze="Metal - Bronze"
        onGroupContainer1Click={onGroupContainer1Click}
        onLayoutVerticalMaterialClick={onLayoutVerticalMaterialClick}
      />
      <main className="w-[111.125rem] flex flex-row items-start justify-start py-[0rem] px-[1.25rem] box-border max-w-full">
        <section className="w-[105.5rem] flex flex-col items-center justify-start gap-[8.25rem_0rem] max-w-full lg:gap-[8.25rem_0rem] mq450:gap-[8.25rem_0rem] mq750:gap-[8.25rem_0rem]">
          <ChipFrame />
          <CUSTOMIZE />
        </section>
      </main>
    </div>
  );
};

export default MetalBronze;
