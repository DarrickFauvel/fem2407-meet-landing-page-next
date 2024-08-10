"use client";

import { ReactNode, MouseEvent } from "react";
import Link from "next/link";

type ButtonProps = { children: ReactNode; url: string; bgColor: string };

const Button = ({ children, url, bgColor }: ButtonProps) => {
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
  };

  const btnPropsGreen = {
    base: "bg-fem-blue-munsell",
    hover: "hover:bg-[#71C0D4]",
  };
  const btnPropsPurple = {
    base: "bg-fem-royal-purple",
    hover: "hover:bg-[#B18BDD]",
  };
  const btnPropsDefault = { base: "bg-gray-500", hover: "hover:bg-gray-300" };

  const btnClasses =
    bgColor === "green"
      ? btnPropsGreen
      : bgColor === "purple"
        ? btnPropsPurple
        : btnPropsDefault;

  return (
    <Link
      className={`${btnClasses.base} ${btnClasses.hover} rounded-full px-10 py-4 text-base text-fem-fluid-body font-black text-white transition-all duration-300`}
      href={url}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};
export default Button;
