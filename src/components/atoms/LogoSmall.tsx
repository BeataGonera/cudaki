import Link from "next/link";
import Image from "next/image";

const LogoSmall = () => {
  return (
    <Link href="/" className="relative w-[107px] h-[51px] z-50 block">
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
