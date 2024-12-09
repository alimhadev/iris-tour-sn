import Main from "@/components/layouts/Main";
import HeroSection from "../sections/hotels-page/HeroSection";
import MapLocationSection from "../sections/hotels-page/MapLocationSection";

const HotelsPage = () => {
    return (
        <Main>
            <HeroSection />
            <MapLocationSection />
        </Main>
    );
};

export default HotelsPage;
