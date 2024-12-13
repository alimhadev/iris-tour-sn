import { cn } from "@/lib/utils";
import HearthIcon from "@/public/assets/hearth-icon.svg";
import ShareIcon from "@/public/assets/share-icon.svg";
import StarIcon from "@/public/assets/star-icon.svg";
import RightCircleLinkBtn from "../buttons/RightCircleLinkBtn";
import ItineraryIcon from "@/public/assets/itinerary-icon.svg";

interface SelectedPlaceCardProps {
    place: {
        name: string;
        description: string;
        bgImg: string;
        otherImgs: string[];
    };
}

const SelectedPlaceCard = ({ place }: SelectedPlaceCardProps) => {
    return (
        <div className="grid grid-cols-2 w-full h-full">
            <div className="relative w-full h-[650px]">
                <div
                    className={cn(
                        `flex flex-col justify-between bg-primary-default bg-cover bg-center bg-no-repeat w-full h-full rounded-[30px] overflow-hidden`,
                        place.bgImg
                    )}
                >
                    <div className="flex justify-between w-full h-fit py-3 pl-5 pr-8">
                        <div>
                            <RightCircleLinkBtn
                                text="Itinéraire"
                                className="border-none bg-white hover:bg-secondary-default py-1"
                                textClassName="text-secondary-default group-hover:text-white"
                                iconSpanClassName="group-hover:bg-primary-default"
                                iconClassName="group-hover:stroke-secondary-default"
                                Icon={ItineraryIcon}
                            />
                        </div>
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
                <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-tl-[45px] before:content-[''] before:absolute before:top-[42px] before:left-[-50px] before:w-[50px] before:h-[40px] before:bg-transparent before:rounded-br-[30px] before:shadow-[6px_12px_0_0_#FFF] after:absolute after:-top-[50px] after:right-[8px] after:w-[50px] after:h-[50px] after:bg-transparent after:rounded-br-[30px] after:shadow-[10px_8px_0_0_#FFF]">
                    <RightCircleLinkBtn text="Réservation" />
                </div>
            </div>
            <div className="flex flex-col w-full h-full px-10 pt-5">
                <div className="flex flex-col h-fit gap-4">
                    <span className="font-secondary italic text-[clamp(50px,_6vw,_105px)] leading-none text-primary-default">
                        {place.name}
                    </span>
                    <div className="flex items-center gap-1">
                        <StarIcon className="scale-150 h-10 w-10" />
                        <StarIcon className="scale-150 h-10 w-10" />
                        <StarIcon className="scale-150 h-10 w-10" />
                        <StarIcon className="scale-150 h-10 w-10" />
                        <StarIcon className="scale-150 h-10 w-10" />
                    </div>
                </div>
                <div className="flex flex-col h-fit gap-4">
                    <p className="text-[clamp(16px,_2vw,_20px)]">
                        {place.description}
                    </p>
                    <div className="grid grid-cols-3 place-items-center gap-2">
                        {place.otherImgs.map((img, index) => (
                            <div
                                key={index}
                                className={`w-[180px] h-[200px] ${img} bg-cover bg-center bg-no-repeat bg-primary-default rounded-[30px] overflow-hidden`}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectedPlaceCard;
