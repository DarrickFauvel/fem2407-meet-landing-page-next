import Image, { StaticImageData } from "next/image";

import imageWomanInVideocall from "@/assets/images/desktop/image-woman-in-videocall.jpg";
import imageWomenVideoChatting from "@/assets/images/desktop/image-women-videochatting.jpg";
import imageMenInMeeting from "@/assets/images/desktop/image-men-in-meeting.jpg";
import imageManTexting from "@/assets/images/desktop/image-man-texting.jpg";

type Image = {
  src: string | StaticImageData;
  alt: string;
};

const FourImages = () => {
  const images = [
    {
      src: imageWomanInVideocall,
      alt: "woman video chatting",
    },
    {
      src: imageWomenVideoChatting,
      alt: "women video chatting",
    },
    {
      src: imageMenInMeeting,
      alt: "men in meeting",
    },
    {
      src: imageManTexting,
      alt: "man texting",
    },
  ];

  const renderImages = images.map((image: Image) => (
    <Image
      className="rounded-lg"
      src={image.src}
      width={151}
      height={143}
      alt={image.alt}
      key={image.alt}
    />
  ));

  return (
    <div className="mt-16 grid grid-cols-1 gap-6 min-[375px]:grid-cols-2 md:grid-cols-4">
      {renderImages}
    </div>
  );
};
export default FourImages;
