import SelectedPlaceCard from "@/components/cards/SelectedPlaceCard";
import SectionContainer from "../SectionContainer";
import SectionPattern from "../SectionPattern";

const SelectedPlaceSection = () => {
    return (
        <SectionPattern divClassName="pt-48 pb-28">
            <SectionContainer className="relative">
                <div className="w-full h-fit">
                    <SelectedPlaceCard
                        place={{
                            name: "Île de Gorée",
                            description:
                                "Lorem ipsum dolor sit amet consectetur. Faucibus sit vestibulum etiam pellentesque gravida metus sit quam. Quisqubulum etiam pellentesque gravida metus sit quam. Quisque nibh pellentesque tincidunt etiam ferLorem ipsum dolor sit amet consectetur. Faucibus sit vestibulum etiam pellentesque gravida metus sit quam. Quisqubulum etiam pellentesque gravida metus sit quam. Quisque nibh pellentesque tincidunt etiam ferLorem ipsum dolor sit amet consectetur. Faucibus sit vestibulum etiam pellentesque gravida metus sit quam. Quisqubulum etiam pellentesque gravida metus sit quam. Quisque nibh pellentesque tincidunt etiam fer",
                            bgImg: "bg-[url('/assets/ile-de-goree.jpg')]",
                            otherImgs: [
                                "bg-[url('/assets/ile-de-goree2.png')]",
                                "bg-[url('/assets/ile-de-goree3.png')]",
                                "bg-[url('/assets/ile-de-goree4.png')]",
                            ],
                        }}
                    />
                </div>
            </SectionContainer>
        </SectionPattern>
    );
};

export default SelectedPlaceSection;
