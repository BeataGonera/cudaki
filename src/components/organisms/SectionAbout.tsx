import Image from "next/image";
import HeadingH2 from "../atoms/HeadingH2";
import ButtonCTA from "../atoms/buttonCTA";

const SectionAbout = () => {
  return (
    <section className="w-full px-2 lg:px-24 2xl:px-128 grid grid-cols-1 lg:grid-cols-2 gap-[16px] lg:gap-[48px]">
      <div className="w-full relative aspect-square col-start-1 col-end-2 lg:col-start-2 lg:col-end-3">
        <img
          src="/Vector.webp"
          className="hidden lg:block absolute top-[-20%] left-[-20%] w-[120%] h-[120%]"
        />
        <Image
          src="/about.webp"
          alt="Grupa uśmiechniętych ludzi"
          fill
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center gap-[32px] lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 max-w-[471px]">
        <HeadingH2 label="Nasza fundacja" />
        <p>
          Fundacja Cudak powstała z potrzeby i chęci niesienia pomocy. Jesteśmy
          grupą ludzi, z bardzo różnych światów, o bardzo odmiennych poglądach,
          zróżnicowanych profesjach, często na innym etapie życia. Połączyła nas
          zdolność, którą wszyscy naszym nieskromnym zdaniem posiadamy i bardzo
          głęboko w nią wierzymy. To empatia.
        </p>
        <div className="w-full lg:w-[368px]">
          <ButtonCTA
            label="Dowiedz się więcej"
            icon={false}
            href={"/misja-fundacji"}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
