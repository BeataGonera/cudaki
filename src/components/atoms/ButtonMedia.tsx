import Link from "next/link";
import { ReactElement } from "react";

const ButtonMedia = ({
  href,
  icon,
  ariaLabel,
}: {
  href: string;
  icon: ReactElement;
  ariaLabel: string;
}) => {
  return (
    <Link
      href={href}
      className="border-[1px] border-[#C8B6F6] h-[24px] w-[24px] rounded-full flex justify-center items-center"
      aria-label={ariaLabel}
    >
      {icon}
    </Link>
  );
};

export default ButtonMedia;
