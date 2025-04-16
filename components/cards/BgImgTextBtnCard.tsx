import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";
import CircleLinkBtn from "../buttons/CircleLinkBtn";

interface Props {
    bgImg: string;
    title: string;
    description: ReactNode;
    theme: "primary" | "secondary" | "black";
    className?: string;

    href?: string;
}

const BgImgTextBtnCard: FC<Props> = ({
    bgImg,
    title,
    description,
    className,
    theme,
    href = "#",
}) => {
    const textColor =
        theme === "primary"
            ? "text-secondary-default"
            : theme === "secondary"
            ? "text-primary-default"
            : theme === "black" && "text-white";

    return (
        <div
            className={cn(
                `relative ${bgImg} bg-cover bg-center bg-no-repeat w-full h-full rounded-xl`,
                className
            )}
        >
            <div
                className={`absolute bottom-0 left-0 flex flex-col justify-end bg-gradient-to-t ${
                    theme === "primary" &&
                    "from-primary-default via-55% via-primary-default"
                } ${
                    theme === "secondary" &&
                    "from-secondary-default via-50% via-secondary-default"
                } ${
                    theme === "black" && "from-black via-50% via-black/50"
                } to-transparent w-full h-1/2 gap-4 p-4 pb-7 rounded-b-xl`}
            >
                <span
                    className={`font-secondary italic text-[clamp(30px,_6vw,_50px)] ${textColor}`}
                >
                    {title}
                </span>
                <span
                    className={`${textColor} w-full max-w-[200px] md:max-w-[250px] z-10`}
                >
                    {description}
                </span>
            </div>
            <div
                className={`absolute -bottom-[2px] right-0 flex justify-center items-center border-8 border-white bg-white w-fit h-fit rounded-tl-[45px] before:content-[''] before:absolute before:-bottom-[6px] before:-left-[48px] before:w-[40px] before:h-[40px] before:bg-transparent before:rounded-br-[45px] before:shadow-[10px_10px_0px_10px] before:shadow-white after:content-[''] after:absolute after:-top-[48px] after:-right-[8px] after:w-[40px] after:h-[40px] after:bg-transparent after:rounded-br-[45px] after:shadow-[10px_10px_0px_10px] after:shadow-white`}
            >
                <CircleLinkBtn
                    tag="Link"
                    href={href}
                    theme={theme}
                    className="z-10"
                />
            </div>
        </div>
    );
};

export default BgImgTextBtnCard;
