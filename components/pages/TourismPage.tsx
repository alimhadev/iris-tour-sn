import Main from "@/components/layouts/Main";
import HeroSection from "../sections/tourism-page/HeroSection";
import MapLocationSection from "../sections/tourism-page/MapLocationSection";
import PlacesSection from "../sections/tourism-page/PlacesSection";
const TourismPage = () => {
    return (
        <Main>
            <HeroSection />
            <PlacesSection />
            <MapLocationSection />
        </Main>
    );
};

export default TourismPage;
