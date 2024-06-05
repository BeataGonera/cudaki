import Image from "next/image";
import Chip from "../atoms/chip";
import ButtonCTA from "../atoms/buttonCTA";

const CardBannerHome = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse justify-between w-full gap-2 h-screen pt-24 lg:h-[80vh] lg:pt-48 px-2 bg-beige-bg lg:px-24 2xl:px-128">
      <div className="w-full aspect-square relative lg:w-1/2">
        <Image
          src="/banner.webp"
          fill
          alt="Logo fundacji Cudaki"
          className="object-contain"
        />
      </div>
      <div className="flex flex-col w-full lg:w-1/2 gap-2 lg:gap-[24px] max-w-[568px]">
        <Chip label={"lorem ipsum"} />
        <h1 className="text-h1-sm lg:text-h1">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <ButtonCTA label="CTA" icon={true} />
      </div>
    </div>
  );
};

export default CardBannerHome;
