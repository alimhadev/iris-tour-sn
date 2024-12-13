import React from "react";
import SectionPattern from "../SectionPattern";
import SectionContainer from "../SectionContainer";
import Pagination from "@/components/Pagination";
import HotelCard from "@/components/cards/HotelCard";

const HotelsSection = () => {
    return (
        <SectionPattern divClassName="py-28">
            <SectionContainer>
                <div className="flex flex-col items-center w-full h-full gap-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 place-items-center w-full gap-7">
                        <div className="w-[310px] min-[500px]:w-full h-[520px] min-[500px]:h-[630px]">
                            <HotelCard
                                hotel={{
                                    name: "Azalaï Hotels",
                                    slug: "azalai-hotels",
                                    description:
                                        "Lorem ipsum dolor sit amet consectetur. Faucibus sit vestibulum etiam pellentesque gravida metus sit quam. Quisque nibh pellentesque tincidunt etiam fermentum in aliquet. Quisque nibh pellentesque tincidunt",
                                    bgImg: "bg-[url('/assets/azalai-hotels.png')]",
                                }}
                            />
                        </div>
                        <div className="w-[310px] min-[500px]:w-full h-[520px] min-[500px]:h-[630px]">
                            <HotelCard
                                hotel={{
                                    name: "Onomo Hotels",
                                    slug: "onomo-hotels",
                                    description:
                                        "Lorem ipsum dolor sit amet consectetur. Faucibus sit vestibulum etiam pellentesque gravida metus sit quam. Quisque nibh pellentesque tincidunt etiam fermentum in aliquet. Quisque nibh pellentesque tincidunt",
                                    bgImg: "bg-[url('/assets/onomo-hotels.png')]",
                                }}
                            />
                        </div>
                        <div className="w-[310px] min-[500px]:w-full h-[520px] min-[500px]:h-[630px]">
                            <HotelCard
                                hotel={{
                                    name: "Ibis Dakar",
                                    slug: "ibis-dakar",
                                    description:
                                        "Lorem ipsum dolor sit amet consectetur. Faucibus sit vestibulum etiam pellentesque gravida metus sit quam. Quisque nibh pellentesque tincidunt etiam fermentum in aliquet. Quisque nibh pellentesque tincidunt",
                                    bgImg: "bg-[url('/assets/ibis-dakar.png')]",
                                }}
                            />
                        </div>
                        <div className="w-[310px] min-[500px]:w-full h-[520px] min-[500px]:h-[630px]">
                            <HotelCard
                                hotel={{
                                    name: "Pullman Hotels",
                                    slug: "pullman-hotels",
                                    description:
                                        "Lorem ipsum dolor sit amet consectetur. Faucibus sit vestibulum etiam pellentesque gravida metus sit quam. Quisque nibh pellentesque tincidunt etiam fermentum in aliquet. Quisque nibh pellentesque tincidunt",
                                    bgImg: "bg-[url('/assets/pullman-hotels.png')]",
                                }}
                            />
                        </div>
                        <div className="w-[310px] min-[500px]:w-full h-[520px] min-[500px]:h-[630px]">
                            <HotelCard
                                hotel={{
                                    name: "Radisson Hotels",
                                    slug: "radisson-hotels",
                                    description:
                                        "Lorem ipsum dolor sit amet consectetur. Faucibus sit vestibulum etiam pellentesque gravida metus sit quam. Quisque nibh pellentesque tincidunt etiam fermentum in aliquet. Quisque nibh pellentesque tincidunt",
                                    bgImg: "bg-[url('/assets/radisson-hotels.png')]",
                                }}
                            />
                        </div>
                        <div className="w-[310px] min-[500px]:w-full h-[520px] min-[500px]:h-[630px]">
                            <HotelCard
                                hotel={{
                                    name: "RIU baobab",
                                    slug: "riu-baobab",
                                    description:
                                        "Lorem ipsum dolor sit amet consectetur. Faucibus sit vestibulum etiam pellentesque gravida metus sit quam. Quisque nibh pellentesque tincidunt etiam fermentum in aliquet. Quisque nibh pellentesque tincidunt",
                                    bgImg: "bg-[url('/assets/riu-baobab.png')]",
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

export default HotelsSection;
