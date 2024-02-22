import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent7 from "../components/frame-component7";

const SignIn: NextPage = () => {
  const router = useRouter();

  const onLOGINTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onUsernameEmailInputs3Click = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-center justify-start gap-[0rem_17rem] tracking-[normal] text-center text-[1.563rem] text-label-color-light-primary font-montserrat lg:flex-wrap lg:gap-[0rem_17rem] mq450:gap-[0rem_17rem] mq750:gap-[0rem_17rem]">
      <div className="h-[64rem] w-[39.438rem] [background:linear-gradient(164.84deg,_#201658,_rgba(29,_36,_202,_0.74)_49.56%,_rgba(152,_171,_238,_0.4)_89.67%,_rgba(249,_232,_201,_0))] flex flex-row items-start justify-end py-[20.063rem] px-[0rem] box-border min-w-[39.438rem] max-w-full lg:flex-1 mq450:pt-[8.5rem] mq450:pb-[8.5rem] mq450:box-border mq750:min-w-full mq1050:pt-[13.063rem] mq1050:pb-[13.063rem] mq1050:box-border">
        <div className="h-[64rem] w-[39.375rem] relative [background:linear-gradient(164.84deg,_#201658,_rgba(29,_36,_202,_0.74)_49.56%,_rgba(152,_171,_238,_0.4)_89.67%,_rgba(249,_232,_201,_0))] hidden max-w-full" />
        <div className="h-[15.188rem] flex flex-col items-center justify-start py-[0rem] px-[2.313rem] box-border relative gap-[4.813rem_0rem]">
          <img
            className="w-[calc(100%_-_13px)] h-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0.813rem] rounded-31xl max-w-full overflow-hidden max-h-full z-[1]"
            loading="eager"
            alt=""
            src="/rectangle-279.svg"
          />
          <div className="flex flex-row items-start justify-start py-[0rem] pr-[1rem] pl-[0.5rem]">
            <div
              className="relative font-semibold cursor-pointer z-[2] mq450:text-[1.25rem]"
              onClick={onLOGINTextClick}
            >
              LOGIN
            </div>
          </div>
          <b className="relative z-[2] mq450:text-[1.25rem]">SIGN IN</b>
        </div>
      </div>
      <div className="h-[51.5rem] w-[21.875rem] flex flex-col items-start justify-start min-w-[21.875rem] max-w-full text-[1.688rem] font-roboto lg:flex-1 mq450:min-w-full">
        <div className="self-stretch flex flex-col items-center justify-start gap-[2.313rem_0rem] mq450:gap-[2.313rem_0rem]">
          <FrameComponent7 />
          <div className="self-stretch rounded-11xl bg-lavender-200 shadow-[0px_10px_10px_rgba(0,_0,_0,_0.1)] flex flex-col items-center justify-start pt-[1.563rem] px-[1rem] pb-[1.625rem] gap-[1.875rem_0rem] mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border">
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.625rem]">
              <b className="relative tracking-[-0.41px] leading-[1.375rem] mq450:text-[1.375rem] mq450:leading-[1.125rem]">
                Login
              </b>
            </div>
            <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[1.25rem_0rem]">
              <div className="self-stretch rounded-11xl bg-mediumslateblue shadow-[0px_30px_30px_rgba(57,_106,_255,_0.15)] [backdrop-filter:blur(4px)] flex flex-row items-center justify-start pt-[0.625rem] px-[0.625rem] pb-[0.563rem] whitespace-nowrap border-[1px] border-solid border-gray-1000">
                <div className="relative text-[1.063rem] tracking-[-0.41px] leading-[1.375rem] font-medium font-roboto text-gray-900 text-center">
                  User Name
                </div>
              </div>
              <div className="self-stretch rounded-11xl bg-mediumslateblue shadow-[0px_30px_30px_rgba(57,_106,_255,_0.15)] [backdrop-filter:blur(4px)] flex flex-row items-center justify-start pt-[0.625rem] px-[0.625rem] pb-[0.563rem] whitespace-nowrap border-[1px] border-solid border-gray-1000">
                <div className="relative text-[1.063rem] tracking-[-0.41px] leading-[1.375rem] font-medium font-roboto text-gray-900 text-center">
                  Email Address
                </div>
              </div>
              <div className="self-stretch rounded-11xl bg-mediumslateblue shadow-[0px_30px_30px_rgba(57,_106,_255,_0.15)] [backdrop-filter:blur(4px)] flex flex-row items-center justify-start pt-[0.625rem] px-[0.625rem] pb-[0.563rem] border-[1px] border-solid border-gray-1000">
                <div className="relative text-[1.063rem] tracking-[-0.41px] leading-[1.375rem] font-extrabold font-roboto text-gray-900 text-center">
                  ******
                </div>
              </div>
              <div
                className="self-stretch rounded-11xl bg-blue-200 shadow-[0px_11px_49px_rgba(24,_20,_243,_0.63)] [backdrop-filter:blur(4px)] flex flex-row items-center justify-center p-[0.625rem] whitespace-nowrap cursor-pointer border-[1px] border-solid border-gray-1000"
                onClick={onUsernameEmailInputs3Click}
              >
                <div className="relative text-[1.063rem] tracking-[-0.41px] leading-[1.375rem] font-extrabold font-roboto text-white text-center">
                  Create account
                </div>
              </div>
              <div className="self-stretch h-[0.063rem] relative box-border border-t-[1px] border-solid border-blue-300" />
            </form>
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.625rem] text-left text-[0.938rem]">
              <div className="relative tracking-[-0.41px] leading-[1.375rem]">
                <span>Already have an Account?</span>
                <span className="font-black"> Sign In</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
