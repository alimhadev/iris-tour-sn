import React from "react";
import SectionPattern from "../SectionPattern";
import SectionContainer from "../SectionContainer";
import SectionHeading from "@/components/messages/SectionHeading";
import DotsDeco from "@/public/assets/dots-deco.svg";
import { useTranslations } from "next-intl";
import SectionSubheading from "@/components/messages/SectionSubheading";

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
                </div>
            </SectionContainer>
        </SectionPattern>
    );
};

export default MapLocationSection;
