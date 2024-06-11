import SectionBoardMembers from "@/components/organisms/SectionBoardMembers";
import SectionCouncilMembers from "@/components/organisms/SectionCouncilMembers";

const MembersPage = () => {
  return (
    <main className="flex flex-col gap-[24px] lg:gap-[48px] items-center justify-between pt-12 lg:pt-[6rem] px-2 lg:px-24 2xl:px-128">
      <h1 className="font-bold text-[24px] lg:text-[80px] text-left w-full">
        Władze Fundacji
      </h1>
      <SectionBoardMembers />
      <SectionCouncilMembers />
    </main>
  );
};

export default MembersPage;
