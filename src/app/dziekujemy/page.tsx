import { getDocumentsPageDetails } from "@/utils/methods";

export async function generateMetadata() {
  return {
    title: `Dziękujemy za wsparcie - Fundacja Cudaki`,
    description: `Dziękujemy za wsparcie - Fundacja Cudaki`,
    openGraph: {
      title: `Dziękujemy za wsparcie - Fundacja Cudaki`,
      locale: "pl_PL",
      type: "website",
      description: `Dziękujemy za wsparcie - Fundacja Cudaki`,
      url: `https://cudaki.vercel.app/dziekujemy`,
      siteName: "Cudaki",
    },
  };
}

const ThankYouPage = async () => {
  const content = await getDocumentsPageDetails();
  return (
    <main className="flex flex-col gap-[24px] lg:gap-[48px] items-center justify-between pt-12 lg:pt-[6rem] px-2 lg:px-24 2xl:px-128">
      <div className="flex flex-col lg:flex-row gap-[24px] justify-between w-full lg:mt-6 ">
        <div className="w-full lg:w-1/2 flex flex-col gap-[24px] max-w-[560px]">
          <h1 className="text-[24px] lg:text-[80px] font-bold ">
            Dziękujemy.{" "}
          </h1>
        </div>
      </div>
    </main>
  );
};

export default ThankYouPage;
