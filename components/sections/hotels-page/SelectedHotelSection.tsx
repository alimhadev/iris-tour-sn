import SelectedHotelCard from "@/components/cards/SelectedHotelCard";
import SectionContainer from "../SectionContainer";
import SectionPattern from "../SectionPattern";

const SelectedHotelSection = () => {
    return (
        <SectionPattern divClassName="pt-48 pb-28">
            <SectionContainer className="relative">
                <div className="w-full h-fit">
                    <SelectedHotelCard
                        hotel={{
                            name: "Pullman Hotels",
                            description:
                                "Lorem ipsum dolor sit amet consectetur. Faucibus sit vestibulum etiam pellentesque gravida metus sit quam. Quisqubulum etiam pellentesque gravida metus sit quam. Quisque nibh pellentesque tincidunt etiam ferLorem ipsum dolor sit amet consectetur. Faucibus sit vestibulum etiam pellentesque gravida metus sit quam. Quisqubulum etiam pellentesque gravida metus sit quam. Quisque nibh pellentesque tincidunt etiam ferLorem ipsum dolor sit amet consectetur. Faucibus sit vestibulum etiam pellentesque gravida metus sit quam. Quisqubulum etiam pellentesque gravida metus sit quam. Quisque nibh pellentesque tincidunt etiam fer",
                            bgImg: "bg-[url('/assets/pullman-hotels.png')]",
                            otherImgs: [
                                "bg-[url('/assets/pullman-hotels2.png')]",
                                "bg-[url('/assets/pullman-hotels3.png')]",
                                "bg-[url('/assets/pullman-hotels4.png')]",
                            ],
                        }}
                    />
                </div>
            </SectionContainer>
        </SectionPattern>
    );
};

export default SelectedHotelSection;
