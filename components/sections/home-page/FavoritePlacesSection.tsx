import React from "react";
import SectionContainer from "../SectionContainer";
import SectionHeading from "../../messages/SectionHeading";
import DotsDeco2 from "@/public/assets/dots-deco2.svg";
import { useTranslations } from "next-intl";
import SectionSubheading from "../../messages/SectionSubheading";
import SectionPattern from "../SectionPattern";
import FavoritePlacesCard from "@/components/cards/FavoritePlacesCard";

const FavoritePlacesSection = () => {
    const t = useTranslations("HomePage.FavoritePlacesSection");

    return (
        <SectionPattern divClassName="bg-gray-100">
            <SectionContainer className="relative">
                <div className="absolute top-0 right-0">
                    <DotsDeco2 />
                </div>
                <div className="flex flex-col items-center w-full h-full gap-10">
                    <div className="flex flex-col items-center">
                        <SectionHeading className="text-center">
                            {(tags) => t.rich("heading", tags)}
                        </SectionHeading>
                        <SectionSubheading>
                            {(tags) => t.rich("subheading", tags)}
                        </SectionSubheading>
                    </div>
                    <div className="w-full">
                        <FavoritePlacesCard
                            bgImg="bg-[url('/assets/ile-de-goree.jpg')]"
                            city="Dakar"
                            placeName="Île de Gorée"
                        />
                    </div>
                </div>
            </SectionContainer>
        </SectionPattern>
    );
};

export default FavoritePlacesSection;
