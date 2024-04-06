"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const CarouselHome = () => {
  return (
    <div className="">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{
          align: "start",
        }}
        orientation="horizontal"
        className="max-w-screen h-full "
      >
        <CarouselContent className=" h-[250px] md:h-[625px]  ">
          <CarouselItem className="homeCarouselImg1 h-full w-screen">
            <div>
              <span className=" text-[#f44336] font-bold text-[40px]">
                Cosmatics Warehousing.
              </span>
              <div>
                Unlock the Power of Beauty with AWL India: Transforming
                Cosmetics Warehousing for Flawless Supply Chain Solutions.
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="homeCarouselImg2 h-full w-screen">
            {/* <Image
              src={homeCarousel2}
              alt="Image"
              width={3500}
              height={2800}
              className="rounded-md object-contain "
            /> */}
          </CarouselItem>
          <CarouselItem className="homeCarouselImg3 h-full w-screen">
            {/* <Image
              src={homeCarousel3}
              alt="Image"
              width={5036}
              height={3353}
              className="rounded-md object-contain "
            /> */}
          </CarouselItem>
          {/* {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index} className=" h-screen w-full bg-red-400 ">
              <div className=" "></div>
            </CarouselItem>

          ))} */}
        </CarouselContent>
        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      </Carousel>
    </div>
  );
};

export default CarouselHome;
