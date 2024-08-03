import Image from "next/image"

import Hero from "./components/hero"
import Logo from "@/components/logo"
import Button from "@/components/logo/button"

import imageWomanInVideocall from "@/assets/images/desktop/image-woman-in-videocall.jpg"
import imageWomenVideoChatting from "@/assets/images/desktop/image-women-videochatting.jpg"
import imageMenInMeeting from "@/assets/images/desktop/image-men-in-meeting.jpg"
import imageManTexting from "@/assets/images/desktop/image-man-texting.jpg"
import imageFooterMobile from "@/assets/images/mobile/image-footer.jpg"
import imageFooterDesktop from "@/assets/images/desktop/image-footer.jpg"
import HomeSection from "./components/section"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Logo />

      <Hero />

      <div className=" flex flex-col items-center gap-6 px-6 pt-12 max-w-[540px]">
        <h1 className="text-fem-fluid-h1 font-black leading-none text-center text-balance">
          Group Chat for Everyone
        </h1>

        <p className="text-fem-fluid-body leading-fem-fluid-body font-medium text-fem-cool-gray text-center max-w-[45ch] sm:max-w-[54ch]">
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-center items-center gap-4">
          <Button url="#" bgColor="green">
            Download <span className="text-fem-non-photo-blue">v1.3</span>
          </Button>

          <Button url="#" bgColor="purple">
            What is it?
          </Button>
        </div>
      </div>

      <HomeSection sectionNumber={1}>
        <div className="grid grid-cols-1 min-[375px]:grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <Image
            className="rounded-lg"
            src={imageWomanInVideocall}
            width={151}
            height={143}
            alt="woman video chatting"
          />
          <Image
            className="rounded-lg"
            src={imageWomenVideoChatting}
            width={151}
            height={143}
            alt="women video chatting"
          />
          <Image
            className="rounded-lg"
            src={imageMenInMeeting}
            width={151}
            height={143}
            alt="men in meeting"
          />
          <Image
            className="rounded-lg"
            src={imageManTexting}
            width={151}
            height={143}
            alt="man texting"
          />
        </div>

        <div className="flex flex-col items-center px-6 mt-16">
          <span className="uppercase text-fem-fluid-body font-black text-fem-blue-munsell tracking-[4px]">
            Built for modern use
          </span>

          <h2 className="text-fem-fluid-h2 text-fem-space-cadet font-black text-balance text-center pt-6 leading-10">
            Smarter meetings, all <br className="hidden md:block" />
            in one place
          </h2>

          <p className="text-center text-fem-cool-gray font-medium text-balance mt-8 max-w-[540px]">
            Send messages, share files, show your screen, and record your
            meetings — all in one workspace. Control who can join with
            invite-only team access, data encryption, and data export.
          </p>
        </div>
      </HomeSection>

      <HomeSection sectionNumber={2}>
        <div className="relative bg-fem-blue-munsell h-[428px] lg:h-[308px] px-6 mb-32 -mt-7">
          <div className="absolute inset-0 opacity-25 z-0">
            <Image
              className="w-full h-full object-cover opacity-25 lg:hidden"
              src={imageFooterMobile}
              width={375}
              height={428}
              alt="woman with headphones"
            />
            <Image
              className="w-full h-full object-cover opacity-25 hidden lg:block"
              src={imageFooterDesktop}
              width={375}
              height={428}
              alt="woman with headphones"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-fem-fluid-h2 font-black text-center text-white pt-20 leading-10">
              Experience more together
            </h2>

            <p className="text-lg text-center text-white font-medium mt-6 mb-8 leading-[1.44]">
              Stay connected with reliable HD meetings and unlimited one-on-one
              and group video sessions.
            </p>

            <Button url="#" bgColor="purple">
              Download <span className="text-fem-mauve">v1.3</span>
            </Button>
          </div>
        </div>
      </HomeSection>
    </main>
  )
}
