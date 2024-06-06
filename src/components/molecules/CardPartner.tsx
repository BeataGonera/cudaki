import Image from "next/image";
import HeadingH2 from "../atoms/HeadingH2";
import ButtonCTA from "../atoms/buttonCTA";
import { Partner } from "@/utils/types";

const CardPartner = ({ partner }: { partner: Partner }) => {
  return (
    <article className="w-full flex flex-col lg:flex-row gap-[16px] border-b-[1px] border-primary-custom pb-12">
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="w-full h-full aspect-video lg:aspect-none lg:max-w-[320px] relative">
          <Image
            src={partner.img}
            alt={`Logo ${partner.name}`}
            fill
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col gap-[32px] w-full lg:w-1/2">
        <HeadingH2 label={partner.name} />
        <p className="max-w-[471px]">{partner.description}</p>
        <div className="w-full max-w-[368px]">
          <ButtonCTA label="Czytaj więcej" icon={false} />
        </div>
      </div>
    </article>
  );
};

export default CardPartner;
