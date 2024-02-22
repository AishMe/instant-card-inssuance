import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type DashboardframecontainerType = {
  user31?: string;
  economicInvestment1?: string;
  creditCard1?: string;
  loan1?: string;
  service1?: string;
  econometrics1?: string;
  settingsSolid1?: string;

  /** Style props */
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
  propColor2?: CSSProperties["color"];
  propColor3?: CSSProperties["color"];
  propColor4?: CSSProperties["color"];
  propColor5?: CSSProperties["color"];
  propColor6?: CSSProperties["color"];

  /** Action props */
  onHome2IconClick?: () => void;
  onDashboardTextClick?: () => void;
  onTransfer1IconClick?: () => void;
  onTransactionsTextClick?: () => void;
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
  onEconometrics1IconClick?: () => void;
  onMyPrivilegesTextClick?: () => void;
  onSettingsSolid1Click?: () => void;
  onSettingTextClick?: () => void;
};

const Dashboardframecontainer: NextPage<DashboardframecontainerType> = ({
  user31,
  economicInvestment1,
  creditCard1,
  loan1,
  service1,
  econometrics1,
  settingsSolid1,
  propColor,
  propColor1,
  propColor2,
  propColor3,
  propColor4,
  propColor5,
  propColor6,
  onHome2IconClick,
  onDashboardTextClick,
  onTransfer1IconClick,
  onTransactionsTextClick,
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
  onEconometrics1IconClick,
  onMyPrivilegesTextClick,
  onSettingsSolid1Click,
  onSettingTextClick,
}) => {
  const accounts1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const investments1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const creditCards1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const loans1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const services1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  const myPrivileges1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor5,
    };
  }, [propColor5]);

  const setting1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor6,
    };
  }, [propColor6]);

  return (
    <div className="flex flex-col items-start justify-start pt-[1.875rem] px-[0rem] pb-[0rem] text-left text-[1.125rem] text-darkgray-200 font-heading-four-semibold-20p mq800:hidden">
      <div className="flex flex-col items-start justify-start gap-[2.438rem_0rem]">
        <div className="flex flex-row items-start justify-start py-[0rem] px-[0.188rem]">
          <div className="flex flex-row items-end justify-start gap-[0rem_1.625rem]">
            <img
              className="h-[1.563rem] w-[1.563rem] relative overflow-hidden shrink-0 min-h-[1.563rem]"
              loading="eager"
              alt=""
              src="/home-2.svg"
              onClick={onHome2IconClick}
            />
            <div
              className="relative font-medium"
              onClick={onDashboardTextClick}
            >
              Dashboard
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-[0rem] px-[0.188rem]">
          <div className="flex flex-row items-end justify-start gap-[0rem_1.625rem]">
            <img
              className="h-[1.563rem] w-[1.563rem] relative overflow-hidden shrink-0 min-h-[1.563rem]"
              loading="eager"
              alt=""
              src="/transfer-1.svg"
              onClick={onTransfer1IconClick}
            />
            <div
              className="relative font-medium"
              onClick={onTransactionsTextClick}
            >
              Transactions
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-[0rem] px-[0.188rem]">
          <div className="flex flex-row items-start justify-start gap-[0rem_1.625rem]">
            <img
              className="h-[1.563rem] w-[1.563rem] relative overflow-hidden shrink-0 min-h-[1.563rem]"
              loading="eager"
              alt=""
              src={user31}
              onClick={onUser31Click}
            />
            <div
              className="relative font-medium"
              style={accounts1Style}
              onClick={onAccountsTextClick}
            >
              Accounts
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-[0rem] px-[0.188rem]">
          <div className="flex flex-row items-end justify-start gap-[0rem_1.625rem]">
            <img
              className="h-[1.563rem] w-[1.563rem] relative overflow-hidden shrink-0 min-h-[1.563rem]"
              loading="eager"
              alt=""
              src={economicInvestment1}
              onClick={onEconomicInvestment1IconClick}
            />
            <div
              className="relative font-medium"
              style={investments1Style}
              onClick={onInvestmentsTextClick}
            >
              Investments
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-[0rem] px-[0.125rem]">
          <div className="flex flex-row items-center justify-start gap-[0rem_1.625rem]">
            <img
              className="h-[1.625rem] w-[1.625rem] relative overflow-hidden shrink-0"
              loading="eager"
              alt=""
              src={creditCard1}
              onClick={onCreditCard1IconClick}
            />
            <div
              className="relative font-medium"
              style={creditCards1Style}
              onClick={onCreditCardsTextClick}
            >
              Credit Cards
            </div>
          </div>
        </div>
        <div className="w-[6.75rem] flex flex-row items-start justify-start py-[0rem] px-[0.125rem] box-border">
          <div className="flex-1 flex flex-row items-end justify-between gap-[1.25rem]">
            <img
              className="h-[1.563rem] w-[1.563rem] relative overflow-hidden shrink-0 min-h-[1.563rem]"
              loading="eager"
              alt=""
              src={loan1}
              onClick={onLoan1IconClick}
            />
            <div
              className="relative font-medium"
              style={loans1Style}
              onClick={onLoansTextClick}
            >
              Loans
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-[0rem] px-[0.125rem]">
          <div className="flex flex-row items-end justify-start gap-[0rem_1.688rem]">
            <img
              className="h-[1.563rem] w-[1.563rem] relative overflow-hidden shrink-0 min-h-[1.563rem]"
              loading="eager"
              alt=""
              src={service1}
              onClick={onService1IconClick}
            />
            <div
              className="relative font-medium"
              style={services1Style}
              onClick={onServicesTextClick}
            >
              Services
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.125rem]">
          <div className="flex flex-row items-end justify-start gap-[0rem_1.688rem]">
            <img
              className="h-[1.563rem] w-[1.563rem] relative overflow-hidden shrink-0 min-h-[1.563rem]"
              loading="eager"
              alt=""
              src={econometrics1}
              onClick={onEconometrics1IconClick}
            />
            <div
              className="relative font-medium"
              style={myPrivileges1Style}
              onClick={onMyPrivilegesTextClick}
            >
              My Privileges
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] gap-[0rem_1.813rem] text-blue-200">
          <img
            className="h-[1.563rem] w-[1.563rem] relative overflow-hidden shrink-0 min-h-[1.563rem]"
            loading="eager"
            alt=""
            src={settingsSolid1}
            onClick={onSettingsSolid1Click}
          />
          <div
            className="relative font-medium"
            style={setting1Style}
            onClick={onSettingTextClick}
          >
            Setting
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardframecontainer;
