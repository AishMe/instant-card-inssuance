import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const Header: NextPage = () => {
  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    router.push("/checkout");
  }, [router]);

  return (
    <header className="self-stretch flex flex-col items-center justify-start pt-[1.25rem] px-[0rem] pb-[0rem] box-border relative gap-[1.25rem] max-w-full text-left text-[1.563rem] text-white font-montserrat">
      <div className="w-[87.563rem] flex flex-row items-center justify-start py-[0rem] px-[1.25rem] box-border gap-[0rem_0.563rem] max-w-full">
        <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.125rem]">
          <img
            className="w-[2.25rem] h-[2.25rem] relative overflow-hidden shrink-0 object-cover z-[1]"
            loading="eager"
            alt=""
            src="/iconfinder-vector-65-09-473792-1@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-row items-center justify-between py-[0rem] pr-[32.125rem] pl-[0rem] box-border gap-[1.25rem] max-w-full mq975:pr-[16.063rem] mq975:box-border mq450:pr-[1.25rem] mq450:box-border">
          <div className="relative font-extrabold z-[1]">UTCards</div>
          <div className="relative text-[1.75rem] font-semibold font-heading-four-semibold-20p z-[1]">
            Cards
          </div>
        </div>
        <div className="flex flex-col items-start justify-start py-[0rem] pr-[1.313rem] pl-[0rem] text-[0.938rem] text-lightsteelblue font-heading-four-semibold-20p">
          <div className="rounded-21xl bg-whitesmoke-100 flex flex-row items-center justify-start py-[0.938rem] pr-[2.688rem] pl-[1.563rem] gap-[0.938rem] whitespace-nowrap z-[1] mq450:pr-[1.25rem] mq450:box-border">
            <div className="h-[3.125rem] w-[15.938rem] relative rounded-21xl bg-whitesmoke-100 hidden" />
            <img
              className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 min-h-[1.25rem] z-[1]"
              alt=""
              src="/magnifyingglass-1.svg"
            />
            <div className="relative z-[1]">Search for something</div>
          </div>
        </div>
        <div className="h-[3.125rem] flex flex-col items-start justify-start py-[0rem] pr-[1.313rem] pl-[0rem] box-border text-center text-[0.5rem] text-label-color-light-primary font-poppins">
          <div
            className="flex-1 flex flex-col items-end justify-start pt-[0.813rem] pb-[1.625rem] pr-[0.688rem] pl-[1.75rem] relative cursor-pointer z-[1]"
            onClick={onGroupContainerClick}
          >
            <div className="w-[3.125rem] h-[3.125rem] absolute my-0 mx-[!important] top-[0rem] right-[0.031rem] bottom-[0rem] left-[-0.031rem]">
              <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-[50%] bg-whitesmoke-100" />
              <img
                className="absolute top-[1.063rem] left-[0.688rem] w-[1.375rem] h-[1.25rem] z-[1]"
                loading="eager"
                alt=""
                src="/vector1.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-center justify-start">
              <div className="w-[0.688rem] h-[0.688rem] relative rounded-[50%] bg-whitesmoke-100 box-border z-[2] border-[0px] border-solid border-label-color-light-primary" />
              <div className="relative font-medium z-[3] mt-[-0.625rem]">2</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start py-[0rem] pr-[1.625rem] pl-[0rem]">
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
      <div className="w-full h-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-2000" />
      <div className="self-stretch h-[0.063rem] relative bg-aliceblue-300" />
    </header>
  );
};

export default Header;
