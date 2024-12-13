import { cn } from "@/lib/utils";

interface LocationCardProps {
    location: {
        name: string;
        image: string;
        type: "start" | "end";
    };
}

const LocationCard = ({ location }: LocationCardProps) => {
    return (
        <div
            className={cn(
                `w-full h-full bg-primary-default bg-cover bg-center bg-no-repeat p-3 rounded-[38px]`,
                location.image
            )}
        >
            <div className="flex items-center justify-between border border-white bg-white/20 backdrop-blur-sm w-fit h-fit gap-3 pl-3 pr-1 py-2 rounded-full">
                <span className="text-white text-[clamp(16px,5vw,22px)] font-bold">
                    {location.name}
                </span>
                <div className="flex items-center justify-center font-bold text-white text-[clamp(16px,5vw,22px)] border border-white bg-secondary-default w-[43px] h-[43px] rounded-full">
                    {location.type === "start" ? 1 : 2}
                </div>
            </div>
        </div>
    );
};

export default LocationCard;
