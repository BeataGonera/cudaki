import SectionDocuments from "@/components/organisms/SectionDocuments";
import Image from "next/image";

const DocumentsPage = () => {
  return (
    <main className="flex flex-col gap-[24px] lg:gap-[48px] items-center justify-between pt-12 lg:pt-[6rem] px-2 lg:px-24 2xl:px-128">
      <div className="flex flex-col lg:flex-row gap-[24px] justify-between w-full ">
        <div className="w-full lg:w-1/2 flex flex-col gap-[24px] max-w-[560px]">
          <h1 className="text-[24px] lg:text-[80px] font-bold ">
            Dokumenty fundacji
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Semper posuere pulvinar
            cursus accumsan vivamus risus. Gravida ac in interdum egestas
            fermentum cursus etiam mattis sed. Odio pellentesque phasellus
            lobortis odio libero fames sagittis. Elementum scelerisque ut sed
            porta sit mattis pellentesque tincidunt. Laoreet laoreet sed
            bibendum et ultrices enim porttitor. Lectus interdum sed rutrum vel
            etiam commodo suspendisse. Quis diam in erat purus enim eu tellus
            iaculis at. Aenean at praesent mauris facilisi purus aenean. Purus
            tristique mattis malesuada purus congue elit non. Quam turpis
            gravida montes praesent. Felis in eget enim nulla quisque. Ut
            vulputate urna suspendisse erat semper. Viverra suspendisse mollis
            lacinia enim risus mauris. Convallis mi amet sed egestas morbi.
          </p>
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
