import React from "react";
import SectionPattern from "../SectionPattern";
import SectionContainer from "../SectionContainer";
import SectionHeading from "@/components/messages/SectionHeading";
import DotsDeco from "@/public/assets/dots-deco.svg";
import { useTranslations } from "next-intl";
import SectionSubheading from "@/components/messages/SectionSubheading";
import Image from "next/image";
import senegalMap from "@/public/assets/senegal-map.png";
import MapLocationCarousel from "@/components/carousels/MapLocationCarousel";

const images = [
    { url: "bg-[url('/assets/canoe-img.png')]", text: "Canoe" },
    { url: "bg-[url('/assets/riu-baobab.png')]", text: "Riu Baobab" },
    { url: "bg-[url('/assets/ile-de-goree.jpg')]", text: "Ile de Goree" },
    { url: "bg-[url('/assets/ile-de-goree2.png')]", text: "Ile de Goree" },
];

const MapLocationSection = () => {
    const t = useTranslations("TourismPage.MapLocationSection");

    return (
        <SectionPattern divClassName="py-28">
            <SectionContainer className="relative">
                <div className="absolute -top-10 left-20">
                    <DotsDeco />
                </div>
                <div className="flex flex-col items-center w-full h-full gap-10">
                    <div className="flex flex-col items-center">
                        <SectionHeading>
                            {(tags) => t.rich("heading", tags)}
                        </SectionHeading>
                        <SectionSubheading>
                            {(tags) => t.rich("subheading", tags)}
                        </SectionSubheading>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center w-full h-full px-8">
                            <Image
                                src={senegalMap}
                                alt="Sénégal"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="flex flex-col items-center w-full h-full">
                            <MapLocationCarousel
                                images={images.map((image) => image.url)}
                                texts={images.map((image) => image.text)}
                            />
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </SectionPattern>
    );
};

export default MapLocationSection;
