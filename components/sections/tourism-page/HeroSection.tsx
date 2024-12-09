import React from "react";
import HeroHeadingRichText from "../../messages/HeroHeadingRichText";
import { useTranslations } from "next-intl";
import HeroSubheading from "../../messages/HeroSubheading";
import SectionContainer from "../SectionContainer";
import HeroPattern from "../HeroPattern";

const HeroSection = () => {
    const t = useTranslations("TourismPage.HeroSection");

    return (
        <HeroPattern
            bgImg=" bg-[url('/assets/hero-img2.png')]"
            className="h-[540px]"
        >
            <SectionContainer>
                <div className="flex flex-col justify-center w-full h-full gap-3">
                    <HeroHeadingRichText>
                        {(tags) => t.rich("heading", tags)}
                    </HeroHeadingRichText>
                    <HeroSubheading>
                        {(tags) => t.rich("subheading", tags)}
                    </HeroSubheading>
                </div>
            </SectionContainer>
        </HeroPattern>
    );
};

export default HeroSection;
