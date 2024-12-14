import { StaticImageData } from "next/image";
import Image from "next/image";
import SectionPattern from "../SectionPattern";
import SectionContainer from "../SectionContainer";
import SectionHeading from "@/components/messages/SectionHeading";
import SectionSubheading from "@/components/messages/SectionSubheading";
import { useTranslations } from "next-intl";

interface ImageGallerySectionProps {
    images: StaticImageData[];
}
const ImageGallerySection = ({ images }: ImageGallerySectionProps) => {
    const t = useTranslations("EventsPage.ImageGallerySection");

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
                    <div className="columns-[400px] w-full gap-1">
                        {images.map((image, index) => (
                            <Image
                                key={index}
                                src={image}
                                alt="Image"
                                className="w-full h-full rounded-[31px] mb-1"
                            />
                        ))}
                    </div>
                </div>
            </SectionContainer>
        </SectionPattern>
    );
};

export default ImageGallerySection;
