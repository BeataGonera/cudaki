import Link from "next/link";
import LogoSmall from "../atoms/LogoSmall";
import ButtonCTA from "../atoms/buttonCTA";
import ButtonOutlined from "../atoms/ButtonOutlined";

const Navigation = () => {
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
            <Link href="/misja" aria-label="Przejdź do podtrony Misja Fundacji">
              O Fundacji
            </Link>{" "}
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
