import { getAllNews } from "@/utils/methods";
import CardNews from "../molecules/CardNews";
import { News } from "@/utils/types";
import CardNewsWide from "../molecules/CardNewsWide";

const SectionNewsBig = async () => {
  const news = await getAllNews();

  return (
    <section className="w-full flex flex-col gap-[32px] px-2 lg:px-24 2xl:px-128">
      <h1 className="text-h1-sm lg:text-h1">Aktualności</h1>
      {news ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-[436px_436px] gap-[16px]">
          {news.map((newsObject: News, index: number) => {
            if (index === 0) {
              return (
                <div className="lg:col-start-1 lg:col-end-4 flex">
                  <CardNewsWide newsObject={newsObject} key={index} />
                </div>
              );
            } else {
              return <CardNews newsObject={newsObject} key={index} />;
            }
          })}
        </div>
      ) : null}
    </section>
  );
};

export default SectionNewsBig;
