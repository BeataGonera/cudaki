"use client";

import LogoSmall from "@/components/atoms/LogoSmall";
import styles from "./styles.module.css";
import IconClose from "@/components/atoms/IconClose";
import Link from "next/link";
import GroupMediaButtons from "@/components/molecules/GroupMediaButtons";
import { useIsMenuDrawerOpenStore } from "@/state/isMenuDrawerOpen";
import DropDownMenuMobile from "@/components/molecules/DropdownMenuMobile/DropdownMenuMobile";
import { LinkMenu } from "@/utils/types";

const DrawerMenu = ({ aboutLinks }: { aboutLinks: LinkMenu[] }) => {
  const { isMenuDrawerOpen, setIsMenuDrawerOpen } = useIsMenuDrawerOpenStore();
  return (
    <>
      {isMenuDrawerOpen ? (
        <div className={styles.container}>
          <div className="w-screen h-screen fixed top-0 left-0 lg:hidden bg-[#583D9A] z-30 flex flex-col gap-[48px] pb-[4rem] overflow-scroll">
            <div className="w-full h-fit pt-[2rem] px-[1rem] flex justify-between items-center">
              <LogoSmall />
              <button onClick={() => setIsMenuDrawerOpen(!isMenuDrawerOpen)}>
                <IconClose />
              </button>
            </div>
            <div className="w-full flex flex-col gap-[24px] text-[32px] text-white font-bold px-[1rem]">
              <ul className="border-b-[1px] border-white">
                <Link
                  href="/"
                  aria-label="Przejdź do strony głównej"
                  onClick={() => setIsMenuDrawerOpen(!isMenuDrawerOpen)}
                >
                  Strona główna
                </Link>
              </ul>
              <ul className="border-b-[1px] border-white">
                <Link
                  href="/aktualnosci"
                  aria-label="Przejdź do podstrony Aktualności"
                  onClick={() => setIsMenuDrawerOpen(!isMenuDrawerOpen)}
                >
                  Aktualności
                </Link>
              </ul>
              <ul>
                <DropDownMenuMobile label={"O fundacji"} links={aboutLinks} />
              </ul>
              <ul className="border-b-[1px] border-white">
                <Link
                  href="/partnerzy"
                  aria-label="Przejdź do podstrony Przyjaciele Cudaka"
                  onClick={() => setIsMenuDrawerOpen(!isMenuDrawerOpen)}
                >
                  Przyjaciele Cudaka
                </Link>
              </ul>
              <ul className="border-b-[1px] border-white">
                <Link
                  href="/kontakt"
                  aria-label="Przejdź do podstrony Kontakt"
                  onClick={() => setIsMenuDrawerOpen(!isMenuDrawerOpen)}
                >
                  Kontakt
                </Link>
              </ul>
            </div>
            <div className="px-[2rem] flex justify-center h-full items-end ">
              <GroupMediaButtons />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DrawerMenu;
