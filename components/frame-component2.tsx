import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent2Type = {
  style1?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propFlex?: CSSProperties["flex"];
  propBackground?: CSSProperties["background"];

  /** Action props */
  onFrameContainerClick?: () => void;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({
  style1,
  propHeight,
  propFlex,
  propBackground,
  onFrameContainerClick,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      flex: propFlex,
    };
  }, [propHeight, propFlex]);

  const ellipseRectangleStyle: CSSProperties = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground]);

  return (
    <div
      className="self-stretch h-[10.5rem] flex flex-col items-center justify-start gap-[1.625rem_0rem] cursor-pointer z-[1] text-left text-[2rem] text-gray-100 font-jetbrains-mono"
      onClick={onFrameContainerClick}
      style={frameDiv1Style}
    >
      <div className="w-[9.25rem] flex-1 flex flex-row items-start justify-start py-[0rem] pr-[1.75rem] pl-[1.25rem] box-border">
        <div
          className="self-stretch flex-1 relative rounded-[50%] [background:linear-gradient(180deg,_#aeaeb8,_#797e8a)]"
          style={ellipseRectangleStyle}
        />
      </div>
      <div className="self-stretch h-[2.625rem] relative tracking-[0.12em] uppercase inline-block mq975:text-[1.625rem] mq450:text-[1.188rem]">
        {style1}
      </div>
    </div>
  );
};

export default FrameComponent2;
