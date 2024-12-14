import { useTranslations } from "next-intl";
import SectionContainer from "../SectionContainer";
import SectionPattern from "../SectionPattern";
import SectionHeading from "@/components/messages/SectionHeading";
import SectionSubheading from "@/components/messages/SectionSubheading";
import ContactForm from "@/components/forms/ContactForm";

const InformationSection = () => {
    const t = useTranslations("ContactPage.InformationSection");

    return (
        <SectionPattern divClassName="pt-5 pb-20">
            <SectionContainer className="flex flex-col gap-10">
                <div className="flex flex-col items-center">
                    <SectionHeading>
                        {(tags) => t.rich("heading", tags)}
                    </SectionHeading>
                    <SectionSubheading>
                        {(tags) => t.rich("subheading", tags)}
                    </SectionSubheading>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <div className="grid gap-3">
                        <div className="bg-primary-default bg-[url('/assets/bridge-img.png')] bg-cover bg-center bg-no-repeat w-full h-full rounded-[24px]"></div>
                        <div className="bg-primary-default bg-[url('/assets/island-img.png')] bg-cover bg-center bg-no-repeat w-full h-full rounded-[24px]"></div>
                        <div className="bg-primary-default bg-[url('/assets/riu-baobab.png')] bg-cover bg-center bg-no-repeat w-full h-full rounded-[24px]"></div>
                    </div>
                    <div className="flex flex-col col-span-1 md:col-span-2">
                        <ContactForm />
                    </div>
                </div>
            </SectionContainer>
        </SectionPattern>
    );
};

export default InformationSection;
