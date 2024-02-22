import type { NextPage } from "next";
import Header4 from "../components/header4";
import Dashboardframecontainer from "../components/dashboardframecontainer";
import GroupComponent from "../components/group-component";

const SettingPage1: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[0.063rem_0rem] tracking-[normal]">
      <div className="w-[15.625rem] h-[64rem] relative bg-ghostwhite hidden z-[0]" />
      <div className="w-[21.875rem] h-[0.063rem] relative hidden max-w-full z-[1]" />
      <Header4 />
      <main className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[2.563rem] box-border relative gap-[0rem_2.438rem] max-w-full mq800:gap-[0rem_2.438rem]">
        <Dashboardframecontainer
          user31="/user-3-1.svg"
          economicInvestment1="/economicinvestment-11.svg"
          creditCard1="/creditcard-1.svg"
          loan1="/loan-1.svg"
          service1="/service-1.svg"
          econometrics1="/econometrics-1.svg"
          settingsSolid1="/settings-solid-11.svg"
          propColor="#b1b1b1"
          propColor1="#b1b1b1"
          propColor2="#b1b1b1"
          propColor3="#b1b1b1"
          propColor4="#b1b1b1"
          propColor5="#b1b1b1"
          propColor6="#1814f3"
        />
        <div className="h-[3.75rem] w-[0.375rem] absolute my-0 mx-[!important] bottom-[21.125rem] left-[0rem] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-blue-200" />
        <section className="flex-1 bg-whitesmoke-100 box-border flex flex-row items-start justify-center p-[1.875rem] min-h-[57.688rem] max-w-[calc(100%_-_209px)] border-t-[1px] border-solid border-gainsboro-200 border-r-[350px] border-b-[1px] border-l-[1px] mq800:max-w-full mq675:pt-[1.25rem] mq675:pb-[1.25rem] mq675:box-border">
          <div className="h-[57.688rem] w-[74.375rem] relative bg-whitesmoke-100 box-border hidden max-w-full border-t-[1px] border-solid border-gainsboro-200 border-r-[350px] border-b-[1px] border-l-[1px]" />
          <GroupComponent />
        </section>
      </main>
      <div className="w-[0.063rem] h-full absolute my-0 mx-[!important] top-[0rem] bottom-[0rem] left-[15.563rem] bg-aliceblue-300 z-[3]" />
    </div>
  );
};

export default SettingPage1;
