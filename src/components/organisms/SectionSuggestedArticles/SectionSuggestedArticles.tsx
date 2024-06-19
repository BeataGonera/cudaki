import CardNews from "@/components/molecules/CardNews";
import { getLatestNews } from "@/utils/methods";
import { News } from "@/utils/types";

const SectionSuggestedArticles = async () => {
  const news = await getLatestNews();
  return (
    <>
      {news ? (
        <section className="w-full flex flex-col gap-[32px]">
          <h2 className="text-[48px] font-bold">Proponowane artykuły</h2>
          <div className="grid grid-cols-1 gap-[16px] lg:grid-cols-3">
            {news.map((newsObject: News, index: number) => (
              <CardNews newsObject={newsObject} key={index} />
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
};

export default SectionSuggestedArticles;
