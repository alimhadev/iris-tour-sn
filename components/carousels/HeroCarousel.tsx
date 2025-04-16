/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect } from "react";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import ImageTextCard from "../cards/ImageTextCard";
import {
    DotButton,
    useDotButton,
} from "@/components/carousels/CarouselDotButton";

type PropType = {
    setSelectedBgImg: (bgImg: string) => void;
    images: string[];
};

const HeroCarousel = ({ setSelectedBgImg, images }: PropType) => {
    const [api, setApi] = useState<CarouselApi>();
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);

    const handleDotButtonClick = (index: number) => {
        onDotButtonClick(index);
        setSelectedBgImg(images[index]);
    };

    useEffect(() => {
        const index = api?.selectedScrollSnap() ?? 0;
        handleDotButtonClick(index);
    }, [selectedIndex]);

    return (
        <div className="relative flex justify-center items-end w-full h-full">
            <div className="absolute top-[40%] right-0 flex flex-col gap-2">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        onClick={() => handleDotButtonClick(index)}
                        className={`w-[14px] h-[14px] rounded-full bg-secondary-default ${
                            index === selectedIndex
                                ? "opacity-100"
                                : "opacity-50"
                        }`}
                    />
                ))}
            </div>
            <Carousel
                setApi={setApi}
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-[500px]"
            >
                <CarouselContent className="py-10">
                    {images.map((image, index) => (
                        <CarouselItem key={index} className="basis-1/3">
                            <ImageTextCard
                                image={image}
                                className={`w-full h-[170px] ${
                                    index === selectedIndex
                                        ? "border border-secondary-default shadow-lg shadow-secondary-default/50"
                                        : ""
                                }`}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious
                    variant="carousel"
                    className="left-0 -translate-x-1/2 h-[60px] w-[60px]"
                    onClick={() =>
                        handleDotButtonClick(
                            selectedIndex - 1 === -1
                                ? images.length - 1
                                : selectedIndex - 1
                        )
                    }
                />
                <CarouselNext
                    variant="carousel"
                    className="right-0 translate-x-1/2 h-[60px] w-[60px]"
                    onClick={() =>
                        handleDotButtonClick(
                            selectedIndex + 1 === images.length
                                ? 0
                                : selectedIndex + 1
                        )
                    }
                />
            </Carousel>
        </div>
    );
};

export default HeroCarousel;
