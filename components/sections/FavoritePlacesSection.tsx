import React from "react";
import SectionContainer from "./SectionContainer";
import SectionHeading from "../messages/SectionHeading";
import DotsDeco2 from "@/public/assets/dots-deco2.svg";
import { useTranslations } from "next-intl";
import SectionSubheading from "../messages/SectionSubheading";

const FavoritePlacesSection = () => {
    const t = useTranslations("HomePage.FavoritePlacesSection");

    return (
        <section className="w-full h-fit">
            <div className="flex justify-center items-center bg-gray-100 w-full h-full py-20">
                <SectionContainer className="relative">
                    <div className="absolute top-0 right-0">
                        <DotsDeco2 />
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

export default FavoritePlacesSection;
