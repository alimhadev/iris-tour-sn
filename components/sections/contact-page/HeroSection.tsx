import HeroHeadingRichText from "../../messages/HeroHeadingRichText";
import { useTranslations } from "next-intl";
import HeroSubheading from "../../messages/HeroSubheading";
import SectionContainer from "../SectionContainer";
import HeroPattern from "../HeroPattern";

const HeroSection = () => {
    const t = useTranslations("ContactPage.HeroSection");

    return (
        <HeroPattern
            bgImg="bg-[url('/assets/hero-img1.png')] bg-center"
            className="h-[540px]"
            overlayClassName="bg-black/30 backdrop-blur-lg"
        >
            <SectionContainer>
                <div className="flex justify-center items-center w-full h-full">
                    <HeroHeadingRichText span1ClassName="text-[clamp(36px,_6vw,_93px)]">
                        {(tags) => t.rich("heading", tags)}
                    </HeroHeadingRichText>
                </div>
            </SectionContainer>
        </HeroPattern>
    );
};

export default HeroSection;
