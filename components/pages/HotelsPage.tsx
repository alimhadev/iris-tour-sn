import Main from "@/components/layouts/Main";
import HeroSection from "../sections/hotels-page/HeroSection";
import MapLocationSection from "../sections/hotels-page/MapLocationSection";
import HotelsSection from "../sections/hotels-page/HotelsSection";

const HotelsPage = () => {
    return (
        <Main>
            <HeroSection />
            <HotelsSection />
            <MapLocationSection />
        </Main>
    );
};

export default HotelsPage;
