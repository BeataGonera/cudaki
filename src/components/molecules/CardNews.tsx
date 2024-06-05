import Image from "next/image";
import Link from "next/link";
import HeadingH3 from "../atoms/HeadingH3";
import ButtonReadMore from "../atoms/ButtonReadMore";

const CardNews = () => {
  return (
    <Link
      href="/"
      className="w-full flex flex-col rounded-lg bg-[#E0DAE1] p-[16px] h-[463px] gap-[16px]"
    >
      <div className="w-full h-[191px] relative">
        <Image
          src="/example.webp"
          fill
          className="w-full h-[191px] object-cover rounded-lg"
          alt=""
        />
      </div>
      <div className="w-full flex flex-col gap-[16px] justify-between">
        <div className="flex flex-col gap-[16px]">
          <HeadingH3 label="Lorem ipsum dolor sit amet consectetur. Habitasse sit non quisque volutpat netus." />
          <p>
            Lorem ipsum dolor sit amet consectetur. Habitasse sit non quisque
            volutpat netus. Habitasse sit non.
          </p>
        </div>
        <ButtonReadMore href="/" />
      </div>
    </Link>
  );
};

export default CardNews;
