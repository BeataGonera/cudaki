import SectionNewsBig from "@/components/organisms/SectionNewsBig";

export async function generateMetadata() {
  return {
    title: `Fundacja Cudaki - Aktualności`,
    description: `Fundacja Cudaki - Aktualności`,
    openGraph: {
      title: `Fundacja Cudaki - Aktualności`,
      locale: "pl_PL",
      type: "website",
      description: `Fundacja Cudaki - Aktualności`,
      url: `https://cudaki.vercel.app/aktualnosci`,
      siteName: "Cudaki",
    },
  };
}

const NewsPage = () => {
  return (
    <main className="flex flex-col gap-[24px] lg:gap-[48px] items-center justify-between pt-12 lg:pt-[6rem]">
      <SectionNewsBig />
    </main>
  );
};

export default NewsPage;
