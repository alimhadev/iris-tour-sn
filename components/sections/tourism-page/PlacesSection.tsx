import React from "react";
import SectionPattern from "../SectionPattern";
import SectionContainer from "../SectionContainer";
import PlaceCard from "@/components/cards/PlaceCard";

const PlacesSection = () => {
    return (
        <SectionPattern divClassName="py-28">
            <SectionContainer className="relative">
                <div className="flex flex-col items-center w-full h-full gap-10">
                    <div className="flex flex-col items-center">
                        <div className="w-[310px] min-[500px]:w-[440px] h-[520px] min-[500px]:h-[680px]">
                            <PlaceCard
                                place={{
                                    name: "Iles de saloum",
                                    description:
                                        "Lorem ipsum dolor sit amet consectetur. Faucibus sit vestibulum etiam pellentesque gravida metus sit quam. Quisque nibh pellentesque tincidunt etiam fermentum in aliquet. Quisque nibh pellentesque tincidunt",
                                    bgImg: "bg-[url('/assets/ile-de-saloum.png')]",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </SectionPattern>
    );
};

export default PlacesSection;
