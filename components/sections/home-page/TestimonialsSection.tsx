import React from "react";
import SectionContainer from "../SectionContainer";
import SectionHeading from "../../messages/SectionHeading";
import SectionSubheading from "../../messages/SectionSubheading";
import DotsDeco3 from "@/public/assets/dots-deco3.svg";
import { useTranslations } from "next-intl";
import RightCircleLinkBtn from "../../buttons/RightCircleLinkBtn";
import SectionPattern from "../SectionPattern";

const TestimonialsSection = () => {
    const t = useTranslations("HomePage.TestimonialsSection");

    return (
        <SectionPattern divClassName="bg-primary-default py-28 mt-4">
            <SectionContainer className="relative">
                <div className="absolute -top-32 left-[41%]">
                    <DotsDeco3 />
                </div>

                <div className="flex justify-center lg:justify-between items-center w-full h-full gap-10">
                    <div className="hidden lg:block"></div>
                    <div className="flex flex-col items-end gap-10 lg:gap-72">
                        <div className="flex flex-col items-center lg:items-end">
                            <SectionHeading
                                className="text-center lg:text-right"
                                span1ClassName="text-white"
                            >
                                {(tags) => t.rich("heading", tags)}
                            </SectionHeading>
                            <SectionSubheading className="text-white text-center lg:text-right">
                                {(tags) => t.rich("subheading", tags)}
                            </SectionSubheading>
                        </div>
                        <div className="flex justify-center lg:justify-end w-full">
                            <RightCircleLinkBtn text={t("cta")} />
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </SectionPattern>
    );
};

export default TestimonialsSection;
