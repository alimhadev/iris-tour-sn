import HeroHeadingRichText from "@/components/messages/HeroHeadingRichText";
import HeroSubheading from "@/components/messages/HeroSubheading";
import SectionContainer from "../SectionContainer";
import HeroPattern from "../HeroPattern";
import { useTranslations } from "next-intl";

const HeroSection = () => {
    const t = useTranslations("HotelsPage.HeroSection");

    return (
        <HeroPattern
            bgImg=" bg-[url('/assets/hero-img3.png')]"
            className="h-[540px]"
        >
            <SectionContainer>
                <div className="flex justify-between items-center w-full h-full py-4">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-3">
                            <HeroHeadingRichText span1ClassName="text-[74px]">
                                {(tags) => t.rich("heading", tags)}
                            </HeroHeadingRichText>
                            <HeroSubheading>
                                {(tags) => t.rich("subheading", tags)}
                            </HeroSubheading>
                        </div>
                    </div>
                    <div></div>
                </div>
            </SectionContainer>
        </HeroPattern>
    );
};

export default HeroSection;
