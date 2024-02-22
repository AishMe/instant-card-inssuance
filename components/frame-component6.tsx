import type { NextPage } from "next";
import CardTypeHorizontalStyleDe1 from "./card-type-horizontal-style-de1";
import CardTypeVerticalStyleDesi1 from "./card-type-vertical-style-desi1";
import CardTypeHorizontalStyleDe2 from "./card-type-horizontal-style-de2";

const FrameComponent6: NextPage = () => {
  return (
    <div className="flex-1 flex flex-col items-end justify-start gap-[12.5rem_0rem] min-w-[23.313rem] max-w-full text-left text-[1.25rem] text-silver font-heading-four-semibold-20p mq450:gap-[12.5rem_0rem] mq900:gap-[12.5rem_0rem] mq900:min-w-full">
      <CardTypeHorizontalStyleDe1
        vector="/vector-22.svg"
        bankLogo
        propPadding="2.75rem 2.438rem 2rem 2.563rem"
        propWidth="28.969rem"
        propHeight="31.781rem"
        propTop="unset"
        propLeft="unset"
        propRight="-5.287rem"
        propBottom="-4.887rem"
        propGap="2.563rem 0rem"
        propPadding1="unset"
      />
      <CardTypeVerticalStyleDesi1 bankLogo />
      <CardTypeHorizontalStyleDe2 bankLogo />
    </div>
  );
};

export default FrameComponent6;
