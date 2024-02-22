import type { NextPage } from "next";
import Header2 from "../components/header2";
import Dashboardframecontainer from "../components/dashboardframecontainer";
import FrameComponent from "../components/frame-component";

const Investments1: NextPage = () => {
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
      <main className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[2.563rem] box-border relative gap-[0rem_2.438rem] max-w-full mq975:gap-[0rem_2.438rem]">
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
        />
        <div className="h-[3.75rem] w-[0.375rem] absolute my-0 mx-[!important] top-[12.813rem] left-[0rem] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-blue-200" />
        <section className="flex-1 bg-whitesmoke-100 box-border flex flex-col items-center justify-start pt-[1.875rem] px-[1.875rem] pb-[3.188rem] gap-[1.5rem_0rem] max-w-[calc(100%_-_209px)] z-[1] text-left text-[1rem] text-steelblue font-heading-four-semibold-20p border-[1px] border-solid border-aliceblue-300 mq450:pb-[1.313rem] mq450:box-border mq975:pt-[1.25rem] mq975:pb-[2.063rem] mq975:box-border mq975:max-w-full">
          <div className="w-[74.375rem] h-[57.688rem] relative bg-whitesmoke-100 box-border hidden max-w-full border-[1px] border-solid border-aliceblue-300" />
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.563rem] box-border gap-[1.875rem] max-w-full z-[2] mq1000:flex-wrap">
            <div className="flex-[0.9733] rounded-6xl bg-white flex flex-row items-center justify-start py-[1.563rem] pr-[2.938rem] pl-[3rem] box-border gap-[0.938rem] min-w-[15.438rem] max-w-full mq450:flex-wrap mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq450:flex-1">
              <div className="h-[7.5rem] w-[21.875rem] relative rounded-6xl bg-white hidden max-w-full" />
              <img
                className="h-[4.375rem] w-[4.375rem] relative z-[1]"
                alt=""
                src="/group-303.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem_0rem] min-w-[6.875rem]">
                <div className="relative z-[1]">Total Invested Amount</div>
                <div className="relative text-[1.25rem] font-semibold text-gray-200 whitespace-nowrap z-[1] mq450:text-[1rem]">
                  $150,000
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-6xl bg-white flex flex-row items-center justify-start py-[1.563rem] px-[2.75rem] box-border gap-[0.938rem] min-w-[15.438rem] max-w-full mq450:flex-wrap mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
              <div className="h-[7.5rem] w-[21.875rem] relative rounded-6xl bg-white hidden max-w-full" />
              <img
                className="h-[4.375rem] w-[4.375rem] relative z-[1]"
                loading="eager"
                alt=""
                src="/group-305.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem_0rem] min-w-[7.188rem]">
                <div className="relative z-[1]">Number of Investments</div>
                <div className="relative text-[1.25rem] font-semibold text-gray-200 z-[1] mq450:text-[1rem]">
                  1,250
                </div>
              </div>
            </div>
            <div className="flex-[0.7405] rounded-6xl bg-white flex flex-row items-center justify-start py-[1.563rem] px-[4.875rem] box-border gap-[0.938rem] min-w-[15.438rem] max-w-full mq450:flex-wrap mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq450:flex-1">
              <div className="h-[7.5rem] w-[21.875rem] relative rounded-6xl bg-white hidden max-w-full" />
              <img
                className="h-[4.375rem] w-[4.375rem] relative z-[1]"
                alt=""
                src="/group-307.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem_0rem] min-w-[4.438rem]">
                <div className="relative z-[1]">Rate of Return</div>
                <div className="relative text-[1.25rem] font-semibold text-gray-200 z-[1] mq450:text-[1rem]">
                  +5.80%
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-[0rem] px-[0.563rem] box-border gap-[1.125rem_0rem] max-w-full text-[1.375rem] text-darkslateblue-100">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0rem_1.875rem] max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[1.375rem_0rem] min-w-[21.938rem] max-w-full mq725:min-w-full">
                <h3 className="m-0 relative text-inherit font-semibold font-inherit z-[2] mq450:text-[1.125rem]">
                  Yearly Total Investment
                </h3>
                <div className="self-stretch rounded-6xl bg-white flex flex-col items-center justify-start pt-[1.625rem] pb-[1.75rem] pr-[1.875rem] pl-[1.813rem] box-border gap-[2rem] max-w-full z-[2] text-right text-[0.813rem] text-steelblue mq725:gap-[2rem]">
                  <div className="w-[33.75rem] h-[17.625rem] relative rounded-6xl bg-white hidden max-w-full" />
                  <div className="self-stretch flex flex-col items-end justify-start max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start relative gap-[2rem_0rem] max-w-full mq725:gap-[2rem_0rem]">
                      <div className="self-stretch flex flex-row items-end justify-start gap-[0rem_0.5rem] max-w-full mq725:flex-wrap">
                        <div className="relative whitespace-nowrap z-[1]">
                          $40,000
                        </div>
                        <div className="h-[0.063rem] flex-1 relative box-border min-w-[17.063rem] max-w-full z-[1] border-[1px] border-dashed border-gainsboro-100" />
                      </div>
                      <div className="relative whitespace-nowrap z-[1]">
                        $30,000
                      </div>
                      <img
                        className="w-[24.125rem] h-[10.063rem] absolute my-0 mx-[!important] right-[1.3rem] bottom-[-7.375rem] z-[2]"
                        alt=""
                        src="/statistics.svg"
                      />
                    </div>
                    <div className="w-[26.225rem] h-[0.063rem] relative box-border max-w-full z-[1] mt-[-0.125rem] border-[1px] border-dashed border-gainsboro-100" />
                  </div>
                  <div className="self-stretch flex flex-row items-end justify-start gap-[0rem_0.563rem] max-w-full mq725:flex-wrap">
                    <div className="relative whitespace-nowrap z-[1]">
                      $20,000
                    </div>
                    <div className="h-[0.063rem] flex-1 relative box-border min-w-[17.063rem] max-w-full z-[1] border-[1px] border-dashed border-gainsboro-100" />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.125rem] box-border max-w-full">
                    <div className="flex-1 flex flex-row items-end justify-start gap-[0rem_0.563rem] max-w-full mq725:flex-wrap">
                      <div className="relative whitespace-nowrap z-[1]">
                        $10,000
                      </div>
                      <div className="h-[0.063rem] flex-1 relative box-border min-w-[17.063rem] max-w-full z-[1] border-[1px] border-dashed border-gainsboro-100" />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[2.188rem] box-border max-w-full">
                    <div className="flex-1 flex flex-col items-end justify-start gap-[0.25rem_0rem] max-w-full">
                      <div className="self-stretch flex flex-row items-end justify-start gap-[0rem_0.563rem] max-w-full mq725:flex-wrap">
                        <div className="relative whitespace-nowrap z-[1] mq725:w-full mq725:h-[1.063rem]">
                          $0
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.188rem] box-border min-w-[17.063rem] max-w-full">
                          <div className="self-stretch h-[0.063rem] relative box-border z-[1] border-[1px] border-dashed border-gainsboro-100" />
                        </div>
                      </div>
                      <div className="w-[26.938rem] flex flex-row items-start justify-start py-[0rem] px-[0.938rem] box-border max-w-full text-center">
                        <div className="flex-1 flex flex-row items-start justify-between py-[0rem] pr-[0.438rem] pl-[0rem] box-border gap-[1.25rem] max-w-full mq725:flex-wrap">
                          <div className="relative z-[1]">2016</div>
                          <div className="relative z-[1]">2017</div>
                          <div className="relative z-[1]">2018</div>
                          <div className="relative z-[1]">2019</div>
                          <div className="relative z-[1]">2020</div>
                          <div className="relative z-[1]">2021</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="m-0 relative text-inherit font-semibold font-inherit z-[2] mq450:text-[1.125rem]">
                  My Investment
                </h3>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[1.375rem_0rem] min-w-[21.938rem] max-w-full mq725:min-w-full">
                <h3 className="m-0 relative text-inherit font-semibold font-inherit z-[2] mq450:text-[1.125rem]">
                  Monthly Revenue
                </h3>
                <div className="self-stretch rounded-6xl bg-white flex flex-col items-center justify-start pt-[1.625rem] pb-[1.75rem] pr-[1.875rem] pl-[1.813rem] box-border gap-[2rem] max-w-full z-[2] text-right text-[0.813rem] text-steelblue mq725:gap-[2rem]">
                  <div className="w-[33.75rem] h-[17.625rem] relative rounded-6xl bg-white hidden max-w-full" />
                  <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem_0rem] max-w-full">
                    <div className="self-stretch flex flex-row items-end justify-start gap-[0rem_0.563rem] max-w-full mq725:flex-wrap">
                      <div className="relative whitespace-nowrap z-[1]">
                        $40,000
                      </div>
                      <div className="h-[0.063rem] flex-1 relative box-border min-w-[17rem] max-w-full z-[1] border-[1px] border-dashed border-gainsboro-100" />
                    </div>
                    <div className="self-stretch flex flex-row items-end justify-start gap-[0rem_0.688rem] max-w-full mq725:flex-wrap">
                      <div className="flex flex-col items-end justify-start gap-[2rem_0rem]">
                        <div className="relative whitespace-nowrap z-[1]">
                          $30,000
                        </div>
                        <div className="relative whitespace-nowrap z-[1]">
                          $20,000
                        </div>
                        <div className="relative whitespace-nowrap z-[1]">
                          $10,000
                        </div>
                      </div>
                      <div className="h-[7.438rem] flex-1 relative min-w-[17rem] max-w-full">
                        <div className="absolute top-[7.375rem] left-[0rem] box-border w-[26.188rem] h-[0.063rem] z-[1] border-[1px] border-dashed border-gainsboro-100" />
                        <div className="absolute top-[4.375rem] left-[0rem] box-border w-[26.188rem] h-[0.063rem] z-[1] border-[1px] border-dashed border-gainsboro-100" />
                        <div className="absolute top-[1.375rem] left-[0rem] box-border w-[26.188rem] h-[0.063rem] z-[1] border-[1px] border-dashed border-gainsboro-100" />
                        <img
                          className="absolute top-[0rem] left-[0.125rem] w-[26rem] h-[6.938rem] z-[2]"
                          alt=""
                          src="/ecommerce-marketplace-ecommerce-marketplace-electric-vehicles.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[2.25rem] box-border max-w-full">
                    <div className="flex-1 flex flex-col items-end justify-start gap-[0.25rem_0rem] max-w-full">
                      <div className="self-stretch flex flex-row items-end justify-start gap-[0rem_0.563rem] max-w-full mq725:flex-wrap">
                        <div className="relative whitespace-nowrap z-[1] mq725:w-full mq725:h-[1.063rem]">
                          $0
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.188rem] box-border min-w-[17rem] max-w-full">
                          <div className="self-stretch h-[0.063rem] relative box-border z-[1] border-[1px] border-dashed border-gainsboro-100" />
                        </div>
                      </div>
                      <div className="w-[26.5rem] flex flex-row items-start justify-start py-[0rem] px-[0.563rem] box-border max-w-full text-center">
                        <div className="flex-1 flex flex-row items-start justify-between py-[0rem] pr-[0.063rem] pl-[0rem] box-border gap-[1.25rem] max-w-full mq725:flex-wrap">
                          <div className="relative z-[1]">2016</div>
                          <div className="relative z-[1]">2017</div>
                          <div className="relative z-[1]">2018</div>
                          <div className="relative z-[1]">2019</div>
                          <div className="relative z-[1]">2020</div>
                          <div className="relative z-[1]">2021</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[22rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
                  <h3 className="m-0 relative text-inherit font-semibold font-inherit z-[2] mq450:text-[1.125rem]">
                    Trending Stock
                  </h3>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[0rem_1.875rem] max-w-full text-[1rem] text-gray-200 mq1000:flex-wrap">
              <div className="flex-1 overflow-x-auto flex flex-col items-start justify-start gap-[0.938rem_0rem] min-w-[27.75rem] max-w-full mq725:min-w-full">
                <div className="w-[39.688rem] rounded-xl bg-white flex flex-row items-center justify-start py-[0.938rem] pr-[2.25rem] pl-[0.938rem] box-border gap-[2.75rem] z-[2]">
                  <div className="h-[5.625rem] w-[39.688rem] relative rounded-xl bg-white hidden max-w-full" />
                  <div className="flex flex-row items-center justify-start py-[0rem] pr-[0.75rem] pl-[0rem] gap-[0rem_1.25rem]">
                    <div className="rounded-xl bg-mistyrose flex flex-row items-center justify-center pt-[1.125rem] pb-[1.063rem] pr-[1.25rem] pl-[1.188rem] z-[1]">
                      <div className="h-[3.75rem] w-[3.75rem] relative rounded-xl bg-mistyrose hidden" />
                      <img
                        className="h-[1.563rem] w-[1.319rem] relative z-[1]"
                        loading="eager"
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem]">
                      <div className="relative font-medium z-[1]">
                        Apple Store
                      </div>
                      <div className="relative text-[0.938rem] text-steelblue z-[1]">
                        E-commerce, Marketplace
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem]">
                    <div className="relative font-medium whitespace-nowrap z-[1]">
                      $54,000
                    </div>
                    <div className="relative text-[0.938rem] text-steelblue z-[1]">
                      Envestment Value
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem] text-aquamarine">
                    <div className="relative font-medium z-[1]">+16%</div>
                    <div className="relative text-[0.938rem] text-steelblue z-[1]">
                      Return Value
                    </div>
                  </div>
                </div>
                <div className="w-[39.688rem] rounded-xl bg-white flex flex-row items-center justify-start py-[0.938rem] pr-[2.25rem] pl-[0.938rem] box-border gap-[2.75rem] z-[2]">
                  <div className="h-[5.625rem] w-[39.688rem] relative rounded-xl bg-white hidden max-w-full" />
                  <FrameComponent
                    group875="/group-875.svg"
                    samsungMobile="Samsung Mobile"
                    eCommerceMarketplace="E-commerce, Marketplace"
                  />
                  <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem]">
                    <div className="relative font-medium whitespace-nowrap z-[1]">
                      $25,300
                    </div>
                    <div className="relative text-[0.938rem] text-steelblue z-[1]">
                      Envestment Value
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem] text-indianred">
                    <div className="relative font-medium z-[1]">-4%</div>
                    <div className="relative text-[0.938rem] text-steelblue z-[1]">
                      Return Value
                    </div>
                  </div>
                </div>
                <div className="w-[39.688rem] rounded-xl bg-white flex flex-row items-center justify-between py-[0.938rem] pr-[2.25rem] pl-[0.938rem] box-border gap-[1.25rem] z-[2]">
                  <div className="h-[5.625rem] w-[39.688rem] relative rounded-xl bg-white hidden max-w-full" />
                  <FrameComponent
                    group875="/group-876.svg"
                    samsungMobile="Tesla Motors"
                    eCommerceMarketplace="Electric Vehicles"
                    propPadding="unset"
                  />
                  <div className="flex flex-row items-start justify-start gap-[0rem_2.75rem]">
                    <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem]">
                      <div className="relative font-medium whitespace-nowrap z-[1]">
                        $8,200
                      </div>
                      <div className="relative text-[0.938rem] text-steelblue z-[1]">
                        Envestment Value
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[0.438rem_0rem] text-aquamarine">
                      <div className="relative font-medium z-[1]">+25%</div>
                      <div className="relative text-[0.938rem] text-steelblue z-[1]">
                        Return Value
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[27.813rem] rounded-6xl bg-white flex flex-col items-center justify-start pt-[1.688rem] px-[1.563rem] pb-[1.563rem] box-border gap-[0.813rem] min-w-[27.813rem] max-w-full z-[2] text-steelblue mq725:min-w-full mq1000:flex-1">
                <div className="w-[27.813rem] h-[18.75rem] relative rounded-6xl bg-white hidden max-w-full" />
                <div className="self-stretch flex flex-col items-start justify-start py-[0rem] px-[0.313rem] box-border gap-[0.5rem_0rem] max-w-full">
                  <div className="w-[22.813rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq725:flex-wrap">
                    <div className="relative font-medium z-[1]">SL No</div>
                    <div className="w-[5.938rem] flex flex-col items-start justify-start">
                      <div className="relative font-medium z-[1]">Name</div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-[0rem] pr-[1.813rem] pl-[0rem]">
                      <div className="relative font-medium z-[1]">Price</div>
                    </div>
                    <div className="relative font-medium z-[1]">Return</div>
                  </div>
                  <div className="self-stretch h-[0.063rem] relative bg-whitesmoke-300 z-[1]" />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[2.125rem] pl-[0.313rem] box-border max-w-full text-gray-200">
                  <div className="flex-1 flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq725:flex-wrap">
                    <div className="flex flex-col items-start justify-start gap-[1.75rem_0rem]">
                      <div className="relative z-[1]">01.</div>
                      <div className="relative whitespace-nowrap z-[1]">
                        02.
                      </div>
                      <div className="relative whitespace-nowrap z-[1]">
                        03.
                      </div>
                      <div className="relative whitespace-nowrap z-[1]">
                        04.
                      </div>
                      <div className="relative whitespace-nowrap z-[1]">
                        05.
                      </div>
                    </div>
                    <div className="w-[10.938rem] flex flex-col items-start justify-start py-[0rem] pr-[0.375rem] pl-[0rem] box-border gap-[1.75rem_0rem]">
                      <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
                        <div className="flex flex-col items-start justify-start gap-[1.75rem_0rem]">
                          <div className="relative z-[1]">Trivago</div>
                          <div className="relative z-[1]">Canon</div>
                          <div className="relative z-[1]">Uber Food</div>
                          <div className="relative z-[1]">Nokia</div>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-[1.75rem_0rem]">
                          <div className="relative whitespace-nowrap z-[1]">
                            $520
                          </div>
                          <div className="relative whitespace-nowrap z-[1]">
                            $480
                          </div>
                          <div className="relative whitespace-nowrap z-[1]">
                            $350
                          </div>
                          <div className="relative whitespace-nowrap z-[1]">
                            $940
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
                        <div className="relative z-[1]">Tiktok</div>
                        <div className="relative whitespace-nowrap z-[1]">
                          $670
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[1.75rem_0rem] text-aquamarine">
                      <div className="relative font-medium z-[1]">+5%</div>
                      <div className="relative font-medium whitespace-nowrap z-[1]">
                        +10%
                      </div>
                      <div className="relative font-medium text-indianred z-[1]">
                        -3%
                      </div>
                      <div className="relative font-medium z-[1]">+2%</div>
                      <div className="relative font-medium text-indianred z-[1]">
                        -12%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="h-[62.438rem] w-[0.063rem] absolute my-0 mx-[!important] top-[-6.312rem] left-[15.563rem] bg-aliceblue-300 z-[2]" />
      </main>
    </div>
  );
};

export default Investments1;
