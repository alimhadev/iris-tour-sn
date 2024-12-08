import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";
import CircleBtn from "../buttons/CircleBtn";

interface Props {
    bgImg: string;
    title: string;
    description: ReactNode;
    theme: "primary" | "secondary";
    className?: string;
}

const BgImgTextBtnCard: FC<Props> = ({
    bgImg,
    title,
    description,
    className,
    theme,
}) => {
    return (
        <div
            className={cn(
                `relative ${bgImg} bg-cover bg-center bg-no-repeat w-full h-full rounded-xl`,
                className
            )}
        >
            <div
                className={`absolute bottom-0 left-0 flex flex-col justify-end ${
                    theme === "primary"
                        ? "bg-gradient-to-t from-primary-default via-55% via-primary-default to-transparent"
                        : "bg-gradient-to-t from-secondary-default via-50% via-secondary-default to-transparent"
                } w-full h-1/2 gap-4 p-4 pb-7 rounded-b-xl`}
            >
                <span
                    className={`font-secondary italic text-[50px] ${
                        theme === "primary"
                            ? "text-secondary-default"
                            : "text-primary-default"
                    }`}
                >
                    {title}
                </span>
                <span className="text-secondary-text text-[16px] w-[250px]">
                    {description}
                </span>
            </div>
            <div className="absolute -bottom-1 -right-5 flex justify-center items-center bg-white w-[calc(65px+20px)] h-[calc(65px+20px)] rounded-full">
                <CircleBtn theme={theme} />
            </div>
        </div>
    );
};

export default BgImgTextBtnCard;
