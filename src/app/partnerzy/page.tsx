import SectionPartnersBig from "@/components/organisms/SectionPartnersBig";

export async function generateMetadata() {
  return {
    title: `Przyjaciele fundacji - Fundacja Cudaki`,
    description: `Przyjaciele fundacji - Fundacja Cudaki`,
    openGraph: {
      title: `Przyjaciele fundacji - Fundacja Cudaki`,
      locale: "pl_PL",
      type: "website",
      description: `Przyjaciele fundacji - Fundacja Cudaki`,
      url: `https://cudaki.vercel.app/przyjaciele-fundacji`,
      siteName: "Cudaki",
    },
  };
}

const PartnersPage = () => {
  return (
    <main className="flex flex-col gap-[24px] lg:gap-[48px] items-center justify-between pt-12 lg:pt-[6rem]">
      <SectionPartnersBig />
    </main>
  );
};

export default PartnersPage;
