import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type TypeRuPayIconType = {
  typeRuPay?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propOverflow?: CSSProperties["overflow"];
  propMaxHeight?: CSSProperties["maxHeight"];
  propMinHeight?: CSSProperties["minHeight"];
  propPosition?: CSSProperties["position"];
  propLeft?: CSSProperties["left"];
  propTop?: CSSProperties["top"];
  propTransform?: CSSProperties["transform"];
  propMargin?: CSSProperties["margin"];
};

const TypeRuPayIcon: NextPage<TypeRuPayIconType> = ({
  typeRuPay,
  propHeight,
  propWidth,
  propAlignSelf,
  propFlex,
  propOverflow,
  propMaxHeight,
  propMinHeight,
  propPosition,
  propLeft,
  propTop,
  propTransform,
  propMargin,
}) => {
  const typeRuPayIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      alignSelf: propAlignSelf,
      flex: propFlex,
      overflow: propOverflow,
      maxHeight: propMaxHeight,
      minHeight: propMinHeight,
      position: propPosition,
      left: propLeft,
      top: propTop,
      transform: propTransform,
      margin: propMargin,
    };
  }, [
    propHeight,
    propWidth,
    propAlignSelf,
    propFlex,
    propOverflow,
    propMaxHeight,
    propMinHeight,
    propPosition,
    propLeft,
    propTop,
    propTransform,
    propMargin,
  ]);

  return (
    <img
      className="h-[3.5rem] w-[5rem] relative"
      loading="eager"
      alt=""
      src={typeRuPay}
      style={typeRuPayIconStyle}
    />
  );
};

export default TypeRuPayIcon;
