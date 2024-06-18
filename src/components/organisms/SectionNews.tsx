import { getAllNews } from "@/utils/methods";
import HeadingH2 from "../atoms/HeadingH2";
import ButtonCTA from "../atoms/buttonCTA";
import CardNews from "../molecules/CardNews";
import { News } from "@/utils/types";

const SectionNews = async () => {
  const news = await getAllNews();
  return (
    <section className="w-full flex flex-col items-center gap-[32px] px-2 lg:px-24 2xl:px-128">
      <HeadingH2 label="Aktualności" />
      {news ? (
        <div className="w-full flex flex-col lg:flex-row gap-[16px] ">
          {news.map((newsObject: News, index: number) => (
            <CardNews key={index} newsObject={newsObject} />
          ))}
        </div>
      ) : null}
      <div className="w-full lg:w-[368px]">
        <ButtonCTA label={"Zobacz więcej"} icon={false} href={"/aktualnosci"} />
      </div>
    </section>
  );
};

export default SectionNews;
