import { cn } from "@/lib/utils";
import { FC } from "react";

interface ImgCardProps {
    bgUrl: string;
    className?: string;
}

const ImgCard: FC<ImgCardProps> = ({ bgUrl, className }) => {
    return (
        <div
            className={cn(
                `bg-primary-default ${bgUrl} bg-center bg-no-repeat bg-cover rounded-3xl h-[265px]`,
                className
            )}
        ></div>
    );
};

export default ImgCard;
