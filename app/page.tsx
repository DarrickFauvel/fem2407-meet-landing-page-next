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
      <div className="overflow-hidden outline outline-1 outline-blue-500">
        <Image
          className="w-full pb-6 scale-[110.5%] origin-top"
          src={imageHero}
          width={414}
          height={153}
          alt="circles of people"
        />
      </div>

      <h1 className="">Group Chat for Everyone</h1>
    </main>
  )
}
