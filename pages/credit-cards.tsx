import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Header2 from "../components/header2";
import Dashboardframecontainer from "../components/dashboardframecontainer";
import GroupComponent3 from "../components/group-component3";
import NewPasswordInput from "../components/new-password-input";
import CharleneReed from "../components/charlene-reed";

const CreditCards: NextPage = () => {
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

  const onGroupContainerClick = useCallback(() => {
    router.push("/bank-type");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[0.063rem_0rem] tracking-[normal]">
      <div className="w-[15.625rem] h-[64rem] relative bg-ghostwhite hidden z-[0]" />
      <div className="w-[21.875rem] h-[0.063rem] relative hidden max-w-full z-[1]" />
      <div className="w-[74.375rem] h-[0.063rem] relative bg-aliceblue-300 hidden max-w-full z-[2]" />
      <Header2
        loans="Credit Cards"
        uTCardsPadding="0.625rem 0rem 0rem"
        loansPadding="0.25rem 0rem 0rem"
        maskGroupWidth="23.438rem"
      />
      <main className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[2.563rem] box-border relative gap-[0rem_2.438rem] max-w-full mq750:gap-[0rem_2.438rem]">
        <Dashboardframecontainer
          user31="/user-3-1.svg"
          economicInvestment1="/economicinvestment-11.svg"
          creditCard1="/creditcard-11.svg"
          loan1="/loan-1.svg"
          service1="/service-1.svg"
          econometrics1="/econometrics-1.svg"
          settingsSolid1="/settings-solid-1.svg"
          propColor="#b1b1b1"
          propColor1="#b1b1b1"
          propColor2="#1814f3"
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
          onEconomicInvestment1IconClick={onEconomicInvestment1IconClick}
          onInvestmentsTextClick={onInvestmentsTextClick}
          onLoan1IconClick={onLoan1IconClick}
          onLoansTextClick={onLoansTextClick}
          onService1IconClick={onService1IconClick}
          onServicesTextClick={onServicesTextClick}
          onSettingsSolid1Click={onSettingsSolid1Click}
          onSettingTextClick={onSettingTextClick}
        />
        <div className="h-[3.75rem] w-[0.375rem] absolute my-0 mx-[!important] top-[16.813rem] left-[0rem] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-blue-200" />
        <form className="m-0 flex-1 bg-whitesmoke-100 box-border flex flex-col items-center justify-start pt-[1.5rem] px-[1.5rem] pb-[1.875rem] gap-[1.25rem_0rem] max-w-[calc(100%_-_209px)] border-[1px] border-solid border-aliceblue-300 lg:pt-[1.25rem] lg:pb-[1.25rem] lg:box-border mq1050:max-w-full">
          <div className="w-[74.375rem] h-[76.125rem] relative bg-whitesmoke-100 box-border hidden max-w-full border-[1px] border-solid border-aliceblue-300" />
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.938rem]">
            <h3 className="m-0 relative text-[1.375rem] font-semibold font-heading-four-semibold-20p text-darkslateblue-100 text-left z-[1] mq450:text-[1.125rem]">
              My Cards
            </h3>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start pt-[0rem] px-[0.938rem] pb-[0.25rem] box-border gap-[0rem_1.875rem] max-w-full">
            <div className="flex-1 rounded-6xl [background:linear-gradient(107.38deg,_#2d60ff,_#539bff)] flex flex-col items-center justify-start pt-[1.5rem] px-[0rem] pb-[0rem] box-border gap-[1.875rem] min-w-[16.375rem] max-w-full z-[1]">
              <div className="self-stretch h-[14.063rem] relative rounded-6xl [background:linear-gradient(107.38deg,_#2d60ff,_#539bff)] hidden" />
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.5rem] pl-[1.625rem] shrink-0">
                <div className="flex-1 flex flex-row items-end justify-between gap-[1.25rem] mq450:flex-wrap">
                  <div className="h-[6.375rem] flex flex-col items-start justify-start gap-[1.813rem_0rem] min-w-[5.625rem] mq450:flex-1">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative text-[0.75rem] font-lato text-white text-left z-[1]">
                        Balance
                      </div>
                      <div className="relative text-[1.25rem] font-semibold font-lato text-white text-left whitespace-nowrap z-[1] mq450:text-[1rem]">
                        $5,756
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[0.125rem_0rem]">
                      <div className="relative text-[0.75rem] font-lato text-gray-1900 text-left z-[1]">
                        CARD HOLDER
                      </div>
                      <div className="relative text-[0.938rem] font-semibold font-lato text-white text-left whitespace-nowrap z-[1]">
                        Eddy Cusuma
                      </div>
                    </div>
                  </div>
                  <div className="w-[8.938rem] flex flex-col items-end justify-start gap-[2rem_0rem] min-w-[8.938rem] mq450:flex-1">
                    <img
                      className="w-[2.175rem] h-[2.175rem] relative object-cover z-[1]"
                      loading="eager"
                      alt=""
                      src="/chip-card@2x.png"
                    />
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="flex flex-col items-start justify-start gap-[0.125rem_0rem]">
                        <div className="relative text-[0.75rem] font-lato text-gray-1900 text-left z-[1]">
                          VALID THRU
                        </div>
                        <div className="relative text-[0.938rem] font-semibold font-lato text-white text-left z-[1]">
                          12/22
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-t-none rounded-b-6xl [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.15),_rgba(255,_255,_255,_0))] flex flex-row items-center justify-between py-[1.25rem] pr-[1.5rem] pl-[1.625rem] box-border gap-[1.25rem] max-w-full shrink-0 whitespace-nowrap z-[1]">
                <div className="h-[4.375rem] w-[21.875rem] relative rounded-t-none rounded-b-6xl [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.15),_rgba(255,_255,_255,_0))] hidden max-w-full" />
                <div className="relative text-[1.375rem] font-semibold font-lato text-white text-left z-[2]">
                  3778 **** **** 1234
                </div>
                <img
                  className="h-[1.875rem] w-[2.75rem] relative z-[2]"
                  alt=""
                  src="/group-17.svg"
                />
              </div>
            </div>
            <div className="flex-1 rounded-6xl [background:linear-gradient(107.38deg,_#4c49ed,_#0a06f4)] flex flex-col items-center justify-start pt-[1.5rem] px-[0rem] pb-[0rem] box-border gap-[1.875rem] min-w-[16.375rem] max-w-full z-[2]">
              <div className="self-stretch h-[14.063rem] relative rounded-6xl [background:linear-gradient(107.38deg,_#4c49ed,_#0a06f4)] hidden" />
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.5rem] pl-[1.625rem] shrink-0">
                <div className="flex-1 flex flex-row items-end justify-between gap-[1.25rem] mq450:flex-wrap">
                  <div className="h-[6.375rem] flex flex-col items-start justify-start gap-[1.813rem_0rem] min-w-[5.625rem] mq450:flex-1">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative text-[0.75rem] font-lato text-white text-left z-[1]">
                        Balance
                      </div>
                      <div className="relative text-[1.25rem] font-semibold font-lato text-white text-left whitespace-nowrap z-[1] mq450:text-[1rem]">
                        $5,756
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[0.125rem_0rem]">
                      <div className="relative text-[0.75rem] font-lato text-gray-1900 text-left z-[1]">
                        CARD HOLDER
                      </div>
                      <div className="relative text-[0.938rem] font-semibold font-lato text-white text-left whitespace-nowrap z-[1]">
                        Eddy Cusuma
                      </div>
                    </div>
                  </div>
                  <div className="w-[8.938rem] flex flex-col items-end justify-start gap-[2rem_0rem] min-w-[8.938rem] mq450:flex-1">
                    <img
                      className="w-[2.175rem] h-[2.175rem] relative object-cover z-[1]"
                      alt=""
                      src="/chip-card@2x.png"
                    />
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="flex flex-col items-start justify-start gap-[0.125rem_0rem]">
                        <div className="relative text-[0.75rem] font-lato text-gray-1900 text-left z-[1]">
                          VALID THRU
                        </div>
                        <div className="relative text-[0.938rem] font-semibold font-lato text-white text-left z-[1]">
                          12/22
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-t-none rounded-b-6xl [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.15),_rgba(255,_255,_255,_0))] flex flex-row items-center justify-between py-[1.25rem] pr-[1.5rem] pl-[1.625rem] box-border gap-[1.25rem] max-w-full shrink-0 whitespace-nowrap z-[1]">
                <div className="h-[4.375rem] w-[21.875rem] relative rounded-t-none rounded-b-6xl [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.15),_rgba(255,_255,_255,_0))] hidden max-w-full" />
                <div className="relative text-[1.375rem] font-semibold font-lato text-white text-left z-[2]">
                  3778 **** **** 1234
                </div>
                <img
                  className="h-[1.875rem] w-[2.75rem] relative z-[2]"
                  alt=""
                  src="/group-17.svg"
                />
              </div>
            </div>
            <div className="flex-1 rounded-6xl bg-white box-border flex flex-col items-center justify-start pt-[1.5rem] px-[0rem] pb-[0rem] gap-[1.875rem] min-w-[16.375rem] max-w-full z-[2] border-[1px] border-solid border-aliceblue-400">
              <div className="self-stretch h-[14.063rem] relative rounded-6xl bg-white box-border hidden border-[1px] border-solid border-aliceblue-400" />
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.438rem] pl-[1.563rem] shrink-0">
                <div className="flex-1 flex flex-row items-end justify-between gap-[1.25rem] mq450:flex-wrap">
                  <div className="h-[6.375rem] flex flex-col items-start justify-start gap-[1.813rem_0rem] min-w-[5.625rem] mq450:flex-1">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative text-[0.75rem] font-lato text-steelblue text-left z-[1]">
                        Balance
                      </div>
                      <div className="relative text-[1.25rem] font-semibold font-lato text-primary-2 text-left whitespace-nowrap z-[1] mq450:text-[1rem]">
                        $5,756
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[0.125rem_0rem]">
                      <div className="relative text-[0.75rem] font-lato text-steelblue text-left z-[1]">
                        CARD HOLDER
                      </div>
                      <div className="relative text-[0.938rem] font-semibold font-lato text-primary-2 text-left whitespace-nowrap z-[1]">
                        Eddy Cusuma
                      </div>
                    </div>
                  </div>
                  <div className="w-[8.938rem] flex flex-col items-end justify-start gap-[2rem_0rem] min-w-[8.938rem] mq450:flex-1">
                    <img
                      className="w-[2.175rem] h-[2.175rem] relative object-cover z-[1]"
                      alt=""
                      src="/chip-card-2@2x.png"
                    />
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="flex flex-col items-start justify-start gap-[0.125rem_0rem]">
                        <div className="relative text-[0.75rem] font-lato text-steelblue text-left z-[1]">
                          VALID THRU
                        </div>
                        <div className="relative text-[0.938rem] font-semibold font-lato text-primary-2 text-left z-[1]">
                          12/22
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-t-none rounded-b-6xl box-border flex flex-row items-center justify-between py-[1.25rem] px-[1.563rem] gap-[1.25rem] max-w-full shrink-0 z-[1] border-[1px] border-solid border-aliceblue-500 mq450:flex-wrap">
                <div className="h-[4.375rem] w-[21.875rem] relative rounded-t-none rounded-b-6xl box-border hidden max-w-full border-[1px] border-solid border-aliceblue-500" />
                <div className="relative text-[1.375rem] font-semibold font-lato text-primary-2 text-left z-[2] mq450:text-[1.125rem]">
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
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.938rem] box-border gap-[0rem_1.875rem] max-w-full mq1050:flex-wrap">
            <div className="w-[21.875rem] flex flex-col items-start justify-start gap-[1.375rem_0rem] min-w-[21.875rem] max-w-full mq750:min-w-full mq1050:flex-1">
              <h3 className="m-0 relative text-[1.375rem] font-semibold font-heading-four-semibold-20p text-darkslateblue-100 text-left z-[1] mq450:text-[1.125rem]">
                Card Expense Statistics
              </h3>
              <div className="self-stretch rounded-6xl bg-white flex flex-col items-center justify-start pt-[1.875rem] px-[1.75rem] pb-[1.75rem] box-border gap-[0.938rem] max-w-full z-[1]">
                <div className="w-[21.875rem] h-[19.375rem] relative rounded-6xl bg-white hidden max-w-full" />
                <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.5rem]">
                  <img
                    className="h-[11.631rem] w-[11.75rem] relative z-[1]"
                    loading="eager"
                    alt=""
                    src="/group-346.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.563rem] pl-[1.375rem]">
                  <div className="flex-1 flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
                    <div className="flex flex-row items-start justify-start gap-[0rem_0.75rem]">
                      <div className="h-[0.938rem] w-[0.938rem] relative rounded-[50%] bg-royalblue z-[1]" />
                      <div className="relative text-[0.938rem] font-medium font-heading-four-semibold-20p text-steelblue text-left z-[1]">
                        DBL Bank
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0rem_0.75rem]">
                      <div className="h-[0.938rem] w-[0.938rem] relative rounded-[50%] bg-palevioletred z-[1]" />
                      <div className="relative text-[0.938rem] font-medium font-heading-four-semibold-20p text-steelblue text-left z-[1]">
                        BRC Bank
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between py-[0rem] px-[1.375rem] gap-[1.25rem] mq450:flex-wrap">
                  <div className="flex flex-row items-start justify-start gap-[0rem_0.75rem]">
                    <div className="h-[0.938rem] w-[0.938rem] relative rounded-[50%] bg-turquoise z-[1]" />
                    <div className="relative text-[0.938rem] font-medium font-heading-four-semibold-20p text-steelblue text-left z-[1]">
                      ABM Bank
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[0rem_0.75rem]">
                    <div className="h-[0.938rem] w-[0.938rem] relative rounded-[50%] bg-goldenrod z-[1]" />
                    <div className="relative text-[0.938rem] font-medium font-heading-four-semibold-20p text-steelblue text-left z-[1]">
                      MCP Bank
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="m-0 relative text-[1.375rem] font-semibold font-heading-four-semibold-20p text-darkslateblue-100 text-left z-[1] mq450:text-[1.125rem]">
                Add New Card
              </h3>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[1.375rem_0rem] min-w-[29.625rem] max-w-full mq750:min-w-full">
              <h3 className="m-0 relative text-[1.375rem] font-semibold font-heading-four-semibold-20p text-darkslateblue-100 text-left z-[1] mq450:text-[1.125rem]">
                Card List
              </h3>
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] z-[1]">
                <GroupComponent3
                  creditCard1="/creditcard-1-1.svg"
                  dBLBank="DBL Bank"
                  january="**** **** 5600"
                  william="William "
                />
                <GroupComponent3
                  creditCard1="/creditcard-1-2.svg"
                  dBLBank="BRC Bank"
                  january="**** **** 4300"
                  william="Michel"
                  propBackgroundColor="#ffe0eb"
                  propBackgroundColor1="#ffe0eb"
                />
                <GroupComponent3
                  creditCard1="/creditcard-1-3.svg"
                  dBLBank="ABM Bank"
                  january="**** **** 7560"
                  william="Edward"
                  propBackgroundColor="#fff5d9"
                  propBackgroundColor1="#fff5d9"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[11.5rem] mq450:pl-[1.25rem] mq450:box-border">
                <h3 className="m-0 relative text-[1.375rem] font-semibold font-heading-four-semibold-20p text-darkslateblue-100 text-left z-[1] mq450:text-[1.125rem]">
                  Card Setting
                </h3>
              </div>
            </div>
          </div>
          <form className="m-0 self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.938rem] box-border gap-[0rem_1.875rem] max-w-full mq1050:flex-wrap">
            <div
              className="flex-1 rounded-6xl bg-white flex flex-col items-center justify-start pt-[1.688rem] px-[1.688rem] pb-[2.375rem] box-border gap-[1.813rem] max-w-full cursor-pointer z-[1] mq450:pt-[1.25rem] mq450:pb-[1.563rem] mq450:box-border mq750:min-w-full"
              onClick={onGroupContainerClick}
            >
              <div className="w-[45.625rem] h-[27.5rem] relative rounded-6xl bg-white hidden max-w-full" />
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[2.5rem] pl-[0.188rem] box-border max-w-full">
                <div className="flex-1 relative text-[1rem] leading-[1.75rem] font-heading-four-semibold-20p text-steelblue text-left inline-block max-w-full z-[1]">
                  Credit Card generally means a plastic card issued by Scheduled
                  Commercial Banks assigned to a Cardholder, with a credit
                  limit, that can be used to purchase goods and services on
                  credit or obtain cash advances.
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.188rem] gap-[0rem_1.875rem] mq750:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start gap-[1.375rem_0rem] min-w-[13rem]">
                  <NewPasswordInput
                    currentPassword="Card Type"
                    prop="Classic"
                    propPadding="unset"
                    propDisplay="inline-block"
                    propWidth="20rem"
                    propDisplay1="inline-block"
                  />
                  <NewPasswordInput
                    currentPassword="Card Number"
                    prop="**** **** **** ****"
                    propPadding="0rem 0rem 0.5rem"
                    propDisplay="inline-block"
                    propWidth="20rem"
                    propDisplay1="inline-block"
                  />
                  <div className="rounded-4xs bg-blue-200 flex flex-row items-center justify-center py-[0.875rem] pr-[2.188rem] pl-[2.438rem] whitespace-nowrap z-[1]">
                    <div className="h-[3.125rem] w-[10rem] relative rounded-4xs bg-blue-200 hidden" />
                    <div className="relative text-[1.125rem] font-medium font-heading-four-semibold-20p text-white text-left z-[1]">
                      Add Card
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[1.375rem_0rem] min-w-[13rem]">
                  <NewPasswordInput
                    currentPassword="Name On Card"
                    prop="My Cards"
                    propPadding="unset"
                    propDisplay="inline-block"
                    propWidth="20rem"
                    propDisplay1="inline-block"
                  />
                  <CharleneReed
                    dateOfBirth="Expiration Date"
                    january1990="25 January 2025"
                    propWidth="20rem"
                  />
                </div>
              </div>
            </div>
            <div className="rounded-6xl bg-white flex flex-col items-center justify-start py-[1.875rem] pr-[3.063rem] pl-[1.875rem] box-border gap-[1.25rem] min-w-[21.875rem] max-w-full z-[1] mq450:pt-[1.25rem] mq450:pr-[1.25rem] mq450:pb-[1.25rem] mq450:box-border mq750:min-w-full mq1050:flex-1">
              <div className="w-[21.875rem] h-[27.5rem] relative rounded-6xl bg-white hidden max-w-full" />
              <div className="flex flex-row items-start justify-start py-[0rem] pr-[1rem] pl-[0rem]">
                <div className="flex flex-row items-center justify-start gap-[0rem_1.25rem] mq450:flex-wrap">
                  <img
                    className="h-[3.75rem] w-[3.75rem] relative z-[1]"
                    loading="eager"
                    alt=""
                    src="/group-165.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.125rem]">
                    <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem]">
                      <div className="relative text-[1rem] font-medium font-heading-four-semibold-20p text-gray-200 text-left z-[1]">
                        Block Card
                      </div>
                      <div className="relative text-[0.938rem] font-heading-four-semibold-20p text-steelblue text-left z-[1]">
                        Instantly block your card
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.75rem] pl-[0rem]">
                <div className="flex flex-row items-center justify-start gap-[0rem_1.25rem] mq450:flex-wrap">
                  <img
                    className="h-[3.75rem] w-[3.75rem] relative z-[1]"
                    loading="eager"
                    alt=""
                    src="/group-166.svg"
                  />
                  <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem]">
                    <div className="relative text-[1rem] font-medium font-heading-four-semibold-20p text-gray-200 text-left z-[1]">
                      Change Pin Code
                    </div>
                    <div className="relative text-[0.938rem] font-heading-four-semibold-20p text-steelblue text-left z-[1]">
                      Choose another pin code
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[0rem_1.25rem] mq450:flex-wrap">
                <div className="rounded-xl bg-mistyrose flex flex-row items-center justify-center pt-[1.125rem] pb-[1.063rem] pr-[1.063rem] pl-[1.125rem] z-[1]">
                  <div className="h-[3.75rem] w-[3.75rem] relative rounded-xl bg-mistyrose hidden" />
                  <img
                    className="h-[1.563rem] w-[1.563rem] relative overflow-hidden shrink-0 z-[1]"
                    loading="eager"
                    alt=""
                    src="/003googleglasslogo.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem]">
                  <div className="relative text-[1rem] font-medium font-heading-four-semibold-20p text-gray-200 text-left z-[1]">
                    Add to Google Pay
                  </div>
                  <div className="relative text-[0.938rem] font-heading-four-semibold-20p text-steelblue text-left z-[1]">
                    Withdraw without any card
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[0rem_1.25rem] mq450:flex-wrap">
                <div className="rounded-xl bg-lightcyan flex flex-row items-center justify-center pt-[1.125rem] pb-[1.063rem] pr-[1.063rem] pl-[1.125rem] z-[1]">
                  <div className="h-[3.75rem] w-[3.75rem] relative rounded-xl bg-lightcyan hidden" />
                  <img
                    className="h-[1.563rem] w-[1.563rem] relative overflow-hidden shrink-0 z-[1]"
                    alt=""
                    src="/apple-2-1.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem]">
                  <div className="relative text-[1rem] font-medium font-heading-four-semibold-20p text-gray-200 text-left z-[1]">
                    Add to Apple Pay
                  </div>
                  <div className="relative text-[0.938rem] font-heading-four-semibold-20p text-steelblue text-left z-[1]">
                    Withdraw without any card
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[0rem_1.25rem] mq450:flex-wrap">
                <div className="rounded-xl bg-lightcyan flex flex-row items-center justify-center pt-[1.125rem] pb-[1.063rem] pr-[1.063rem] pl-[1.125rem] z-[1]">
                  <div className="h-[3.75rem] w-[3.75rem] relative rounded-xl bg-lightcyan hidden" />
                  <img
                    className="h-[1.563rem] w-[1.563rem] relative overflow-hidden shrink-0 z-[1]"
                    alt=""
                    src="/apple-2-1.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem]">
                  <div className="relative text-[1rem] font-medium font-heading-four-semibold-20p text-gray-200 text-left z-[1]">
                    Add to Apple Store
                  </div>
                  <div className="relative text-[0.938rem] font-heading-four-semibold-20p text-steelblue text-left z-[1]">
                    Withdraw without any card
                  </div>
                </div>
              </div>
            </div>
          </form>
        </form>
      </main>
      <div className="w-[0.063rem] h-full absolute my-0 mx-[!important] top-[0rem] bottom-[0rem] left-[15.563rem] bg-aliceblue-300 z-[3]" />
    </div>
  );
};

export default CreditCards;
