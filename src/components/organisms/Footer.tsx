import LogoAndAddress from "../molecules/LogoAndAddress";
import SectionNewsletter from "./SectionNewsletter";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pt-72">
      <SectionNewsletter />
      <div className="w-full bg-primary-custom mt-[-200px]">
        <div className="px-2 lg:px-24 2xl:px-128 pt-32 flex flex-col gap-4">
          <LogoAndAddress />
          <div className="w-full border-t-[1px] border-t-[#C8B6F6] py-4 flex flex-col lg:flex-row gap-2">
            <span className="w-full text-center font-bold text-[#C8B6F6] flex ">
              © Wszystkie prawa zastrzeżone przez Fundacja CUDAK
            </span>
            <div className="w-full flex justify-center lg:justify-end gap-4 underline font-bold text-[#C8B6F6]">
              <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
              <Link href="/regulamin">Regulamin</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
