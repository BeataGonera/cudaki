import Logo from "../atoms/Logo";
import GroupMediaButtons from "./GroupMediaButtons";

const LogoAndAddress = () => {
  return (
    <div className="w-full lg:max-w-[193px] flex flex-col gap-4">
      <Logo />
      <div className="text-[#C8B6F6] text-[12px]">
        <p>Fundacja Cudak</p>
        <p>ul. Marszałkowska 9/15 lok. 69</p>
        <p>00-926 Warszawa</p>
        <p>REGON 528431843</p>
        <p>NIP 7011201639</p>
        <p>KRS 0001101295</p>
        <p>Nr konta bankowego: </p>
        <p>PL 53 1090 1870 0000 0001 5823 6909</p>
      </div>
      <GroupMediaButtons />
    </div>
  );
};

export default LogoAndAddress;
