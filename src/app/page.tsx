import { CarouselHome } from "@/components/organisms/CarouselHome";
import SectionAbout from "@/components/organisms/SectionAbout";
import SectionFriends from "@/components/organisms/SectionFriends";
import SectionNews from "@/components/organisms/SectionNews";
import { getHomePageDetails } from "@/utils/methods";

const Home = async () => {
  const homeDetails = await getHomePageDetails();
  return (
    <main className="flex min-h-screen flex-col gap-[24px] lg:gap-24 items-center justify-between ">
      {homeDetails ? <CarouselHome /> : null}
      <SectionNews />
      {homeDetails ? (
        <SectionAbout aboutDetails={homeDetails.aboutSection} />
      ) : null}
      <SectionFriends />
    </main>
  );
};

export default Home;
