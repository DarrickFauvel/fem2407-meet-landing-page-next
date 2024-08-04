import { ReactNode } from "react";

type SectionNumberProps = {
  children: ReactNode;
};

const SectionNumber = ({ children }: SectionNumberProps) => {
  return (
    <div className="relative z-10 mt-[64px] h-[140px] w-full">
      <div className="absolute left-1/2 top-0 h-[84px] w-[1px] -translate-x-1/2 bg-fem-cool-gray/25"></div>
      <div className="absolute bottom-0 left-1/2 flex aspect-square w-[56px] -translate-x-1/2 items-center justify-center rounded-full border-[1px] border-fem-cool-gray/25 bg-white text-fem-fluid-body font-black text-fem-cool-gray">
        {children}
      </div>
    </div>
  );
};
export default SectionNumber;
