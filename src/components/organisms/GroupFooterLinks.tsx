import { News, Partner } from "@/utils/types";
import Link from "next/link";

const GroupFooterLinks = ({
  partners,
  news,
}: {
  partners: Partner[];
  news: News[];
}) => {
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
        {partners
          ? partners.slice(0, 4).map((partner: Partner, index: number) => (
              <Link
                href={partner.link}
                className="text-[#C8B6F6] text-[12px] font-bold"
                aria-label={`Przejdź do podstrony ${partner.name}`}
                key={index}
              >
                {partner.name}
              </Link>
            ))
          : null}
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-[14px] font-bold text-white">Aktualności</p>
        {news
          ? news.map((news, index: number) => (
              <Link
                href={`/aktualnosci/${news.slug}`}
                className="text-[#C8B6F6] text-[12px] font-bold"
                aria-label={`Przejdź do podstrony ${news.title}`}
                key={index}
              >
                {news.title}
              </Link>
            ))
          : null}
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
