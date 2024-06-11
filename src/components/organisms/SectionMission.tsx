import Image from "next/image";
import HeadingH3 from "../atoms/HeadingH3";

const SectionMission = () => {
  return (
    <section className="w-full px-2 lg:px-24 2xl:px-128 flex flex-col gap-[32px] lg:gap-[48px]">
      <h1 className="text-h1-sm lg:text-h1">Nasza fundacja</h1>
      <div className="flex flex-col lg:flex-row gap-[16px] lg:gap-24 relative">
        <img
          src="/VectorReverse.webp"
          className="absolute h-[70%] lg:h-[200%] top-[-20%] lg:top-[-50%] lg:left-[-10%]"
        />
        <div className="relative w-full aspect-square lg:w-1/2 lg:aspect-[1.5] flex">
          <Image
            src="/misja1.webp"
            fill
            className="w-full h-full object-cover rounded-[16px]"
            alt="Figurki Ironmana i Kapitana Ameryki"
            quality={100}
          />
        </div>
        <div className="flex flex-col gap-4 pb-24">
          <h2 className="text-[24px] lg:text-[48px] leading-[24px] lg:leading-[48px] font-bold">
            Kim są cudaki?
          </h2>
          <HeadingH3 label="Cudakiem może być każdy" />
          <p className="w-full lg:max-w-[471px]">
            Dziecko, nastolatek, dziewczyna, chłopiec. Miłośnik minecrafta,
            surfrowania po Internecie, programowania, sztucznej inteligencji czy
            gier komputerowych. Cudak, to młody, świadomy szans i zagrożeń
            czyhających we współczesnym świecie cyfrowym człowiek, który dzięki
            naszej pomocy będzie kształtował swoje zainteresowania, w wybranym
            przez siebie w świecie cyfrowym kierunku.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-[16px] lg:gap-24 relative">
        <div className="relative w-full aspect-square lg:w-1/2 flex">
          <Image
            src="/misja3.webp"
            fill
            className="w-full h-full object-cover rounded-[16px]"
            alt="Figurki Ironmana i Kapitana Ameryki"
            quality={100}
          />
        </div>
        <div className="flex flex-col gap-4 pb-24">
          <div className="w-full lg:max-w-[471px] flex flex-col gap-4">
            <p>
              Wierzymy, że walka o nowoczesne, silne społeczeństwo to także
              walka o to, aby najsłabsi mogli liczyć na równy start w cyfrowym
              świecie, który zaczyna coraz mocniej zaznaczać swoją obecność w
              naszym życiu.
            </p>
            <p>
              Naszą misją jest zwiększanie wiedzy, jak również docieranie do
              grup dzieci i młodzieży, zainteresowanych światem cyfrowym. Chcemy
              wyrównywać szanse w obszarze cyfryzacji poprzez programy i
              inicjatywy dostosowane do ich wieku. Od zainteresowania
              komputerem, przez umiejętność bezpiecznego i krytycznego
              poruszania się w Internecie, po pokazywanie świata IT, niezależnie
              od tego kim są i skąd pochodzą. 
            </p>
            <p>
              Chcemy kształcić cyfrowych Cudaków, bo wierzymy że to oni w dużej
              mierze będą stanowili o przyszłości i jakości naszego
              społeczeństwa, gospodarki i poziomu innowacyjności. 
            </p>
            <p>
              Zdajemy sobie sprawę z tego jak bardzo zróżnicowany jest świat
              cyfrowy. <br />
              Nasze programy i inicjatywy, dostosowywane są do wieku i
              predyspozycji dzieci.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionMission;
