import SectionPattern from "../SectionPattern";
import SectionContainer from "../SectionContainer";
import SectionHeading from "@/components/messages/SectionHeading";
import SectionSubheading from "@/components/messages/SectionSubheading";
import { useTranslations } from "next-intl";
import EventCard from "@/components/cards/EventCard";

const DiarySection = () => {
    const t = useTranslations("EventsPage.DiarySection");

    return (
        <SectionPattern>
            <SectionContainer>
                <div className="flex flex-col items-center w-full h-full gap-16">
                    <div className="flex flex-col items-center">
                        <SectionHeading>
                            {(tags) => t.rich("heading", tags)}
                        </SectionHeading>
                        <SectionSubheading>
                            {(tags) => t.rich("subheading", tags)}
                        </SectionSubheading>
                    </div>
                    <div className="flex flex-col items-center w-full">
                        <EventCard
                            image="bg-[url('/assets/event-img1.png')]"
                            title="Sunset hour"
                            type="Soirée"
                            date="2024-12-22"
                            description="Découvrez les plus beaux moments de nos excursions exceptionnelles. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
                        />
                        <EventCard
                            image="bg-[url('/assets/event-img2.png')]"
                            title="Buffet Spécial"
                            type="Brunch"
                            date="2024-12-15"
                            description="Découvrez les plus beaux moments de nos excursions exceptionnelles. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
                        />
                        <EventCard
                            image="bg-[url('/assets/event-img3.png')]"
                            title="Discover Pullman Hotels"
                            type="Découverte"
                            date="2024-12-08"
                            description="Découvrez les plus beaux moments de nos excursions exceptionnelles. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
                        />
                    </div>
                </div>
            </SectionContainer>
        </SectionPattern>
    );
};

export default DiarySection;
