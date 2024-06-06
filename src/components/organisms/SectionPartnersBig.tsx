import CardPartner from "../molecules/CardPartner";

const SectionPartnersBig = () => {
  return (
    <section className="w-full flex flex-col gap-[32px] px-2 lg:px-24 2xl:px-128">
      <h1 className="text-h1-sm lg:text-h1">Przyjaciele Cudaka</h1>
      <div className="flex flex-col gap-[64px] lg:gap-[32px]">
        <CardPartner
          partner={{
            name: "Staffly",
            description:
              "Lorem ipsum dolor sit amet consectetur. Semper posuere pulvinar cursus accumsan vivamus risus. Gravida ac in interdum egestas fermentum cursus etiam mattis sed. Odio pellentesque phasellus lobortis odio libero fames sagittis. Elementum scelerisque ut sed porta sit mattis pellentesque tincidunt. Laoreet laoreet sed bibendum et ultrices enim porttitor. Lectus interdum sed rutrum vel etiam commodo suspendisse. Quis diam in erat purus enim eu tellus iaculis at. ",
            img: "/staffly.webp",
          }}
        />
        <CardPartner
          partner={{
            name: "Alesoft",
            description:
              "Lorem ipsum dolor sit amet consectetur. Semper posuere pulvinar cursus accumsan vivamus risus. Gravida ac in interdum egestas fermentum cursus etiam mattis sed. Odio pellentesque phasellus lobortis odio libero fames sagittis. Elementum scelerisque ut sed porta sit mattis pellentesque tincidunt. Laoreet laoreet sed bibendum et ultrices enim porttitor. Lectus interdum sed rutrum vel etiam commodo suspendisse. Quis diam in erat purus enim eu tellus iaculis at. ",
            img: "/alesoft.webp",
          }}
        />
      </div>
    </section>
  );
};

export default SectionPartnersBig;
