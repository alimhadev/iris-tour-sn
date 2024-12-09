import HeroHeadingRichText from "../../messages/HeroHeadingRichText";
import { useTranslations } from "next-intl";
import HeroSubheading from "../../messages/HeroSubheading";
import SectionContainer from "../SectionContainer";
import HeroPattern from "../HeroPattern";

const HeroSection = () => {
    const t = useTranslations("ToursPage.HeroSection");

    return (
        <HeroPattern
            bgImg="bg-[url('/assets/hero-img4.png')] bg-center"
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
