import Image from "next/image";
import imageHero from "@/assets/images/tablet/image-hero.png";

const Hero = () => {
  return (
    <div className="relative aspect-[2.44/1] w-full overflow-hidden">
      <Image
        className="absolute aspect-[2.71/1] w-full origin-top scale-[110.5%]"
        src={imageHero}
        alt="circles of people"
      />
    </div>
  );
};
export default Hero;
