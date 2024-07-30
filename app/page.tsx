import Image from "next/image"

import imageLogo from "@/assets/images/logo.svg"
import imageHero from "@/assets/images/tablet/image-hero.png"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Image
        className="mt-[48px] mb-[54px]"
        src={imageLogo}
        width={119}
        height={28}
        alt="meet logo"
      />
      <div className="flex justify-center items-center w-full h-full outline outline-1">
        <Image
          className="w-full scale-[110.5%] mt-[54px]"
          src={imageHero}
          width={414}
          height={153}
          alt="circles of people"
        />
      </div>
    </main>
  )
}
