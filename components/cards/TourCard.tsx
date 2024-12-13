import { cn } from "@/lib/utils";
import RightCircleLinkBtn from "../buttons/RightCircleLinkBtn";
import LocationCard from "./LocationCard";
import ItineraryIcon from "@/public/assets/itinerary-icon.svg";
import { useTranslations } from "next-intl";

interface TourCardProps {
    tour: {
        startLocation: string;
        endLocation: string;
        description: string;
        price: number;
        startImage: string;
        endImage: string;
        startDate: string;
        endDate: string;
        mapImage: string;
    };
}

const formatTourDates = (startDate: string, endDate: string): string => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const options: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "short",
        year: "numeric",
    };
    const formattedStart = start.toLocaleDateString("fr-FR", options);
    const formattedEnd = end.toLocaleDateString("fr-FR", options);

    // Extract day and month from formatted dates
    const [startDay, startMonth, startYear] = formattedStart.split(" ");
    const [endDay, endMonth, endYear] = formattedEnd.split(" ");

    return `${startDay} ${startMonth} ${startYear} - ${endDay} ${endMonth} ${endYear}`;
};

const TourCard = ({ tour }: TourCardProps) => {
    const t = useTranslations("ToursPage.ToursSection.tourCard");

    return (
        <div className="flex flex-col w-full h-fit gap-10">
            <div className="flex items-center w-full h-fit gap-6">
                <span className="text-primary-default text-[clamp(32px,8vw,64px)] font-bold leading-none">
                    {tour.startLocation} - {tour.endLocation}
                </span>
                <div className="w-[2px] h-[clamp(50px,4vw,70px)] bg-secondary-default"></div>
                <span className="font-secondary italic text-secondary-default text-[clamp(24px,6vw,48px)] leading-none">
                    {formatTourDates(tour.startDate, tour.endDate)}
                </span>
            </div>
            <div className="w-3/4 h-fit">
                <span className="font-light text-[clamp(16px,6vw,24px)]">
                    {tour.description}
                </span>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 items-center w-full h-fit gap-2">
                <div className="flex flex-col w-full h-full gap-2">
                    <div className="w-full h-[320px] bg-primary-default rounded-[38px]">
                        <LocationCard
                            location={{
                                name: tour.startLocation,
                                image: tour.startImage,
                                type: "start",
                            }}
                        />
                    </div>
                    <div className="w-full h-[320px] bg-primary-default rounded-[38px]">
                        <LocationCard
                            location={{
                                name: tour.endLocation,
                                image: tour.endImage,
                                type: "end",
                            }}
                        />
                    </div>
                </div>
                <div className="flex flex-col border border-secondary-default w-full h-[640px] gap-2 p-1 rounded-[38px]">
                    <div className="flex justify-end items-center w-full h-fit">
                        <RightCircleLinkBtn
                            text="Itinéraire"
                            Icon={ItineraryIcon}
                        />
                    </div>
                    <div
                        className={cn(
                            ` bg-white bg-contain bg-center bg-no-repeat w-full h-full`,
                            tour.mapImage
                        )}
                    ></div>
                    <div className="flex flex-col sm:flex-row justify-between sm:items-end w-full h-fit p-1 gap-5">
                        <div className="flex flex-col items-center sm:items-start w-full h-fit gap-2">
                            <span className="font-bold text-primary-default text-[clamp(18px,6vw,30px)] leading-none">
                                {t("price")}
                            </span>
                            <div className="relative flex items-center justify-center bg-primary-default w-fit gap-2 py-2 px-10 rounded-full before:content-[''] before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:box-content before:bg-secondary-default before:w-full before:h-full before:p-1 before:rounded-full before:-z-10">
                                <span className="font-bold text-white text-[clamp(24px,6vw,48px)] leading-none">
                                    {tour.price.toLocaleString()}
                                </span>
                                <span className="text-white text-[clamp(20px,6vw,33px)] leading-none">
                                    Fcfa
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <RightCircleLinkBtn text={t("cta")} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourCard;
