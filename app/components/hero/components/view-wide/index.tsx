import imageHeroLeft from "@/assets/images/desktop/image-hero-left.png";
import imageHeroRight from "@/assets/images/desktop/image-hero-right.png";
import CallToAction from "../call-to-action";
import Image from "next/image";

const ViewWide = () => {
  return (
    <div className="hero-grid hidden w-full max-w-[1440px] grid-cols-3 gap-4 overflow-hidden lg:grid">
      <div className="relative">
        <Image
          className="absolute -left-8 top-0"
          src={imageHeroLeft}
          alt="circles of people"
        />
      </div>

      <CallToAction />

      <div className="relative">
        <Image
          className="absolute -right-8 top-[55px]"
          src={imageHeroRight}
          alt="circles of people"
        />
      </div>
    </div>
  );
};
export default ViewWide;
