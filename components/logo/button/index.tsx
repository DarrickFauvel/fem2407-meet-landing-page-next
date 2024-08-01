"use client"
import Link from "next/link"
import { ReactNode, MouseEvent } from "react"

type ButtonProps = { children: ReactNode; url: string; bgColor: string }

const Button = ({ children, url, bgColor }: ButtonProps) => {
  const handleClick = (e: MouseEvent) => {
    e.preventDefault()
    console.log(url)
  }

  const btnPropsGreen = {
    base: "bg-fem-blue-munsell",
    hover: "hover:bg-[#71C0D4]",
  }
  const btnPropsPurple = {
    base: "bg-fem-royal-purple",
    hover: "hover:bg-[#B18BDD]",
  }
  const btnPropsDefault = { base: "bg-gray-500", hover: "hover:bg-gray-300" }

  const btnClasses =
    bgColor === "green"
      ? btnPropsGreen
      : bgColor === "purple"
      ? btnPropsPurple
      : btnPropsDefault

  return (
    <Link
      className={`${btnClasses.base} ${btnClasses.hover} text-white text-fem-fluid-body font-black py-4 px-10 rounded-full transition-all duration-300`}
      href={url}
      onClick={handleClick}>
      {children}
    </Link>
  )
}
export default Button
