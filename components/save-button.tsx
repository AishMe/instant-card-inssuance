import type { NextPage } from "next";

export type SaveButtonType = {
  twoFactorAuthentication?: string;
  enableOrDisableTwoFactorA?: string;
};

const SaveButton: NextPage<SaveButtonType> = ({
  twoFactorAuthentication,
  enableOrDisableTwoFactorA,
}) => {
  return (
    <div className="flex flex-col items-start justify-start gap-[1.188rem_0rem] max-w-full text-left text-[1.063rem] text-darkslateblue-100 font-heading-four-semibold-20p">
      <div className="relative font-medium z-[1]">
        {twoFactorAuthentication}
      </div>
      <div className="flex flex-row items-center justify-start gap-[0rem_1.25rem] max-w-full text-[1rem] text-gray-200 mq675:flex-wrap">
        <div className="h-[1.919rem] w-[3.5rem] relative rounded-6xl bg-turquoise z-[1]">
          <div className="absolute top-[0rem] left-[0rem] rounded-6xl bg-turquoise w-full h-full hidden" />
          <div className="absolute top-[0.125rem] left-[1.688rem] rounded-[50%] bg-white shadow-[0px_2px_5px_rgba(0,_0,_0,_0.1)] w-[1.688rem] h-[1.688rem] z-[1]" />
        </div>
        <div className="relative inline-block max-w-full z-[1]">
          {enableOrDisableTwoFactorA}
        </div>
      </div>
    </div>
  );
};

export default SaveButton;
