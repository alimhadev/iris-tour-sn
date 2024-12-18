import { cn } from "@/lib/utils";
import { FC } from "react";

interface ImageCardProps {
    image: string;
    text?: string;
    className?: string;
}

const ImageCard: FC<ImageCardProps> = ({ image, text, className }) => {
    return (
        <div
            className={cn(
                "flex items-end bg-cover bg-center bg-no-repeat w-full h-full rounded-[16px] shadow-[0_3px_10px_rgba(0,0,0,0.3)] overflow-hidden",
                image,
                className
            )}
        >
            {text && (
                <div className="flex items-end bg-gradient-to-t from-secondary-default via-80% via-primary-default/10 to-primary-default/5 backdrop-blur-sm  w-full h-1/3 p-2 rounded-b-[16px]">
                    <p className="font-light text-white text-center text-[clamp(16px,1.5vw,20px)]">
                        {text}
                    </p>
                </div>
            )}
        </div>
    );
};

export default ImageCard;
