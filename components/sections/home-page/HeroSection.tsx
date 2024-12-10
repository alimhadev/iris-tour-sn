import React from "react";
import HeroHeadingRichText from "../../messages/HeroHeadingRichText";
import { useTranslations } from "next-intl";
import HeroSubheading from "../../messages/HeroSubheading";
import RightCircleLinkBtn from "../../buttons/RightCircleLinkBtn";
import SectionContainer from "../SectionContainer";
import HeroPattern from "../HeroPattern";

const HeroSection = () => {
    const t = useTranslations("HomePage.HeroSection");

    return (
        <HeroPattern bgImg="bg-[url('/assets/hero-img1.png')]">
            <SectionContainer>
                <div className="flex justify-center md:justify-between items-center w-full h-full py-4">
                    <div className="flex flex-col items-center md:items-start w-full md:w-auto gap-10">
                        <div className="flex flex-col items-center md:items-start w-full md:w-auto gap-3">
                            <span className="text-xl text-secondary-default bg-primary-default w-fit px-5 py-2 rounded-full">
                                {t("tag")}
                            </span>
                            <HeroHeadingRichText
                                className="text-center md:text-start"
                                span1ClassName="text-[clamp(54px,_6vw,_90px)]"
                                span2ClassName="relative text-[clamp(54px,_6vw,_87px)] box-decoration-slice bg-primary-default lg:bg-transparent z-10 before:content-[''] before:absolute before:bottom-0 before:bg-primary-default before:w-full before:h-[40px] before:z-[-1]"
                            >
                                {(tags) => t.rich("heading", tags)}
                            </HeroHeadingRichText>
                            <HeroSubheading>
                                {(tags) => t.rich("subheading", tags)}
                            </HeroSubheading>
                        </div>
                        <div>
                            <RightCircleLinkBtn
                                text={t("cta")}
                                className="hover:backdrop-blur-xl md:hover:backdrop-blur-none"
                            />
                        </div>
                    </div>
                    <div className="hidden md:block"></div>
                </div>
            </SectionContainer>
        </HeroPattern>
    );
};

export default HeroSection;
