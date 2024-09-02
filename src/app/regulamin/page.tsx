import { getTermsAndConditionsContent } from "@/utils/methods";

const TermsAndConditionsPage = async () => {
  const pageDetails = await getTermsAndConditionsContent();
  return (
    <main className="flex flex-col gap-[24px] lg:gap-[48px] items-center justify-between pt-12 lg:pt-[6rem] px-2 lg:px-24 2xl:px-128">
      {pageDetails ? (
        <div className="max-w-[700px] text-left flex flex-col gap-[24px] content">
          {pageDetails.content}
        </div>
      ) : null}
    </main>
  );
};

export default TermsAndConditionsPage;
