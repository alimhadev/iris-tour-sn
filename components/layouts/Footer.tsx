import React from "react";
import SectionContainer from "../sections/SectionContainer";
import FooterColTitle from "../messages/FooterColTitle";
import { useTranslations } from "next-intl";
import FooterColLink from "../messages/FooterColLink";
import FooterColText from "../messages/FooterColText";
import PhoneIcon from "@/public/assets/phone-icon.svg";
import MailIcon from "@/public/assets/mail-icon.svg";
import LocationIcon from "@/public/assets/location-icon.svg";
import PhoneIconBig from "@/public/assets/phone-icon-big.svg";
import Logo from "@/public/assets/logo.svg";
import DotsDeco5 from "@/public/assets/dots-deco5.svg";
import FooterColA from "../messages/FooterColA";

const Footer = () => {
    const t = useTranslations("Footer");

    return (
        <footer>
            <div className="flex justify-center items-center bg-primary-default w-full h-full pt-28 pb-10 mt-4">
                <SectionContainer>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-wrap justify-center min-[426px]:justify-between text-center min-[426px]:text-start gap-10">
                            <div className="flex flex-col items-center min-[426px]:items-start gap-4">
                                <FooterColTitle>
                                    {t("col1.title")}
                                </FooterColTitle>
                                <div className="flex flex-col gap-3">
                                    <FooterColLink url={t("col1.row1.url")}>
                                        {t("col1.row1.text")}
                                    </FooterColLink>
                                    <FooterColLink url={t("col1.row2.url")}>
                                        {t("col1.row2.text")}
                                    </FooterColLink>
                                    <FooterColLink url={t("col1.row3.url")}>
                                        {t("col1.row3.text")}
                                    </FooterColLink>
                                    <FooterColLink url={t("col1.row4.url")}>
                                        {t("col1.row4.text")}
                                    </FooterColLink>
                                    <FooterColLink url={t("col1.row5.url")}>
                                        {t("col1.row5.text")}
                                    </FooterColLink>
                                    <FooterColLink url={t("col1.row6.url")}>
                                        {t("col1.row6.text")}
                                    </FooterColLink>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <FooterColTitle>
                                    {t("col2.title")}
                                </FooterColTitle>
                                <FooterColLink url={t("col2.row1.url")}>
                                    {t("col2.row1.text")}
                                </FooterColLink>
                                <FooterColLink url={t("col2.row2.url")}>
                                    {t("col2.row2.text")}
                                </FooterColLink>
                                <FooterColLink url={t("col2.row3.url")}>
                                    {t("col2.row3.text")}
                                </FooterColLink>
                                <FooterColLink url={t("col2.row4.url")}>
                                    {t("col2.row4.text")}
                                </FooterColLink>
                            </div>
                            <div className="flex flex-col gap-3">
                                <FooterColTitle>
                                    {t("col3.title")}
                                </FooterColTitle>
                                <FooterColA
                                    className="flex items-center gap-8"
                                    url={t("col3.row1.url")}
                                >
                                    <PhoneIcon />
                                    {t("col3.row1.text")}
                                </FooterColA>
                                <FooterColA
                                    className="flex items-center gap-8"
                                    url={t("col3.row2.url")}
                                >
                                    <MailIcon />
                                    {t("col3.row2.text")}
                                </FooterColA>

                                <FooterColText className="flex items-center gap-8">
                                    <LocationIcon />
                                    {t.rich("col3.row3.text", {
                                        br: () => <br />,
                                    })}
                                </FooterColText>
                            </div>
                            <div className="flex flex-col gap-3">
                                <FooterColTitle>
                                    {t("col4.title")}
                                </FooterColTitle>
                                <FooterColText>
                                    {t.rich("col4.description", {
                                        br: () => <br />,
                                    })}
                                </FooterColText>
                                <FooterColA
                                    className="group flex items-center font-black text-[clamp(20px,_3vw,_26px)] border border-secondary-default bg-secondary-default hover:bg-transparent gap-4 px-5 py-3 mt-10 rounded-full whitespace-nowrap"
                                    url={t("col4.tel.url")}
                                >
                                    <PhoneIconBig className="stroke-white group-hover:stroke-secondary-default transition" />
                                    {t("col4.tel.text")}
                                </FooterColA>
                            </div>
                        </div>
                        <div className="relative flex flex-col min-[426px]:flex-row justify-between items-center border-t border-white/40 w-full gap-5 pt-5">
                            <Logo />
                            <FooterColText className="text-center">
                                {t("copyright")}
                            </FooterColText>
                            <div className="absolute -top-10 left-[43%]">
                                <DotsDeco5 />
                            </div>
                        </div>
                    </div>
                </SectionContainer>
            </div>
        </footer>
    );
};

export default Footer;
