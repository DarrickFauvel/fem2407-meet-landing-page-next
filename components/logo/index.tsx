import imageLogo from "@/assets/images/logo.svg"
import Image from "next/image"

const Logo = () => {
  return (
    <Image className="mt-[48px] mb-[54px]" src={imageLogo} alt="meet logo" />
  )
}
export default Logo
