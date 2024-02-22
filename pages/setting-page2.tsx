import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Header4 from "../components/header4";
import Dashboardframecontainer from "../components/dashboardframecontainer";
import NewPasswordInput from "../components/new-password-input";
import CharleneReed from "../components/charlene-reed";

const SettingPage2: NextPage = () => {
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

  const onEconomicInvestment1IconClick = useCallback(() => {
    router.push("/investments");
  }, [router]);

  const onInvestmentsTextClick = useCallback(() => {
    router.push("/investments");
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

  const onEconometrics1IconClick = useCallback(() => {
    router.push("/my-privileges");
  }, [router]);

  const onMyPrivilegesTextClick = useCallback(() => {
    router.push("/my-privileges");
  }, [router]);

  const onPreferencesTextClick = useCallback(() => {
    router.push("/setting-page1");
  }, [router]);

  const onSecurityTextClick = useCallback(() => {
    router.push("/setting-page");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[0.063rem_0rem] tracking-[normal]">
      <div className="w-[15.625rem] h-[64rem] relative bg-ghostwhite hidden z-[0]" />
      <div className="w-[21.875rem] h-[0.063rem] relative hidden max-w-full z-[1]" />
      <Header4 />
      <main className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[2.563rem] box-border relative gap-[0rem_2.438rem] max-w-full mq825:gap-[0rem_2.438rem]">
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
          onHome2IconClick={onHome2IconClick}
          onDashboardTextClick={onDashboardTextClick}
          onTransfer1IconClick={onTransfer1IconClick}
          onTransactionsTextClick={onTransactionsTextClick}
          onUser31Click={onUser31Click}
          onAccountsTextClick={onAccountsTextClick}
          onEconomicInvestment1IconClick={onEconomicInvestment1IconClick}
          onInvestmentsTextClick={onInvestmentsTextClick}
          onCreditCard1IconClick={onCreditCard1IconClick}
          onCreditCardsTextClick={onCreditCardsTextClick}
          onLoan1IconClick={onLoan1IconClick}
          onLoansTextClick={onLoansTextClick}
          onService1IconClick={onService1IconClick}
          onServicesTextClick={onServicesTextClick}
          onEconometrics1IconClick={onEconometrics1IconClick}
          onMyPrivilegesTextClick={onMyPrivilegesTextClick}
        />
        <div className="h-[3.75rem] w-[0.375rem] absolute my-0 mx-[!important] bottom-[21.125rem] left-[0rem] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-blue-200" />
        <footer className="flex-1 bg-whitesmoke-100 box-border flex flex-row items-start justify-center p-[1.875rem] min-h-[57.688rem] max-w-[calc(100%_-_209px)] text-left text-[1rem] text-steelblue font-heading-four-semibold-20p border-t-[1px] border-solid border-gainsboro-200 border-r-[350px] border-b-[1px] border-l-[1px] mq825:pt-[1.25rem] mq825:pb-[1.25rem] mq825:box-border mq825:max-w-full">
          <div className="h-[57.688rem] w-[74.375rem] relative bg-whitesmoke-100 box-border hidden max-w-full border-t-[1px] border-solid border-gainsboro-200 border-r-[350px] border-b-[1px] border-l-[1px]" />
          <div className="w-[69.375rem] rounded-6xl bg-white flex flex-col items-center justify-start pt-[2.313rem] px-[1.875rem] pb-[1.875rem] box-border relative gap-[3.25rem] max-w-full z-[2] mq825:pt-[1.5rem] mq825:pb-[1.25rem] mq825:box-border mq675:gap-[3.25rem]">
            <div className="w-[69.375rem] h-[44.813rem] relative rounded-6xl bg-white hidden max-w-full z-[0]" />
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.625rem_0rem] max-w-full">
              <div className="w-[26.125rem] flex flex-row items-start justify-start py-[0rem] px-[1rem] box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq675:flex-wrap">
                  <div className="relative font-medium text-blue-200 z-[1]">
                    Edit Profile
                  </div>
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.25rem] pl-[0rem]">
                    <div
                      className="relative font-medium cursor-pointer z-[1]"
                      onClick={onPreferencesTextClick}
                    >
                      Preferences
                    </div>
                  </div>
                  <div
                    className="relative font-medium cursor-pointer z-[1]"
                    onClick={onSecurityTextClick}
                  >
                    Security
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[0.063rem] relative bg-whitesmoke-300 z-[1]" />
            </div>
            <div className="w-[7.125rem] h-[0.188rem] absolute my-0 mx-[!important] top-[4rem] left-[1.875rem] rounded-t-3xs rounded-b-none bg-blue-200 z-[2]" />
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0rem_3.313rem] max-w-full mq675:gap-[0rem_3.313rem]">
              <div className="flex flex-col items-start justify-start pt-[0.188rem] px-[0rem] pb-[0rem]">
                <img
                  className="w-[8.25rem] h-[8.125rem] relative object-cover z-[1]"
                  loading="eager"
                  alt=""
                  src="/group-206@2x.png"
                />
              </div>
              <form className="m-0 flex-1 flex flex-row items-start justify-start gap-[0rem_1.813rem] min-w-[35.125rem] max-w-full mq825:flex-wrap mq825:min-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[1.375rem_0rem] min-w-[17rem] max-w-full">
                  <NewPasswordInput
                    currentPassword="Your Name"
                    prop="Charlene Reed "
                    propPadding="unset"
                    propDisplay="inline-block"
                    propWidth="26.125rem"
                    propDisplay1="inline-block"
                  />
                  <NewPasswordInput
                    currentPassword="Email"
                    prop="charlenereed@gmail.com "
                    propPadding="unset"
                    propDisplay="inline-block"
                    propWidth="26.125rem"
                    propDisplay1="inline-block"
                  />
                  <CharleneReed
                    dateOfBirth="Date of Birth"
                    january1990="25 January 1990"
                  />
                  <NewPasswordInput
                    currentPassword="Permanent Address"
                    prop="San Jose, California, USA"
                    propPadding="unset"
                    propDisplay="inline-block"
                    propWidth="26.125rem"
                    propDisplay1="inline-block"
                  />
                  <NewPasswordInput
                    currentPassword="Postal Code"
                    prop="123456"
                    propPadding="unset"
                    propDisplay="inline-block"
                    propWidth="26.125rem"
                    propDisplay1="inline-block"
                  />
                </div>
                <div className="flex-1 flex flex-col items-end justify-start gap-[1.375rem_0rem] min-w-[17rem] max-w-full">
                  <NewPasswordInput
                    currentPassword="User Name"
                    prop="Charlene Reed "
                    propPadding="unset"
                    propDisplay="inline-block"
                    propWidth="26.125rem"
                    propDisplay1="inline-block"
                  />
                  <NewPasswordInput
                    currentPassword="Password"
                    prop="**********"
                    propPadding="unset"
                    propDisplay="inline-block"
                    propWidth="26.125rem"
                    propDisplay1="inline-block"
                  />
                  <NewPasswordInput
                    currentPassword="Present Address"
                    prop="San Jose, California, USA"
                    propPadding="unset"
                    propDisplay="inline-block"
                    propWidth="26.125rem"
                    propDisplay1="inline-block"
                  />
                  <NewPasswordInput
                    currentPassword="City"
                    prop="San Jose"
                    propPadding="unset"
                    propDisplay="inline-block"
                    propWidth="26.125rem"
                    propDisplay1="inline-block"
                  />
                  <NewPasswordInput
                    currentPassword="Country"
                    prop="USA"
                    propPadding="0rem 0rem 0.5rem"
                    propDisplay="inline-block"
                    propWidth="26.125rem"
                    propDisplay1="inline-block"
                  />
                  <div className="w-[11.875rem] rounded-mini bg-blue-200 flex flex-row items-center justify-center p-[0.875rem] box-border z-[1]">
                    <div className="h-[3.125rem] w-[11.875rem] relative rounded-mini bg-blue-200 hidden" />
                    <div className="relative text-[1.125rem] font-medium font-heading-four-semibold-20p text-white text-center z-[1]">
                      Save
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </footer>
      </main>
      <div className="w-[0.063rem] h-full absolute my-0 mx-[!important] top-[0rem] bottom-[0rem] left-[15.563rem] bg-aliceblue-300 z-[3]" />
    </div>
  );
};

export default SettingPage2;
