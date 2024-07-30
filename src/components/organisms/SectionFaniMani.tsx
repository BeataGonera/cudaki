import Image from "next/image";
import Link from "next/link";

const SectionFaniMani = async () => {
  return (
    <section className="w-full px-2 lg:px-24 2xl:px-128 flex flex-col gap-[32px] lg:gap-[48px]">
      <h1 className="text-h1-sm lg:text-h1">Jak działa FaniMani</h1>
      <div className="flex flex-col lg:flex-row gap-[16px] lg:gap-[48px] relative z-20">
        <img
          src="/VectorReverse.webp"
          className="absolute h-[70%] lg:h-[200%] top-[-20%] lg:top-[-50%] lg:left-[-10%]"
        />
        <div className="relative w-full aspect-[1.6] lg:w-1/2 lg:aspect-[1.6] flex">
          <Image
            src="/fanimani.webp"
            fill
            className="w-full h-full object-contain rounded-[16px]"
            alt="logo FaniMani"
            quality={100}
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="w-full lg:max-w-[471px]">
            Jeżeli robisz zakupy w internecie, nieważne czy są to buty,
            elektronika, kosmetyki czy książki, możesz nas bezpłatnie wspierać.
            Z każdego Twojego zakupu średnio 2,5% jego wartości trafi do naszej
            organizacji, jeśli zaczniesz korzystać z serwisu FaniMani.pl Ty nic
            nie dopłacasz!
          </p>
          <p className="w-full lg:max-w-[471px]">
            Pomagaj nam bezpłatnie przy okazji codziennych zakupów online.
            Możesz skorzystać z oferty ponad 1700 sklepów, a także przy okazji
            zamawiania jedzenia online czy rezerwacji noclegów.
          </p>
          <p className="w-full lg:max-w-[471px]">
            Darowiznę aktywujesz jednym kliknięciem. To proste i bezpieczne
            rozwiązanie.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row lg:justify-between gap-[16px] lg:gap-[48px] relative z-20">
        <div className="w-full lg:max-w-[471px] flex flex-col gap-4">
          <h3 className="text-[24px] lg:text-[48px] leading-[24px] lg:leading-[48px] font-bold">
            Jak się zarejestrować?
          </h3>
          <p>
            1. Jeśli zarejestrujesz się z{" "}
            <Link
              href="https://fanimani.pl/zaproszenie/86192/1a798e6a488c4aca97eb505e87a09065?utm_source=orgpage&utm_medium=opis-ofanimani"
              target="_blank"
              className="text-primary-custom underline"
            >
              tego linku
            </Link>{" "}
            i w ciągu roku zrobisz zakupy przez FaniMani.pl za min. 100 zł,
            otrzymamy dodatkowe 2x5 zł.
          </p>
          <p>
            2. Na komputerze: Dodaj{" "}
            <Link
              href="https://fanimani.pl/aplikacje/?utm_source=orgpage&utm_medium=opis-ofanimani"
              className="text-primary-custom underline"
            >
              {" "}
              to rozszerzenie
            </Link>{" "}
            "Przypominajka FaniMani" do przeglądarki{" "}
          </p>
          <p>
            To proste i bezpieczne rozszerzenie, który automatycznie wskaże
            partnerów FaniMani, a darowiznę aktywujesz jednym kliknięciem! Z
            Przypominajką nigdy nie zapomnisz o pomaganiu nam.{" "}
            <Link
              href="https://fanimani.pl/fundacjacudak/?utm_source=orgpage&utm_medium=opis-ofanimani"
              className="text-primary-custom underline"
            >
              Wejdź na nasz profil na FaniMani
            </Link>
            , aby zainstalować Przypominajkę!
          </p>
          <p>
            Dodatkowo - gdy już założysz konto i będziesz mieć Przypominajkę -
            wejdź na{" "}
            <Link
              href="https://fanimani.pl/podaruj1zl"
              target="_blank"
              className="text-primary-custom underline"
            >
              fanimani.pl/podaruj1zl
            </Link>{" "}
            i zaloguj się, a my otrzymamy 1zł darowizny!{" "}
          </p>
          <p>
            3. Na telefonie: Pobierz Aplikację FaniMani (Google Play, AppStore){" "}
            <Link
              href="https://fanimani.pl/aplikacja-mobilna/?utm_source=orgpage&utm_medium=opis-ofanimani"
              target="_blank"
              className="flex flex-col lg:flex-row w-full mt-4"
            >
              <img
                src="https://staticfiles.fanimani.pl/mobileapp/ico-app-store-3.png"
                alt="Pobierz Aplikację Mobilną"
              />
              <img
                src="https://staticfiles.fanimani.pl/mobileapp/ico-google-play-3.png"
                alt="Pobierz Aplikację Mobilną"
              />{" "}
            </Link>
          </p>
          <p>
            Możesz nam pomagać także z telefonem w dłoni! Zainstaluj Aplikację i
            korzystaj z oferty ponad 1700 partnerów FaniMani, robiąc zakupy i
            przekazując nam darowiznę! W aplikacji w prosty sposób sprawdzisz
            również swoje ostatnie darowizny.
          </p>
          <p>Dziękujemy, że jesteś z nami!</p>
        </div>

        <div className="relative w-full aspect-[875/1242] lg:aspect-auto lg:w-1/2 flex">
          <Image
            src="/fanimani3.webp"
            fill
            className="w-full h-full object-contain rounded-[16px]"
            alt="Instrukcja jak działa FaniMani"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionFaniMani;
