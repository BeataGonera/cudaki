import HeadingH2 from "../atoms/HeadingH2";
import ButtonCTA from "../atoms/buttonCTA";
import CardNews from "../molecules/CardNews";

const SectionNews = () => {
  return (
    <section className="w-full flex flex-col items-center gap-[32px] px-2 lg:px-24 2xl:px-128">
      <HeadingH2 label="Aktualności" />
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 grid-rows-1 gap-[16px] ">
        <CardNews />
        <CardNews />
        <CardNews />
      </div>
      <ButtonCTA label={"Zobacz więcej"} icon={false} />
    </section>
  );
};

export default SectionNews;
