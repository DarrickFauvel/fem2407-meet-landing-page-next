import Image from "next/image";

import imageFooterMobile from "@/assets/images/mobile/image-footer.jpg";
import imageFooterDesktop from "@/assets/images/desktop/image-footer.jpg";

const FooterImage = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-25">
      {/* Show for small screen views */}
      <Image
        className="h-full w-full object-cover opacity-25 lg:hidden"
        src={imageFooterMobile}
        width={375}
        height={428}
        alt="woman with headphones"
      />

      {/* show for large screen views */}
      <Image
        className="hidden h-full w-full object-cover opacity-25 lg:block"
        src={imageFooterDesktop}
        width={1440}
        height={308}
        alt="woman with headphones"
      />
    </div>
  );
};
export default FooterImage;
