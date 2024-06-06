import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="relative w-[147px] h-[70px]">
      <Image
        src="/logo.webp"
        alt="Logo fundacji Cudak"
        fill
        className="object-contain h-full w-full"
      />
    </Link>
  );
};

export default Logo;
