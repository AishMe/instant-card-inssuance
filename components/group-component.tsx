import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import NewPasswordInput from "./new-password-input";
import SaveButton from "./save-button";

const GroupComponent: NextPage = () => {
  const router = useRouter();

  const onEditProfileTextClick = useCallback(() => {
    router.push("/setting-page2");
  }, [router]);

  const onSecurityTextClick = useCallback(() => {
    router.push("/setting-page");
  }, [router]);

  return (
    <div className="w-[69.375rem] rounded-6xl bg-white flex flex-col items-center justify-start pt-[2.313rem] px-[1.875rem] pb-[1.875rem] box-border gap-[2.625rem] max-w-full z-[2] text-left text-[1rem] text-steelblue font-heading-four-semibold-20p mq675:gap-[2.625rem] mq675:pt-[1.5rem] mq675:pb-[1.25rem] mq675:box-border">
      <div className="w-[69.375rem] h-[33.188rem] relative rounded-6xl bg-white hidden max-w-full" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem_0rem] max-w-full">
        <div className="w-[26.125rem] flex flex-row items-start justify-start py-[0rem] px-[1rem] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq675:flex-wrap">
            <div
              className="relative font-medium cursor-pointer z-[1]"
              onClick={onEditProfileTextClick}
            >
              Edit Profile
            </div>
            <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.25rem] pl-[0rem] text-blue-200">
              <div className="relative font-medium z-[1]">Preferences</div>
            </div>
            <div
              className="relative font-medium cursor-pointer z-[1]"
              onClick={onSecurityTextClick}
            >
              Security
            </div>
          </div>
        </div>
        <div className="self-stretch h-[0.188rem] relative">
          <div className="absolute top-[0.125rem] left-[0rem] bg-whitesmoke-300 w-[65.625rem] h-[0.063rem] z-[1]" />
          <div className="absolute top-[0rem] left-[10rem] rounded-t-3xs rounded-b-none bg-blue-200 w-[7.125rem] h-[0.188rem] z-[2]" />
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0rem_1.875rem] max-w-full text-gray-200">
        <div className="flex-1 flex flex-col items-start justify-start gap-[1rem_0rem] min-w-[20.688rem] max-w-full">
          <NewPasswordInput
            currentPassword="Currency"
            prop="USD"
            propPadding="0rem 0rem 0.688rem"
            propDisplay="inline-block"
            propWidth="31.875rem"
            propDisplay1="inline-block"
          />
          <SaveButton
            twoFactorAuthentication="Notification"
            enableOrDisableTwoFactorA="I send or receive digita currency"
          />
          <div className="flex flex-row items-center justify-start gap-[0rem_1.313rem] max-w-full mq675:flex-wrap">
            <div className="w-[3.5rem] flex flex-col items-start justify-start gap-[1rem_0rem]">
              <div className="self-stretch h-[1.919rem] relative rounded-6xl bg-aliceblue-500 z-[1]">
                <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-aliceblue-500 w-full h-full hidden" />
                <div className="absolute top-[0.125rem] left-[0.125rem] rounded-[50%] bg-white shadow-[0px_2px_5px_rgba(0,_0,_0,_0.1)] w-[1.688rem] h-[1.688rem] z-[1]" />
              </div>
              <div className="self-stretch h-[1.919rem] relative rounded-6xl bg-turquoise z-[1]">
                <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-turquoise w-full h-full hidden" />
                <div className="absolute top-[0.125rem] left-[1.688rem] rounded-[50%] bg-white shadow-[0px_2px_5px_rgba(0,_0,_0,_0.1)] w-[1.688rem] h-[1.688rem] z-[1]" />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[1.688rem_0rem] max-w-full">
              <div className="relative z-[1]">I receive merchant order</div>
              <div className="relative z-[1]">
                There are recommendation for my account
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-end justify-start gap-[16.375rem_0rem] min-w-[20.688rem] max-w-full text-center text-[1.125rem] text-white mq450:gap-[16.375rem_0rem] mq675:gap-[16.375rem_0rem]">
          <NewPasswordInput
            currentPassword="Time Zone"
            prop="(GMT-12:00) International Date Line"
            propPadding="unset"
            propDisplay="inline-block"
            propWidth="31.875rem"
            propDisplay1="inline-block"
          />
          <div className="w-[11.875rem] rounded-mini bg-blue-200 flex flex-row items-center justify-center p-[0.875rem] box-border z-[1]">
            <div className="h-[3.125rem] w-[11.875rem] relative rounded-mini bg-blue-200 hidden" />
            <div className="relative font-medium z-[1]">Save</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
