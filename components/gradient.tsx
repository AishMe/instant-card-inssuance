import type { NextPage } from "next";

export type GradientType = {
  bankLogo?: boolean;
};

const Gradient: NextPage<GradientType> = ({ bankLogo = false }) => {
  return (
    <div className="w-[36.063rem] rounded-13xl bg-gray-500 [backdrop-filter:blur(40px)] overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[2.5rem] pb-[2.125rem] pr-[2.625rem] pl-[2.5rem] box-border relative gap-[2.813rem_0rem] min-w-[36.063rem] max-w-full z-[1] text-left text-[1.25rem] text-silver font-heading-four-semibold-20p mq1050:flex-1 mq1050:min-w-full mq450:pt-[1.625rem] mq450:pb-[1.375rem] mq450:box-border mq750:gap-[2.813rem_0rem] mq750:pr-[1.313rem] mq750:box-border">
      <img
        className="w-[39.3rem] h-[44.969rem] absolute my-0 mx-[!important] top-[-12.187rem] left-[-17.125rem] object-contain"
        alt=""
        src="/vector-11.svg"
      />
      <img
        className="w-full h-full absolute my-0 mx-[!important] top-[0rem] left-[0.063rem] object-cover z-[1]"
        alt=""
        src="/texture@2x.png"
      />
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.063rem] text-[1.5rem] text-white">
        <div className="w-[14.5rem] relative uppercase font-medium inline-block [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] z-[2] mq450:text-[1.188rem]">
          BAHADIR NUROGLU
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.188rem] box-border gap-[0.75rem_0rem] max-w-full">
        <div className="self-stretch flex flex-col items-end justify-start">
          <div className="rounded-lg bg-gray-1800 overflow-hidden flex flex-row items-start justify-start py-[0rem] pr-[0.125rem] pl-[0rem] gap-[0rem_0.75rem] z-[2] border-[2px] border-solid border-gray-1700">
            <img
              className="self-stretch w-[1.375rem] relative max-h-full min-h-[3.125rem]"
              loading="eager"
              alt=""
              src="/vector-21.svg"
            />
            <div className="h-[3.125rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0rem] box-border">
              <img
                className="mt-[-0.125rem] w-[1.813rem] h-[3.219rem] relative"
                loading="eager"
                alt=""
                src="/vector-31.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start mt-[-0.062rem]">
            <div className="relative z-[2] mq450:text-[1rem]">Card Number</div>
          </div>
        </div>
        <div className="relative text-[2rem] font-semibold text-white inline-block [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] max-w-full z-[2] mq1050:text-[1.625rem] mq450:text-[1.188rem]">
          2243 6652 9435 9982
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.063rem]">
        <div className="flex flex-col items-start justify-start gap-[0.5rem_0rem]">
          <div className="relative font-medium z-[2] mq450:text-[1rem]">
            Expirty Date
          </div>
          <div className="w-[3.5rem] relative font-semibold text-white inline-block [text-shadow:0px_0px_8px_rgba(0,_0,_0,_0.16)] z-[2] mq450:text-[1rem]">
            10/25
          </div>
        </div>
      </div>
      {bankLogo && (
        <img
          className="w-[5rem] h-[3.5rem] relative hidden z-[5]"
          alt=""
          src="/bank.svg"
        />
      )}
    </div>
  );
};

export default Gradient;
