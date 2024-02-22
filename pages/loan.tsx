import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Header2 from "../components/header2";
import Dashboardframecontainer from "../components/dashboardframecontainer";

const Loan: NextPage = () => {
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
      <div className="w-[15.625rem] h-[64rem] relative bg-ghostwhite hidden z-[0]" />
      <div className="w-[21.875rem] h-[0.063rem] relative hidden max-w-full z-[1]" />
      <div className="w-[74.375rem] h-[0.063rem] relative bg-aliceblue-300 hidden max-w-full z-[2]" />
      <Header2 loans="Loans" />
      <main className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[2.563rem] box-border relative gap-[0rem_2.438rem] max-w-full mq725:gap-[0rem_2.438rem]">
        <Dashboardframecontainer
          user31="/user-3-1.svg"
          economicInvestment1="/economicinvestment-11.svg"
          creditCard1="/creditcard-1.svg"
          loan1="/loan-11.svg"
          service1="/service-1.svg"
          econometrics1="/econometrics-1.svg"
          settingsSolid1="/settings-solid-1.svg"
          propColor="#b1b1b1"
          propColor1="#b1b1b1"
          propColor2="#b1b1b1"
          propColor3="#1814f3"
          propColor4="#b1b1b1"
          propColor5="#b1b1b1"
          propColor6="#b1b1b1"
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
          onService1IconClick={onService1IconClick}
          onServicesTextClick={onServicesTextClick}
          onSettingsSolid1Click={onSettingsSolid1Click}
          onSettingTextClick={onSettingTextClick}
        />
        <div className="h-[3.75rem] w-[0.375rem] absolute my-0 mx-[!important] top-[20.813rem] left-[0rem] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-blue-200" />
        <section className="flex-1 bg-whitesmoke-100 box-border flex flex-col items-center justify-start pt-[1.875rem] px-[1.875rem] pb-[5.125rem] gap-[1.5rem_0rem] max-w-[calc(100%_-_209px)] z-[1] text-left text-[1rem] text-steelblue font-heading-four-semibold-20p border-[1px] border-solid border-aliceblue-300 mq450:pb-[2.125rem] mq450:box-border mq1000:pt-[1.25rem] mq1000:pb-[3.313rem] mq1000:box-border mq1000:max-w-full">
          <div className="w-[74.375rem] h-[57.688rem] relative bg-whitesmoke-100 box-border hidden max-w-full border-[1px] border-solid border-aliceblue-300" />
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[0.563rem] gap-[0rem_1.875rem] mq1050:flex-wrap">
            <div className="flex-[0.9437] rounded-6xl bg-white flex flex-row items-center justify-start py-[1.563rem] px-[1.688rem] box-border gap-[0.938rem] min-w-[12.563rem] max-w-[15.938rem] z-[2] mq450:flex-1">
              <div className="h-[7.5rem] w-[15.938rem] relative rounded-6xl bg-white hidden" />
              <img
                className="h-[4.375rem] w-[4.375rem] relative z-[1]"
                loading="eager"
                alt=""
                src="/group-299.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem_0rem]">
                <div className="relative z-[1]">Personal Loans</div>
                <div className="relative text-[1.25rem] font-semibold text-gray-200 whitespace-nowrap z-[1] mq450:text-[1rem]">
                  $50,000
                </div>
              </div>
            </div>
            <div className="flex-[0.9953] rounded-6xl bg-white flex flex-row items-center justify-start py-[1.563rem] pr-[1.313rem] pl-[1.375rem] box-border gap-[0.938rem] min-w-[12.563rem] max-w-[15.938rem] z-[2] mq450:flex-1">
              <div className="h-[7.5rem] w-[15.938rem] relative rounded-6xl bg-white hidden" />
              <img
                className="h-[4.375rem] w-[4.375rem] relative z-[1]"
                alt=""
                src="/group-290.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem_0rem]">
                <div className="relative z-[1]">Corporate Loans</div>
                <div className="relative text-[1.25rem] font-semibold text-gray-200 whitespace-nowrap z-[1] mq450:text-[1rem]">
                  $100,000
                </div>
              </div>
            </div>
            <div className="flex-[0.9531] rounded-6xl bg-white flex flex-row items-center justify-start py-[1.563rem] px-[1.625rem] box-border gap-[0.938rem] min-w-[12.563rem] max-w-[15.938rem] z-[2] mq450:flex-1">
              <div className="h-[7.5rem] w-[15.938rem] relative rounded-6xl bg-white hidden" />
              <img
                className="h-[4.375rem] w-[4.375rem] relative z-[1]"
                alt=""
                src="/group-293.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem_0rem]">
                <div className="relative z-[1]">Business Loans</div>
                <div className="relative text-[1.25rem] font-semibold text-gray-200 whitespace-nowrap z-[1] mq450:text-[1rem]">
                  $500,000
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-6xl bg-white flex flex-row items-center justify-start py-[1.563rem] px-[1.313rem] box-border gap-[0.75rem] min-w-[12.563rem] max-w-[15.938rem] z-[2]">
              <div className="h-[7.5rem] w-[15.938rem] relative rounded-6xl bg-white hidden" />
              <img
                className="h-[4.375rem] w-[4.375rem] relative z-[1]"
                loading="eager"
                alt=""
                src="/group-296.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[0.5rem_0rem]">
                <div className="relative z-[1]">Custom Loans</div>
                <div className="relative text-[1.125rem] font-semibold text-gray-200 z-[1]">
                  Choose Money
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-[0rem] px-[0.563rem] box-border gap-[0.938rem_0rem] max-w-full text-[1.375rem] text-darkslateblue-100">
            <h3 className="m-0 relative text-inherit font-semibold font-inherit z-[2] mq450:text-[1.125rem]">
              Active Loans Overview
            </h3>
            <footer className="self-stretch rounded-6xl bg-white flex flex-col items-center justify-start pt-[1.375rem] px-[1.313rem] pb-[1.313rem] box-border gap-[0.688rem] max-w-full z-[2] text-left text-[1rem] text-gray-200 font-heading-four-semibold-20p mq725:pt-[1.25rem] mq725:pb-[1.25rem] mq725:box-border">
              <div className="w-[69.375rem] h-[39.063rem] relative rounded-6xl bg-white hidden max-w-full" />
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.563rem] box-border max-w-full text-steelblue">
                <div className="w-[61.063rem] flex flex-row items-start justify-between py-[0rem] pr-[0.063rem] pl-[0rem] box-border gap-[1.25rem] max-w-full mq1000:flex-wrap">
                  <div className="relative font-medium z-[1]">SL No</div>
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[1.313rem] pl-[0rem]">
                    <div className="relative font-medium z-[1]">Loan Money</div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[1.438rem] pl-[0rem]">
                    <div className="relative font-medium z-[1]">
                      Left to repay
                    </div>
                  </div>
                  <div className="w-[7.375rem] flex flex-col items-start justify-start">
                    <div className="relative font-medium z-[1]">Duration</div>
                  </div>
                  <div className="relative font-medium z-[1]">
                    Interest rate
                  </div>
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[2.125rem] pl-[0rem]">
                    <div className="relative font-medium z-[1]">
                      Installment
                    </div>
                  </div>
                  <div className="relative font-medium z-[1]">Repay</div>
                </div>
              </div>
              <div className="self-stretch h-[0.313rem] flex flex-row items-start justify-start pt-[0rem] px-[0.563rem] pb-[0.25rem] box-border max-w-full">
                <div className="self-stretch flex-1 relative bg-aliceblue-300 max-w-full z-[1]" />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[0.188rem] pr-[1.563rem] pl-[0.563rem] box-border max-w-full">
                <div className="flex-1 flex flex-row items-center justify-between gap-[1.25rem] max-w-full mq1050:flex-wrap">
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[1.313rem] pl-[0rem]">
                    <div className="relative z-[1]">01.</div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[2.438rem] pl-[0rem]">
                    <div className="relative whitespace-nowrap z-[1]">
                      $100,000
                    </div>
                  </div>
                  <div className="w-[7.313rem] flex flex-col items-start justify-start">
                    <div className="relative whitespace-nowrap z-[1]">
                      $40,500
                    </div>
                  </div>
                  <div className="w-[7.125rem] flex flex-col items-start justify-start">
                    <div className="relative z-[1]">8 Months</div>
                  </div>
                  <div className="w-[5.625rem] flex flex-col items-start justify-start">
                    <div className="relative z-[1]">12%</div>
                  </div>
                  <div className="relative z-[1]">$2,000 / month</div>
                  <div className="rounded-31xl flex flex-row items-center justify-center pt-[0.5rem] pb-[0.563rem] pr-[1.688rem] pl-[1.75rem] z-[1] text-center text-[0.938rem] text-blue-200 border-[1px] border-solid border-blue-200">
                    <div className="relative font-medium">Repay</div>
                    <div className="h-[2.188rem] w-[6.25rem] relative rounded-31xl box-border hidden border-[1px] border-solid border-blue-200" />
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[0.313rem] flex flex-row items-start justify-start pt-[0rem] px-[0.563rem] pb-[0.25rem] box-border max-w-full">
                <div className="self-stretch flex-1 relative bg-whitesmoke-400 max-w-full z-[1]" />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[0.188rem] pr-[1.563rem] pl-[0.563rem] box-border max-w-full">
                <div className="flex-1 flex flex-row items-center justify-between gap-[1.25rem] max-w-full mq1050:flex-wrap">
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[1.125rem] pl-[0rem]">
                    <div className="relative z-[1]">02.</div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[2.313rem] pl-[0rem]">
                    <div className="relative whitespace-nowrap z-[1]">
                      $500,000
                    </div>
                  </div>
                  <div className="w-[7.313rem] flex flex-col items-start justify-start">
                    <div className="relative whitespace-nowrap z-[1]">
                      $250,000
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[2rem] pl-[0rem]">
                    <div className="relative z-[1]">36 Months</div>
                  </div>
                  <div className="w-[5.625rem] flex flex-col items-start justify-start">
                    <div className="relative z-[1]">10%</div>
                  </div>
                  <div className="relative z-[1]">$8,000 / month</div>
                  <div className="rounded-31xl flex flex-row items-center justify-center pt-[0.5rem] pb-[0.563rem] pr-[1.688rem] pl-[1.75rem] z-[1] text-center text-[0.938rem] border-[1px] border-solid border-gray-200">
                    <div className="relative font-medium">Repay</div>
                    <div className="h-[2.188rem] w-[6.25rem] relative rounded-31xl box-border hidden border-[1px] border-solid border-gray-200" />
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[0.313rem] flex flex-row items-start justify-start pt-[0rem] px-[0.563rem] pb-[0.25rem] box-border max-w-full">
                <div className="self-stretch flex-1 relative bg-whitesmoke-400 max-w-full z-[1]" />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[0.188rem] pr-[1.563rem] pl-[0.563rem] box-border max-w-full">
                <div className="flex-1 flex flex-row items-center justify-between gap-[1.25rem] max-w-full mq1050:flex-wrap">
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[1.125rem] pl-[0rem]">
                    <div className="relative z-[1]">03.</div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[2.313rem] pl-[0rem]">
                    <div className="relative whitespace-nowrap z-[1]">
                      $900,000
                    </div>
                  </div>
                  <div className="w-[7.313rem] flex flex-col items-start justify-start">
                    <div className="relative whitespace-nowrap z-[1]">
                      $40,500
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[2.188rem] pl-[0rem]">
                    <div className="relative z-[1]">12 Months</div>
                  </div>
                  <div className="w-[5.625rem] flex flex-col items-start justify-start">
                    <div className="relative z-[1]">12%</div>
                  </div>
                  <div className="relative z-[1]">$5,000 / month</div>
                  <div className="rounded-31xl flex flex-row items-center justify-center pt-[0.5rem] pb-[0.563rem] pr-[1.688rem] pl-[1.75rem] z-[1] text-center text-[0.938rem] border-[1px] border-solid border-gray-200">
                    <div className="relative font-medium">Repay</div>
                    <div className="h-[2.188rem] w-[6.25rem] relative rounded-31xl box-border hidden border-[1px] border-solid border-gray-200" />
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[0.313rem] flex flex-row items-start justify-start pt-[0rem] px-[0.563rem] pb-[0.25rem] box-border max-w-full">
                <div className="self-stretch flex-1 relative bg-whitesmoke-400 max-w-full z-[1]" />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[0.188rem] pr-[1.563rem] pl-[0.563rem] box-border max-w-full">
                <div className="flex-1 flex flex-row items-center justify-between gap-[1.25rem] max-w-full mq1050:flex-wrap">
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[1.125rem] pl-[0rem]">
                    <div className="relative z-[1]">04.</div>
                  </div>
                  <div className="w-[6.938rem] flex flex-col items-start justify-start">
                    <div className="relative whitespace-nowrap z-[1]">
                      $50,000
                    </div>
                  </div>
                  <div className="w-[7.313rem] flex flex-col items-start justify-start">
                    <div className="relative whitespace-nowrap z-[1]">
                      $40,500
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[2.063rem] pl-[0rem]">
                    <div className="relative z-[1]">25 Months</div>
                  </div>
                  <div className="w-[5.625rem] flex flex-col items-start justify-start">
                    <div className="relative z-[1]">5%</div>
                  </div>
                  <div className="relative z-[1]">$2,000 / month</div>
                  <div className="rounded-31xl flex flex-row items-center justify-center pt-[0.5rem] pb-[0.563rem] pr-[1.688rem] pl-[1.75rem] z-[1] text-center text-[0.938rem] border-[1px] border-solid border-gray-200">
                    <div className="relative font-medium">Repay</div>
                    <div className="h-[2.188rem] w-[6.25rem] relative rounded-31xl box-border hidden border-[1px] border-solid border-gray-200" />
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[0.313rem] flex flex-row items-start justify-start pt-[0rem] px-[0.563rem] pb-[0.25rem] box-border max-w-full">
                <div className="self-stretch flex-1 relative bg-whitesmoke-400 max-w-full z-[1]" />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[0.188rem] pr-[1.563rem] pl-[0.563rem] box-border max-w-full">
                <div className="flex-1 flex flex-row items-center justify-between gap-[1.25rem] max-w-full mq1050:flex-wrap">
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[1.688rem] pl-[0rem]">
                    <div className="relative z-[1]">05.</div>
                  </div>
                  <div className="w-[7.438rem] flex flex-col items-start justify-start">
                    <div className="relative whitespace-nowrap z-[1]">
                      $50,000
                    </div>
                  </div>
                  <div className="w-[7.813rem] flex flex-col items-start justify-start">
                    <div className="relative whitespace-nowrap z-[1]">
                      $40,500
                    </div>
                  </div>
                  <div className="w-[7.625rem] flex flex-col items-start justify-start">
                    <div className="relative z-[1]">5 Months</div>
                  </div>
                  <div className="w-[6.125rem] flex flex-col items-start justify-start">
                    <div className="relative z-[1]">16%</div>
                  </div>
                  <div className="relative z-[1]">$10,000 / month</div>
                  <div className="rounded-31xl flex flex-row items-center justify-center pt-[0.5rem] pb-[0.563rem] pr-[1.688rem] pl-[1.75rem] z-[1] text-center text-[0.938rem] border-[1px] border-solid border-gray-200">
                    <div className="relative font-medium">Repay</div>
                    <div className="h-[2.188rem] w-[6.25rem] relative rounded-31xl box-border hidden border-[1px] border-solid border-gray-200" />
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[0.313rem] flex flex-row items-start justify-start pt-[0rem] px-[0.563rem] pb-[0.25rem] box-border max-w-full">
                <div className="self-stretch flex-1 relative bg-whitesmoke-400 max-w-full z-[1]" />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[0.188rem] pr-[1.563rem] pl-[0.563rem] box-border max-w-full">
                <div className="flex-1 flex flex-row items-center justify-between gap-[1.25rem] max-w-full mq1050:flex-wrap">
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[1.188rem] pl-[0rem]">
                    <div className="relative z-[1]">06.</div>
                  </div>
                  <div className="w-[6.938rem] flex flex-col items-start justify-start">
                    <div className="relative whitespace-nowrap z-[1]">
                      $80,000
                    </div>
                  </div>
                  <div className="w-[7.313rem] flex flex-col items-start justify-start">
                    <div className="relative whitespace-nowrap z-[1]">
                      $25,500
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[2.125rem] pl-[0rem]">
                    <div className="relative z-[1]">14 Months</div>
                  </div>
                  <div className="w-[5.625rem] flex flex-col items-start justify-start">
                    <div className="relative z-[1]">8%</div>
                  </div>
                  <div className="relative z-[1]">$2,000 / month</div>
                  <div className="rounded-31xl flex flex-row items-center justify-center pt-[0.5rem] pb-[0.563rem] pr-[1.688rem] pl-[1.75rem] z-[1] text-center text-[0.938rem] border-[1px] border-solid border-gray-200">
                    <div className="relative font-medium">Repay</div>
                    <div className="h-[2.188rem] w-[6.25rem] relative rounded-31xl box-border hidden border-[1px] border-solid border-gray-200" />
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[0.313rem] flex flex-row items-start justify-start pt-[0rem] px-[0.563rem] pb-[0.25rem] box-border max-w-full">
                <div className="self-stretch flex-1 relative bg-whitesmoke-400 max-w-full z-[1]" />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[0.188rem] pr-[1.563rem] pl-[0.563rem] box-border max-w-full">
                <div className="flex-1 flex flex-row items-center justify-between gap-[1.25rem] max-w-full mq1000:flex-wrap">
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.438rem] pl-[0rem]">
                    <div className="relative z-[1]">07.</div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[2.188rem] pl-[0rem]">
                    <div className="relative whitespace-nowrap z-[1]">
                      $12,000
                    </div>
                  </div>
                  <div className="w-[6.438rem] flex flex-col items-start justify-start">
                    <div className="relative whitespace-nowrap z-[1]">
                      $5,500
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[1.75rem] pl-[0rem]">
                    <div className="relative z-[1]">9 Months</div>
                  </div>
                  <div className="w-[4.75rem] flex flex-col items-start justify-start">
                    <div className="relative z-[1]">13%</div>
                  </div>
                  <div className="relative z-[1]">$500 / month</div>
                  <div className="rounded-31xl flex flex-row items-center justify-center pt-[0.5rem] pb-[0.563rem] pr-[1.688rem] pl-[1.75rem] z-[1] text-center text-[0.938rem] border-[1px] border-solid border-gray-200">
                    <div className="relative font-medium">Repay</div>
                    <div className="h-[2.188rem] w-[6.25rem] relative rounded-31xl box-border hidden border-[1px] border-solid border-gray-200" />
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[0.313rem] flex flex-row items-start justify-start pt-[0rem] px-[0.563rem] pb-[0.25rem] box-border max-w-full">
                <div className="self-stretch flex-1 relative bg-whitesmoke-400 max-w-full z-[1]" />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[0.188rem] pr-[1.563rem] pl-[0.563rem] box-border max-w-full">
                <div className="flex-1 flex flex-row items-center justify-between gap-[1.25rem] max-w-full mq1000:flex-wrap">
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.375rem] pl-[0rem]">
                    <div className="relative z-[1]">08.</div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[1.625rem] pl-[0rem]">
                    <div className="relative whitespace-nowrap z-[1]">
                      $160,000
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[2rem] pl-[0rem]">
                    <div className="relative whitespace-nowrap z-[1]">
                      $100,800
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[1.813rem] pl-[0rem]">
                    <div className="relative z-[1]">3 Months</div>
                  </div>
                  <div className="w-[4.813rem] flex flex-col items-start justify-start">
                    <div className="relative z-[1]">12%</div>
                  </div>
                  <div className="relative z-[1]">$900 / month</div>
                  <div className="rounded-31xl flex flex-row items-center justify-center pt-[0.5rem] pb-[0.563rem] pr-[1.688rem] pl-[1.75rem] z-[1] text-center text-[0.938rem] border-[1px] border-solid border-gray-200">
                    <div className="relative font-medium">Repay</div>
                    <div className="h-[2.188rem] w-[6.25rem] relative rounded-31xl box-border hidden border-[1px] border-solid border-gray-200" />
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[0.063rem] relative bg-aliceblue-300 z-[1]" />
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.563rem] box-border max-w-full text-indianred">
                <div className="w-[55.563rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq725:flex-wrap">
                  <div className="flex flex-row items-start justify-start gap-[0rem_3.844rem] max-w-full mq450:gap-[0rem_3.844rem] mq725:flex-wrap">
                    <div className="relative font-medium z-[1]">Total</div>
                    <div className="flex flex-col items-start justify-start py-[0rem] pr-[1.313rem] pl-[0rem]">
                      <div className="relative font-medium whitespace-nowrap z-[1]">
                        $125,0000
                      </div>
                    </div>
                    <div className="relative font-medium whitespace-nowrap z-[1]">
                      $750,000
                    </div>
                  </div>
                  <div className="relative font-medium z-[1]">
                    $50,000 / month
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </section>
      </main>
      <div className="w-[0.063rem] h-full absolute my-0 mx-[!important] top-[0rem] bottom-[0rem] left-[15.563rem] bg-aliceblue-300 z-[2]" />
    </div>
  );
};

export default Loan;
