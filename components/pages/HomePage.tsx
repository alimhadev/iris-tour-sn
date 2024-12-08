import Main from "@/components/layouts/Main";
import FavoritePlacesSection from "@/components/sections/homePage/FavoritePlacesSection";
import HeroSection from "@/components/sections/homePage/HeroSection";
import NewsletterSection from "@/components/sections/homePage/NewsletterSection";
import ServicesSection from "@/components/sections/homePage/ServicesSection";
import TestimonialsSection from "@/components/sections/homePage/TestimonialsSection";

const HomePage = () => {
    return (
        <Main>
            <HeroSection />
            <ServicesSection />
            <FavoritePlacesSection />
            <TestimonialsSection />
            <NewsletterSection />
        </Main>
    );
};

export default HomePage;
