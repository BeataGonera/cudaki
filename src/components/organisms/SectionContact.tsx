import Image from "next/image";
import FormContact from "../molecules/FormContact";

const SectionContact = () => {
  return (
    <section className="w-full flex flex-col px-2 lg:px-24 2xl:px-128">
      <div className="w-full flex flex-col lg:flex-row justify-between">
        <div>
          <h1 className="font-bold text-[24px] lg:text-[80px] text-left w-full">
            Kontakt
          </h1>
          <FormContact />
        </div>

        <div className="relative w-full lg:w-1/2">
          <img
            src="/VectorReverse.webp"
            className="absolute h-[70%] lg:h-[130%] top-[-10%] lg:left-[-10%]"
          />
          <div className="relative w-full  aspect-square">
            <Image
              src="/contact.webp"
              fill
              className="w-full h-full object-cover rounded-[16px]"
              alt="Kobieta siedząca przed laptopem"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
