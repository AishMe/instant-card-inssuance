import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ExpenseCategoryType = {
  home2?: string;
  transfer1?: string;

  /** Style props */
  propColor?: CSSProperties["color"];
  propMargin?: CSSProperties["margin"];
  propColor1?: CSSProperties["color"];
  propMargin1?: CSSProperties["margin"];
  propMargin2?: CSSProperties["margin"];
  propMargin3?: CSSProperties["margin"];
  propMargin4?: CSSProperties["margin"];
  propMargin5?: CSSProperties["margin"];
  propMargin6?: CSSProperties["margin"];
  propMargin7?: CSSProperties["margin"];
  propMargin8?: CSSProperties["margin"];

  /** Action props */
  onHome2IconClick?: () => void;
  onDashboardTextClick?: () => void;
  onTransfer1IconClick?: () => void;
  onUser31Click?: () => void;
  onAccountsTextClick?: () => void;
  onEconomicInvestment1IconClick?: () => void;
  onInvestmentsTextClick?: () => void;
  onCreditCard1IconClick?: () => void;
  onCreditCardsTextClick?: () => void;
  onLoan1IconClick?: () => void;
  onLoansTextClick?: () => void;
  onService1IconClick?: () => void;
  onServicesTextClick?: () => void;
  onSettingsSolid1Click?: () => void;
  onSettingTextClick?: () => void;
};

