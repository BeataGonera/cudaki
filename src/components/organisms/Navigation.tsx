"use client";

import Link from "next/link";
import LogoSmall from "../atoms/LogoSmall";
import ButtonCTA from "../atoms/buttonCTA";
import ButtonOutlined from "../atoms/ButtonOutlined";
import DropDownMenu from "../molecules/DropdownMenu";
import { LinkMenu } from "@/utils/types";
import DrawerMenu from "./DrawerMenu/DrawerMenu";
import IconMenu from "../atoms/IconMenu";
import { useIsMenuDrawerOpenStore } from "@/state/isMenuDrawerOpen";

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

const Navigation = () => {
  const { setIsMenuDrawerOpen } = useIsMenuDrawerOpenStore();
  return (
    <nav className="w-full h-[55px] mt-4 lg:mt-24">
      <div className="hidden lg:flex px-2 lg:px-24 2xl:px-128 justify-between items-center">
        <LogoSmall />
        <div className="flex gap-[32px] font-bold items-center">
          <div className="flex gap-[14px] font-bold items-center">
            <Link
              href="/aktualnosci"
              aria-label="Przejdź do podstrony aktualności"
            >
              Aktualności
            </Link>
            <DropDownMenu label="O Fundacji" links={linksAbout} />
            <Link
              href="/partnerzy"
              aria-label="Przejdź do podstrony Nasi Partnerzy"
            >
              Nasi partnerzy
            </Link>{" "}
            <Link href="/kontakt" aria-label="Przejdź do podstrony Kontakt">
              Kontakt
            </Link>
          </div>
          <div className="w-[176px]">
            <ButtonCTA label="Wesprzyj nas" icon={false} />
          </div>
          <div className="w-[176px]">
            <ButtonOutlined label="FaniMani" />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center lg:hidden pt-[1rem] px-[1rem]">
        <LogoSmall />
        <button onClick={() => setIsMenuDrawerOpen(true)}>
          <IconMenu />
        </button>
      </div>
      <DrawerMenu aboutLinks={linksAbout} />
    </nav>
  );
};

export default Navigation;
