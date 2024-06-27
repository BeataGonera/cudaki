import { Carousel } from "flowbite-react";
import CardBannerHome from "./CardBannerHome";
import { Banner } from "@/utils/types";

export function CarouselHome({ banners }: { banners: Banner[] }) {
  return (
    <div className="w-full">
      <Carousel
        slideInterval={5000}
        theme={{
          root: {
            base: "relative h-[100vh] lg:h-[80vh]",
          },
          indicators: {
            active: {
              on: "bg-[#7A68AC] z-50",
              off: "bg-[#E0DAE1] z-50",
            },
            wrapper:
              "h-full absolute top-0 hidden lg:flex lg:left-12 flex flex-col justify-center gap-2",
            base: "w-[9.5px] h-[9.5px] rounded-full",
          },
          control: {
            base: "hidden",
          },
          scrollContainer: {
            base: "flex h-full snap-none overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg cursor-pointer",
          },
        }}
      >
        {banners.map((banner, index: number) => (
          <CardBannerHome key={index} banner={banner} />
        ))}
      </Carousel>
    </div>
  );
}
