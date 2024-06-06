import CardNews from "../molecules/CardNews";

const SectionNewsBig = () => {
  return (
    <section className="w-full flex flex-col gap-[32px] px-2 lg:px-24 2xl:px-128">
      <h1 className="text-h1-sm lg:text-h1">Aktualności</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[16px]">
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
      </div>
    </section>
  );
};

export default SectionNewsBig;
