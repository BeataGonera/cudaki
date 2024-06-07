import Image from "next/image";
import Link from "next/link";
import HeadingH3 from "../atoms/HeadingH3";
import ButtonReadMore from "../atoms/ButtonReadMore";
import { News } from "@/utils/types";

const CardNews = ({ newsObject }: { newsObject: News }) => {
  return (
    <Link
      href="/"
      className="w-full flex lg:flex-col rounded-lg bg-[#E0DAE1] p-[16px] h-[193px] lg:h-[463px] gap-[16px]"
    >
      <div className="w-full h-full lg:h-[191px] lg:min-h-[191px] relative">
        <Image
          src={newsObject.featuredImg}
          fill
          className="w-full h-[191px] object-cover rounded-lg"
          alt={newsObject.title}
        />
      </div>
      <div className="w-full h-full flex flex-col gap-[16px] justify-between">
        <div className="flex flex-col gap-[16px]">
          <HeadingH3 label={newsObject.title} />
          <p className="hidden lg:flex">{newsObject.excerpt}</p>
        </div>
        <ButtonReadMore />
      </div>
    </Link>
  );
};

export default CardNews;
