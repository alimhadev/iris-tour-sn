import SectionHeading from "@/components/messages/SectionHeading";
import { useTranslations } from "next-intl";
import SectionContainer from "../SectionContainer";
import SectionPattern from "../SectionPattern";
import ContactCard from "@/components/cards/ContactCard";
import CalendarIcon from "@/public/assets/calendar-icon.svg";
import MailIcon from "@/public/assets/mail-icon.svg";
import PhoneIcon from "@/public/assets/phone-icon.svg";
import LocationIcon from "@/public/assets/location-icon.svg";

const ContactSection = () => {
    const t = useTranslations("ContactPage.ContactSection");

    return (
        <SectionPattern>
            <SectionContainer className="flex flex-col gap-7">
                <div className="bg-primary-default w-full md:w-3/4 h-fit px-5 md:px-14 py-7 rounded-[30px]">
                    <SectionHeading
                        className="text-center md:text-start leading-none"
                        span1ClassName="font-normal text-[clamp(30px,_6vw,_60px)] text-white"
                        span2ClassName="text-[clamp(32px,_7vw,_70px)]"
                    >
                        {(tags) => t.rich("heading", tags)}
                    </SectionHeading>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                    <ContactCard
                        icon={<CalendarIcon />}
                        title={t("card1.title")}
                        line1={t("card1.line1")}
                        line2={t("card1.line2")}
                    />
                    <ContactCard
                        icon={<MailIcon />}
                        title={t("card2.title")}
                        line1={t("card2.line1")}
                        line2={t("card2.line2")}
                    />
                    <ContactCard
                        icon={<PhoneIcon />}
                        title={t("card3.title")}
                        line1={t("card3.line1")}
                        line2={t("card3.line2")}
                    />
                    <ContactCard
                        icon={<LocationIcon />}
                        title={t("card4.title")}
                        line1={t("card4.line1")}
                        line2={t("card4.line2")}
                    />
                </div>
            </SectionContainer>
        </SectionPattern>
    );
};

export default ContactSection;
