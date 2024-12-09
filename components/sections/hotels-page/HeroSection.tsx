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
                <div className="flex flex-col justify-center w-full h-full gap-3">
                    <HeroHeadingRichText span1ClassName="text-[74px]">
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
