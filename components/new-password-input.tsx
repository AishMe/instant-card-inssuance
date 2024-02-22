import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type NewPasswordInputType = {
  currentPassword?: string;
  prop?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propDisplay?: CSSProperties["display"];
  propWidth?: CSSProperties["width"];
  propDisplay1?: CSSProperties["display"];
};

const NewPasswordInput: NextPage<NewPasswordInputType> = ({
  currentPassword,
  prop,
  propPadding,
  propDisplay,
  propWidth,
  propDisplay1,
}) => {
  const newPasswordInputStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const currentPasswordStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const rectangleDiv5Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay1,
    };
  }, [propDisplay1]);

  return (
    <div
      className="self-stretch flex flex-col items-start justify-start gap-[0.688rem_0rem] max-w-full text-left text-[1rem] text-gray-200 font-heading-four-semibold-20p"
      style={newPasswordInputStyle}
    >
      <div className="relative z-[1]" style={currentPasswordStyle}>
        {currentPassword}
      </div>
      <div className="self-stretch rounded-mini bg-white box-border flex flex-row items-center justify-start py-[1rem] px-[1.188rem] max-w-full z-[1] text-[0.938rem] text-steelblue border-[1px] border-solid border-aliceblue-500">
        <div
          className="h-[3.125rem] w-[31.875rem] relative rounded-mini bg-white box-border hidden max-w-full border-[1px] border-solid border-aliceblue-500"
          style={rectangleDiv5Style}
        />
        <div className="relative z-[1]" style={divStyle}>
          {prop}
        </div>
      </div>
    </div>
  );
};

export default NewPasswordInput;
