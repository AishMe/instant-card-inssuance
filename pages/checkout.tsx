import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Gradient from "../components/gradient";
import MetalBronzeHorizontalMetal from "../components/metal-bronze-horizontal-metal";

const Checkout: NextPage = () => {
  const router = useRouter();

  const onVectorIconClick = useCallback(() => {
    router.push("/custom-card");
  }, [router]);

  const onGroupContainerClick = useCallback(() => {
    router.push("/credit-cards");
  }, [router]);

  return (
    <div className="relative bg-whitesmoke-100 w-full flex flex-col items-start justify-start pt-[3rem] pb-[2.25rem] pr-[0rem] pl-[0.125rem] box-border gap-[0.563rem_0rem] tracking-[normal] text-left text-[3.938rem] text-label-color-light-primary font-lekton">
      <div className="flex flex-row items-start justify-start py-[0rem] px-[3.438rem] box-border max-w-full mq750:pl-[1.688rem] mq750:pr-[1.688rem] mq750:box-border">
        <h1 className="m-0 relative text-inherit font-bold font-inherit mq1050:text-[3.125rem] mq450:text-[2.375rem]">
          ORDER SUMMARY
        </h1>
      </div>
      <div className="flex flex-row items-start justify-start py-[0rem] px-[0rem] box-border max-w-full text-[1.125rem] font-poppins">
        <div className="h-[2.5rem] w-[90rem] flex flex-col items-start justify-start gap-[0.25rem_0rem] max-w-full">
          <div className="flex flex-row items-start justify-start py-[0rem] px-[3.438rem]">
            <div className="rounded-6xl bg-white shadow-[0px_5px_10px_rgba(0,_0,_0,_0.25)_inset] flex flex-row items-center justify-start py-[0rem] pr-[1.813rem] pl-[0.438rem] gap-[0.063rem]">
              <div className="h-[2.2rem] w-[6.75rem] relative rounded-6xl bg-white shadow-[0px_5px_10px_rgba(0,_0,_0,_0.25)_inset] hidden" />
              <img
                className="h-[1.369rem] w-[1.613rem] relative object-contain cursor-pointer z-[1]"
                alt=""
                src="/vector.svg"
                onClick={onVectorIconClick}
              />
              <div className="h-[2.188rem] relative font-medium flex items-center z-[1]">
                Back
              </div>
            </div>
          </div>
          <div className="self-stretch h-[0.125rem] relative box-border border-t-[2px] border-solid border-darkgray-100" />
        </div>
      </div>
      <main className="w-[87.688rem] flex flex-row items-start justify-start py-[0rem] px-[4.5rem] box-border max-w-full shrink-0 lg:pl-[2.25rem] lg:pr-[2.25rem] lg:box-border">
        <section className="flex-1 flex flex-col items-center justify-start gap-[1.188rem_0rem] max-w-full text-left text-[1.688rem] text-label-color-light-primary font-heading-four-semibold-20p">
          <div className="self-stretch rounded-6xl bg-white flex flex-row items-center justify-between pt-[1.688rem] pb-[0.375rem] pr-[5.25rem] pl-[3.188rem] box-border gap-[1.25rem] max-w-full lg:pl-[1.563rem] lg:pr-[2.625rem] lg:box-border mq1050:flex-wrap mq750:pr-[1.313rem] mq750:box-border">
            <div className="h-[26.563rem] w-[78.688rem] relative rounded-6xl bg-white hidden max-w-full" />
            <Gradient bankLogo={false} />
            <div className="w-[14.25rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.125rem] box-border min-w-[14.25rem] mq1050:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start gap-[2.188rem_0rem]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1.75rem_0rem]">
                  <h3 className="m-0 self-stretch h-[4rem] relative text-inherit inline-block shrink-0 z-[1] font-inherit mq450:text-[1.375rem]">
                    <p className="m-0 font-black">Type:</p>
                    <p className="m-0 font-kurale">Credit Card</p>
                  </h3>
                  <div className="flex flex-col items-start justify-start gap-[1.125rem_0rem] font-roboto">
                    <div className="relative z-[1] mq450:text-[1.188rem]">
                      <p className="m-0 font-black">Name:</p>
                      <p className="m-0 text-[1.5rem] font-kurale">
                        BAHADUR NUROGLU
                      </p>
                    </div>
                    <div className="w-[12.125rem] flex flex-row items-end justify-between gap-[1.25rem] text-[1.25rem] font-heading-four-semibold-20p">
                      <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.125rem]">
                        <div className="relative z-[1] mq450:text-[1rem]">
                          <p className="m-0">
                            <span className="font-extrabold font-heading-four-semibold-20p">
                              Color:
                            </span>
                            <span>{` `}</span>
                          </p>
                          <p className="m-0">Custom</p>
                        </div>
                      </div>
                      <div className="relative text-[1.188rem] z-[1]">
                        <p className="m-0 font-black">Size:</p>
                        <p className="m-0">Physical</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[2.188rem] flex flex-row items-start justify-start gap-[0rem_1.938rem] text-[1.125rem]">
                  <div className="relative z-[1]">
                    <span className="font-black">CVV:</span>
                    <span>{` `}</span>
                    <span className="font-semibold">XXX</span>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_0.688rem] text-[1.25rem]">
                    <div className="h-[2.125rem] w-[2.125rem] relative rounded-sm bg-gainsboro-300 z-[1]">
                      <div className="absolute top-[0.031rem] left-[0rem] rounded-sm bg-gainsboro-300 w-full h-full hidden" />
                      <img
                        className="absolute top-[0.219rem] left-[0.063rem] w-[1.938rem] h-[1.688rem] z-[2]"
                        loading="eager"
                        alt=""
                        src="/vector-42.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[0.125rem] pb-[0rem] pr-[0.375rem] pl-[0rem]">
                      <div className="relative whitespace-nowrap z-[1] mq450:text-[1rem]">
                        1
                      </div>
                    </div>
                    <div className="h-[2.125rem] w-[2.063rem] relative rounded-sm bg-gainsboro-300 z-[1]">
                      <div className="absolute top-[0rem] left-[0rem] rounded-sm bg-gainsboro-300 w-full h-full hidden" />
                      <img
                        className="absolute top-[1.063rem] left-[0.063rem] w-[1.938rem] h-[0.125rem] z-[2]"
                        loading="eager"
                        alt=""
                        src="/vector-52.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.438rem] box-border max-w-full">
            <div className="flex-1 rounded-6xl bg-white flex flex-row items-center justify-between pt-[1.188rem] pb-[1rem] pr-[5.25rem] pl-[3.188rem] box-border gap-[1.25rem] max-w-full lg:pl-[1.563rem] lg:pr-[2.625rem] lg:box-border mq1050:flex-wrap mq750:pr-[1.313rem] mq750:box-border">
              <div className="h-[26.563rem] w-[78.688rem] relative rounded-6xl bg-white hidden max-w-full" />
              <MetalBronzeHorizontalMetal />
              <div className="w-[14.25rem] flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem] box-border min-w-[14.25rem] mq1050:flex-1">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1.75rem_0rem]">
                  <h3 className="m-0 self-stretch h-[4rem] relative text-inherit inline-block shrink-0 z-[1] font-inherit mq450:text-[1.375rem]">
                    <p className="m-0 font-black">Type:</p>
                    <p className="m-0 font-kurale">Debit Card</p>
                  </h3>
                  <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.438rem] gap-[1.125rem_0rem] font-roboto">
                    <div className="relative z-[1] mq450:text-[1.188rem]">
                      <p className="m-0 font-black">Name:</p>
                      <p className="m-0 text-[1.5rem] font-kurale">
                        BAHADUR NUROGLU
                      </p>
                    </div>
                    <div className="w-[12.125rem] flex flex-row items-end justify-between gap-[1.25rem] text-[1.25rem] font-heading-four-semibold-20p">
                      <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.125rem]">
                        <div className="relative z-[1] mq450:text-[1rem]">
                          <p className="m-0">
                            <span className="font-extrabold">Color:</span>
                            <span className="font-heading-four-semibold-20p">{` `}</span>
                          </p>
                          <p className="m-0">Dark</p>
                        </div>
                      </div>
                      <div className="relative text-[1.188rem] z-[1]">
                        <p className="m-0 font-black">Size:</p>
                        <p className="m-0">Physical</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-[2.188rem] flex flex-row items-start justify-start gap-[0rem_1.938rem] text-[1.125rem]">
                    <div className="relative z-[1]">
                      <span className="font-black">CVV:</span>
                      <span>{` `}</span>
                      <span className="font-semibold">XXX</span>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_0.688rem] text-[1.25rem]">
                      <div className="h-[2.125rem] w-[2.125rem] relative rounded-sm bg-gainsboro-300 z-[1]">
                        <div className="absolute top-[0.031rem] left-[0rem] rounded-sm bg-gainsboro-300 w-full h-full hidden" />
                        <img
                          className="absolute top-[0.219rem] left-[0.063rem] w-[1.938rem] h-[1.688rem] z-[2]"
                          loading="eager"
                          alt=""
                          src="/vector-42.svg"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[0.125rem] pb-[0rem] pr-[0.375rem] pl-[0rem]">
                        <div className="relative whitespace-nowrap z-[1] mq450:text-[1rem]">
                          1
                        </div>
                      </div>
                      <div className="h-[2.125rem] w-[2.063rem] relative rounded-sm bg-gainsboro-300 z-[1]">
                        <div className="absolute top-[0rem] left-[0rem] rounded-sm bg-gainsboro-300 w-full h-full hidden" />
                        <img
                          className="absolute top-[1.063rem] left-[0.063rem] w-[1.938rem] h-[0.125rem] z-[2]"
                          loading="eager"
                          alt=""
                          src="/vector-52.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[44.063rem] flex flex-row items-start justify-end max-w-full text-[2rem]">
            <div className="w-[30.125rem] flex flex-col items-center justify-start gap-[2.938rem_0rem] max-w-full mq750:gap-[2.938rem_0rem]">
              <div className="self-stretch flex flex-col items-center justify-start pt-[0.75rem] px-[0rem] pb-[0rem] box-border gap-[2.25rem_0rem] max-w-full mq750:gap-[2.25rem_0rem]">
                <div className="w-[23.563rem] flex flex-row items-center justify-center max-w-full">
                  <div className="flex-1 rounded-8xs box-border flex flex-row items-center justify-between pt-[1.188rem] pb-[1.063rem] pr-[2.438rem] pl-[1.25rem] relative gap-[1.25rem] max-w-full z-[1] border-[1px] border-solid border-dimgray mq450:flex-wrap">
                    <b className="relative font-lekton mq1050:text-[1.625rem] mq450:text-[1.188rem]">
                      SCALE+91
                    </b>
                    <div className="relative text-[1.125rem] font-semibold text-blue-200">
                      Apply
                    </div>
                    <div className="h-[4.431rem] w-[23.538rem] relative rounded-8xs box-border hidden max-w-full z-[2] border-[1px] border-solid border-dimgray" />
                    <div className="my-0 mx-[!important] absolute top-[-0.75rem] left-[0.844rem] bg-white flex flex-row items-center justify-center py-[0.188rem] pr-[0.438rem] pl-[0.5rem] whitespace-nowrap z-[2] text-[0.938rem] text-dimgray">
                      <div className="h-[1.613rem] w-[7.844rem] relative bg-white hidden" />
                      <div className="relative z-[1]">Discount Code</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-[1.438rem] text-dimgray mq450:flex-wrap mq450:justify-center">
                  <div className="w-[11rem] flex flex-col items-start justify-start gap-[2.063rem_0rem]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.438rem_0rem]">
                      <div className="relative font-medium mq450:text-[1.125rem]">
                        Subtotal
                      </div>
                      <div className="relative font-medium mq450:text-[1.125rem]">
                        Shipping Cost
                      </div>
                      <div className="relative font-medium mq450:text-[1.125rem]">
                        Discount (20%)
                      </div>
                    </div>
                    <div className="relative font-medium mq450:text-[1.125rem]">
                      Total
                    </div>
                  </div>
                  <div className="w-[7.813rem] flex flex-col items-end justify-start gap-[2.25rem_0rem] text-label-color-light-primary font-lekton">
                    <div className="w-[6.688rem] flex flex-col items-end justify-start gap-[0.625rem_0rem]">
                      <div className="w-[4.813rem] relative font-medium font-roboto inline-block whitespace-nowrap mq450:text-[1.125rem]">
                        ₹200
                      </div>
                      <div className="w-[4.625rem] flex flex-row items-start justify-start py-[0rem] px-[0.125rem] box-border">
                        <div className="h-[1.688rem] flex-1 relative inline-block mq450:text-[1.125rem]">
                          <b>+</b>
                          <span className="font-medium font-roboto">₹</span>
                          <b>50</b>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.875rem] pl-[0rem] text-blue-200">
                        <div className="h-[1.669rem] flex-1 relative inline-block whitespace-nowrap mq450:text-[1.125rem]">
                          <b>-</b>
                          <span className="font-medium font-roboto">₹</span>
                          <b>52.18</b>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.875rem] pl-[0rem] text-[1.688rem] font-roboto">
                      <div className="flex-1 relative font-medium whitespace-nowrap mq450:text-[1.375rem]">
                        ₹198.00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-[26.875rem] rounded-lg bg-blue-100 shadow-[0px_0px_20px_5px_#1a16f3] flex flex-row items-center justify-center pt-[1.625rem] pb-[1.688rem] pr-[1.313rem] pl-[1.25rem] box-border max-w-full cursor-pointer text-center text-white font-lekton"
                onClick={onGroupContainerClick}
              >
                <div className="h-[5.688rem] w-[26.844rem] relative rounded-lg bg-blue-100 shadow-[0px_0px_20px_5px_#1a16f3] hidden max-w-full" />
                <b className="h-[2.425rem] w-[9.706rem] relative flex items-center justify-center shrink-0 z-[1] mq1050:text-[1.625rem] mq450:text-[1.188rem]">
                  Checkout
                </b>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Checkout;
