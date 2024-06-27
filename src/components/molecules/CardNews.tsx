import Image from "next/image";
import Link from "next/link";
import HeadingH3 from "../atoms/HeadingH3";
import ButtonReadMore from "../atoms/ButtonReadMore";
import { News } from "@/utils/types";
import styles from "./styles.module.css";

const CardNews = ({ newsObject }: { newsObject: News }) => {
  return (
    <Link
      href={`/aktualnosci/${newsObject.slug}`}
      className="w-full flex lg:flex-col rounded-lg bg-[#E0DAE1] p-[16px] h-[193px] lg:h-[463px] gap-[16px] group"
    >
      <div className="w-full h-full lg:h-[191px] lg:min-h-[191px] relative inline-block overflow-hidden">
        <Image
          src={newsObject.featuredImg}
          fill
          className="w-full h-[191px] object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
          alt={newsObject.title}
        />
      </div>
      <div className="w-full h-full flex flex-col gap-[16px] justify-between">
        <div className="flex flex-col gap-[16px]">
          <div className="hidden lg:flex w-full">
            <HeadingH3 label={newsObject.title} />
          </div>
          <div className="flex lg:hidden w-full">
            <HeadingH3 label={newsObject.title.slice(0, 50)} />
          </div>
          <div className={`${styles.excerpt} hidden lg:flex`}>
            {newsObject.excerpt}
          </div>
        </div>
        <ButtonReadMore color={"purple"} />
      </div>
    </Link>
  );
};

export default CardNews;
