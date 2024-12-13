import { FC } from "react";
import { cn } from "@/lib/utils";
import HearthIcon from "@/public/assets/hearth-icon.svg";
import ShareIcon from "@/public/assets/share-icon.svg";
import StarIcon from "@/public/assets/star-icon.svg";
import RightCircleLinkBtn from "../buttons/RightCircleLinkBtn";
import { useTranslations } from "next-intl";

interface SuiteCardProps {
    suite: {
        name: string;
        slug: string;
        description: string;
        bgImg: string;
        numberOfBeds: number;
        numberOfBathrooms: number;
        surface: number;
        price: number;
    };
}

const SuiteCard: FC<SuiteCardProps> = ({ suite }) => {
    const t = useTranslations("HotelsPage.Slug.SuitesSection");

    return (
        <div className="flex flex-col items-center w-full h-full gap-2">
            <div
                className={cn(
                    `flex flex-col justify-between w-full h-full bg-primary-default bg-cover bg-center bg-no-repeat rounded-[30px] overflow-hidden`,
                    suite.bgImg
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
            </div>

            <div className="flex flex-col items-start border border-secondary-default bg-white w-full h-fit gap-10 pt-4 pb-6 rounded-[30px] shadow-lg">
                <div className="flex flex-col items-start w-full h-fit gap-2">
                    <div className="flex items-center justify-between w-full h-fit gap-4 px-3 sm:px-5">
                        <span className="font-bold text-primary-default text-[24px] md:text-[36px] leading-[30px]">
                            {suite.name}
                        </span>
                        <div className="flex items-center gap-1 scale-75">
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-full h-fit gap-10">
                        <p className="text-[clamp(16px,_2vw,_18px)] overflow-ellipsis line-clamp-1 px-3 sm:px-5">
                            {suite.description}
                        </p>
                    </div>
                    <div className="flex items-center w-full h-fit gap-4 px-3 sm:px-5">
                        <div className="flex items-center gap-1">
                            <span className="font-bold text-[16px] md:text-[18px]">
                                {t("bed")} : {suite.numberOfBeds}
                            </span>
                        </div>{" "}
                        |
                        <div className="flex items-center gap-1">
                            <span className="font-bold text-[16px] md:text-[18px]">
                                {t("bathroom")} : {suite.numberOfBathrooms}
                            </span>
                        </div>{" "}
                        |
                        <div className="flex items-center gap-1">
                            <span className="font-bold text-[16px] md:text-[18px]">
                                {t("surface")} : {suite.surface} m²
                            </span>
                        </div>
                    </div>
                </div>
                <div className="relative flex items-start w-full h-[30px] px-3 sm:px-5 gap-5">
                    <div className="absolute flex items-end gap-2 z-20">
                        <span className="font-bold text-secondary-default text-[24px] sm:text-[36px] md:text-[41px] leading-none">
                            {suite.price.toLocaleString()}
                        </span>
                        <span className="text-secondary-default text-[19px] leading-none">
                            Fcfa
                        </span>
                    </div>
                    <div className="absolute -top-5 right-0 flex justify-end border border-b-0 border-secondary-default bg-white w-fit h-fit p-1 shadow-[0px_20px_5px_#FFF,_inset_5px_5px_0px_rgba(0,0,0,0.1)] rounded-tl-[40px] rounded-tr-[40px] before:content-[''] before:absolute before:top-[34px] before:md:top-[34px] before:-left-11 before:border-r before:border-b before:border-secondary-default before:w-11 before:h-10 before:bg-white before:shadow-[2px_6px_5px] before:shadow-black/10 before:rounded-br-[40px] before:z-10 after:content-[''] after:absolute after:top-10 after:-right-3 after:bg-white after:w-4 after:h-20">
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

export default SuiteCard;
