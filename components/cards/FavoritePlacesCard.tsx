import HeartIcon from "@/public/assets/hearth-icon.svg";
import StarIcon from "@/public/assets/star-icon.svg";
import RightCircleLinkBtn from "../buttons/RightCircleLinkBtn";
import { useTranslations } from "next-intl";
import ItineraryIcon from "@/public/assets/itinerary-icon.svg";
import Image from "next/image";
import FavoritePlacesCarousel from "../carousels/FavoritePlacesCarousel";

interface FavoritePlacesCardProps {
    bgImg: string;
    city: string;
    placeName: string;
}

const images = [
    { url: "bg-[url('/assets/canoe-img.png')]", text: "Canoe" },
    { url: "bg-[url('/assets/riu-baobab.png')]", text: "Riu Baobab" },
    { url: "bg-[url('/assets/ile-de-goree.jpg')]", text: "Ile de Goree" },
    { url: "bg-[url('/assets/ile-de-goree2.png')]", text: "Ile de Goree" },
];

const FavoritePlacesCard = ({
    bgImg,
    city,
    placeName,
}: FavoritePlacesCardProps) => {
    const t = useTranslations("HomePage.FavoritePlacesSection.card");

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 bg-white rounded-[30px] overflow-hidden">
            <div
                className={`w-full min-h-[650px] ${bgImg} bg-cover bg-center bg-no-repeat rounded-[30px] overflow-hidden`}
            >
                <div className="flex flex-col justify-between w-full h-full">
                    <div className="flex justify-between items-center w-full h-fit px-8 py-5">
                        <span className="font-thin text-white text-[clamp(24px,_3vw,_33px)]">
                            {city}
                        </span>
                        <button>
                            <HeartIcon
                                className={`fill-white scale-75 md:scale-100`}
                            />
                        </button>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-t from-white/35 backdrop-blur-sm h-fit gap-10 px-8 pt-10 md:pt-20 pb-8">
                        <div className="flex flex-col items-center md:items-start h-fit gap-4">
                            <span className="font-thin font-secondary italic text-white text-[clamp(40px,_6vw,_68px)] leading-[46px] text-center md:text-left">
                                {placeName}
                            </span>
                            <div className="flex items-center gap-1">
                                <StarIcon className="fill-white" />
                                <StarIcon className="fill-white" />
                                <StarIcon className="fill-white" />
                                <StarIcon className="fill-white" />
                                <StarIcon className="fill-white" />
                                {/* <span className="font-thin font-secondary text-white text-[24px]">
                                    4.5
                                </span> */}
                            </div>
                        </div>
                        <div>
                            <RightCircleLinkBtn text={t("section1.cta")} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between bg-white w-full min-h-[650px] gap-4">
                <div className="flex flex-col md:flex-row justify-between items-center w-full h-fit gap-4 px-8 py-5">
                    <span className="font-bold text-primary-default text-[25px] text-center md:text-left">
                        {t("section2.title")}
                    </span>
                    <RightCircleLinkBtn
                        text={t("section2.cta")}
                        Icon={ItineraryIcon}
                    />
                </div>
                <div className="flex justify-center items-center w-full h-full px-8">
                    <Image
                        src="/assets/senegal-ile-de-goree.png"
                        alt="Sénégal"
                        width={500}
                        height={500}
                    />
                </div>
                <div>
                    <FavoritePlacesCarousel
                        images={images.map((image) => image.url)}
                        texts={images.map((image) => image.text)}
                    />
                </div>
            </div>
        </div>
    );
};

export default FavoritePlacesCard;
