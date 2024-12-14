import Main from "../layouts/Main";
import HeroSection from "../sections/tours-page/HeroSection";
import ToursSection from "../sections/tours-page/ToursSection";
import ImageGallerySection from "../sections/tours-page/ImageGallerySection";
import ibisDakar from "@/public/assets/ibis-dakar.png";
import ileDeGoree from "@/public/assets/ile-de-goree.jpg";
import islandImg from "@/public/assets/island-img.png";
import suiteVip from "@/public/assets/suite-vip.png";
import suiteVip2 from "@/public/assets/suite-vip2.png";
import tourImg from "@/public/assets/tour-img.jpg";
import canoeImg from "@/public/assets/canoe-img.png";
import bridgeImg from "@/public/assets/bridge-img.png";

const ToursPage = () => {
    return (
        <Main>
            <HeroSection />
            <ToursSection />
            <ImageGallerySection
                images={[
                    ibisDakar,
                    ileDeGoree,
                    islandImg,
                    suiteVip,
                    suiteVip2,
                    tourImg,
                    canoeImg,
                    bridgeImg,
                ]}
            />
        </Main>
    );
};

export default ToursPage;
