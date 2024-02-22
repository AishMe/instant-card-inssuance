import type { NextPage } from "next";

const RectangleShape: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-[0rem] px-[0.938rem] box-border gap-[0rem_0.313rem] max-w-full text-left text-[1.375rem] text-primary-2 font-heading-four-semibold-20p">
      <div className="w-[21.875rem] flex flex-col items-start justify-start gap-[1.25rem_0rem] max-w-full">
        <h3 className="m-0 relative text-inherit font-semibold font-inherit z-[1] mq450:text-[1.125rem]">
          My Cards
        </h3>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.688rem_0rem] max-w-full text-[0.75rem] text-white font-lato">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem_0rem] max-w-full">
            <div className="self-stretch rounded-6xl [background:linear-gradient(107.38deg,_#4c49ed,_#0a06f4)] flex flex-col items-center justify-start pt-[1.5rem] px-[0rem] pb-[0rem] box-border gap-[1.875rem] max-w-full z-[1]">
              <div className="self-stretch h-[14.063rem] relative rounded-6xl [background:linear-gradient(107.38deg,_#4c49ed,_#0a06f4)] hidden" />
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
            <h3 className="m-0 relative text-[1.375rem] font-semibold font-heading-four-semibold-20p text-primary-2 z-[1] mq450:text-[1.125rem]">
              Recent Transactions
            </h3>
          </div>
          <div className="w-[17.563rem] flex flex-row items-start justify-start py-[0rem] px-[0.688rem] box-border text-[1rem] text-blue-200 font-heading-four-semibold-20p">
            <div className="flex-1 flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
              <div className="relative font-medium z-[1]">All Transactions</div>
              <div className="relative font-medium text-steelblue z-[1]">
                Income
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-[0.313rem] pb-[0rem] pr-[1.563rem] pl-[0rem] box-border min-w-[16.25rem] max-w-full text-[1.063rem]">
        <div className="self-stretch flex flex-col items-end justify-start gap-[1.313rem_0rem] max-w-full shrink-0">
          <div className="relative font-semibold z-[1]">+ Add Card</div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[4.875rem_0rem] max-w-full text-[0.75rem] text-steelblue font-lato mq450:gap-[4.875rem_0rem]">
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1.563rem] box-border max-w-full">
              <div className="flex-1 rounded-6xl bg-white box-border flex flex-col items-center justify-start pt-[1.5rem] px-[0rem] pb-[0rem] gap-[1.875rem] max-w-full z-[2] border-[1px] border-solid border-aliceblue-400">
                <div className="self-stretch h-[14.063rem] relative rounded-6xl bg-white box-border hidden border-[1px] border-solid border-aliceblue-400" />
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
                        alt=""
                        src="/chip-card-2@2x.png"
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
            <div className="relative text-[1rem] font-medium font-heading-four-semibold-20p z-[1]">
              Expense
            </div>
          </div>
        </div>
      </div>
      <div className="w-[21.875rem] flex flex-col items-start justify-start gap-[1.25rem_0rem] max-w-full">
        <h3 className="m-0 relative text-inherit font-semibold font-inherit z-[1] mq450:text-[1.125rem]">
          My Expense
        </h3>
        <div className="self-stretch rounded-6xl bg-white flex flex-row items-end justify-start pt-[1.375rem] pb-[1.563rem] pr-[1.75rem] pl-[1.563rem] box-border gap-[0.938rem] max-w-full z-[2] text-center text-[0.813rem] text-steelblue mq450:flex-wrap">
          <div className="h-[14.063rem] w-[21.875rem] relative rounded-6xl bg-white hidden max-w-full" />
          <div className="flex-1 flex flex-col items-start justify-start min-w-[5.75rem]">
            <div className="self-stretch h-[7.563rem] flex flex-row items-start justify-start relative">
              <div className="h-[10.438rem] my-0 mx-[!important] absolute top-[-2.875rem] left-[calc(50%_-_18.5px)] flex flex-col items-center justify-start gap-[0.563rem_0rem]">
                <div className="w-[2.313rem] flex-1 relative rounded-3xs bg-aliceblue-200 z-[1]" />
                <div className="relative z-[1]">Sep</div>
              </div>
              <div className="self-stretch flex-1 flex flex-row items-start justify-end">
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.563rem_0rem]">
                  <div className="w-[2.313rem] flex-1 relative rounded-3xs bg-aliceblue-200 z-[1]" />
                  <div className="relative z-[1]">Oct</div>
                </div>
              </div>
            </div>
            <div className="h-[7.375rem] flex flex-col items-center justify-start gap-[0.563rem_0rem] mt-[-7.375rem]">
              <div className="w-[2.313rem] flex-1 relative rounded-3xs bg-aliceblue-200 z-[1]" />
              <div className="relative z-[1]">Aug</div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-start gap-[0.438rem_0rem] min-w-[5.75rem] text-[0.875rem] text-primary-2">
            <div className="relative font-medium whitespace-nowrap z-[1]">
              $12,500
            </div>
            <div className="self-stretch h-[9.625rem] flex flex-row items-end justify-start gap-[0rem_0.938rem] text-[0.813rem] text-steelblue">
              <div className="h-[4.625rem] flex-1 flex flex-col items-center justify-start gap-[0.563rem_0rem]">
                <div className="w-[2.313rem] flex-1 relative rounded-3xs bg-aliceblue-200 z-[1]" />
                <div className="relative z-[1]">Nov</div>
              </div>
              <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[0.563rem_0rem]">
                <div className="w-[2.313rem] flex-1 relative rounded-3xs bg-turquoise shadow-[0px_0px_35px_rgba(18,_136,_126,_0.2)] z-[1]" />
                <div className="relative z-[1]">Dec</div>
              </div>
              <div className="h-[7.063rem] flex-1 flex flex-col items-center justify-start gap-[0.563rem_0rem]">
                <div className="w-[2.313rem] flex-1 relative rounded-3xs bg-aliceblue-200 z-[1]" />
                <div className="relative z-[1]">Jan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RectangleShape;
