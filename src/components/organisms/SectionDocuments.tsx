import { getAllDocuments } from "@/utils/methods";
import Accordion from "../atoms/Accordion";

const SectionDocuments = async () => {
  const documents = await getAllDocuments();
  return (
    <section className="w-full flex flex-col gap-[24px] items-center">
      {documents ? (
        <div className="w-full lg:w-[704px] max-w-[704px] flex flex-col gap-[24px]">
          {documents.map((document, index: number) => {
            return (
              <Accordion
                label={document.name}
                content={document.content}
                documentLink={document.document}
                key={index}
              />
            );
          })}
        </div>
      ) : null}
    </section>
  );
};

export default SectionDocuments;
