import { Carousel } from "flowbite-react";
import CardBannerHome from "./CardBannerHome";

export function CarouselHome() {
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
              "h-full absolute top-0 hidden lg:flex lg:left-24 flex flex-col justify-center gap-2",
            base: "w-[9.5px] h-[9.5px] rounded-full",
          },
          control: {
            base: "hidden",
          },
          scrollContainer: {
            snap: "snap-y",
          },
        }}
      >
        <CardBannerHome />
        <CardBannerHome />
        <CardBannerHome />
        <CardBannerHome />
      </Carousel>
    </div>
  );
}
