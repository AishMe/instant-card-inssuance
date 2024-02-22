import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Header3 from "../components/header3";
import ExpenseCategory from "../components/expense-category";

const MainDashboard: NextPage = () => {
  const router = useRouter();

  const onTransfer1IconClick = useCallback(() => {
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

  const onSettingsSolid1Click = useCallback(() => {
    router.push("/setting-page2");
  }, [router]);

  const onSettingTextClick = useCallback(() => {
    router.push("/setting-page2");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <Header3 />
      <div className="w-[0.063rem] h-full absolute my-0 mx-[!important] top-[0rem] bottom-[0rem] left-[15.563rem] bg-aliceblue-300 z-[2]" />
      <main className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[2.688rem] box-border relative gap-[0rem_2.438rem] max-w-full shrink-0 mq750:gap-[0rem_2.438rem] mq750:pl-[1.313rem] mq750:box-border">
        <ExpenseCategory
          home2="/home-21.svg"
          transfer1="/transfer-1.svg"
          propColor="#2d60ff"
          propMargin="0"
          propColor1="#b1b1b1"
          propMargin1="0"
          propMargin2="0"
          propMargin3="0"
          propMargin4="0"
          propMargin5="0"
          propMargin6="0"
          propMargin7="0"
          propMargin8="0"
          onTransfer1IconClick={onTransfer1IconClick}
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
        <div className="h-[3.75rem] w-[0.375rem] absolute my-0 mx-[!important] top-[0.813rem] left-[0rem] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-primary-3" />
        <section className="flex-1 bg-whitesmoke-100 flex flex-col items-center justify-start pt-[1.5rem] px-[1.5rem] pb-[2.438rem] box-border gap-[1.25rem_0rem] max-w-[calc(100%_-_207px)] text-left text-[1.375rem] text-primary-2 font-heading-four-semibold-20p mq750:pb-[1.25rem] mq750:box-border mq1000:max-w-full mq1050:pt-[1.25rem] mq1050:pb-[1.563rem] mq1050:box-border">
          <div className="w-[74.375rem] h-[67.688rem] relative bg-whitesmoke-100 hidden max-w-full" />
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-[0rem] px-[1rem] box-border gap-[0rem_1.875rem] max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[5.313rem_0rem] min-w-[16.375rem] max-w-full mq450:gap-[5.313rem_0rem]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem_0rem] max-w-full">
                <h2 className="m-0 relative text-inherit font-semibold font-inherit z-[1] mq450:text-[1.125rem]">
                  My Cards
                </h2>
                <div className="self-stretch rounded-6xl [background:linear-gradient(107.38deg,_#4c49ed,_#0a06f4)] flex flex-col items-start justify-start pt-[1.5rem] px-[0rem] pb-[0rem] box-border gap-[2.125rem] max-w-full z-[1] text-[0.75rem] text-white font-lato mq450:gap-[2.125rem]">
                  <div className="self-stretch h-[14.688rem] relative rounded-6xl [background:linear-gradient(107.38deg,_#4c49ed,_#0a06f4)] hidden" />
                  <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.5rem] pl-[1.625rem]">
                    <div className="flex-1 flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative z-[1]">Balance</div>
                        <div className="relative text-[1.25rem] font-semibold whitespace-nowrap z-[1] mq450:text-[1rem]">
                          $5,756
                        </div>
                      </div>
                      <img
                        className="h-[2.175rem] w-[2.175rem] relative object-cover z-[1]"
                        loading="eager"
                        alt=""
                        src="/chip-card@2x.png"
                      />
                    </div>
                  </div>
                  <div className="w-[17.438rem] flex flex-row items-start justify-start py-[0rem] px-[1.625rem] box-border text-gray-1900">
                    <div className="flex-1 flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
                      <div className="h-[2.188rem] flex flex-col items-start justify-start gap-[0.125rem_0rem]">
                        <div className="relative z-[1]">CARD HOLDER</div>
                        <div className="relative text-[0.938rem] font-semibold text-white whitespace-nowrap z-[1]">
                          Eddy Cusuma
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[0.125rem_0rem]">
                        <div className="relative z-[1]">VALID THRU</div>
                        <div className="relative text-[0.938rem] font-semibold text-white z-[1]">
                          12/22
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-t-none rounded-b-6xl [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.15),_rgba(255,_255,_255,_0))] flex flex-row items-center justify-between py-[1.25rem] pr-[1.5rem] pl-[1.625rem] box-border gap-[1.25rem] max-w-full whitespace-nowrap z-[1] text-[1.375rem]">
                    <div className="h-[4.375rem] w-[21.875rem] relative rounded-t-none rounded-b-6xl [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.15),_rgba(255,_255,_255,_0))] hidden max-w-full" />
                    <div className="relative font-semibold z-[1]">
                      3778 **** **** 1234
                    </div>
                    <img
                      className="h-[1.875rem] w-[2.75rem] relative z-[1]"
                      alt=""
                      src="/group-17.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.813rem] box-border gap-[0.5rem_0rem] max-w-full text-[1.125rem]">
                <h3 className="m-0 relative text-inherit font-semibold font-inherit z-[1]">
                  Pay Using UPI
                </h3>
                <div className="self-stretch rounded-6xl bg-white flex flex-row items-center justify-center max-w-full z-[1]">
                  <div className="self-stretch w-[21.875rem] relative rounded-6xl bg-white hidden max-w-full" />
                  <div className="h-[12.625rem] flex-1 rounded-6xl flex flex-row flex-wrap items-center justify-center py-[0.313rem] px-[1.875rem] box-border relative gap-[1.25rem] max-w-full z-[1]">
                    <div className="h-[4.081rem] w-[8.163rem] absolute my-0 mx-[!important] top-[1.606rem] left-[2.15rem] flex items-center justify-center z-[0]">
                      <img
                        className="h-full w-full object-contain absolute left-[0rem] top-[0.313rem] [transform:scale(1.168)]"
                        loading="eager"
                        alt=""
                        src="/group-884.svg"
                      />
                    </div>
                    <div className="my-0 mx-[!important] absolute top-[1.625rem] left-[11.563rem] rounded-3xs bg-whitesmoke-800 shadow-[0px_6px_5px_rgba(0,_0,_0,_0.1)] flex flex-row items-center justify-center pt-[0.875rem] px-[0.563rem] pb-[0.813rem]">
                      <div className="h-[4.081rem] w-[8.163rem] relative rounded-3xs bg-whitesmoke-800 shadow-[0px_6px_5px_rgba(0,_0,_0,_0.1)] hidden" />
                      <img
                        className="h-[2.381rem] w-[7.144rem] relative rounded-3xs object-cover z-[1]"
                        loading="eager"
                        alt=""
                        src="/paytm@2x.png"
                      />
                    </div>
                    <div className="w-[8.188rem] my-0 mx-[!important] absolute top-[6.938rem] left-[2.125rem] rounded-3xs bg-whitesmoke-800 shadow-[0px_6px_5px_rgba(0,_0,_0,_0.1)] flex flex-row items-center justify-center pt-[0.75rem] px-[0.75rem] pb-[0.875rem] box-border">
                      <div className="h-[4.081rem] w-[8.163rem] relative rounded-3xs bg-whitesmoke-800 shadow-[0px_6px_5px_rgba(0,_0,_0,_0.1)] hidden" />
                      <img
                        className="h-[2.494rem] w-[2.494rem] relative z-[1]"
                        alt=""
                        src="/phone-pay.svg"
                      />
                    </div>
                    <div className="w-[8.188rem] my-0 mx-[!important] absolute top-[6.938rem] left-[11.563rem] rounded-3xs bg-whitesmoke-800 shadow-[0px_6px_5px_rgba(0,_0,_0,_0.1)] flex flex-row items-center justify-center pt-[1rem] px-[1rem] pb-[1.063rem] box-border">
                      <div className="h-[4.081rem] w-[8.163rem] relative rounded-3xs bg-whitesmoke-800 shadow-[0px_6px_5px_rgba(0,_0,_0,_0.1)] hidden" />
                      <img
                        className="h-[2.025rem] w-[2.869rem] relative z-[1]"
                        alt=""
                        src="/bhim.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="m-0 relative text-inherit font-semibold font-inherit z-[1] mq450:text-[1.125rem]">
                Quick Transfer
              </h2>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[0.313rem] px-[0rem] pb-[0rem] box-border min-w-[16.375rem] max-w-full">
              <div className="self-stretch flex flex-col items-center justify-start gap-[3.25rem_0rem] max-w-full mq450:gap-[3.25rem_0rem]">
                <div className="self-stretch flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[0.688rem] box-border gap-[1.313rem_0rem] max-w-full text-right text-[1.063rem]">
                  <div className="flex flex-row items-start justify-start py-[0rem] px-[0.438rem]">
                    <div className="relative font-semibold z-[1]">See All</div>
                  </div>
                  <div className="self-stretch rounded-6xl bg-white box-border flex flex-col items-center justify-start pt-[1.5rem] px-[0rem] pb-[0rem] gap-[2.5rem] max-w-full z-[1] text-left text-[0.75rem] text-steelblue font-lato border-[1px] border-solid border-aliceblue-400 mq450:gap-[2.5rem]">
                    <div className="self-stretch h-[14.688rem] relative rounded-6xl bg-white box-border hidden border-[1px] border-solid border-aliceblue-400" />
                    <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.438rem] pl-[1.563rem] shrink-0">
                      <div className="flex-1 flex flex-row items-end justify-between gap-[1.25rem] mq450:flex-wrap">
                        <div className="h-[6.375rem] flex flex-col items-start justify-start gap-[1.813rem_0rem] min-w-[5.625rem] mq450:flex-1">
                          <div className="flex flex-col items-start justify-start">
                            <div className="relative z-[1]">Balance</div>
                            <div className="relative text-[1.25rem] font-semibold text-primary-2 whitespace-nowrap z-[1] mq450:text-[1rem]">
                              $5,756
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-start gap-[0.125rem_0rem]">
                            <div className="relative z-[1]">CARD HOLDER</div>
                            <div className="relative text-[0.938rem] font-semibold text-primary-2 whitespace-nowrap z-[1]">
                              Eddy Cusuma
                            </div>
                          </div>
                        </div>
                        <div className="w-[8.938rem] flex flex-col items-end justify-start gap-[2rem_0rem] min-w-[8.938rem] mq450:flex-1">
                          <img
                            className="w-[2.175rem] h-[2.175rem] relative object-cover z-[1]"
                            loading="eager"
                            alt=""
                            src="/chip-card-1@2x.png"
                          />
                          <div className="self-stretch flex flex-row items-start justify-start">
                            <div className="flex flex-col items-start justify-start gap-[0.125rem_0rem]">
                              <div className="relative z-[1]">VALID THRU</div>
                              <div className="relative text-[0.938rem] font-semibold text-primary-2 z-[1]">
                                12/22
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch rounded-t-none rounded-b-6xl box-border flex flex-row items-center justify-between py-[1.25rem] px-[1.563rem] gap-[1.25rem] max-w-full shrink-0 z-[1] text-[1.375rem] text-primary-2 border-[1px] border-solid border-aliceblue-500 mq450:flex-wrap">
                      <div className="h-[4.375rem] w-[21.875rem] relative rounded-t-none rounded-b-6xl box-border hidden max-w-full border-[1px] border-solid border-aliceblue-500" />
                      <div className="relative font-semibold z-[2] mq450:text-[1.125rem]">
                        3778 **** **** 1234
                      </div>
                      <img
                        className="h-[1.875rem] w-[2.75rem] relative z-[2]"
                        alt=""
                        src="/group-17-2.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.875rem_0rem] max-w-full">
                  <h2 className="m-0 relative text-inherit font-semibold font-inherit z-[1] mq450:text-[1.125rem]">
                    Weekly Activity
                  </h2>
                  <div className="self-stretch rounded-6xl bg-white flex flex-col items-end justify-start pt-[0.688rem] pb-[1.125rem] pr-[1.125rem] pl-[0.625rem] box-border relative gap-[0.375rem_0rem] max-w-full z-[1] text-[0.75rem] text-steelblue">
                    <div className="w-[21.875rem] h-[16.506rem] relative rounded-6xl bg-white hidden max-w-full z-[0]" />
                    <div className="flex flex-row items-start justify-start py-[0rem] px-[0.875rem]">
                      <div className="flex flex-row items-start justify-start gap-[0rem_0.813rem]">
                        <div className="flex flex-row items-center justify-start gap-[0rem_0.125rem]">
                          <div className="h-[0.563rem] w-[0.563rem] relative rounded-[50%] bg-turquoise z-[2]" />
                          <div className="relative z-[2]">Purchase</div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[0rem_0.063rem]">
                          <div className="h-[0.563rem] w-[0.563rem] relative rounded-[50%] bg-blue-200 z-[2]" />
                          <div className="relative z-[2]">Withdraw</div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[18.063rem] h-[0.063rem] absolute my-0 mx-[!important] top-[4.7rem] right-[1.125rem] bg-whitesmoke-500 z-[2]" />
                    <div className="w-[18.063rem] h-[0.063rem] absolute my-0 mx-[!important] top-[7.025rem] right-[1.125rem] bg-whitesmoke-500 z-[2]" />
                    <div className="w-[18.063rem] h-[0.063rem] absolute my-0 mx-[!important] right-[1.125rem] bottom-[7.088rem] bg-whitesmoke-500 z-[2]" />
                    <div className="w-[18.063rem] h-[0.063rem] absolute my-0 mx-[!important] right-[1.125rem] bottom-[4.763rem] bg-whitesmoke-500 z-[2]" />
                    <div className="self-stretch flex flex-col items-start justify-start text-right text-[0.813rem]">
                      <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_0.5rem] mq450:flex-wrap">
                        <div className="relative z-[2]">500</div>
                        <div className="h-[0.063rem] flex-1 relative bg-whitesmoke-500 min-w-[11.75rem] z-[2]" />
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_0.563rem] mq450:flex-wrap">
                        <div className="flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
                          <div className="flex flex-col items-start justify-start gap-[1.313rem_0rem]">
                            <div className="relative whitespace-nowrap z-[2]">
                              400
                            </div>
                            <div className="relative whitespace-nowrap z-[2]">
                              300
                            </div>
                            <div className="relative whitespace-nowrap z-[2]">
                              200
                            </div>
                            <div className="relative z-[2]">100</div>
                            <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.25rem] pl-[0.688rem]">
                              <div className="relative z-[2]">0</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[0.125rem_0rem] min-w-[11.75rem] text-center">
                          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.25rem]">
                            <div className="flex-1 flex flex-row items-end justify-between gap-[1.25rem] mq450:flex-wrap">
                              <div className="h-[11.063rem] flex flex-col items-start justify-start">
                                <div className="w-[0.938rem] h-[2.125rem] relative rounded-11xl bg-turquoise z-[4]" />
                                <div className="w-[0.938rem] flex-1 relative rounded-11xl bg-blue-200 z-[3]" />
                              </div>
                              <div className="h-[10.625rem] flex flex-col items-start justify-start py-[0rem] pr-[2.938rem] pl-[0rem] box-border relative">
                                <div className="w-[0.938rem] flex-1 relative rounded-11xl bg-turquoise z-[4]" />
                                <div className="w-[0.938rem] flex-1 relative rounded-11xl bg-blue-200 z-[3]" />
                                <div className="w-[0.938rem] h-[3.688rem] absolute my-0 mx-[!important] right-[0.125rem] bottom-[-0.062rem]">
                                  <div className="absolute top-[2.644rem] left-[0rem] rounded-11xl bg-blue-200 w-[0.938rem] h-[1.044rem] z-[3]" />
                                  <div className="absolute top-[0rem] left-[0rem] rounded-11xl bg-turquoise w-[0.938rem] h-[2.644rem] z-[4]" />
                                </div>
                              </div>
                              <div className="h-[5.313rem] flex flex-col items-start justify-start py-[0rem] pr-[0.188rem] pl-[0rem] box-border">
                                <div className="w-[0.938rem] flex-1 relative rounded-11xl bg-turquoise z-[3]" />
                                <div className="w-[0.938rem] h-[1.525rem] relative rounded-11xl bg-blue-200 z-[2]" />
                              </div>
                              <div className="h-[5.625rem] flex flex-col items-start justify-start py-[0rem] pr-[2.688rem] pl-[0rem] box-border relative">
                                <div className="w-[0.938rem] flex-1 relative rounded-11xl bg-turquoise z-[4]" />
                                <div className="w-[0.938rem] h-[2rem] relative rounded-11xl bg-blue-200 z-[3]" />
                                <div className="w-[0.938rem] h-[3rem] absolute my-0 mx-[!important] right-[-0.187rem] bottom-[0rem]">
                                  <div className="absolute top-[0.688rem] left-[0rem] rounded-11xl bg-blue-200 w-[0.938rem] h-[2.313rem] z-[3]" />
                                  <div className="absolute top-[0rem] left-[0rem] rounded-11xl bg-turquoise w-[0.938rem] h-[0.688rem] z-[4]" />
                                </div>
                              </div>
                              <div className="h-[10.188rem] flex flex-col items-start justify-start">
                                <div className="w-[0.938rem] h-[1.875rem] relative rounded-11xl bg-turquoise z-[3]" />
                                <div className="w-[0.938rem] flex-1 relative rounded-11xl bg-blue-200 z-[4]" />
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch h-[0.063rem] relative bg-whitesmoke-500 z-[2]" />
                          <div className="flex flex-row items-start justify-start gap-[0rem_1.25rem] mq450:flex-wrap">
                            <div className="relative z-[2]">Sat</div>
                            <div className="relative z-[2]">Sun</div>
                            <div className="relative z-[2]">Mon</div>
                            <div className="relative z-[2]">Tue</div>
                            <div className="relative z-[2]">Wed</div>
                            <div className="relative z-[2]">Thu</div>
                            <div className="relative z-[2] mq450:w-full">
                              Fri
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.5rem]">
                  <h2 className="m-0 relative text-inherit font-semibold font-inherit z-[1] mq450:text-[1.125rem]">
                    Balance History
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem_0rem] min-w-[16.375rem] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem_0rem] max-w-full">
                <h2 className="m-0 relative text-inherit font-semibold font-inherit z-[1] mq450:text-[1.125rem]">
                  Recent Transaction
                </h2>
                <div className="self-stretch rounded-6xl bg-white flex flex-col items-center justify-start py-[1.563rem] pr-[1.688rem] pl-[1.563rem] box-border gap-[0.625rem] max-w-full z-[1] text-[1rem] text-gray-200">
                  <div className="w-[21.875rem] h-[14.688rem] relative rounded-6xl bg-white hidden max-w-full" />
                  <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_1.063rem] mq450:flex-wrap">
                    <img
                      className="h-[3.438rem] w-[3.438rem] relative z-[1]"
                      loading="eager"
                      alt=""
                      src="/group-313.svg"
                    />
                    <div className="flex-1 flex flex-row items-center justify-start gap-[0rem_0.625rem] min-w-[9.188rem] mq450:flex-wrap">
                      <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem]">
                        <div className="relative font-medium z-[1]">
                          Deposit from my Card
                        </div>
                        <div className="relative text-[0.938rem] text-steelblue z-[1]">
                          28 January 2021
                        </div>
                      </div>
                      <div className="relative font-medium text-tomato text-right z-[1]">
                        -$850
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_2.625rem] mq450:flex-wrap mq450:gap-[0rem_2.625rem]">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[0rem_1.063rem] min-w-[7.688rem]">
                      <img
                        className="h-[3.438rem] w-[3.438rem] relative z-[1]"
                        loading="eager"
                        alt=""
                        src="/group-314.svg"
                      />
                      <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem]">
                        <div className="relative font-medium z-[1]">
                          Deposit Paypal
                        </div>
                        <div className="relative text-[0.938rem] text-steelblue z-[1]">
                          25 January 2021
                        </div>
                      </div>
                    </div>
                    <div className="relative font-medium text-mediumaquamarine text-right z-[1]">
                      +$2,500
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start py-[0rem] pr-[0.063rem] pl-[0rem] gap-[0rem_2.625rem] mq450:flex-wrap mq450:gap-[0rem_2.625rem]">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[0rem_1.063rem] min-w-[7.625rem]">
                      <img
                        className="h-[3.438rem] w-[3.438rem] relative z-[1]"
                        loading="eager"
                        alt=""
                        src="/group-315.svg"
                      />
                      <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem]">
                        <div className="relative font-medium z-[1]">
                          Jemi Wilson
                        </div>
                        <div className="relative text-[0.938rem] text-steelblue z-[1]">
                          21 January 2021
                        </div>
                      </div>
                    </div>
                    <div className="relative font-medium text-mediumaquamarine text-right z-[1]">
                      +$5,400
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.125rem_0rem] max-w-full">
                <h2 className="m-0 relative text-inherit font-semibold font-inherit z-[1] mq450:text-[1.125rem]">
                  Expense Statistics
                </h2>
                <div className="self-stretch rounded-6xl bg-white flex flex-row items-end justify-center pt-[2.125rem] pb-[1.688rem] pr-[2.5rem] pl-[2.563rem] box-border max-w-full z-[1] text-center text-[1rem] text-white">
                  <div className="h-[20.125rem] w-[21.875rem] relative rounded-6xl bg-white hidden max-w-full" />
                  <div className="flex-1 flex flex-col items-end justify-start pt-[1.875rem] pb-[3.813rem] pr-[1.688rem] pl-[0.938rem] relative gap-[0.625rem_0rem]">
                    <img
                      className="w-full h-full absolute my-0 mx-[!important] top-[-0.006rem] right-[-0.006rem] bottom-[0.213rem] left-[0rem] max-w-full overflow-hidden max-h-full z-[1]"
                      loading="eager"
                      alt=""
                      src="/group1.svg"
                    />
                    <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[4.938rem] pl-[3rem]">
                      <b className="h-[2.531rem] relative leading-[1.125rem] inline-block z-[2]">
                        <p className="m-0">30%</p>
                        <p className="m-0 text-[0.813rem]">Entertainment</p>
                      </b>
                    </div>
                    <b className="relative leading-[1.125rem] z-[2]">
                      <p className="m-0">15%</p>
                      <p className="m-0 text-[0.813rem]">Bill Expense</p>
                    </b>
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="w-[11.625rem] flex flex-col items-end justify-start">
                        <div className="self-stretch flex flex-row items-start justify-start">
                          <b className="h-[2.531rem] relative leading-[1.125rem] inline-block z-[2]">
                            <p className="m-0">20%</p>
                            <p className="m-0 text-[0.813rem]">Investment</p>
                          </b>
                        </div>
                        <b className="h-[2.531rem] relative leading-[1.125rem] inline-block shrink-0 z-[2] mt-[-0.625rem]">
                          <p className="m-0">35%</p>
                          <p className="m-0 text-[0.813rem]">Others</p>
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className="h-[6.25rem] w-[6.25rem] relative overflow-hidden shrink-0 hidden" />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1rem] box-border gap-[0rem_1.875rem] max-w-full text-[1rem] text-gray-200 mq1000:flex-wrap">
            <div className="w-[27.813rem] rounded-6xl bg-white flex flex-row items-start justify-start py-[2.188rem] px-[1.563rem] box-border gap-[0.625rem] min-w-[27.813rem] max-w-full z-[1] mq450:flex-wrap mq750:min-w-full mq1000:flex-1">
              <div className="h-[17.25rem] w-[27.813rem] relative rounded-6xl bg-white hidden max-w-full" />
              <div className="flex flex-col items-start justify-start gap-[2.813rem_0rem] min-w-[6.438rem] mq450:flex-1">
                <div className="flex flex-col items-start justify-start gap-[0.938rem_0rem]">
                  <div className="flex flex-row items-start justify-start py-[0rem] px-[0.313rem]">
                    <img
                      className="h-[4.375rem] w-[4.375rem] relative object-cover z-[1]"
                      loading="eager"
                      alt=""
                      src="/mask-group-1@2x.png"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start gap-[0.313rem_0rem]">
                    <div className="relative z-[1]">Livia Bator</div>
                    <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.813rem] pl-[1.5rem] text-[0.938rem] text-steelblue">
                      <div className="relative z-[1]">CEO</div>
                    </div>
                  </div>
                </div>
                <div className="relative text-steelblue z-[1]">
                  Write Amount
                </div>
              </div>
              <div className="flex-1 flex flex-col items-end justify-start py-[0rem] pr-[0rem] pl-[0.063rem] box-border gap-[1.813rem_0rem] min-w-[11.438rem]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[0rem_2.063rem] mq450:flex-wrap mq450:gap-[0rem_2.063rem]">
                  <div className="flex flex-col items-center justify-start gap-[0.938rem_0rem] min-w-[5.875rem] mq450:flex-1">
                    <img
                      className="w-[4.375rem] h-[4.375rem] relative object-cover z-[1]"
                      loading="eager"
                      alt=""
                      src="/mask-group-2@2x.png"
                    />
                    <div className="flex flex-col items-center justify-start gap-[0.313rem_0rem]">
                      <div className="relative z-[1]">Randy Press</div>
                      <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.188rem] pl-[1.125rem] text-[0.938rem] text-steelblue">
                        <div className="relative z-[1]">Director</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[0.313rem_0rem] min-w-[6.25rem]">
                    <div className="self-stretch flex flex-row items-center justify-start relative">
                      <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.063rem] pl-[0rem] gap-[0.938rem_0rem]">
                        <img
                          className="w-[4.375rem] h-[4.375rem] relative object-contain z-[1]"
                          loading="eager"
                          alt=""
                          src="/mask-group-3@2x.png"
                        />
                        <div className="relative whitespace-nowrap z-[1]">
                          Workman
                        </div>
                      </div>
                      <div className="h-[3.125rem] w-[3.125rem] absolute my-0 mx-[!important] right-[0rem] bottom-[0.813rem] z-[1] flex items-center justify-center">
                        <img
                          className="h-full w-full z-[1] object-contain absolute left-[0.25rem] top-[0.25rem] [transform:scale(1.64)]"
                          loading="eager"
                          alt=""
                          src="/group-56.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-[0rem] px-[0.063rem] text-[0.938rem] text-steelblue">
                      <div className="relative z-[1]">Designer</div>
                    </div>
                  </div>
                </div>
                <div className="w-[16.563rem] h-[3.188rem] rounded-31xl bg-aliceblue-100 flex flex-row items-center justify-between py-[0rem] pr-[0rem] pl-[1.875rem] box-border gap-[1.25rem] z-[1] text-steelblue">
                  <div className="self-stretch w-[16.563rem] relative rounded-31xl bg-aliceblue-100 hidden" />
                  <div className="relative z-[1]">525.50</div>
                  <div className="self-stretch rounded-31xl bg-blue-200 shadow-[4px_4px_18px_-2px_rgba(231,_228,_232,_0.8)] flex flex-row items-start justify-start pt-[1rem] px-[1.5rem] pb-[0.375rem] gap-[0.688rem] z-[1] text-white">
                    <div className="h-[3.125rem] w-[7.813rem] relative rounded-31xl bg-blue-200 shadow-[4px_4px_18px_-2px_rgba(231,_228,_232,_0.8)] hidden" />
                    <div className="relative font-medium z-[1]">Send</div>
                    <div className="flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem]">
                      <img
                        className="w-[1.625rem] h-[1.425rem] relative z-[1]"
                        alt=""
                        src="/group-1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-6xl bg-white flex flex-row items-start justify-start pt-[2.25rem] pb-[1.375rem] pr-[1.563rem] pl-[1.25rem] box-border gap-[0.625rem] min-w-[25.813rem] max-w-full z-[1] text-right text-[0.813rem] text-steelblue mq750:flex-wrap mq750:min-w-full">
              <div className="h-[17.25rem] w-[39.688rem] relative rounded-6xl bg-white hidden max-w-full" />
              <div className="flex flex-col items-start justify-start gap-[2.25rem_0rem]">
                <div className="h-[0.625rem] relative flex items-center shrink-0 [-webkit-text-stroke:1px_#718ebf] z-[1]">
                  800
                </div>
                <div className="h-[0.625rem] relative flex items-center shrink-0 [-webkit-text-stroke:1px_#718ebf] z-[1]">
                  600
                </div>
                <div className="h-[0.625rem] relative flex items-center shrink-0 [-webkit-text-stroke:1px_#718ebf] z-[1]">
                  400
                </div>
                <div className="h-[0.625rem] relative flex items-center shrink-0 [-webkit-text-stroke:1px_#718ebf] z-[1]">
                  200
                </div>
                <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1.125rem] text-[0.75rem]">
                  <div className="relative [-webkit-text-stroke:1px_#718ebf] z-[1]">
                    0
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border min-w-[22.5rem] max-w-full text-left text-[0.875rem] mq750:min-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.063rem_0rem] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] max-w-full mq750:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-[0.125rem] pb-[0rem] pr-[0.063rem] pl-[0rem]">
                      <div className="flex flex-col items-start justify-start gap-[2.875rem_0rem]">
                        <img
                          className="w-[0.394rem] h-[0.063rem] relative z-[1]"
                          loading="eager"
                          alt=""
                          src="/vector2.svg"
                        />
                        <img
                          className="w-[0.394rem] h-[0.063rem] relative z-[1]"
                          loading="eager"
                          alt=""
                          src="/vector2.svg"
                        />
                        <img
                          className="w-[0.394rem] h-[0.063rem] relative z-[1]"
                          loading="eager"
                          alt=""
                          src="/vector2.svg"
                        />
                        <img
                          className="w-[0.394rem] h-[0.063rem] relative z-[1]"
                          loading="eager"
                          alt=""
                          src="/vector-3.svg"
                        />
                      </div>
                    </div>
                    <div className="h-[11.75rem] flex-1 relative min-w-[22.25rem] max-w-full mq750:min-w-full">
                      <img
                        className="absolute top-[0.119rem] left-[0rem] w-full h-full z-[2]"
                        alt=""
                        src="/group-2.svg"
                      />
                      <img
                        className="absolute top-[0rem] left-[0rem] w-[34.188rem] h-[11.063rem] z-[3]"
                        loading="eager"
                        alt=""
                        src="/vector-4.svg"
                      />
                    </div>
                  </div>
                  <div className="w-[31.125rem] flex flex-row items-end justify-between min-h-[1.688rem] gap-[1.25rem] max-w-full mq450:flex-wrap">
                    <div className="w-[1.438rem] flex flex-row items-center justify-center">
                      <div className="h-[1.625rem] flex-1 relative">
                        <div className="absolute top-[0.563rem] left-[0.375rem] inline-block w-[1.25rem] h-[1.063rem] [-webkit-text-stroke:1px_#718ebf] z-[1]">
                          Jul
                        </div>
                        <img
                          className="absolute top-[0.081rem] left-[0.438rem] w-[0.063rem] h-[0.269rem] z-[1]"
                          alt=""
                          src="/group-31.svg"
                        />
                        <img
                          className="absolute top-[0.019rem] left-[0rem] w-[0.4rem] h-[0.063rem] z-[1]"
                          alt=""
                          src="/vector-5.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start py-[0rem] pr-[0.875rem] pl-[0rem] gap-[0.25rem_0rem]">
                      <div className="h-[0.25rem] flex flex-row items-start justify-start py-[0rem] pr-[0.75rem] pl-[0.688rem] box-border">
                        <img
                          className="h-[0.269rem] w-[0.063rem] relative z-[1]"
                          alt=""
                          src="/group-31.svg"
                        />
                      </div>
                      <div className="relative [-webkit-text-stroke:1px_#718ebf] whitespace-nowrap z-[1]">
                        Aug
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.188rem] pl-[0rem] gap-[0.25rem_0rem]">
                      <img
                        className="w-[0.063rem] h-[0.269rem] relative z-[1]"
                        alt=""
                        src="/group-31.svg"
                      />
                      <div className="relative [-webkit-text-stroke:1px_#718ebf] whitespace-nowrap z-[1]">
                        Sep
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.375rem] pl-[0rem] gap-[0.25rem_0rem]">
                      <img
                        className="w-[0.063rem] h-[0.269rem] relative z-[1]"
                        alt=""
                        src="/group-31.svg"
                      />
                      <div className="relative [-webkit-text-stroke:1px_#718ebf] whitespace-nowrap z-[1]">
                        Oct
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start">
                      <div className="flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
                        <div className="relative [-webkit-text-stroke:1px_#718ebf] z-[1]">{`Nov `}</div>
                      </div>
                      <img
                        className="h-[0.269rem] w-[0.063rem] relative z-[1]"
                        alt=""
                        src="/group-31.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.188rem] pl-[0rem] gap-[0.25rem_0rem]">
                      <img
                        className="w-[0.063rem] h-[0.269rem] relative z-[1]"
                        alt=""
                        src="/group-31.svg"
                      />
                      <div className="relative [-webkit-text-stroke:1px_#718ebf] whitespace-nowrap z-[1]">
                        Dec
                      </div>
                    </div>
                    <div className="h-[1.563rem] w-[1.375rem] relative">
                      <div className="absolute top-[0.5rem] left-[0rem] inline-block w-[1.5rem] h-[1.063rem] [-webkit-text-stroke:1px_#718ebf] z-[1]">
                        Jan
                      </div>
                      <img
                        className="absolute top-[0.019rem] left-[0rem] w-[0.063rem] h-[0.269rem] z-[1]"
                        alt=""
                        src="/group-31.svg"
                      />
                    </div>
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

export default MainDashboard;
