import { getPrivacyPolicyContent } from "@/utils/methods";

const PrivacyPolicyPage = async () => {
  const pageDetails = await getPrivacyPolicyContent();
  return (
    <main className="flex flex-col gap-[24px] lg:gap-[48px] items-center justify-between pt-12 lg:pt-[6rem] px-2 lg:px-24 2xl:px-128">
      {pageDetails ? (
        <h1 className="font-bold text-[24px] lg:text-[80px] text-center w-full">
          {pageDetails.title}
        </h1>
      ) : null}
      {pageDetails ? (
        <div className="max-w-[700px] text-left flex flex-col gap-[24px]">
          {pageDetails.content}
        </div>
      ) : null}
    </main>
  );
};

export default PrivacyPolicyPage;