const ExpenseCategory: NextPage<ExpenseCategoryType> = ({
  home2,
  transfer1,
  propColor,
  propMargin,
  propColor1,
  propMargin1,
  propMargin2,
  propMargin3,
  propMargin4,
  propMargin5,
  propMargin6,
  propMargin7,
  propMargin8,
  onHome2IconClick,
  onDashboardTextClick,
  onTransfer1IconClick,
  onUser31Click,
  onAccountsTextClick,
  onEconomicInvestment1IconClick,
  onInvestmentsTextClick,
  onCreditCard1IconClick,
  onCreditCardsTextClick,
  onLoan1IconClick,
  onLoansTextClick,
  onService1IconClick,
  onServicesTextClick,
  onSettingsSolid1Click,
  onSettingTextClick,
}) => {
  const dashboardStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      margin: propMargin,
    };
  }, [propColor, propMargin]);

  const transactionsStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
      margin: propMargin1,
    };
  }, [propColor1, propMargin1]);

  const accountsStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin2,
    };
  }, [propMargin2]);

  const investmentsStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin3,
    };
  }, [propMargin3]);

  const creditCardsStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin4,
    };
  }, [propMargin4]);

  const loansStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin5,
    };
  }, [propMargin5]);

  const servicesStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin6,
    };
  }, [propMargin6]);

  const myPrivilegesStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin7,
    };
  }, [propMargin7]);

  const settingStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin8,
    };
  }, [propMargin8]);

  return (
    <div className="flex flex-col items-start justify-start pt-[1.875rem] px-[0rem] pb-[0rem] text-left text-[1.125rem] text-darkgray-200 font-heading-four-semibold-20p mq1050:hidden">
      <div className="flex flex-col items-start justify-start gap-[2.375rem_0rem]">
        <div className="flex flex-row items-end justify-start py-[0rem] pr-[1.25rem] pl-[0rem] gap-[0rem_1.625rem]">
          <img
            className="h-[1.563rem] w-[1.563rem] relative overflow-hidden shrink-0 min-h-[1.563rem] cursor-pointer"
            loading="eager"
            alt=""
            src={home2}
            onClick={onHome2IconClick}
          />
          <div
            className="relative font-medium cursor-pointer"
            onClick={onDashboardTextClick}
            style={dashboardStyle}
          >
            Dashboard
          </div>
        </div>
        <div className="flex flex-row items-end justify-start py-[0rem] pr-[0.313rem] pl-[0rem] gap-[0rem_1.625rem] text-blue-200">
          <img
            className="h-[1.563rem] w-[1.563rem] relative overflow-hidden shrink-0 min-h-[1.563rem]"
            loading="eager"
            alt=""
            src={transfer1}
            onClick={onTransfer1IconClick}
          />
          <div className="relative font-medium" style={transactionsStyle}>
            Transactions
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] gap-[0rem_1.625rem]">
          <img
            className="h-[1.563rem] w-[1.563rem] relative overflow-hidden shrink-0 min-h-[1.563rem] cursor-pointer"
            loading="eager"
            alt=""
            src="/user-3-1.svg"
            onClick={onUser31Click}
          />
          <div
            className="relative font-medium cursor-pointer"
            onClick={onAccountsTextClick}
            style={accountsStyle}
          >
            Accounts
          </div>
        </div>
        <div className="flex flex-row items-end justify-start py-[0rem] pr-[0.688rem] pl-[0rem] gap-[0rem_1.625rem]">
          <img
            className="h-[1.563rem] w-[1.563rem] relative overflow-hidden shrink-0 min-h-[1.563rem] cursor-pointer"
            loading="eager"
            alt=""
            src="/economicinvestment-11.svg"
            onClick={onEconomicInvestment1IconClick}
          />
          <div
            className="relative font-medium cursor-pointer"
            onClick={onInvestmentsTextClick}
            style={investmentsStyle}
          >
            Investments
          </div>
        </div>
        <div className="flex flex-row items-center justify-start py-[0rem] pr-[0.438rem] pl-[0rem] gap-[0rem_1.625rem]">
          <img
            className="h-[1.625rem] w-[1.625rem] relative overflow-hidden shrink-0 cursor-pointer"
            loading="eager"
            alt=""
            src="/creditcard-1.svg"
            onClick={onCreditCard1IconClick}
          />
          <div
            className="relative font-medium cursor-pointer"
            onClick={onCreditCardsTextClick}
            style={creditCardsStyle}
          >
            Credit Cards
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] gap-[0rem_1.688rem]">
          <img
            className="h-[1.563rem] w-[1.563rem] relative overflow-hidden shrink-0 min-h-[1.563rem] cursor-pointer"
            loading="eager"
            alt=""
            src="/loan-1.svg"
            onClick={onLoan1IconClick}
          />
          <div
            className="relative font-medium cursor-pointer"
            onClick={onLoansTextClick}
            style={loansStyle}
          >
            Loans
          </div>
        </div>
        <div className="flex flex-row items-end justify-start py-[0rem] pr-[1.25rem] pl-[0rem] gap-[0rem_1.688rem]">
          <img
            className="h-[1.563rem] w-[1.563rem] relative overflow-hidden shrink-0 min-h-[1.563rem] cursor-pointer"
            loading="eager"
            alt=""
            src="/service-1.svg"
            onClick={onService1IconClick}
          />
          <div
            className="relative font-medium cursor-pointer"
            onClick={onServicesTextClick}
            style={servicesStyle}
          >
            Services
          </div>
        </div>
        <div className="flex flex-row items-end justify-start gap-[0rem_1.688rem]">
          <img
            className="h-[1.563rem] w-[1.563rem] relative overflow-hidden shrink-0 min-h-[1.563rem]"
            loading="eager"
            alt=""
            src="/econometrics-1.svg"
          />
          <div className="relative font-medium" style={myPrivilegesStyle}>
            My Privileges
          </div>
        </div>
        <div className="flex flex-row items-end justify-start py-[0rem] pr-[1.25rem] pl-[0rem] gap-[0rem_1.813rem]">
          <img
            className="h-[1.563rem] w-[1.563rem] relative overflow-hidden shrink-0 min-h-[1.563rem] cursor-pointer"
            loading="eager"
            alt=""
            src="/settings-solid-1.svg"
            onClick={onSettingsSolid1Click}
          />
          <div
            className="relative font-medium cursor-pointer"
            onClick={onSettingTextClick}
            style={settingStyle}
          >
            Setting
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseCategory;
