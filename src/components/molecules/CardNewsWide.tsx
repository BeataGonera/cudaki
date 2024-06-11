import { News } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import ButtonReadMore from "../atoms/ButtonReadMore";

const CardNewsWide = ({ newsObject }: { newsObject: News }) => {
  return (
    <Link
      href={`/aktualnosci/${newsObject.slug}`}
      className="w-full h-[344px] lg:h-[436px] p-[16px] bg-[#E0DAE1] rounded-[8px] relative group"
    >
      <div className="relative w-full h-full inline-block overflow-hidden ">
        <Image
          src={newsObject.featuredImg}
          alt={newsObject.title}
          fill
          className="w-full h-full object-cover rounded-[8px] group-hover:scale-110 duration-500 transition-transform"
        />
      </div>
      <div className="absolute w-full h-full bottom-0 left-0 p-[32px] flex flex-col lg:flex-row ">
        <div className="flex w-full h-full justify-end flex-col gap-[16px]">
          <h5 className="text-white text-[24px] font-bold lg:max-w-[657px] leading-[28.18px]">
            {newsObject.title}
          </h5>
          <p className="text-white hidden lg:flex">{newsObject.excerpt}</p>
        </div>
        <div className="w-full lg:w-[20%] lg:h-full flex items-end justify-end">
          <span className="text-white">
            <ButtonReadMore color={"white"} />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CardNewsWide;
