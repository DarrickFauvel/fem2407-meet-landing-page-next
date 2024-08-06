import Image from "next/image";

import Hero from "./components/hero";
import Logo from "@/components/logo";
import Button from "@/components/logo/button";

import HomeSection from "./components/section";
import FooterImage from "./components/footer-image";
import FourImages from "./components/four-images";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Logo />

      <Hero />

      <HomeSection sectionNumber={1}>
        <FourImages />

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
        <div className="relative -mt-7 h-[428px] w-full bg-fem-blue-munsell px-6 lg:h-[308px]">
          <FooterImage />

          <div className="relative z-10 flex h-full flex-col items-center justify-center gap-9 lg:flex-row lg:gap-24">
            <h2 className="text-center text-fem-fluid-h2 font-black leading-10 text-white">
              Experience more together
            </h2>

            <p className="text-center text-lg font-medium leading-[1.44] text-white">
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
