"use client";

import { useState, useEffect, FC } from "react";
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

interface FavoritePlacesCarouselProps {
    images: string[];
    texts: string[];
}

const FavoritePlacesCarousel: FC<FavoritePlacesCarouselProps> = ({
    images,
    texts,
}) => {
    const [api, setApi] = useState<CarouselApi>();
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);

    return (
        <div className="relative flex flex-col justify-center items-center w-full h-full">
            <div className="flex flex-col w-fit gap-0">
                <div className="flex justify-between items-center w-full gap-2">
                    <div className="flex gap-2">
                        {scrollSnaps.map((_, index) => (
                            <DotButton
                                key={index}
                                onClick={() => onDotButtonClick(index)}
                                className={`w-[14px] h-[14px] rounded-full bg-secondary-default ${
                                    index === selectedIndex
                                        ? "opacity-100"
                                        : "opacity-50"
                                }`}
                            />
                        ))}
                    </div>
                    <span className="font-semibold text-secondary-default text-[clamp(14px,3vw,21px)]">
                        {selectedIndex + 1} / {scrollSnaps.length}
                    </span>
                </div>
                <Carousel
                    setApi={setApi}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-[500px]"
                >
                    <CarouselContent className="pt-5 pb-10">
                        {images.map((image, index) => (
                            <CarouselItem key={index} className="basis-1/3">
                                <ImageTextCard
                                    image={image}
                                    text={texts[index]}
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
                    />
                    <CarouselNext
                        variant="carousel"
                        className="right-0 translate-x-1/2 h-[60px] w-[60px]"
                    />
                </Carousel>
            </div>
        </div>
    );
};

export default FavoritePlacesCarousel;
