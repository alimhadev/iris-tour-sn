import React from "react";
import SectionContainer from "../SectionContainer";
import SectionPattern from "../SectionPattern";
import PlaceCard from "@/components/cards/PlaceCard";
import { useTranslations } from "next-intl";
import Link from "next/link";

const OtherPlacesSection = () => {
    const t = useTranslations("TourismPage.Slug.OtherPlacesSection");

    return (
        <SectionPattern divClassName="p-0 pb-48">
            <SectionContainer>
                <div className="flex flex-col items-center w-full h-full gap-28">
                    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 place-items-center w-full gap-7">
                        <div className="w-[310px] min-[500px]:w-full h-[520px] min-[500px]:h-[630px]">
                            <PlaceCard
                                place={{
                                    name: "Stade Diamiadio",
                                    slug: "stade-diamiadio",
                                    description:
                                        "Lorem ipsum dolor sit amet consectetur. Faucibus sit vestibulum etiam pellentesque gravida metus sit quam. Quisque nibh pellentesque tincidunt etiam fermentum in aliquet. Quisque nibh pellentesque tincidunt",
                                    bgImg: "bg-[url('/assets/stade-diamiadio.png')]",
                                }}
                            />
                        </div>
                        <div className="w-[310px] min-[500px]:w-full h-[520px] min-[500px]:h-[630px]">
                            <PlaceCard
                                place={{
                                    name: "Casamance",
                                    slug: "casamance",
                                    description:
                                        "Lorem ipsum dolor sit amet consectetur. Faucibus sit vestibulum etiam pellentesque gravida metus sit quam. Quisque nibh pellentesque tincidunt etiam fermentum in aliquet. Quisque nibh pellentesque tincidunt",
                                    bgImg: "bg-[url('/assets/casamance.png')]",
                                }}
                            />
                        </div>
                        <div className="w-[310px] min-[500px]:w-full h-[520px] min-[500px]:h-[630px]">
                            <PlaceCard
                                place={{
                                    name: "Mosquée",
                                    slug: "mosquee",
                                    description:
                                        "Lorem ipsum dolor sit amet consectetur. Faucibus sit vestibulum etiam pellentesque gravida metus sit quam. Quisque nibh pellentesque tincidunt etiam fermentum in aliquet. Quisque nibh pellentesque tincidunt",
                                    bgImg: "bg-[url('/assets/mosquee.png')]",
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <Link
                            href="#"
                            className="font-bold text-secondary-default underline text-[clamp(18px,_6vw,_28px)] leading-none"
                        >
                            {t("seeMore")}
                        </Link>
                    </div>
                </div>
            </SectionContainer>
        </SectionPattern>
    );
};

export default OtherPlacesSection;
