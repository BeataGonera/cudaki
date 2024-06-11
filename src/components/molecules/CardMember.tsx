import { BoardMember } from "@/utils/types";
import Image from "next/image";
import parse from "html-react-parser";

const CardMember = ({ member }: { member: BoardMember }) => {
  return (
    <div className="w-full flex flex-col gap-[24px]">
      <div className="w-full relative aspect-square lg:aspect-auto lg:h-[270px]">
        <Image
          src={member.featuredImg}
          alt={`Członek zarządu fundacji Cudaki - ${member.name}`}
          fill
          className="object-cover rounded-[16px] w-full h-full"
        />
      </div>
      <h5 className="text-[24px] font-bold">{member.name}</h5>
      <div className="flex flex-col gap-[16px]">
        {parse(member.description)}
      </div>
    </div>
  );
};

export default CardMember;
