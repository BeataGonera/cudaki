import SectionMission from "@/components/organisms/SectionMission";

export async function generateMetadata() {
  return {
    title: `Misja fundacji - Fundacja Cudaki`,
    description: `Misja fundacji - Fundacja Cudaki`,
    openGraph: {
      title: `Misja fundacji - Fundacja Cudaki`,
      locale: "pl_PL",
      type: "website",
      description: `Misja fundacji - Fundacja Cudaki`,
      url: `https://cudaki.vercel.app/misja-fundacji`,
      siteName: "Cudaki",
    },
  };
}

const MissionPage = () => {
  return (
    <main className="flex flex-col gap-[24px] lg:gap-[48px] items-center justify-between pt-12 lg:pt-[6rem]">
      <SectionMission />
    </main>
  );
};

export default MissionPage;
