import type { NextPage } from "next";

const GroupComponent2: NextPage = () => {
  return (
    <div className="self-stretch rounded-xl bg-white flex flex-row items-center justify-between py-[0.938rem] pr-[1.875rem] pl-[0.938rem] box-border gap-[1.25rem] max-w-full z-[1] text-left text-[1rem] text-gray-200 font-heading-four-semibold-20p mq1050:flex-wrap">
      <div className="h-[5.625rem] w-[69.375rem] relative rounded-xl bg-white hidden max-w-full" />
      <div className="flex flex-row items-center justify-start gap-[0rem_1.25rem] mq450:flex-wrap">
        <img
          className="h-[3.75rem] w-[3.75rem] relative z-[1]"
          loading="eager"
          alt=""
          src="/group-385.svg"
        />
        <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem]">
          <div className="relative font-medium z-[1]">Business loans</div>
          <div className="relative text-[0.938rem] text-steelblue z-[1]">{`It is a long established `}</div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem]">
        <div className="relative font-medium z-[1]">Lorem Ipsum</div>
        <div className="relative text-[0.938rem] text-steelblue z-[1]">
          Many publishing
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem]">
        <div className="relative font-medium z-[1]">Lorem Ipsum</div>
        <div className="relative text-[0.938rem] text-steelblue z-[1]">
          Many publishing
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem]">
        <div className="relative font-medium z-[1]">Lorem Ipsum</div>
        <div className="relative text-[0.938rem] text-steelblue z-[1]">
          Many publishing
        </div>
      </div>
      <div className="rounded-31xl flex flex-row items-center justify-center pt-[0.563rem] pb-[0.5rem] pr-[1.625rem] pl-[1.938rem] z-[1] text-center text-[0.938rem] text-steelblue border-[1px] border-solid border-steelblue">
        <div className="relative font-medium">View Details</div>
        <div className="h-[2.188rem] w-[9.375rem] relative rounded-31xl box-border hidden border-[1px] border-solid border-steelblue" />
      </div>
    </div>
  );
};

export default GroupComponent2;
