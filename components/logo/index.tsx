import imageLogo from "@/assets/images/logo.svg";
import Image from "next/image";

const Logo = () => {
  return (
    <Image
      className="mb-[54px] mt-[48px] lg:mt-[80px]"
      src={imageLogo}
      alt="meet logo"
    />
  );
};
export default Logo;
