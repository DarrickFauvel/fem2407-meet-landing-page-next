import Image from "next/image"

import imageLogo from "@/assets/images/logo.svg"
import imageHero from "@/assets/images/tablet/image-hero.png"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Image className="mt-[48px] mb-[54px]" src={imageLogo} alt="meet logo" />

      <div className="hero-image-container">
        <Image className="hero-image" src={imageHero} alt="circles of people" />
      </div>

      <div className=" flex flex-col gap-6 px-6 pt-12">
        <h1 className="text-fem-fluid-h1 font-black leading-none text-center text-balance">
          Group Chat for Everyone
        </h1>

        <p className="text-fem-fluid-body leading-fem-fluid-body font-medium text-fem-cool-gray text-center">
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </p>
      </div>
    </main>
  )
}
