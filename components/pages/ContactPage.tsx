import Main from "../layouts/Main";
import HeroSection from "@/components/sections/contact-page/HeroSection";
import ContactSection from "@/components/sections/contact-page/ContactSection";
import InformationSection from "@/components/sections/contact-page/InformationSection";

const ContactPage = () => {
    return (
        <Main>
            <HeroSection />
            <ContactSection />
            <InformationSection />
        </Main>
    );
};

export default ContactPage;
