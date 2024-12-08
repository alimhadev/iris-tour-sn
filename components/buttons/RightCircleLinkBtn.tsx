import { cn } from "@/lib/utils";
import Link from "next/link";
import { ElementType, FC, ReactNode } from "react";
import ArrowRight from "@/public/assets/arrow-right.svg";

interface RightCircleLinkBtnProps {
    url?: string;
    text: string;
    Icon?: ElementType;
    className?: string;
}

const RightCircleLinkBtn: FC<RightCircleLinkBtnProps> = ({
    url = "#",
    text,
    Icon = ArrowRight,
    className,
}) => {
    return (
        <Link
            href={url}
            className={cn(
                "group flex justify-center items-center font-bold text-primary-default hover:text-secondary-default text-[22px] border border-secondary-default bg-secondary-default hover:bg-transparent w-fit h-fit pl-7 pr-2 py-2 gap-3 rounded-full transition",
                className
            )}
        >
            {text}
            {Icon && ( // Ensure Icon is only rendered if provided
                <span className="flex justify-center items-center bg-primary-default group-hover:bg-secondary-default w-14 h-14 rounded-full transition">
                    <Icon className="stroke-secondary-default group-hover:stroke-primary-default transition" />
                </span>
            )}
        </Link>
    );
};

export default RightCircleLinkBtn;
