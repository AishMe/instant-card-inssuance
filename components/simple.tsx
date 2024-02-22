import type { NextPage } from "next";
import CardTypeHorizontalStyleLi1 from "./card-type-horizontal-style-li1";
import CardTypeVerticalStyleDark from "./card-type-vertical-style-dark";
import CardTypeVerticalStyleLigh from "./card-type-vertical-style-ligh";
import CardTypeHorizontalStyleDa from "./card-type-horizontal-style-da";
import CardTypeHorizontalStyleLi from "./card-type-horizontal-style-li";

const Simple: NextPage = () => {
  return (
    <section className="w-[90.25rem] rounded-21xl box-border overflow-hidden flex flex-col items-center justify-start py-[5.5rem] px-[1.25rem] gap-[12.5rem_0rem] max-w-full text-left text-[1.25rem] text-silver font-heading-four-semibold-20p border-[1px] border-dashed border-blueviolet-100 lg:gap-[12.5rem_0rem] lg:pt-[3.563rem] lg:pb-[3.563rem] lg:box-border mq450:gap-[12.5rem_0rem] mq750:gap-[12.5rem_0rem] mq750:pt-[1.5rem] mq750:pb-[1.5rem] mq750:box-border mq1050:pt-[2.313rem] mq1050:pb-[2.313rem] mq1050:box-border">
      <div className="w-[79.25rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full text-gray-500 lg:flex-wrap">
        <CardTypeHorizontalStyleLi1
          vector="/vector-21.svg"
          vector1="/vector-31.svg"
          bank="/bank.svg"
          bankLogo
          propBackgroundColor="#151515"
          propColor="#fff"
          propBackgroundColor1="rgba(255, 255, 255, 0.24)"
          propBorder="2px solid rgba(255, 255, 255, 0.64)"
          propColor1="#c4c4c4"
          propColor2="#fff"
          propBackgroundColor2="#070707"
          propColor3="#c4c4c4"
          propColor4="#fff"
        />
        <CardTypeHorizontalStyleLi1
          vector="/vector-41.svg"
          vector1="/vector-51.svg"
          bank="/bank-1.svg"
          bankLogo
        />
      </div>
      <div className="w-[57.375rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq1050:flex-wrap">
        <CardTypeVerticalStyleDark bankLogo />
        <CardTypeVerticalStyleLigh bankLogo />
      </div>
      <div className="w-[79.25rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full lg:flex-wrap">
        <CardTypeHorizontalStyleDa bankLogo />
        <CardTypeHorizontalStyleLi bankLogo />
      </div>
    </section>
  );
};

export default Simple;
