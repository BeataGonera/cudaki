import HeadingH2 from "../atoms/HeadingH2";
import ButtonCTA from "../atoms/buttonCTA";

const SectionFriends = () => {
  return (
    <section className="w-full px-2 lg:px-24 2xl:px-128 ">
      <HeadingH2 label="Przyjaciele Cudaka" />
      <ButtonCTA label="Więcej o partnerach" icon={false} />
    </section>
  );
};

export default SectionFriends;
