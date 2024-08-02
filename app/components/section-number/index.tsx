import { ReactNode } from "react"

type SectionNumberProps = {
  children: ReactNode
}

const SectionNumber = ({ children }: SectionNumberProps) => {
  return (
    <div className="relative w-full h-[140px] mt-[64px] z-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-[84px] bg-fem-cool-gray/25"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center items-center w-[56px] aspect-square border-[1px] border-fem-cool-gray/25 rounded-full text-fem-fluid-body font-black text-fem-cool-gray bg-white">
        {children}
      </div>
    </div>
  )
}
export default SectionNumber
