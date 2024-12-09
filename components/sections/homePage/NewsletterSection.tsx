import { useTranslations } from "next-intl";
import SectionContainer from "../SectionContainer";
import SectionHeading from "../../messages/SectionHeading";
import SectionSubheading from "../../messages/SectionSubheading";
import DotsDeco4 from "@/public/assets/dots-deco4.svg";
import ImgCard from "../../cards/ImgCard";
import NewsletterForm from "../../forms/NewsletterForm";
import SectionPattern from "../SectionPattern";

const bridgeImg = "bg-[url('/assets/bridge-img.png')]";
const canoeImg = "bg-[url('/assets/canoe-img.png')]";
const islandImg = "bg-[url('/assets/island-img.png')]";

const NewsletterSection = () => {
    const t = useTranslations("HomePage.NewsletterSection");

    return (
        <SectionPattern>
            <SectionContainer className="relative">
                <div className="absolute top-40 left-0">
                    <DotsDeco4 />
                </div>
                <div className="flex flex-col items-center w-full h-full gap-14">
                    <div className="flex flex-col items-center">
                        <SectionHeading className="text-center">
                            {(tags) => t.rich("heading", tags)}
                        </SectionHeading>
                        <SectionSubheading>
                            {(tags) => t.rich("subheading", tags)}
                        </SectionSubheading>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-5">
                        <div className="grid grid-cols-2 gap-5">
                            <ImgCard bgUrl={bridgeImg} />
                            <ImgCard bgUrl={canoeImg} />
                            <ImgCard
                                bgUrl={islandImg}
                                className="col-span-2 "
                            />
                        </div>
                        <div>
                            <NewsletterForm />
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </SectionPattern>
    );
};

export default NewsletterSection;
