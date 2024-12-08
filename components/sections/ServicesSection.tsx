import React from "react";
import SectionContainer from "./SectionContainer";
import SectionHeading from "../messages/SectionHeading";
import { useTranslations } from "next-intl";
import SectionSubheading from "../messages/SectionSubheading";
import DotsDeco from "@/public/assets/dots-deco.svg";

const ServicesSection = () => {
    const t = useTranslations("HomePage.ServicesSection");

    return (
        <section className="w-full h-fit">
            <div className="flex justify-center items-center w-full h-full py-28">
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
            </div>
        </section>
    );
};

export default ServicesSection;
