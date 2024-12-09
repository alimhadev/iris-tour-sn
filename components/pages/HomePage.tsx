import Main from "@/components/layouts/Main";
import FavoritePlacesSection from "@/components/sections/home-page/FavoritePlacesSection";
import HeroSection from "@/components/sections/home-page/HeroSection";
import NewsletterSection from "@/components/sections/home-page/NewsletterSection";
import ServicesSection from "@/components/sections/home-page/ServicesSection";
import TestimonialsSection from "@/components/sections/home-page/TestimonialsSection";

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
