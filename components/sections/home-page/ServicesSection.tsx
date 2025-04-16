import React from "react";
import SectionContainer from "../SectionContainer";
import SectionHeading from "../../messages/SectionHeading";
import { useTranslations } from "next-intl";
import SectionSubheading from "../../messages/SectionSubheading";
import DotsDeco from "@/public/assets/dots-deco.svg";
import SectionPattern from "../SectionPattern";
import BgImgTextBtnCard from "@/components/cards/BgImgTextBtnCard";
import TwoSpanDescription from "@/components/messages/TwoSpanDescription";

const ServicesSection = () => {
    const t = useTranslations("HomePage.ServicesSection");

    return (
        <SectionPattern divClassName="py-28">
            <SectionContainer className="relative">
                <div className="absolute -top-10 left-20">
                    <DotsDeco />
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
                    <div className="grid lg:grid-cols-2 2xl:grid-cols-4 w-full gap-2">
                        <div className="min-w-[300px] h-[554px]">
                            <BgImgTextBtnCard
                                href="/transport"
                                bgImg="bg-[url('/assets/mercedes.jpg')]"
                                title={t("card1.title")}
                                description={
                                    <TwoSpanDescription theme="black">
                                        {(tags) =>
                                            t.rich("card1.description", tags)
                                        }
                                    </TwoSpanDescription>
                                }
                                theme="black"
                            />
                        </div>
                        <div className="min-w-[300px] h-[554px]">
                            <BgImgTextBtnCard
                                href="/tourism"
                                bgImg="bg-[url('/assets/family-stone-statue.jpg')]"
                                title={t("card2.title")}
                                description={
                                    <TwoSpanDescription theme="secondary">
                                        {(tags) =>
                                            t.rich("card2.description", tags)
                                        }
                                    </TwoSpanDescription>
                                }
                                theme="secondary"
                            />
                        </div>
                        <div className="min-w-[300px] h-[554px]">
                            <BgImgTextBtnCard
                                href="/hotels"
                                bgImg="bg-[url('/assets/hotel-img.jpg')]"
                                title={t("card3.title")}
                                description={
                                    <TwoSpanDescription theme="primary">
                                        {(tags) =>
                                            t.rich("card3.description", tags)
                                        }
                                    </TwoSpanDescription>
                                }
                                theme="primary"
                            />
                        </div>
                        <div className="min-w-[300px] h-[554px]">
                            <BgImgTextBtnCard
                                href="/tours"
                                bgImg="bg-[url('/assets/tour-img.jpg')]"
                                title={t("card4.title")}
                                description={
                                    <TwoSpanDescription theme="secondary">
                                        {(tags) =>
                                            t.rich("card4.description", tags)
                                        }
                                    </TwoSpanDescription>
                                }
                                theme="secondary"
                            />
                        </div>
                        <div className="min-w-[300px] h-[554px]">
                            <BgImgTextBtnCard
                                href="/events"
                                bgImg="bg-[url('/assets/event-img.jpg')]"
                                title={t("card5.title")}
                                description={
                                    <TwoSpanDescription theme="primary">
                                        {(tags) =>
                                            t.rich("card5.description", tags)
                                        }
                                    </TwoSpanDescription>
                                }
                                theme="primary"
                            />
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </SectionPattern>
    );
};

export default ServicesSection;
