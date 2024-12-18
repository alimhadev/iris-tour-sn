"use client";

import { useState, FC } from "react";
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
import TestimonyCard from "../cards/TestimonyCard";
import { StaticImageData } from "next/image";

interface TestimonyCardProps {
    testimony: string;
    avatar?: StaticImageData;
    name: string;
    role: string;
}

interface TestimonialsCarouselProps {
    testimonials: TestimonyCardProps[];
}

const TestimonialsCarousel: FC<TestimonialsCarouselProps> = ({
    testimonials,
}) => {
    const [api, setApi] = useState<CarouselApi>();
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);
    return (
        <div className="relative flex flex-col-reverse justify-center items-center w-full h-full">
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
            <Carousel
                setApi={setApi}
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-[700px]"
            >
                <CarouselContent className="-ml-80 py-10">
                    {testimonials.map((testimony, index) => (
                        <CarouselItem key={index} className="pl-80 basis-1/2">
                            <TestimonyCard
                                testimony={testimony.testimony}
                                avatar={testimony.avatar}
                                name={testimony.name}
                                role={testimony.role}
                                className={`w-[500px] h-[300px] shadow-lg ${
                                    index === selectedIndex
                                        ? "border border-secondary-default shadow-secondary-default/50"
                                        : "shadow-[0_5px_20px_rgba(0,0,0,0.4)]"
                                } transition-all duration-500`}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="absolute -top-5 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 flex items-center justify-center gap-4">
                    <CarouselPrevious
                        variant="carousel"
                        className="static h-[60px] w-[60px] shadow-[0_0_10px_rgba(0,0,0,0.4)]"
                    />
                    <CarouselNext
                        variant="carousel"
                        className="static h-[60px] w-[60px] shadow-[0_0_10px_rgba(0,0,0,0.4)]"
                    />
                </div>
            </Carousel>
        </div>
    );
};

export default TestimonialsCarousel;
