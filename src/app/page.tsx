import BannerHome from "@/components/organisms/BannerHome";
import { CarouselHome } from "@/components/organisms/CarouselHome";
import SectionAbout from "@/components/organisms/SectionAbout";
import SectionFriends from "@/components/organisms/SectionFriends";
import SectionNews from "@/components/organisms/SectionNews";
import { getHomePageDetails } from "@/utils/methods";

const Home = async () => {
  const homeDetails = await getHomePageDetails();
  console.log(homeDetails);
  return (
    <main className="flex min-h-screen flex-col gap-24 lg:gap-24 items-center justify-between ">
      {homeDetails ? (
        <CarouselHome banners={homeDetails.bannerCarousel} />
      ) : null}
      <SectionNews />
      <SectionAbout />
      <SectionFriends />
    </main>
  );
};

export default Home;
