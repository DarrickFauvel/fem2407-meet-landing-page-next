import imageHeroLeft from "@/assets/images/desktop/image-hero-left.png";
import imageHeroRight from "@/assets/images/desktop/image-hero-right.png";
import Cta from "../cta";
import Image from "next/image";

const ViewWide = () => {
  return (
    <div className="hidden w-full grid-cols-3 gap-4 overflow-hidden outline outline-1 outline-red-500 lg:grid">
      <div className="relative">
        <Image
          className="absolute aspect-[1.3/1] w-full origin-top scale-[110.5%]"
          src={imageHeroLeft}
          alt="circles of people"
        />
      </div>
      <Cta />
      <div className="relative">
        <Image
          className="absolute aspect-[1.3/1] w-full origin-top scale-[110.5%]"
          src={imageHeroRight}
          alt="circles of people"
        />
      </div>
    </div>
  );
};
export default ViewWide;
