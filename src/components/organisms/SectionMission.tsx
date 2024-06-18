import Image from "next/image";
import HeadingH3 from "../atoms/HeadingH3";

const SectionMission = () => {
  return (
    <section className="w-full px-2 lg:px-24 2xl:px-128 flex flex-col gap-[32px] lg:gap-[48px]">
      <h1 className="text-h1-sm lg:text-h1">Nasza fundacja</h1>
      <div className="flex flex-col lg:flex-row gap-[16px] lg:gap-[48px] relative">
        <img
          src="/VectorReverse.webp"
          className="absolute h-[70%] lg:h-[200%] top-[-20%] lg:top-[-50%] lg:left-[-10%]"
        />
        <div className="relative w-full aspect-square lg:w-1/2 lg:aspect-[1.6] flex">
          <Image
            src="/misja1.webp"
            fill
            className="w-full h-full object-cover rounded-[16px]"
            alt="Figurki Ironmana i Kapitana Ameryki"
            quality={100}
          />
        </div>
        <div className="flex flex-col gap-4">
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

      <div className="flex flex-col-reverse lg:flex-row lg:justify-between gap-[16px] lg:gap-[48px] relative">
        <div className="w-full lg:max-w-[471px] flex flex-col gap-4">
          <h2 className="text-[24px] lg:text-[48px] leading-[24px] lg:leading-[48px] font-bold">
            Nasze idee
          </h2>
          <p>
            Fundacja Cudak powstała z potrzeby i chęci niesienia pomocy.
            Jesteśmy grupą ludzi, z bardzo różnych światów, o bardzo odmiennych
            poglądach, zróżnicowanych profesjach, często na innym etapie życia.
            Połączyła nas zdolność, którą wszyscy naszym nieskromnym zdaniem
            posiadamy i bardzo głęboko w nią wierzymy. To empatia. 
          </p>
          <p>
            Pomimo dzielących nas kwestii, wychodzimy z założenia, że lepiej i
            łatwiej szukać tego, co łączy. Znaleźliśmy taki obszar. Podczas
            długich dyskusji zgodziliśmy się co do tego, że XXI wiek niesie za
            sobą wyzwania, związane z szeroko pojętą cyfryzacją. Pomimo tego, że
            z perspektywy wielkich miast wydaje nam się, że dostęp do cyfrowej
            wiedzy, technologii i sprzętu komputerowego są  czymś oczywistym,
            poddajemy pod wątpliwość tę tezę. 
          </p>
          <p>
            Dzieci i młodzież zasługują na zdobycie odpowiedniej, merytorycznej
            wiedzy, niezależnej od pochodzenia, statusu, czy innych cech,
            dotyczącej technologii i szans, jak również zagrożeń płynących z jej
            rozwoju.
          </p>
        </div>
        <img
          src="/VectorReverse.webp"
          className="absolute h-[70%] hidden lg:flex lg:h-[200%] top-[-20%] lg:top-[-50%] lg:right-[-10%] rotate-[100deg]"
        />
        <div className="relative w-full aspect-square lg:aspect-auto lg:w-1/2 flex">
          <Image
            src="/misja2.webp"
            fill
            className="w-full h-full object-cover rounded-[16px]"
            alt="Zbliżenie na dłonie ludzi, którzy opierają się o drzewo."
            quality={100}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-[16px] lg:gap-[48px] relative">
        <div className="relative w-full aspect-square lg:aspect-[1.6] lg:w-1/2 flex">
          <Image
            src="/misja3.webp"
            fill
            className="w-full h-full object-cover rounded-[16px]"
            alt="Figurki Ironmana i Kapitana Ameryki"
            quality={100}
          />
        </div>
        <div className="flex flex-col gap-4 ">
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
