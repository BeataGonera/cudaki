import HeadingH2 from "../atoms/HeadingH2";
import ButtonCTA from "../atoms/buttonCTA";
import CardNews from "../molecules/CardNews";

const SectionNews = () => {
  return (
    <section className="w-full flex flex-col items-center gap-[32px] px-2 lg:px-24 2xl:px-128">
      <HeadingH2 label="Aktualności" />
      <div className="w-full flex flex-col lg:flex-row gap-[16px] ">
        <CardNews />
        <CardNews />
        <CardNews />
      </div>
      <div className="w-full lg:w-[368px]">
        <ButtonCTA label={"Zobacz więcej"} icon={false} />
      </div>
    </section>
  );
};

export default SectionNews;
