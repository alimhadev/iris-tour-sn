import { FC } from "react";
import { cn } from "@/lib/utils";
import HearthIcon from "@/public/assets/hearth-icon.svg";
import ShareIcon from "@/public/assets/share-icon.svg";
import StarIcon from "@/public/assets/star-icon.svg";
import ArrowRightLong from "@/public/assets/arrow-right-long.svg";
import Link from "next/link";
import RightCircleLinkBtn from "../buttons/RightCircleLinkBtn";
import { useTranslations } from "next-intl";

interface HotelCardProps {
    hotel: {
        name: string;
        slug: string;
        description: string;
        bgImg: string;
    };
}

const HotelCard: FC<HotelCardProps> = ({ hotel }) => {
    const t = useTranslations("HotelsPage.HotelsSection");

    return (
        <div className="flex flex-col items-center w-full h-full gap-2">
            <div
                className={cn(
                    `flex flex-col justify-between w-full h-full bg-primary-default bg-cover bg-center bg-no-repeat rounded-[30px] overflow-hidden`,
                    hotel.bgImg
                )}
            >
                <div className="flex justify-end w-full h-fit py-3 px-4">
                    <div className="flex items-center gap-2">
                        <button>
                            <HearthIcon className="fill-white scale-75" />
                        </button>
                        <button>
                            <ShareIcon className="fill-white" />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-t from-black/50 to-black/5 backdrop-blur-sm h-fit gap-10 px-4 py-5">
                    <div className="flex flex-col items-center md:items-start h-fit gap-4">
                        <span className="font-thin font-secondary italic text-white text-[clamp(40px,_6vw,_52px)] leading-[30px] text-center md:text-left">
                            {hotel.name}
                        </span>
                        <div className="flex items-center gap-1">
                            <StarIcon className="fill-white" />
                            <StarIcon className="fill-white" />
                            <StarIcon className="fill-white" />
                            <StarIcon className="fill-white" />
                            <StarIcon className="fill-white" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-start border border-secondary-default bg-white w-full h-fit gap-10 pt-4 pb-6 rounded-[30px] shadow-lg">
                <p className="text-[clamp(16px,_2vw,_18px)] overflow-ellipsis line-clamp-4 px-3 sm:px-5">
                    {hotel.description}
                </p>
                <div className="relative flex items-start w-full h-fit px-3 sm:px-5 gap-5">
                    <Link
                        href={`/hotels/${hotel.slug}`}
                        className="flex items-center gap-4 z-20"
                    >
                        <span className="text-secondary-default text-[16px] md:text-[22px]">
                            {t("readMore")}
                        </span>
                        <ArrowRightLong className="opacity-0 min-[500px]:opacity-100 stroke-secondary-default scale-75 md:scale-100" />
                    </Link>
                    <div className="absolute -top-7 right-0 flex justify-end border border-b-0 border-secondary-default bg-white w-fit h-fit p-1 shadow-[0px_20px_5px_#FFF,_inset_5px_5px_0px_rgba(0,0,0,0.1)] rounded-tl-[40px] rounded-tr-[40px] before:content-[''] before:absolute before:top-[38px] before:md:top-[41px] before:-left-10 before:border-r before:border-b before:border-secondary-default before:w-10 before:h-11 before:bg-white before:shadow-[4px_4px_5px] before:shadow-black/10 before:rounded-br-[40px] before:z-10 after:content-[''] after:absolute after:top-10 after:-right-3 after:bg-white after:w-4 after:h-20">
                        <RightCircleLinkBtn
                            text={t("cta")}
                            className="text-[18px] md:text-[22px] z-10"
                        />
                        <div className="absolute bottom-0 -left-10 bg-white w-10 h-10 shadow-[10px_10px_5px_5px] shadow-white"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelCard;
