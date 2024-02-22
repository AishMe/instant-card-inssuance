import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const SignInAppleFrame: NextPage = () => {
  const router = useRouter();

  const onSignInAppleFrameClick = useCallback(() => {
    router.push("/main-dashboard");
  }, [router]);

  return (
    <form
      className="m-0 self-stretch rounded-11xl bg-lavender-200 shadow-[0px_10px_10px_rgba(0,_0,_0,_0.1)] overflow-hidden flex flex-col items-center justify-center py-[1.875rem] px-[1.25rem] gap-[1.25rem_0rem] cursor-pointer mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border"
      onClick={onSignInAppleFrameClick}
    >
      <div className="self-stretch h-[2.563rem] rounded-11xl bg-mediumslateblue shadow-[0px_30px_30px_rgba(57,_106,_255,_0.15)] [backdrop-filter:blur(4px)] box-border flex flex-row items-center justify-start p-[0.625rem] whitespace-nowrap border-[1px] border-solid border-gray-1000">
        <div className="relative text-[1.063rem] tracking-[-0.41px] leading-[1.375rem] font-medium font-roboto text-gray-900 text-center">
          User Name
        </div>
      </div>
      <div className="self-stretch h-[2.563rem] rounded-11xl bg-mediumslateblue shadow-[0px_30px_30px_rgba(57,_106,_255,_0.15)] [backdrop-filter:blur(4px)] box-border flex flex-row items-center justify-start p-[0.625rem] border-[1px] border-solid border-gray-1000">
        <div className="relative text-[1.063rem] tracking-[-0.41px] leading-[1.375rem] font-extrabold font-roboto text-gray-900 text-center">
          ******
        </div>
      </div>
      <div className="w-[13.375rem] rounded-11xl bg-blue-200 shadow-[0px_11px_49px_rgba(24,_20,_243,_0.63)] [backdrop-filter:blur(4px)] box-border flex flex-row items-center justify-center p-[0.625rem] border-[1px] border-solid border-gray-1000">
        <div className="relative text-[1.063rem] tracking-[-0.41px] leading-[1.375rem] font-extrabold font-roboto text-white text-center">
          Login
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-center py-[1.25rem] px-[1.375rem] gap-[0.938rem_0rem]">
        <div className="rounded-81xl [background:linear-gradient(180deg,_rgba(24,_20,_243,_0.1),_rgba(255,_255,_255,_0.1))] shadow-[0px_10px_30px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-center py-[0.875rem] px-[2.438rem] gap-[0rem_0.438rem] whitespace-nowrap border-[1px] border-solid border-blue-200">
          <img
            className="h-[1.063rem] w-[1rem] relative overflow-hidden shrink-0"
            alt=""
            src="/google-1.svg"
          />
          <div className="relative text-[1.063rem] tracking-[-0.41px] leading-[1.375rem] font-medium font-roboto text-label-color-light-primary text-left">
            Continue with Google
          </div>
        </div>
        <div className="w-[16.25rem] rounded-81xl [background:linear-gradient(180deg,_rgba(24,_20,_243,_0.1),_rgba(255,_255,_255,_0.1))] shadow-[0px_10px_30px_rgba(0,_0,_0,_0.25)] box-border overflow-hidden flex flex-row items-center justify-start py-[0.875rem] px-[2.5rem] gap-[0rem_0.625rem] border-[1px] border-solid border-blue-200">
          <div className="relative text-[1.063rem] tracking-[-0.41px] leading-[1.375rem] font-semibold font-default-bold-body text-label-color-light-primary text-left">
            􀣺
          </div>
          <div className="relative text-[1.063rem] tracking-[-0.41px] leading-[1.375rem] font-medium font-roboto text-label-color-light-primary text-left">
            Continue with Apple
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignInAppleFrame;
