import React from "react";
import SectionPattern from "../SectionPattern";
import SectionContainer from "../SectionContainer";
import PlaceCard from "@/components/cards/PlaceCard";
import Pagination from "@/components/Pagination";

const PlacesSection = () => {
    return (
        <SectionPattern divClassName="py-28">
            <SectionContainer className="relative">
                <div className="flex flex-col items-center w-full h-full gap-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 place-items-center w-full gap-10">
                        <div className="w-[310px] min-[500px]:w-[440px] h-[520px] min-[500px]:h-[630px]">
                            <PlaceCard
                                place={{
                                    name: "Iles de saloum",
                                    description:
                                        "Lorem ipsum dolor sit amet consectetur. Faucibus sit vestibulum etiam pellentesque gravida metus sit quam. Quisque nibh pellentesque tincidunt etiam fermentum in aliquet. Quisque nibh pellentesque tincidunt",
                                    bgImg: "bg-[url('/assets/ile-de-saloum.png')]",
                                }}
                            />
                        </div>
                        <div className="w-[310px] min-[500px]:w-[440px] h-[520px] min-[500px]:h-[630px]">
                            <PlaceCard
                                place={{
                                    name: "CICES Foire",
                                    description:
                                        "Lorem ipsum dolor sit amet consectetur. Faucibus sit vestibulum etiam pellentesque gravida metus sit quam. Quisque nibh pellentesque tincidunt etiam fermentum in aliquet. Quisque nibh pellentesque tincidunt",
                                    bgImg: "bg-[url('/assets/cices-foire.png')]",
                                }}
                            />
                        </div>
                        <div className="w-[310px] min-[500px]:w-[440px] h-[520px] min-[500px]:h-[630px]">
                            <PlaceCard
                                place={{
                                    name: "Lac Rose",
                                    description:
                                        "Lorem ipsum dolor sit amet consectetur. Faucibus sit vestibulum etiam pellentesque gravida metus sit quam. Quisque nibh pellentesque tincidunt etiam fermentum in aliquet. Quisque nibh pellentesque tincidunt",
                                    bgImg: "bg-[url('/assets/lac-rose.png')]",
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex justify-end w-full">
                        <Pagination
                            currentPage={8}
                            totalPages={10}
                            href="tourism"
                        />
                    </div>
                </div>
            </SectionContainer>
        </SectionPattern>
    );
};

export default PlacesSection;
