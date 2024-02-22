import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent7 from "../components/frame-component7";
import SignInAppleFrame from "../components/sign-in-apple-frame";

const Login: NextPage = () => {
  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    router.push("/sign-in");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-center justify-start gap-[0rem_16.625rem] tracking-[normal] text-center text-[1.563rem] text-label-color-light-primary font-montserrat lg:flex-wrap lg:gap-[0rem_16.625rem] mq450:gap-[0rem_16.625rem] mq750:gap-[0rem_16.625rem]">
      <div className="h-[64rem] w-[39.375rem] [background:linear-gradient(164.84deg,_#201658,_rgba(29,_36,_202,_0.74)_49.56%,_rgba(152,_171,_238,_0.4)_89.67%,_rgba(249,_232,_201,_0))] flex flex-row items-start justify-end py-[13.125rem] px-[0rem] box-border min-w-[39.375rem] max-w-full lg:flex-1 mq750:pt-[8.5rem] mq750:pb-[8.5rem] mq750:box-border mq750:min-w-full">
        <div className="h-[64rem] w-[39.375rem] relative [background:linear-gradient(164.84deg,_#201658,_rgba(29,_36,_202,_0.74)_49.56%,_rgba(152,_171,_238,_0.4)_89.67%,_rgba(249,_232,_201,_0))] hidden max-w-full" />
        <div
          className="flex flex-col items-center justify-start pt-[6.938rem] px-[2.375rem] pb-[0rem] relative gap-[4.813rem] cursor-pointer z-[1]"
          onClick={onGroupContainerClick}
        >
          <img
            className="w-[calc(100%_-_12px)] h-[calc(100%_-_5px)] absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0.313rem] left-[0.75rem] rounded-31xl max-w-full overflow-hidden max-h-full"
            loading="eager"
            alt=""
            src="/rectangle-279.svg"
          />
          <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.875rem] pl-[0.438rem]">
            <h3 className="m-0 h-[1.875rem] relative text-inherit font-bold font-inherit flex items-center justify-center z-[1] mq450:text-[1.25rem]">
              LOGIN
            </h3>
          </div>
          <h3 className="m-0 h-[1.875rem] relative text-inherit font-semibold font-inherit text-white flex items-center justify-center z-[1] mq450:text-[1.25rem]">
            SIGN IN
          </h3>
        </div>
      </div>
      <div className="h-[51.25rem] w-[22.75rem] flex flex-col items-start justify-start min-w-[22.75rem] max-w-full lg:flex-1 mq450:min-w-full">
        <div className="self-stretch flex flex-col items-center justify-start gap-[3.25rem_0rem] mq450:gap-[3.25rem_0rem]">
          <FrameComponent7 />
          <SignInAppleFrame />
        </div>
      </div>
    </div>
  );
};

export default Login;
