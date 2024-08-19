import SectionDocuments from "@/components/organisms/SectionDocuments";
import { getDocumentsPageDetails } from "@/utils/methods";
import Image from "next/image";

export async function generateMetadata() {
  return {
    title: `Dokumenty fundacji - Fundacja Cudaki`,
    description: `Dokumenty fundacji - Fundacja Cudaki`,
    openGraph: {
      title: `Dokumenty fundacji - Fundacja Cudaki`,
      locale: "pl_PL",
      type: "website",
      description: `Dokumenty fundacji - Fundacja Cudaki`,
      url: `https://cudaki.vercel.app/dokumenty-fundacji`,
      siteName: "Cudaki",
    },
  };
}

const DocumentsPage = async () => {
  const content = await getDocumentsPageDetails();
  return (
    <main className="flex flex-col gap-[24px] lg:gap-[48px] items-center justify-between pt-12 lg:pt-[6rem] px-2 lg:px-24 2xl:px-128">
      <div className="flex flex-col lg:flex-row gap-[24px] justify-between w-full lg:mt-6 ">
        <div className="w-full lg:w-1/2 flex flex-col gap-[24px] max-w-[560px]">
          <h1 className="text-[24px] lg:text-[80px] font-bold ">
            Dokumenty fundacji
          </h1>
          <div>{content}</div>
        </div>

        <div className="relative w-full lg:w-1/2 aspect-square lg:aspect-video">
          <Image
            src="/documents.webp"
            fill
            alt="Zbliżenie na ręce ludzi podpisujących dokumenty"
            className="w-full h-full object-cover rounded-[16px]"
          />
        </div>
      </div>
      <SectionDocuments />
    </main>
  );
};

export default DocumentsPage;
