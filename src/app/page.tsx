import BannerHome from "@/components/organisms/BannerHome";
import SectionAbout from "@/components/organisms/SectionAbout";
import SectionFriends from "@/components/organisms/SectionFriends";
import SectionNews from "@/components/organisms/SectionNews";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-4 lg:gap-24 items-center justify-between bg-beige-bg">
      <BannerHome />
      <SectionNews />
      <SectionAbout />
      <SectionFriends />
    </main>
  );
}
