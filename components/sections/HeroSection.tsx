import React from "react";
import HeroHeadingRichText from "../messages/HeroHeadingRichText";
import { useTranslations } from "next-intl";
import HeroSubheading from "../messages/HeroSubheading";
import RightCircleLinkBtn from "../buttons/RightCircleLinkBtn";
import SectionContainer from "./SectionContainer";

const HeroSection = () => {
    const t = useTranslations("HomePage.HeroSection");

    return (
        <section className='bg-primary-default bg-[url("/assets/hero-img1.png")] bg-bottom bg-cover bg-no-repeat w-full h-[700px]'>
            <div className="flex justify-center items-center bg-gradient-to-r from-black/60 via-35% via-primary-default/50 to-50% to-transparent w-full h-full">
                <SectionContainer>
                    <div className="flex justify-between items-center w-full h-full py-4">
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-3">
                                <span className="text-xl text-secondary bg-primary-default w-fit px-5 py-2 rounded-full">
                                    {t("tag")}
                                </span>
                                <HeroHeadingRichText span2ClassName="relative z-10 before:content-[''] before:absolute before:bottom-0 before:bg-primary-default before:w-full before:h-[40px] before:z-[-1]">
                                    {(tags) => t.rich("heading", tags)}
                                </HeroHeadingRichText>
                                <HeroSubheading text={t("subheading")} />
                            </div>
                            <div>
                                <RightCircleLinkBtn text={t("cta")} />
                            </div>
                        </div>
                        <div></div>
                    </div>
                </SectionContainer>
            </div>
        </section>
    );
};

export default HeroSection;
