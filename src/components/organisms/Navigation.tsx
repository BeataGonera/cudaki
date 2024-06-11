import Link from "next/link";
import LogoSmall from "../atoms/LogoSmall";
import ButtonCTA from "../atoms/buttonCTA";
import ButtonOutlined from "../atoms/ButtonOutlined";
import DropDownMenu from "../molecules/DropdownMenu";
import { LinkMenu } from "@/utils/types";

const Navigation = () => {
  const linksAbout: LinkMenu[] = [
    {
      label: "Misja",
      href: "/misja-fundacji",
      ariaLabel: "Przejdź do podstrony - Misja Fundacji",
    },
    {
      label: "Władze fundacji",
      href: "/wladze-fundacji",
      ariaLabel: "Przejdź do podstrony - Władze Fundacji",
    },
    {
      label: "Dokumenty fundacji",
      href: "/dokumenty-fundacji",
      ariaLabel: "Przejdź do podstrony - Dokumenty Fundacji",
    },
  ];
  return (
    <nav className="w-full h-[55px] mt-4 lg:mt-24">
      <div className="hidden lg:flex px-2 lg:px-24 2xl:px-128 justify-between items-center">
        <LogoSmall />
        <div className="flex gap-[32px] font-bold items-center">
          <div className="flex gap-[14px] font-bold items-center">
            <Link
              href="/aktualnosci"
              aria-label="Przejdź do podtrony aktualności"
            >
              Aktualności
            </Link>
            <DropDownMenu label="O Fundacji" links={linksAbout} />
            <Link
              href="/partnerzy"
              aria-label="Przejdź do podtrony Nasi Partnerzy"
            >
              Nasi partnerzy
            </Link>{" "}
            <Link href="/kontakt" aria-label="Przejdź do podtrony Kontakt">
              Kontakt
            </Link>
          </div>
          <div className="w-[176px]">
            <ButtonCTA label="Wesprzyj nas" icon={false} />
          </div>
          <div className="w-[176px]">
            <ButtonOutlined label="Blik" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
