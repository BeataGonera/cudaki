import Link from "next/link";

const GroupFooterLinks = () => {
  return (
    <section className="w-full grid gap-4 grid-cols-2 grid-rows-2 lg:flex lg:justify-between">
      <div className="flex flex-col gap-4">
        <p className="text-[14px] font-bold text-white">O Fundacji</p>
        <Link
          href="/misja-fundacji"
          className="text-[#C8B6F6] text-[12px] font-bold"
          aria-label="Przejdź do podstrony Misja Fundacji"
        >
          Misja fundacji
        </Link>
        <Link
          href="/wladze-fundacji"
          className="text-[#C8B6F6] text-[12px] font-bold"
          aria-label="Przejdź do podstrony Władze Fundacji"
        >
          Władze fundacji
        </Link>
        <Link
          href="/dokumenty-fundacji"
          className="text-[#C8B6F6] text-[12px] font-bold"
          aria-label="Przejdź do podstrony Dokumenty Fundacji"
        >
          Dokumenty fundacji
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-[14px] font-bold text-white">Przyjaciele cudaka</p>
        <Link
          href="/misja-fundacji"
          className="text-[#C8B6F6] text-[12px] font-bold"
          aria-label="Przejdź do podstrony Misja Fundacji"
        >
          Lorem ipsum
        </Link>
        <Link
          href="/misja-fundacji"
          className="text-[#C8B6F6] text-[12px] font-bold"
          aria-label="Przejdź do podstrony Władze Fundacji"
        >
          Lorem ipsum
        </Link>
        <Link
          href="/misja-fundacji"
          className="text-[#C8B6F6] text-[12px] font-bold"
          aria-label="Przejdź do podstrony Dokumenty Fundacji"
        >
          Lorem ipsum
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-[14px] font-bold text-white">Aktualności</p>
        <Link
          href="/misja-fundacji"
          className="text-[#C8B6F6] text-[12px] font-bold"
          aria-label="Przejdź do podstrony Misja Fundacji"
        >
          Lorem ipsum{" "}
        </Link>
        <Link
          href="/misja-fundacji"
          className="text-[#C8B6F6] text-[12px] font-bold"
          aria-label="Przejdź do podstrony Władze Fundacji"
        >
          Lorem ipsum{" "}
        </Link>
        <Link
          href="/misja-fundacji"
          className="text-[#C8B6F6] text-[12px] font-bold"
          aria-label="Przejdź do podstrony Dokumenty Fundacji"
        >
          Lorem ipsum{" "}
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-[14px] font-bold text-white">Kontakt</p>
        <p className="text-[#C8B6F6] text-[12px] font-bold">Fundacja CUDAK</p>
        <Link
          href="tel:+48123456789"
          className="text-[#C8B6F6] text-[12px]"
          aria-label="Zadzwoń do fundacji"
        >
          +48 123 456 789
        </Link>
        <Link
          href="mailto:pomoc@cudak.pl"
          className="text-[#C8B6F6] text-[12px]"
          aria-label="Wyślij mail do fundacji"
        >
          pomoc@cudak.pl
        </Link>
      </div>
    </section>
  );
};

export default GroupFooterLinks;
