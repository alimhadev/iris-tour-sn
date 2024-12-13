import TourCard from "@/components/cards/TourCard";
import SectionContainer from "../SectionContainer";
import SectionPattern from "../SectionPattern";

const ToursSection = () => {
    return (
        <SectionPattern divClassName="py-28">
            <SectionContainer>
                <div className="flex flex-col items-center w-full h-fit gap-20">
                    <div className="flex flex-col items-center w-fit gap-10">
                        <div className="w-[310px] min-[500px]:w-full h-fit">
                            <TourCard
                                tour={{
                                    startLocation: "Dakar",
                                    endLocation: "Saloum",
                                    description:
                                        "Lorem ipsum dolor sit amet consectetur. Faucibus sit vestibulum etiam pellentesque gravida metus sit quam. Quisque nibh pellentesque tincidunt etiam fermentum in aliquet. Quisque nibh pellentesque tincidunt",
                                    price: 10000000,
                                    startImage:
                                        "bg-[url('/assets/dakar-img.png')]",
                                    endImage:
                                        "bg-[url('/assets/hero-img4.png')]",
                                    startDate: "2024-12-02",
                                    endDate: "2024-12-10",
                                    mapImage:
                                        "bg-[url('/assets/dakar-saloum.png')]",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </SectionPattern>
    );
};

export default ToursSection;
