import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Header2 from "../components/header2";
import Dashboardframecontainer from "../components/dashboardframecontainer";

const Investments: NextPage = () => {
  const router = useRouter();

  const onHome2IconClick = useCallback(() => {
    router.push("/main-dashboard");
  }, [router]);

  const onDashboardTextClick = useCallback(() => {
    router.push("/main-dashboard");
  }, [router]);

  const onTransfer1IconClick = useCallback(() => {
    router.push("/transaction");
  }, [router]);

  const onTransactionsTextClick = useCallback(() => {
    router.push("/transaction");
  }, [router]);

  const onUser31Click = useCallback(() => {
    router.push("/accounts");
  }, [router]);

  const onAccountsTextClick = useCallback(() => {
    router.push("/accounts");
  }, [router]);

  const onCreditCard1IconClick = useCallback(() => {
    router.push("/credit-cards");
  }, [router]);

  const onCreditCardsTextClick = useCallback(() => {
    router.push("/credit-cards");
  }, [router]);

  const onLoan1IconClick = useCallback(() => {
    router.push("/loan");
  }, [router]);

  const onLoansTextClick = useCallback(() => {
    router.push("/loan");
  }, [router]);

  const onService1IconClick = useCallback(() => {
    router.push("/services");
  }, [router]);

  const onServicesTextClick = useCallback(() => {
    router.push("/services");
  }, [router]);

  const onSettingsSolid1Click = useCallback(() => {
    router.push("/setting-page2");
  }, [router]);

  const onSettingTextClick = useCallback(() => {
    router.push("/setting-page2");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[0.063rem_0rem] tracking-[normal]">
      <div className="w-[15.625rem] h-[64rem] relative bg-ghostwhite hidden" />
      <div className="w-[21.875rem] h-[0.063rem] relative hidden max-w-full" />
      <div className="w-[74.375rem] h-[0.063rem] relative bg-aliceblue-300 hidden max-w-full" />
      <Header2
        loans="Investments"
        uTCardsPadding="1.125rem 0rem 0rem"
        loansPadding="0.5rem 0rem 0rem"
        maskGroupWidth="23.188rem"
      />
      <main className="self-stretch h-[57.688rem] flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[2.563rem] box-border relative gap-[0rem_2.438rem] max-w-full mq825:gap-[0rem_2.438rem]">
        <Dashboardframecontainer
          user31="/user-3-1.svg"
          economicInvestment1="/economicinvestment-1.svg"
          creditCard1="/creditcard-1.svg"
          loan1="/loan-1.svg"
          service1="/service-1.svg"
          econometrics1="/econometrics-1.svg"
          settingsSolid1="/settings-solid-1.svg"
          propColor="#b1b1b1"
          propColor1="#1814f3"
          propColor2="#b1b1b1"
          propColor3="#b1b1b1"
          propColor4="#b1b1b1"
          propColor5="#b1b1b1"
          propColor6="#b1b1b1"
          onHome2IconClick={onHome2IconClick}
          onDashboardTextClick={onDashboardTextClick}
          onTransfer1IconClick={onTransfer1IconClick}
          onTransactionsTextClick={onTransactionsTextClick}
          onUser31Click={onUser31Click}
          onAccountsTextClick={onAccountsTextClick}
          onCreditCard1IconClick={onCreditCard1IconClick}
          onCreditCardsTextClick={onCreditCardsTextClick}
          onLoan1IconClick={onLoan1IconClick}
          onLoansTextClick={onLoansTextClick}
          onService1IconClick={onService1IconClick}
          onServicesTextClick={onServicesTextClick}
          onSettingsSolid1Click={onSettingsSolid1Click}
          onSettingTextClick={onSettingTextClick}
        />
        <div className="h-[3.75rem] w-[0.375rem] absolute my-0 mx-[!important] top-[12.813rem] left-[0rem] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-blue-200" />
        <section className="self-stretch flex-1 bg-whitesmoke-100 box-border flex flex-row items-start justify-center py-[3.438rem] px-[0rem] max-w-[calc(100%_-_209px)] z-[1] text-center text-[2.5rem] text-steelblue font-heading-four-semibold-20p border-t-[1px] border-solid border-gainsboro-200 border-r-[350px] border-b-[1px] border-l-[1px] mq825:max-w-full mq675:pt-[2.25rem] mq675:pb-[2.25rem] mq675:box-border">
          <div className="h-[57.688rem] w-[74.375rem] relative bg-whitesmoke-100 box-border hidden max-w-full border-t-[1px] border-solid border-gainsboro-200 border-r-[350px] border-b-[1px] border-l-[1px]" />
          <div className="w-[69.375rem] rounded-6xl bg-white flex flex-row items-center justify-center pt-[15.063rem] px-[15.063rem] pb-[15.125rem] box-border max-w-full z-[2] mq825:pl-[7.5rem] mq825:pr-[7.5rem] mq825:box-border mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq675:pt-[9.813rem] mq675:pb-[9.813rem] mq675:box-border">
            <div className="h-[33.188rem] w-[69.375rem] relative rounded-6xl bg-white hidden max-w-full" />
            <h1 className="m-0 relative text-inherit font-medium font-inherit z-[1] mq825:text-[2rem] mq450:text-[1.5rem]">
              COMMING SOON...!
            </h1>
          </div>
        </section>
        <div className="h-[62.438rem] w-[0.063rem] absolute my-0 mx-[!important] top-[-6.312rem] left-[15.563rem] bg-aliceblue-300 z-[2]" />
      </main>
    </div>
  );
};

export default Investments;
