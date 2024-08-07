import Link from "next/link";
import Image from "next/image";

const LogoSmall = () => {
  return (
    <Link
      href="/"
      className="relative w-[107px] h-[51px] lg:w-[160px] lg:h-[76px] z-20 block"
    >
      <Image
        src="/logosmall.webp"
        alt="Logo fundacji Cudak"
        fill
        className="object-contain h-full w-full"
      />
    </Link>
  );
};

export default LogoSmall;
