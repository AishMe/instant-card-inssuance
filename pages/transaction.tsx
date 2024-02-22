import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Header1 from "../components/header1";
import ExpenseCategory from "../components/expense-category";
import RectangleShape from "../components/rectangle-shape";

const Transaction: NextPage = () => {
  const router = useRouter();

  const onHome2IconClick = useCallback(() => {
    router.push("/main-dashboard");
  }, [router]);

  const onDashboardTextClick = useCallback(() => {
    router.push("/main-dashboard");
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
      <Header1
        services="Transactions"
        parentOfAllPadding="0rem 0rem 0.625rem"
      />
      <div className="w-[0.063rem] h-[64rem] relative bg-aliceblue-300 hidden" />
      <main className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[2.688rem] box-border relative gap-[0rem_2.438rem] max-w-full mq750:gap-[0rem_2.438rem] mq750:pl-[1.313rem] mq750:box-border">
        <ExpenseCategory
          home2="/home-2.svg"
          transfer1="/transfer-11.svg"
          onHome2IconClick={onHome2IconClick}
          onDashboardTextClick={onDashboardTextClick}
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
          onSettingsSolid1Click={onSettingsSolid1Click}
          onSettingTextClick={onSettingTextClick}
        />
        <div className="h-[3.75rem] w-[0.375rem] absolute my-0 mx-[!important] top-[4.813rem] left-[0rem] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-blue-200" />
        <section className="flex-1 bg-whitesmoke-100 box-border flex flex-col items-center justify-start pt-[1.5rem] px-[1.5rem] pb-[1.688rem] relative gap-[0.625rem_0rem] max-w-[calc(100%_-_207px)] border-[1px] border-solid border-aliceblue-300 mq1050:pt-[1.25rem] mq1050:pb-[1.25rem] mq1050:box-border mq1050:max-w-full">
          <div className="w-[74.375rem] h-[57.688rem] relative bg-whitesmoke-100 box-border hidden max-w-full z-[0] border-[1px] border-solid border-aliceblue-300" />
          <RectangleShape />
          <div className="w-[9.063rem] h-[0.188rem] absolute my-0 mx-[!important] top-[25.063rem] left-[2.5rem] rounded-t-3xs rounded-b-none bg-blue-200 z-[2]" />
          <div className="self-stretch flex flex-col items-start justify-start py-[0rem] px-[0.938rem] box-border gap-[1.563rem_0rem] max-w-full">
            <div className="self-stretch h-[0.063rem] relative bg-whitesmoke-700 z-[1]" />
            <footer className="self-stretch flex flex-col items-end justify-start gap-[1.875rem_0rem] max-w-full text-left text-[1rem] text-gray-200 font-heading-four-semibold-20p">
              <div className="self-stretch rounded-6xl bg-white flex flex-col items-center justify-start pt-[1.375rem] px-[1.375rem] pb-[1.875rem] box-border gap-[0.688rem] max-w-full z-[1] mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border">
                <div className="w-[69.375rem] h-[24.813rem] relative rounded-6xl bg-white hidden max-w-full" />
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.5rem] box-border max-w-full text-steelblue">
                  <div className="w-[63rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq1050:flex-wrap">
                    <div className="relative font-medium z-[1]">
                      Description
                    </div>
                    <div className="w-[29.063rem] flex flex-row items-start justify-start py-[0rem] pr-[1.188rem] pl-[0rem] box-border gap-[0rem_2.625rem] max-w-full mq450:gap-[0rem_2.625rem] mq750:flex-wrap">
                      <div className="relative font-medium z-[1]">
                        Transaction ID
                      </div>
                      <div className="w-[5.125rem] flex flex-col items-start justify-start">
                        <div className="relative font-medium z-[1]">Type</div>
                      </div>
                      <div className="w-[5.688rem] flex flex-col items-start justify-start">
                        <div className="relative font-medium z-[1]">Card</div>
                      </div>
                      <div className="relative font-medium z-[1]">Date</div>
                    </div>
                    <div className="w-[10.375rem] flex flex-row items-start justify-start gap-[0rem_3rem]">
                      <div className="relative font-medium z-[1]">Amount</div>
                      <div className="relative font-medium z-[1]">Receipt</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[0.313rem] flex flex-row items-start justify-start pt-[0rem] px-[0.5rem] pb-[0.25rem] box-border max-w-full">
                  <div className="self-stretch flex-1 relative bg-aliceblue-300 max-w-full z-[1]" />
                </div>
                <div className="self-stretch flex flex-row items-center justify-between pt-[0rem] px-[0.5rem] pb-[0.25rem] box-border gap-[1.25rem] max-w-full lg:flex-wrap">
                  <div className="flex flex-row items-center justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border gap-[0rem_0.875rem] max-w-full mq750:flex-wrap">
                    <img
                      className="h-[1.875rem] w-[1.875rem] relative z-[1]"
                      loading="eager"
                      alt=""
                      src="/group-73.svg"
                    />
                    <div className="flex flex-row items-start justify-start gap-[0rem_1.813rem] mq450:flex-wrap">
                      <div className="relative z-[1]">Spotify Subscription</div>
                      <div className="relative z-[1]">#12548796</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.188rem] pl-[0rem]">
                    <div className="relative z-[1]">Shopping</div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.563rem] pl-[0rem]">
                    <div className="relative z-[1]">1234 ****</div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[1.063rem] pl-[0rem]">
                    <div className="relative z-[1]">28 Jan, 12.30 AM</div>
                  </div>
                  <div className="relative font-medium text-indianred z-[1]">
                    -$2,500
                  </div>
                  <div className="rounded-31xl flex flex-row items-center justify-center pt-[0.563rem] pb-[0.5rem] pr-[0.938rem] pl-[0.813rem] z-[1] text-[0.938rem] text-darkslateblue-200 border-[1px] border-solid border-darkslateblue-200">
                    <div className="relative">Download</div>
                    <div className="h-[2.188rem] w-[6.25rem] relative rounded-31xl box-border hidden border-[1px] border-solid border-darkslateblue-200" />
                  </div>
                </div>
                <div className="self-stretch h-[0.313rem] flex flex-row items-start justify-start pt-[0rem] px-[0.5rem] pb-[0.25rem] box-border max-w-full">
                  <div className="self-stretch flex-1 relative bg-whitesmoke-400 max-w-full z-[1]" />
                </div>
                <div className="self-stretch flex flex-row items-center justify-between pt-[0rem] pb-[0.25rem] pr-[0.563rem] pl-[0.5rem] gap-[1.25rem] mq1050:flex-wrap">
                  <div className="flex flex-row items-center justify-start py-[0rem] pr-[1.25rem] pl-[0rem] gap-[0rem_0.875rem]">
                    <img
                      className="h-[1.875rem] w-[1.875rem] relative z-[1]"
                      alt=""
                      src="/group-73-1.svg"
                    />
                    <div className="relative z-[1]">Freepik Sales</div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.313rem] pl-[0rem]">
                    <div className="relative z-[1]">#12548796</div>
                  </div>
                  <div className="relative z-[1]">Transfer</div>
                  <div className="w-[16.813rem] flex flex-row items-start justify-start py-[0rem] pr-[0.25rem] pl-[0rem] box-border gap-[0rem_3.688rem] mq450:gap-[0rem_3.688rem]">
                    <div className="relative z-[1]">1234 ****</div>
                    <div className="relative z-[1]">25 Jan, 10.40 PM</div>
                  </div>
                  <div className="relative font-medium text-aquamarine z-[1]">
                    +$750
                  </div>
                  <div className="rounded-31xl flex flex-row items-center justify-center pt-[0.563rem] pb-[0.5rem] pr-[0.938rem] pl-[0.813rem] z-[1] text-[0.938rem] text-darkslateblue-200 border-[1px] border-solid border-darkslateblue-200">
                    <div className="relative">Download</div>
                    <div className="h-[2.188rem] w-[6.25rem] relative rounded-31xl box-border hidden border-[1px] border-solid border-darkslateblue-200" />
                  </div>
                </div>
                <div className="self-stretch h-[0.313rem] flex flex-row items-start justify-start pt-[0rem] px-[0.5rem] pb-[0.25rem] box-border max-w-full">
                  <div className="self-stretch flex-1 relative bg-whitesmoke-400 max-w-full z-[1]" />
                </div>
                <div className="self-stretch flex flex-row items-center justify-between pt-[0rem] px-[0.5rem] pb-[0.25rem] gap-[1.25rem] mq1050:flex-wrap">
                  <div className="flex flex-row items-center justify-start py-[0rem] pr-[0.375rem] pl-[0rem] gap-[0rem_0.875rem]">
                    <img
                      className="h-[1.875rem] w-[1.875rem] relative z-[1]"
                      alt=""
                      src="/group-73.svg"
                    />
                    <div className="relative z-[1]">Mobile Service</div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.063rem] pl-[0rem]">
                    <div className="relative z-[1]">#12548796</div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.063rem] pl-[0rem]">
                    <div className="relative z-[1]">Service</div>
                  </div>
                  <div className="w-[16.563rem] flex flex-row items-start justify-start gap-[0rem_3.688rem] mq450:gap-[0rem_3.688rem]">
                    <div className="relative z-[1]">1234 ****</div>
                    <div className="relative z-[1]">20 Jan, 10.40 PM</div>
                  </div>
                  <div className="relative font-medium text-indianred z-[1]">
                    -$150
                  </div>
                  <div className="rounded-31xl flex flex-row items-center justify-center pt-[0.563rem] pb-[0.5rem] pr-[0.938rem] pl-[0.813rem] z-[1] text-[0.938rem] text-blue-200 border-[1px] border-solid border-blue-200">
                    <div className="relative">Download</div>
                    <div className="h-[2.188rem] w-[6.25rem] relative rounded-31xl box-border hidden border-[1px] border-solid border-blue-200" />
                  </div>
                </div>
                <div className="self-stretch h-[0.313rem] flex flex-row items-start justify-start pt-[0rem] px-[0.5rem] pb-[0.25rem] box-border max-w-full">
                  <div className="self-stretch flex-1 relative bg-whitesmoke-400 max-w-full z-[1]" />
                </div>
                <div className="self-stretch flex flex-row items-center justify-start pt-[0rem] px-[0.5rem] pb-[0.25rem] box-border gap-[0rem_4.313rem] max-w-full lg:flex-wrap lg:gap-[0rem_4.313rem] mq750:gap-[0rem_4.313rem]">
                  <div className="flex flex-row items-center justify-start py-[0rem] pr-[4.188rem] pl-[0rem] gap-[0rem_0.688rem]">
                    <img
                      className="h-[1.875rem] w-[1.875rem] relative z-[1]"
                      alt=""
                      src="/group-73.svg"
                    />
                    <div className="relative z-[1]">Wilson</div>
                  </div>
                  <div className="relative z-[1]">#12548796</div>
                  <div className="w-[41.688rem] flex flex-row items-center justify-between py-[0rem] pr-[0.125rem] pl-[0rem] box-border gap-[1.25rem] max-w-full mq750:flex-wrap">
                    <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.313rem] pl-[0rem]">
                      <div className="relative z-[1]">Transfer</div>
                    </div>
                    <div className="relative z-[1]">1234 ****</div>
                    <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.625rem] pl-[0rem]">
                      <div className="relative z-[1]">15 Jan, 03.29 PM</div>
                    </div>
                    <div className="relative font-medium text-indianred z-[1]">
                      -$1050
                    </div>
                    <div className="rounded-31xl flex flex-row items-center justify-center pt-[0.563rem] pb-[0.5rem] pr-[0.938rem] pl-[0.813rem] z-[1] text-[0.938rem] text-darkslateblue-200 border-[1px] border-solid border-darkslateblue-200">
                      <div className="relative">Download</div>
                      <div className="h-[2.188rem] w-[6.25rem] relative rounded-31xl box-border hidden border-[1px] border-solid border-darkslateblue-200" />
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[0.313rem] flex flex-row items-start justify-start pt-[0rem] px-[0.5rem] pb-[0.25rem] box-border max-w-full">
                  <div className="self-stretch flex-1 relative bg-whitesmoke-400 max-w-full z-[1]" />
                </div>
                <div className="self-stretch flex flex-row items-center justify-start py-[0rem] pr-[0.563rem] pl-[0.5rem] box-border gap-[0rem_4.271rem] max-w-full lg:flex-wrap lg:gap-[0rem_4.271rem] mq750:gap-[0rem_4.271rem]">
                  <div className="flex flex-row items-center justify-start py-[0rem] pr-[4.688rem] pl-[0rem] gap-[0rem_0.688rem]">
                    <img
                      className="h-[1.875rem] w-[1.875rem] relative object-contain z-[1]"
                      alt=""
                      src="/group-73-4@2x.png"
                    />
                    <div className="relative z-[1]">Emilly</div>
                  </div>
                  <div className="relative z-[1]">#12548796</div>
                  <div className="w-[24.25rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq750:flex-wrap">
                    <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.188rem] pl-[0rem]">
                      <div className="relative z-[1]">Transfer</div>
                    </div>
                    <div className="relative z-[1]">1234 ****</div>
                    <div className="relative z-[1]">14 Jan, 10.40 PM</div>
                  </div>
                  <div className="w-[13.125rem] flex flex-row items-center justify-between gap-[1.25rem] text-aquamarine">
                    <div className="relative font-medium z-[1]">+$840</div>
                    <div className="rounded-31xl flex flex-row items-center justify-center pt-[0.563rem] pb-[0.5rem] pr-[0.938rem] pl-[0.813rem] z-[1] text-[0.938rem] text-darkslateblue-200 border-[1px] border-solid border-darkslateblue-200">
                      <div className="relative">Download</div>
                      <div className="h-[2.188rem] w-[6.25rem] relative rounded-31xl box-border hidden border-[1px] border-solid border-darkslateblue-200" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[18.625rem] flex flex-row items-start justify-start relative text-[0.938rem] text-blue-200">
                <img
                  className="h-[0.75rem] w-[0.375rem] absolute my-0 mx-[!important] top-[calc(50%_-_7px)] right-[0.063rem] object-contain z-[1]"
                  loading="eager"
                  alt=""
                  src="/vector-2.svg"
                />
                <div className="flex-1 flex flex-row items-start justify-start py-[0rem] pr-[1.063rem] pl-[0rem]">
                  <div className="flex-1 flex flex-row items-center justify-between gap-[1.25rem] mq450:flex-wrap">
                    <div className="flex flex-row items-center justify-start gap-[0rem_0.375rem]">
                      <img
                        className="h-[0.75rem] w-[0.375rem] relative object-contain z-[1]"
                        alt=""
                        src="/vector-2-1.svg"
                      />
                      <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.313rem] pl-[0rem]">
                        <div className="relative font-medium z-[1]">
                          Previous
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.25rem] pl-[0rem] text-white">
                        <div className="rounded-3xs bg-blue-200 flex flex-row items-center justify-center py-[0.688rem] pr-[1.125rem] pl-[0.875rem] z-[1]">
                          <div className="h-[2.5rem] w-[2.5rem] relative rounded-3xs bg-blue-200 hidden" />
                          <div className="relative font-medium z-[2]">1</div>
                        </div>
                      </div>
                      <div className="relative font-medium z-[1]">2</div>
                    </div>
                    <div className="relative font-medium z-[1]">3</div>
                    <div className="relative font-medium z-[1]">4</div>
                    <div className="relative font-medium z-[1]">Next</div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Transaction;
