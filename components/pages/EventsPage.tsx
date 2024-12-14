import HeroSection from "../sections/events-page/HeroSection";
import Main from "../layouts/Main";
import DiarySection from "../sections/events-page/DiarySection";
import ImageGallerySection from "../sections/events-page/ImageGallerySection";
import eventImg4 from "@/public/assets/event-img4.png";
import eventImg5 from "@/public/assets/event-img5.png";
import eventImg6 from "@/public/assets/event-img6.png";
import eventImg7 from "@/public/assets/event-img7.png";
import eventImg8 from "@/public/assets/event-img8.png";
import eventImg9 from "@/public/assets/event-img9.png";
import eventImg10 from "@/public/assets/event-img10.png";
import eventImg11 from "@/public/assets/event-img11.png";

const EventsPage = () => {
    return (
        <Main>
            <HeroSection />
            <DiarySection />
            <ImageGallerySection
                images={[
                    eventImg4,
                    eventImg5,
                    eventImg6,
                    eventImg7,
                    eventImg8,
                    eventImg9,
                    eventImg10,
                    eventImg11,
                ]}
            />
        </Main>
    );
};

export default EventsPage;
