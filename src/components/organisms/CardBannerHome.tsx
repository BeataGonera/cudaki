import Image from "next/image";
import Chip from "../atoms/chip";
import ButtonCTA from "../atoms/buttonCTA";
import { Banner } from "@/utils/types";

const CardBannerHome = ({ banner }: { banner: Banner }) => {
  return (
    <div className="flex flex-col lg:flex-row-reverse justify-between lg:items-center w-full gap-2 h-screen pt-[24px] lg:h-[80vh] lg:pt-[64px] px-2 bg-beige-bg lg:px-24 2xl:px-128">
      <div className="w-full aspect-square relative lg:w-1/2 h-[90%] rounded-[8px]">
        <Image
          src={banner.img}
          fill
          alt={banner.text}
          className="object-cover rounded-[8px]"
        />
      </div>
      <div className="flex flex-col w-full lg:w-1/2 gap-2 lg:gap-[24px] max-w-[568px]">
        <Chip label={banner.tag} />
        <h1 className="text-h1-sm lg:text-h1">{banner.text} </h1>
        <div className="w-full lg:w-[368px]">
          <ButtonCTA
            label={banner.cta.label}
            icon={true}
            href={banner.cta.link}
          />
        </div>
      </div>
    </div>
  );
};

export default CardBannerHome;
