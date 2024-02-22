import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Header2 from "../components/header2";
import Dashboardframecontainer from "../components/dashboardframecontainer";
import Apple from "../components/apple";

const Accounts: NextPage = () => {
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
      <div className="w-[74.375rem] h-[0.063rem] relative bg-aliceblue-300 hidden max-w-full" />
      <Header2
        loans="Accounts"
        uTCardsPadding="0.625rem 0rem 0rem"
        loansPadding="0.25rem 0rem 0rem"
        maskGroupWidth="20.875rem"
      />
      <div className="w-[0.063rem] h-[66.375rem] relative bg-aliceblue-300 hidden z-[6]" />
      <main className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[2.563rem] box-border relative gap-[0rem_2.438rem] max-w-full shrink-0 mq975:gap-[0rem_2.438rem]">
        <Dashboardframecontainer
          user31="/user-3-11.svg"
          economicInvestment1="/economicinvestment-11.svg"
          creditCard1="/creditcard-1.svg"
          loan1="/loan-1.svg"
          service1="/service-1.svg"
          econometrics1="/econometrics-1.svg"
          settingsSolid1="/settings-solid-1.svg"
          propColor="#1814f3"
          propColor1="#b1b1b1"
          propColor2="#b1b1b1"
          propColor3="#b1b1b1"
          propColor4="#b1b1b1"
          propColor5="#b1b1b1"
          propColor6="#b1b1b1"
          onHome2IconClick={onHome2IconClick}
          onDashboardTextClick={onDashboardTextClick}
          onTransfer1IconClick={onTransfer1IconClick}
          onTransactionsTextClick={onTransactionsTextClick}
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
        <div className="h-[3.75rem] w-[0.375rem] absolute my-0 mx-[!important] top-[8.875rem] left-[0rem] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-blue-200" />
        <section className="flex-1 bg-whitesmoke-100 box-border flex flex-col items-center justify-start pt-[1.875rem] px-[1.875rem] pb-[2.063rem] gap-[1.438rem_0rem] max-w-[calc(100%_-_209px)] z-[1] text-left text-[1rem] text-steelblue font-heading-four-semibold-20p border-[1px] border-solid border-aliceblue-300 mq450:pb-[1.25rem] mq450:box-border mq975:pt-[1.25rem] mq975:pb-[1.313rem] mq975:box-border mq975:max-w-full">
          <div className="w-[74.375rem] h-[57.875rem] relative bg-whitesmoke-100 box-border hidden max-w-full border-[1px] border-solid border-aliceblue-300" />
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[0.563rem] gap-[0rem_1.875rem] mq1000:flex-wrap">
            <div className="flex-1 rounded-6xl bg-white flex flex-row items-center justify-start py-[1.563rem] pr-[2.438rem] pl-[2.25rem] box-border gap-[0.938rem] min-w-[10.313rem] max-w-[15.938rem] z-[2]">
              <div className="h-[7.5rem] w-[15.938rem] relative rounded-6xl bg-white hidden" />
              <img
                className="h-[4.375rem] w-[4.375rem] relative z-[1]"
                loading="eager"
                alt=""
                src="/group-494.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.438rem_0rem]">
                <div className="relative z-[1]">My Balance</div>
                <div className="relative text-[1.563rem] font-semibold text-gray-200 whitespace-nowrap z-[1] mq450:text-[1.25rem]">
                  $12,750
                </div>
              </div>
            </div>
            <div className="flex-[0.9444] rounded-6xl bg-white flex flex-row items-center justify-start py-[1.563rem] pr-[2.75rem] pl-[2.563rem] box-border gap-[0.938rem] min-w-[10.313rem] max-w-[15.938rem] z-[2] mq450:pr-[1.25rem] mq450:box-border mq450:flex-1">
              <div className="h-[7.5rem] w-[15.938rem] relative rounded-6xl bg-white hidden" />
              <img
                className="h-[4.375rem] w-[4.375rem] relative z-[1]"
                loading="eager"
                alt=""
                src="/group-400.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.438rem_0rem]">
                <div className="relative z-[1]">Income</div>
                <div className="relative text-[1.563rem] font-semibold text-gray-200 whitespace-nowrap z-[1] mq450:text-[1.25rem]">
                  $5,600
                </div>
              </div>
            </div>
            <div className="flex-[0.95] rounded-6xl bg-white flex flex-row items-center justify-start py-[1.563rem] pr-[2.688rem] pl-[2.563rem] box-border gap-[0.938rem] min-w-[10.313rem] max-w-[15.938rem] z-[2] mq450:pr-[1.25rem] mq450:box-border mq450:flex-1">
              <div className="h-[7.5rem] w-[15.938rem] relative rounded-6xl bg-white hidden" />
              <img
                className="h-[4.375rem] w-[4.375rem] relative z-[1]"
                alt=""
                src="/group-402.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.438rem_0rem]">
                <div className="relative z-[1]">Expense</div>
                <div className="relative text-[1.563rem] font-semibold text-gray-200 whitespace-nowrap z-[1] mq450:text-[1.25rem]">
                  $3,460
                </div>
              </div>
            </div>
            <div className="flex-[0.9889] rounded-6xl bg-white flex flex-row items-center justify-start py-[1.563rem] pr-[2.375rem] pl-[2.438rem] box-border gap-[0.938rem] min-w-[10.313rem] max-w-[15.938rem] z-[2] mq450:flex-1">
              <div className="h-[7.5rem] w-[15.938rem] relative rounded-6xl bg-white hidden" />
              <img
                className="h-[4.375rem] w-[4.375rem] relative z-[1]"
                loading="eager"
                alt=""
                src="/group-401.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.438rem_0rem]">
                <div className="relative z-[1]">Total Saving</div>
                <div className="relative text-[1.563rem] font-semibold text-gray-200 whitespace-nowrap z-[1] mq450:text-[1.25rem]">
                  $7,920
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[0.563rem] box-border gap-[0rem_1.875rem] max-w-full text-[1.375rem] text-darkslateblue-100 mq1000:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[1.313rem_0rem] min-w-[29.625rem] max-w-full mq725:min-w-full">
              <h3 className="m-0 relative text-inherit font-semibold font-inherit z-[2] mq450:text-[1.125rem]">
                Last Transaction
              </h3>
              <div className="w-[45.625rem] rounded-6xl bg-white overflow-x-auto flex flex-col items-center justify-start py-[1.563rem] pr-[1.75rem] pl-[1.563rem] box-border gap-[0.625rem] max-w-full z-[2] text-[1rem] text-gray-200">
                <div className="w-[45.625rem] h-[14.688rem] relative rounded-6xl bg-white hidden" />
                <div className="w-[42.313rem] flex flex-row items-center justify-start gap-[0rem_2.719rem] text-steelblue">
                  <div className="flex flex-row items-center justify-start gap-[0rem_1.563rem] max-w-full">
                    <img
                      className="h-[3.438rem] w-[3.438rem] relative z-[1]"
                      loading="eager"
                      alt=""
                      src="/group-328.svg"
                    />
                    <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.375rem] pl-[0rem] gap-[0.438rem_0rem] text-gray-200">
                      <div className="relative font-medium z-[1]">
                        Spotify Subscription
                      </div>
                      <div className="relative text-[0.938rem] text-steelblue z-[1]">
                        25 Jan 2021
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0rem] pr-[1.125rem] pl-[0rem]">
                      <div className="relative z-[1]">Shopping</div>
                    </div>
                    <div className="relative z-[1]">1234 ****</div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[1.563rem] pl-[0rem]">
                    <div className="relative z-[1]">Pending</div>
                  </div>
                  <div className="relative font-medium text-indianred text-right z-[1]">
                    -$150
                  </div>
                </div>
                <div className="w-[42.313rem] flex flex-row items-center justify-start gap-[0rem_4.563rem]">
                  <div className="flex flex-row items-center justify-start gap-[0rem_1.563rem]">
                    <img
                      className="h-[3.438rem] w-[3.438rem] relative z-[1]"
                      loading="eager"
                      alt=""
                      src="/group-327.svg"
                    />
                    <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem]">
                      <div className="relative font-medium z-[1]">
                        Mobile Service
                      </div>
                      <div className="relative text-[0.938rem] text-steelblue z-[1]">
                        25 Jan 2021
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-between gap-[1.25rem] max-w-full text-steelblue">
                    <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.813rem] pl-[0rem]">
                      <div className="relative z-[1]">Service</div>
                    </div>
                    <div className="relative z-[1]">1234 ****</div>
                    <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.063rem] pl-[0rem]">
                      <div className="relative z-[1]">Completed</div>
                    </div>
                    <div className="relative font-medium text-indianred text-right z-[1]">
                      -$340
                    </div>
                  </div>
                </div>
                <div className="w-[42.313rem] flex flex-row items-center justify-between gap-[1.25rem]">
                  <div className="flex flex-row items-center justify-start gap-[0rem_1.563rem]">
                    <div className="h-[3.438rem] w-[3.438rem] relative rounded-xl bg-mistyrose z-[1]">
                      <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-mistyrose w-full h-full hidden" />
                      <img
                        className="absolute top-[0.938rem] left-[0.938rem] w-[1.563rem] h-[1.563rem] overflow-hidden z-[1]"
                        loading="eager"
                        alt=""
                        src="/user2-1.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem]">
                      <div className="relative font-medium z-[1]">
                        Emilly Wilson
                      </div>
                      <div className="relative text-[0.938rem] text-steelblue z-[1]">
                        25 Jan 2021
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.125rem] pl-[0rem] box-border gap-[0rem_2.688rem] max-w-full text-steelblue">
                    <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.438rem] pl-[0rem]">
                      <div className="relative z-[1]">Transfer</div>
                    </div>
                    <div className="relative z-[1]">1234 ****</div>
                    <div className="relative z-[1]">Completed</div>
                    <div className="relative font-medium text-aquamarine text-right z-[1]">
                      +$780
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="m-0 relative text-inherit font-semibold font-inherit z-[2] mq450:text-[1.125rem]">{`Debit & Credit Overview`}</h3>
              <div className="self-stretch rounded-6xl bg-white flex flex-col items-center justify-start pt-[1.75rem] px-[1.688rem] pb-[1.688rem] box-border gap-[1.688rem] max-w-full z-[2] text-[1rem] mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border">
                <div className="w-[45.625rem] h-[22.75rem] relative rounded-6xl bg-white hidden max-w-full" />
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.375rem] pl-[0.188rem] box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq975:flex-wrap">
                    <div className="relative inline-block max-w-full z-[1]">
                      <span>$7,560</span>
                      <span className="text-steelblue">{` Debited & `}</span>
                      <span>$5,420</span>
                      <span className="text-steelblue">
                        {" "}
                        Credited in this Week
                      </span>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0rem_1.75rem] text-steelblue">
                      <div className="flex flex-row items-center justify-start gap-[0rem_0.438rem]">
                        <div className="h-[0.938rem] w-[0.938rem] relative rounded-8xs bg-royalblue shadow-[0px_0px_15px_rgba(17,_52,_133,_0.5)_inset] z-[1]" />
                        <div className="relative z-[1]">Debit</div>
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[0rem_0.438rem]">
                        <div className="h-[0.938rem] w-[0.938rem] relative rounded-8xs bg-palevioletred shadow-[0px_0px_15px_rgba(172,_13,_108,_0.5)_inset] z-[1]" />
                        <div className="relative z-[1]">Credit</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-end justify-between py-[0rem] px-[0.188rem] gap-[1.25rem] text-center text-[0.875rem] text-steelblue mq975:flex-wrap">
                  <div className="h-[16.438rem] w-[4.375rem] flex flex-col items-center justify-start gap-[0.75rem_0rem]">
                    <div className="self-stretch flex-1 flex flex-row items-end justify-start gap-[0rem_0.625rem]">
                      <div className="h-[8.438rem] w-[1.875rem] relative rounded-3xs bg-blue-100 z-[1]" />
                      <div className="self-stretch w-[1.875rem] relative rounded-3xs bg-orange z-[1]" />
                    </div>
                    <div className="relative z-[1]">Sat</div>
                  </div>
                  <div className="h-[13.438rem] w-[4.375rem] flex flex-col items-center justify-start gap-[0.75rem_0rem]">
                    <div className="self-stretch flex-1 flex flex-row items-end justify-start gap-[0rem_0.625rem]">
                      <div className="h-[6.625rem] w-[1.875rem] relative rounded-3xs bg-blue-100 z-[1]" />
                      <div className="self-stretch w-[1.875rem] relative rounded-3xs bg-orange z-[1]" />
                    </div>
                    <div className="relative z-[1]">Sun</div>
                  </div>
                  <div className="h-[10.5rem] w-[4.375rem] flex flex-col items-center justify-start gap-[0.75rem_0rem]">
                    <div className="self-stretch flex-1 flex flex-row items-end justify-start gap-[0rem_0.625rem]">
                      <div className="h-[6.375rem] w-[1.875rem] relative rounded-3xs bg-blue-100 z-[1]" />
                      <div className="self-stretch w-[1.875rem] relative rounded-3xs bg-orange z-[1]" />
                    </div>
                    <div className="relative z-[1]">Mon</div>
                  </div>
                  <div className="h-[15.063rem] w-[4.375rem] flex flex-col items-center justify-start gap-[0.75rem_0rem]">
                    <div className="self-stretch flex-1 flex flex-row items-end justify-start gap-[0rem_0.625rem]">
                      <div className="self-stretch w-[1.875rem] relative rounded-3xs bg-blue-100 z-[1]" />
                      <div className="h-[7.688rem] w-[1.875rem] relative rounded-3xs bg-orange z-[1]" />
                    </div>
                    <div className="relative z-[1]">Tue</div>
                  </div>
                  <div className="h-[15.188rem] w-[4.375rem] flex flex-col items-center justify-start gap-[0.75rem_0rem]">
                    <div className="self-stretch flex-1 flex flex-row items-end justify-start gap-[0rem_0.625rem]">
                      <div className="h-[9.375rem] w-[1.875rem] relative rounded-3xs bg-blue-100 z-[1]" />
                      <div className="self-stretch w-[1.875rem] relative rounded-3xs bg-orange z-[1]" />
                    </div>
                    <div className="relative z-[1]">Wed</div>
                  </div>
                  <div className="h-[11.688rem] w-[4.375rem] flex flex-col items-center justify-start gap-[0.75rem_0rem]">
                    <div className="self-stretch flex-1 flex flex-row items-end justify-start gap-[0rem_0.625rem]">
                      <div className="self-stretch w-[1.875rem] relative rounded-3xs bg-blue-100 z-[1]" />
                      <div className="h-[6.563rem] w-[1.875rem] relative rounded-3xs bg-orange z-[1]" />
                    </div>
                    <div className="relative z-[1]">Thu</div>
                  </div>
                  <div className="h-[15.313rem] w-[4.375rem] flex flex-col items-center justify-start gap-[0.75rem_0rem]">
                    <div className="self-stretch flex-1 flex flex-row items-end justify-start gap-[0rem_0.625rem]">
                      <div className="h-[11.188rem] w-[1.875rem] relative rounded-3xs bg-blue-100 z-[1]" />
                      <div className="self-stretch w-[1.875rem] relative rounded-3xs bg-orange z-[1]" />
                    </div>
                    <div className="relative z-[1]">Fri</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[21.875rem] flex flex-col items-start justify-start gap-[1.25rem_0rem] min-w-[21.875rem] max-w-full mq725:min-w-full mq1000:flex-1">
              <div className="self-stretch flex flex-row items-end justify-between gap-[1.25rem] mq450:flex-wrap">
                <h3 className="m-0 relative text-inherit font-semibold font-inherit z-[2] mq450:text-[1.125rem]">
                  My Card
                </h3>
                <div className="relative text-[1.063rem] font-semibold text-primary-2 text-right z-[2]">
                  See All
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border max-w-full text-[0.75rem] text-white font-lato">
                <div className="flex-1 rounded-6xl [background:linear-gradient(107.38deg,_#2d60ff,_#539bff)] flex flex-col items-center justify-start pt-[1.5rem] px-[0rem] pb-[0rem] box-border gap-[2.5rem] max-w-full z-[2] mq450:gap-[2.5rem]">
                  <div className="self-stretch h-[14.688rem] relative rounded-6xl [background:linear-gradient(107.38deg,_#2d60ff,_#539bff)] hidden" />
                  <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.5rem] pl-[1.625rem] shrink-0">
                    <div className="flex-1 flex flex-row items-end justify-between gap-[1.25rem] mq450:flex-wrap">
                      <div className="h-[6.375rem] flex flex-col items-start justify-start gap-[1.813rem_0rem] min-w-[5.625rem] mq450:flex-1">
                        <div className="flex flex-col items-start justify-start">
                          <div className="relative z-[1]">Balance</div>
                          <div className="relative text-[1.25rem] font-semibold whitespace-nowrap z-[1] mq450:text-[1rem]">
                            $5,756
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[0.125rem_0rem] text-gray-1900">
                          <div className="relative z-[1]">CARD HOLDER</div>
                          <div className="relative text-[0.938rem] font-semibold text-white whitespace-nowrap z-[1]">
                            Eddy Cusuma
                          </div>
                        </div>
                      </div>
                      <div className="w-[8.938rem] flex flex-col items-end justify-start gap-[2rem_0rem] min-w-[8.938rem] text-gray-1900 mq450:flex-1">
                        <img
                          className="w-[2.175rem] h-[2.175rem] relative object-cover z-[1]"
                          loading="eager"
                          alt=""
                          src="/chip-card@2x.png"
                        />
                        <div className="self-stretch flex flex-row items-start justify-start">
                          <div className="flex flex-col items-start justify-start gap-[0.125rem_0rem]">
                            <div className="relative z-[1]">VALID THRU</div>
                            <div className="relative text-[0.938rem] font-semibold text-white z-[1]">
                              12/22
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-t-none rounded-b-6xl [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.15),_rgba(255,_255,_255,_0))] flex flex-row items-center justify-between py-[1.25rem] pr-[1.5rem] pl-[1.625rem] box-border gap-[1.25rem] max-w-full shrink-0 whitespace-nowrap z-[1] text-[1.375rem]">
                    <div className="h-[4.375rem] w-[21.875rem] relative rounded-t-none rounded-b-6xl [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.15),_rgba(255,_255,_255,_0))] hidden max-w-full" />
                    <div className="relative font-semibold z-[2]">
                      3778 **** **** 1234
                    </div>
                    <img
                      className="h-[1.875rem] w-[2.75rem] relative z-[2]"
                      alt=""
                      src="/group-17.svg"
                    />
                  </div>
                </div>
              </div>
              <h3 className="m-0 relative text-inherit font-semibold font-inherit z-[2] mq450:text-[1.125rem]">
                Invoices Sent
              </h3>
              <div className="self-stretch rounded-6xl bg-white flex flex-col items-center justify-start pt-[1.875rem] pb-[1.938rem] pr-[1.75rem] pl-[1.563rem] box-border gap-[1.313rem] max-w-full z-[2] text-[1rem] text-darkgray-200 mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border">
                <div className="w-[21.875rem] h-[22.75rem] relative rounded-6xl bg-white hidden max-w-full" />
                <Apple
                  apple21="/apple-2-1.svg"
                  appleStore="Apple Store"
                  hAgo="5h ago"
                  emptyFrame="$450"
                />
                <Apple
                  apple21="/user2-1-1.svg"
                  appleStore="Michael"
                  hAgo="2 days ago"
                  emptyFrame="$160"
                  propBackgroundColor="#fff5d9"
                  propBackgroundColor1="#fff5d9"
                />
                <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem] mq450:flex-wrap">
                  <div className="w-[10.375rem] flex flex-row items-center justify-start gap-[0rem_1.25rem]">
                    <div className="flex flex-col items-start justify-start gap-[1.313rem_0rem]">
                      <div className="rounded-xl bg-lavender-100 flex flex-row items-center justify-center pt-[1.125rem] pb-[1.063rem] pr-[1.063rem] pl-[1.125rem] z-[1]">
                        <div className="h-[3.75rem] w-[3.75rem] relative rounded-xl bg-lavender-100 hidden" />
                        <img
                          className="h-[1.563rem] w-[1.563rem] relative overflow-hidden shrink-0 z-[2]"
                          alt=""
                          src="/playstation-1.svg"
                        />
                      </div>
                      <div className="rounded-xl bg-mistyrose flex flex-row items-center justify-center pt-[1.125rem] pb-[1.063rem] pr-[1.063rem] pl-[1.125rem] z-[1]">
                        <div className="h-[3.75rem] w-[3.75rem] relative rounded-xl bg-mistyrose hidden" />
                        <img
                          className="h-[1.563rem] w-[1.563rem] relative z-[2]"
                          loading="eager"
                          alt=""
                          src="/user2-1.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[2.313rem_0rem]">
                      <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem]">
                        <div className="relative font-medium whitespace-nowrap z-[1]">
                          Playstation
                        </div>
                        <div className="relative text-[0.938rem] text-steelblue z-[1]">
                          5 days ago
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem]">
                        <div className="relative font-medium z-[1]">
                          William
                        </div>
                        <div className="relative text-[0.938rem] text-steelblue z-[1]">
                          10 days ago
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-start py-[1.25rem] px-[0rem] gap-[3.875rem_0rem] text-right text-steelblue">
                    <div className="relative whitespace-nowrap z-[1]">
                      $1085
                    </div>
                    <div className="relative whitespace-nowrap z-[1]">$90</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Accounts;
