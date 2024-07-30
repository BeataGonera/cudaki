import SectionFaniMani from "@/components/organisms/SectionFaniMani";

export async function generateMetadata() {
  return {
    title: `FaniMani - wesprzyj Fundację Cudaki`,
    description: `FaniMani - wesprzyj Fundację Cudaki`,
    openGraph: {
      title: `FaniMani - wesprzyj Fundację Cudaki`,
      locale: "pl_PL",
      type: "website",
      description: `FaniMani - wesprzyj Fundację Cudaki`,
      url: `https://cudaki.vercel.app/fanimani`,
      siteName: "Cudaki",
    },
  };
}

const MissionPage = () => {
  return (
    <main className="flex flex-col gap-[24px] lg:gap-[48px] items-center justify-between pt-12 lg:pt-[6rem]">
      <SectionFaniMani />
    </main>
  );
};

export default MissionPage;
