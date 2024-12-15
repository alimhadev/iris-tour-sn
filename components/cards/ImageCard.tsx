import { cn } from "@/lib/utils";
import { FC } from "react";

interface ImageCardProps {
    image: string;
    className?: string;
}

const ImageCard: FC<ImageCardProps> = ({ image, className }) => {
    return (
        <div
            className={cn(
                "bg-cover bg-center bg-no-repeat w-full h-full rounded-[16px] shadow-[0_3px_10px_rgba(0,0,0,0.3)]",
                image,
                className
            )}
        ></div>
    );
};

export default ImageCard;
