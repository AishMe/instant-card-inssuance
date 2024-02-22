import type { NextPage } from "next";

const CUSTOMIZE: NextPage = () => {
  return (
    <footer className="self-stretch rounded-21xl bg-gray-600 overflow-hidden flex flex-col items-start justify-start p-[5.5rem] box-border gap-[5rem_0rem] max-w-full text-left text-[2.5rem] text-white font-jetbrains-mono mq450:gap-[5rem_0rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq750:gap-[5rem_0rem] mq750:py-[3.563rem] mq750:px-[2.75rem] mq750:box-border">
      <h1 className="m-0 relative text-inherit tracking-[0.2em] uppercase font-extrabold font-inherit mq450:text-[1.5rem] mq1050:text-[2rem]">
        Customize
      </h1>
      <div className="w-[26.75rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full text-center text-[2rem] text-gray-100 mq750:flex-wrap">
        <div className="flex flex-col items-center justify-start gap-[1.625rem_0rem]">
          <div className="w-[10.25rem] h-[10.25rem] relative rounded-181xl [background:linear-gradient(180deg,_rgba(184,_140,_106,_0.4),_rgba(144,_103,_71,_0.4))]" />
          <h2 className="m-0 relative text-inherit tracking-[0.12em] uppercase font-bold font-inherit mq450:text-[1.188rem] mq1050:text-[1.625rem]">
            Style1
          </h2>
        </div>
        <div className="flex flex-col items-center justify-start gap-[1.625rem_0rem]">
          <div className="w-[10.25rem] h-[10.25rem] relative rounded-181xl [background:linear-gradient(180deg,_rgba(164,_166,_175,_0.8),_rgba(116,_122,_134,_0.8))]" />
          <h2 className="m-0 relative text-inherit tracking-[0.12em] uppercase font-bold font-inherit mq450:text-[1.188rem] mq1050:text-[1.625rem]">
            Style2
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default CUSTOMIZE;
