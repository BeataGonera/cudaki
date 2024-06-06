import Image from "next/image";
import HeadingH3 from "../atoms/HeadingH3";
import FormNewsletter from "./FormNewsletter";

const SectionNewsletter = () => {
  return (
    <section className="flex flex-col lg:flex-row px-2 lg:px-24 2xl:px-128 pb-28">
      <div className="bg-[#F9FAFB] rounded-[16px] w-full flex flex-col lg:flex-row p-4 pb-12 lg:p-12 gap-24">
        <div className="w-full h-[100vw] mt-[-200px] lg:mt-unset lg:h-auto lg:w-[400px] flex flex-col lg:flex-row gap-24 justify-center relative">
          <div className="lg:absolute lg:bottom-0 w-full lg:w-[400px] lg:aspect-square">
            <Image
              src="/cudakNoVector.webp"
              alt="Logo fundacji Cudak"
              fill
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 lg:w-[486px] ">
          <HeadingH3 label="Zapisz się do newslettera" />
          <p>Zapisz się i bądź na bieżąco</p>
          <FormNewsletter />
        </div>
      </div>
    </section>
  );
};

export default SectionNewsletter;
