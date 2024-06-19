import SectionContact from "@/components/organisms/SectionContact";

export async function generateMetadata() {
  return {
    title: `Kontakt - Fundacja Cudaki`,
    description: `Kontakt - Fundacja Cudaki`,
    openGraph: {
      title: `Kontakt - Fundacja Cudaki`,
      locale: "pl_PL",
      type: "website",
      description: `Kontakt - Fundacja Cudaki`,
      url: `https://cudaki.vercel.app/kontakt`,
      siteName: "Cudaki",
    },
  };
}

const ContactPage = () => {
  return (
    <main className="flex flex-col gap-[24px] lg:gap-[48px] items-center justify-between pt-12 lg:pt-[6rem]">
      <SectionContact />
    </main>
  );
};

export default ContactPage;
