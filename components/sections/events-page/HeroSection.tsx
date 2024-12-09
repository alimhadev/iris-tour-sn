import HeroHeadingRichText from "../../messages/HeroHeadingRichText";
import { useTranslations } from "next-intl";
import HeroSubheading from "../../messages/HeroSubheading";
import SectionContainer from "../SectionContainer";
import HeroPattern from "../HeroPattern";

const HeroSection = () => {
    const t = useTranslations("EventsPage.HeroSection");

    return (
        <HeroPattern
            bgImg="bg-[url('/assets/hero-img5.png')]"
            className="h-[540px] bg-center"
        >
            <SectionContainer>
                <div className="flex flex-col justify-center w-full h-full gap-3">
                    <HeroHeadingRichText
                        className="w-[424px]"
                        span1ClassName="text-[74px]"
                    >
                        {(tags) => t.rich("heading", tags)}
                    </HeroHeadingRichText>
                    <HeroSubheading className="w-[620px]">
                        {(tags) => t.rich("subheading", tags)}
                    </HeroSubheading>
                </div>
            </SectionContainer>
        </HeroPattern>
    );
};

export default HeroSection;
