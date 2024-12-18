import SectionContainer from "../SectionContainer";
import SectionHeading from "../../messages/SectionHeading";
import SectionSubheading from "../../messages/SectionSubheading";
import DotsDeco3 from "@/public/assets/dots-deco3.svg";
import { useTranslations } from "next-intl";
import RightCircleLinkBtn from "../../buttons/RightCircleLinkBtn";
import SectionPattern from "../SectionPattern";
import TestimonialsCarousel from "@/components/carousels/TestimonialsCarousel";
import avatar1 from "@/public/assets/avatar1.png";

const testimonials = [
    {
        testimony:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        avatar: avatar1,
        name: "John Doe",
        role: "Client",
    },
    {
        testimony: "Testimony 1",
        avatar: avatar1,
        name: "John Doe",
        role: "Client",
    },
    {
        testimony: "Testimony 1",
        avatar: avatar1,
        name: "John Doe",
        role: "Client",
    },
];

const TestimonialsSection = () => {
    const t = useTranslations("HomePage.TestimonialsSection");

    return (
        <SectionPattern divClassName="bg-primary-default py-28 mt-4">
            <SectionContainer className="relative">
                <div className="absolute -top-32 left-[41%]">
                    <DotsDeco3 />
                </div>

                <div className="flex justify-center lg:justify-between items-end w-full h-full gap-10">
                    <div className="hidden lg:block w-full h-full">
                        <TestimonialsCarousel testimonials={testimonials} />
                    </div>
                    <div className="flex flex-col items-center lg:items-end w-full h-full gap-24 lg:gap-72">
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
                        <div className="block lg:hidden">
                            <TestimonialsCarousel testimonials={testimonials} />
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
