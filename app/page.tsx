import Image from "next/image";

import Hero from "./components/hero";
import Logo from "@/components/logo";
import Button from "@/components/logo/button";

import imageWomanInVideocall from "@/assets/images/desktop/image-woman-in-videocall.jpg";
import imageWomenVideoChatting from "@/assets/images/desktop/image-women-videochatting.jpg";
import imageMenInMeeting from "@/assets/images/desktop/image-men-in-meeting.jpg";
import imageManTexting from "@/assets/images/desktop/image-man-texting.jpg";
import imageFooterMobile from "@/assets/images/mobile/image-footer.jpg";
import imageFooterDesktop from "@/assets/images/desktop/image-footer.jpg";
import HomeSection from "./components/section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Logo />

      <Hero />

      <div className="flex max-w-[540px] flex-col items-center gap-6 px-6 pt-12">
        <h1 className="text-balance text-center text-fem-fluid-h1 font-black leading-none">
          Group Chat for Everyone
        </h1>

        <p className="max-w-[45ch] text-center text-fem-fluid-body font-medium leading-fem-fluid-body text-fem-cool-gray sm:max-w-[54ch]">
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button url="#" bgColor="green">
            Download <span className="text-fem-non-photo-blue">v1.3</span>
          </Button>

          <Button url="#" bgColor="purple">
            What is it?
          </Button>
        </div>
      </div>

      <HomeSection sectionNumber={1}>
        <div className="mt-16 grid grid-cols-1 gap-6 min-[375px]:grid-cols-2 md:grid-cols-4">
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

        <div className="mt-16 flex flex-col items-center px-6">
          <span className="text-fem-fluid-body font-black uppercase tracking-[4px] text-fem-blue-munsell">
            Built for modern use
          </span>

          <h2 className="text-balance pt-6 text-center text-fem-fluid-h2 font-black leading-10 text-fem-space-cadet">
            Smarter meetings, all <br className="hidden md:block" />
            in one place
          </h2>

          <p className="mt-8 max-w-[540px] text-balance text-center font-medium text-fem-cool-gray">
            Send messages, share files, show your screen, and record your
            meetings — all in one workspace. Control who can join with
            invite-only team access, data encryption, and data export.
          </p>
        </div>
      </HomeSection>

      <HomeSection sectionNumber={2}>
        <div className="relative -mt-7 mb-32 h-[428px] bg-fem-blue-munsell px-6 lg:h-[308px]">
          <div className="absolute inset-0 z-0 opacity-25">
            <Image
              className="h-full w-full object-cover opacity-25 lg:hidden"
              src={imageFooterMobile}
              width={375}
              height={428}
              alt="woman with headphones"
            />
            <Image
              className="hidden h-full w-full object-cover opacity-25 lg:block"
              src={imageFooterDesktop}
              width={375}
              height={428}
              alt="woman with headphones"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <h2 className="pt-20 text-center text-fem-fluid-h2 font-black leading-10 text-white">
              Experience more together
            </h2>

            <p className="mb-8 mt-6 text-center text-lg font-medium leading-[1.44] text-white">
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
  );
}
