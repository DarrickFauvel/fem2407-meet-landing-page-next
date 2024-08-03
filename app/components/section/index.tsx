import { ReactNode } from "react"

import SectionNumber from "../section-number"
import padWithLeadingZeros from "@/app/helpers/padWithLeadingZeros"

type HomeSectionProps = {
  children: ReactNode
  sectionNumber: number
}

const HomeSection = ({ children, sectionNumber }: HomeSectionProps) => {
  const formattedSectionNumber = padWithLeadingZeros(sectionNumber, 2)

  return (
    <article className="flex flex-col items-center">
      <SectionNumber>{formattedSectionNumber}</SectionNumber>

      {children}
    </article>
  )
}
export default HomeSection
