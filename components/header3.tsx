import type { NextPage } from "next";

const Header3: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row flex-wrap items-center justify-start pt-[1.25rem] pb-[0rem] pr-[0rem] pl-[2.563rem] box-border gap-[3.25rem] max-w-full shrink-0 text-left text-[1.563rem] text-primary-2 font-montserrat mq750:gap-[3.25rem]">
      <header className="h-[6.25rem] w-[90rem] relative bg-white hidden max-w-full" />
      <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.688rem]">
        <div className="flex flex-row items-end justify-start gap-[0rem_0.563rem]">
          <img
            className="h-[2.25rem] w-[2.25rem] relative overflow-hidden shrink-0 object-cover z-[1]"
            loading="eager"
            alt=""
            src="/iconfinder-vector-65-09-473792-1@2x.png"
          />
          <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.125rem]">
            <h2 className="m-0 relative text-inherit font-extrabold font-inherit z-[1] mq450:text-[1.25rem]">
              UTCards
            </h2>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-start gap-[1.25rem_0rem] min-w-[48.313rem] max-w-full text-[1.75rem] font-heading-four-semibold-20p mq1000:min-w-full">
        <div className="w-[69.375rem] flex flex-row items-center justify-between gap-[1.25rem] max-w-full mq750:flex-wrap">
          <h1 className="m-0 relative text-inherit font-semibold font-inherit z-[1] mq450:text-[1.375rem]">
            Overview
          </h1>
          <div className="flex flex-row items-center justify-start gap-[0rem_1.875rem] max-w-full text-[0.938rem] text-lightsteelblue mq750:flex-wrap">
            <div className="rounded-21xl bg-whitesmoke-100 flex flex-row items-center justify-start py-[0.938rem] pr-[2.688rem] pl-[1.563rem] gap-[0.938rem] whitespace-nowrap z-[1] mq450:pr-[1.25rem] mq450:box-border">
              <div className="h-[3.125rem] w-[15.938rem] relative rounded-21xl bg-whitesmoke-100 hidden" />
              <img
                className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 min-h-[1.25rem] z-[1]"
                alt=""
                src="/magnifyingglass-1.svg"
              />
              <div className="relative z-[1]">Search for something</div>
            </div>
            <img
              className="h-[3.125rem] w-[3.125rem] relative z-[1]"
              loading="eager"
              alt=""
              src="/group-4.svg"
            />
            <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.313rem] pl-[0rem]">
              <img
                className="w-[3.125rem] h-[3.125rem] relative z-[1]"
                loading="eager"
                alt=""
                src="/group-3.svg"
              />
            </div>
            <img
              className="h-[3.75rem] w-[3.75rem] relative object-cover z-[1]"
              loading="eager"
              alt=""
              src="/mask-group@2x.png"
            />
          </div>
        </div>
        <div className="self-stretch h-[0.063rem] relative bg-aliceblue-300" />
      </div>
    </div>
  );
};

export default Header3;
