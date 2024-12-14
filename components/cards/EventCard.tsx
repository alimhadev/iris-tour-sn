import { cn } from "@/lib/utils";
import RightCircleLinkBtn from "../buttons/RightCircleLinkBtn";
import { useTranslations } from "next-intl";

interface EventCardProps {
    image: string;
    title: string;
    type: string;
    date: string;
    description: string;
}

const getDay = (date: string) => {
    return new Date(date).toLocaleDateString("fr-FR", {
        day: "2-digit",
    });
};

const getMonth = (date: string) => {
    return new Date(date).toLocaleDateString("fr-FR", {
        month: "short",
    });
};

const getYear = (date: string) => {
    return new Date(date).toLocaleDateString("fr-FR", {
        year: "numeric",
    });
};

const EventCard = ({
    image,
    title,
    type,
    date,
    description,
}: EventCardProps) => {
    const t = useTranslations("EventsPage.DiarySection.EventCard");

    return (
        <div className="flex items-center w-full h-[434px] shadow-2xl rounded-full">
            <div
                className={cn(
                    "w-[27%] h-full rounded-s-full bg-cover bg-center",
                    image
                )}
            ></div>
            <div className="border border-r-0 border-l-0 border-secondary-default bg-white w-[46%] h-full">
                <div className="relative flex flex-col border-r border-dashed border-r-secondary-default w-full h-full p-10">
                    <div className="absolute -top-[1px] right-0 translate-x-1/2 border border-secondary-default border-t-white bg-white w-[140px] h-[70px] rounded-bl-full rounded-br-full shadow-[inset_0_-10px_10px_0_rgba(0,0,0,0.1),_0_-10px_15px_#FFF]"></div>
                    <div className="absolute -bottom-[1px] right-0 translate-x-1/2 border border-secondary-default border-b-white bg-white w-[140px] h-[70px] rounded-tl-full rounded-tr-full shadow-[inset_0_10px_10px_0_rgba(0,0,0,0.1),_0_40px_30px_20px_#FFF]"></div>
                    <div className="flex flex-col w-full h-full gap-4">
                        <span className="font-secondary italic text-secondary-default text-[clamp(20px,_2vw,_34px)] bg-primary-default w-fit h-fit px-4 py-1 rounded-full">
                            {type}
                        </span>
                        <span className="font-semibold text-secondary-default text-[clamp(25px,_6vw,_50px)] leading-none">
                            {title}
                        </span>
                        <p className="font-light text-primary-default text-[clamp(16px,_4vw,_21px)] line-clamp-4">
                            {description}
                        </p>
                    </div>
                    <div>
                        <RightCircleLinkBtn text={t("cta")} />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center border border-l-0 border-secondary-default bg-white w-[27%] h-full gap-2 rounded-e-full">
                <div className="flex flex-col items-center justify-center w-[130px] h-[130px] bg-primary-default rounded-[37px]">
                    <span className="font-bold text-secondary-default text-[clamp(25px,_4vw,50px)] leading-none">
                        {getDay(date)}
                    </span>
                    <span className="font-thin capitalize text-secondary-default text-[clamp(25px,_4vw,_50px)] leading-none">
                        {getMonth(date)}
                    </span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <span className="font-bold text-secondary-default text-[clamp(35px,_5vw,65px)] leading-none">
                        {getYear(date).slice(0, 2)}
                    </span>
                    <span className="font-bold text-secondary-default text-[clamp(35px,_5vw,65px)] leading-none">
                        {getYear(date).slice(2, 4)}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
