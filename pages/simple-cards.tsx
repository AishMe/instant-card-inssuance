import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Title from "../components/title";
import Simple from "../components/simple";

const SimpleCards: NextPage = () => {
  const router = useRouter();

  const onGroupContainer1Click = useCallback(() => {
    router.push("/checkout");
  }, [router]);

  const onExpirydateframelightmixIconClick = useCallback(() => {
    router.push("/custom-card");
  }, [router]);

  return (
    <div className="w-full relative bg-gray-800 overflow-hidden flex flex-col items-center justify-start pt-[0rem] pb-[7.75rem] pr-[0.063rem] pl-[0rem] box-border gap-[7.75rem_0rem] tracking-[normal] mq750:gap-[7.75rem_0rem] mq1050:gap-[7.75rem_0rem]">
      <Title
        metalBronze="Simple"
        expiryDateFramePadding="0rem 8.875rem"
        topFrameGap="0.688rem 0rem"
        groupDivTextAlign="left"
        onGroupContainer1Click={onGroupContainer1Click}
        onLayoutVerticalMaterialClick={onExpirydateframelightmixIconClick}
      />
      <Simple />
    </div>
  );
};

export default SimpleCards;
