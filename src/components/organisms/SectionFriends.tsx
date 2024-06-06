import HeadingH2 from "../atoms/HeadingH2";
import ButtonCTA from "../atoms/buttonCTA";
import Image from "next/image";

const SectionFriends = () => {
  return (
    <section className="w-full flex flex-col items-center px-2 lg:px-24 2xl:px-128 ">
      <HeadingH2 label="Przyjaciele Cudaka" />
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-[16px]">
        <div className="w-full h-[200px] lg:h-[272px] flex justify-center items-center">
          <div className="w-[165px] h-[35px] relative">
            <Image
              src="/alesoft.webp"
              fill
              alt="Logo Alesoft"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full h-[200px] lg:h-[272px] flex justify-center items-center">
          <div className="w-[165px] h-[35px] relative">
            <Image
              src="/staffly.webp"
              fill
              alt="Logo Staffly"
              className="w-[165px] h-[35px] object-contain"
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[368px]">
        <ButtonCTA label="Więcej o partnerach" icon={false} />
      </div>
    </section>
  );
};

export default SectionFriends;
