import { getAllBoardMembers } from "@/utils/methods";
import { BoardMember } from "@/utils/types";
import CardMember from "../molecules/CardMember";

const SectionBoardMembers = async () => {
  const boardMembers = await getAllBoardMembers();
  return (
    <section className="w-full flex flex-col gap-[24px] items-center">
      {boardMembers ? (
        <div className="w-full flex flex-col gap-[32px]">
          <h2 className="text-[24px] lg:text-[48px] font-bold">Zarząd</h2>
          <div className="grid lg:grid-cols-4 gap-[48px] lg:gap-[16px]">
            {boardMembers.map((mamber: BoardMember, index: number) => (
              <CardMember member={mamber} key={index} />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default SectionBoardMembers;
