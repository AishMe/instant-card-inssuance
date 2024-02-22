import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import TypeRuPayIcon from "../components/type-ru-pay-icon";

const BankType: NextPage = () => {
  const router = useRouter();

  const onBankTypeContainerClick = useCallback(() => {
    router.push("/custom-card");
  }, [router]);

  return (
    <div
      className="w-full relative bg-gray-800 overflow-hidden flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[12.5rem] box-border gap-[12.5rem_0rem] tracking-[normal] cursor-pointer mq450:gap-[12.5rem_0rem] mq825:gap-[12.5rem_0rem]"
      onClick={onBankTypeContainerClick}
    >
      <section className="self-stretch bg-gray-600 overflow-hidden flex flex-row items-center justify-start py-[6.938rem] px-[8.875rem] shrink-0 text-left text-[5rem] text-white font-poppins mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq825:pl-[4.438rem] mq825:pr-[4.438rem] mq825:box-border">
        <div className="relative capitalize font-medium mq450:text-[1.5rem] mq825:text-[2.5rem]">{`Bank Type `}</div>
      </section>
      <div className="w-[52rem] rounded-xl box-border overflow-hidden flex flex-row items-start justify-between py-[2.5rem] pr-[5.75rem] pl-[5.25rem] min-h-[9rem] gap-[1.25rem] max-w-full shrink-0 border-[4px] border-dashed border-blueviolet-200 mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq675:flex-wrap mq675:justify-center mq825:pl-[2.625rem] mq825:pr-[2.875rem] mq825:box-border">
        <TypeRuPayIcon
          typeRuPay="/typeamerican-express.svg"
          propHeight="3.5rem"
          propWidth="5rem"
          propAlignSelf="unset"
          propFlex="unset"
          propOverflow="hidden"
          propMaxHeight="unset"
          propMinHeight="unset"
          propPosition="relative"
          propLeft="unset"
          propTop="unset"
          propTransform="unset"
          propMargin="unset"
        />
        <TypeRuPayIcon
          typeRuPay="/typemastercard.svg"
          propHeight="3.5rem"
          propWidth="5rem"
          propAlignSelf="unset"
          propFlex="unset"
          propOverflow="hidden"
          propMaxHeight="unset"
          propMinHeight="unset"
          propPosition="relative"
          propLeft="unset"
          propTop="unset"
          propTransform="unset"
          propMargin="unset"
        />
        <TypeRuPayIcon
          typeRuPay="/bank.svg"
          propHeight="3.5rem"
          propWidth="5rem"
          propAlignSelf="unset"
          propFlex="unset"
          propOverflow="unset"
          propMaxHeight="unset"
          propMinHeight="unset"
          propPosition="relative"
          propLeft="unset"
          propTop="unset"
          propTransform="unset"
          propMargin="unset"
        />
        <div className="h-[3.5rem] w-[5rem] relative flex items-center justify-center">
          <TypeRuPayIcon
            typeRuPay="/typediscover.svg"
            propHeight="100%"
            propWidth="100%"
            propAlignSelf="unset"
            propFlex="unset"
            propOverflow="unset"
            propMaxHeight="unset"
            propMinHeight="unset"
            propPosition="absolute"
            propLeft="0rem"
            propTop="0rem"
            propTransform="scale(1.268)"
            propMargin="unset"
          />
        </div>
        <TypeRuPayIcon typeRuPay="/typerupay.svg" />
      </div>
    </div>
  );
};

export default BankType;
