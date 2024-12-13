import { cn } from "@/lib/utils";
import Link from "next/link";
import { ElementType, FC, ReactNode } from "react";
import ArrowRight from "@/public/assets/arrow-right.svg";

interface RightCircleLinkBtnProps {
    tag?: "Link" | "Button";
    url?: string;
    text: string;
    Icon?: ElementType;
    className?: string;
    textClassName?: string;
    iconSpanClassName?: string;
    iconClassName?: string;
}

const RightCircleLinkBtn: FC<RightCircleLinkBtnProps> = ({
    tag = "Link",
    url = "#",
    text,
    Icon = ArrowRight,
    className,
    textClassName,
    iconSpanClassName,
    iconClassName,
}) => {
    if (tag === "Link") {
        return (
            <Link
                href={url}
                className={cn(
                    "group flex items-center font-bold text-primary-default hover:text-secondary-default text-[clamp(18px,_2vw,_22px)] border border-secondary-default bg-secondary-default hover:bg-transparent w-fit h-fit pl-7 pr-2 py-2 gap-3 rounded-full transition",
                    className
                )}
            >
                <span
                    className={cn(
                        "flex justify-center flex-auto",
                        textClassName
                    )}
                >
                    {text}
                </span>

                {Icon && ( // Ensure Icon is only rendered if provided
                    <span
                        className={cn(
                            "flex justify-center items-center bg-primary-default group-hover:bg-secondary-default w-14 h-14 rounded-full transition",
                            iconSpanClassName
                        )}
                    >
                        <Icon
                            className={cn(
                                "stroke-secondary-default group-hover:stroke-primary-default transition",
                                iconClassName
                            )}
                        />
                    </span>
                )}
            </Link>
        );
    }

    return (
        <button
            className={cn(
                "group flex items-center font-bold text-primary-default hover:text-secondary-default text-[clamp(18px,_2vw,_22px)] border border-secondary-default bg-secondary-default hover:bg-transparent w-fit h-fit pl-7 pr-2 py-2 gap-3 rounded-full transition",
                className
            )}
        >
            <span
                className={cn("flex justify-center flex-auto", textClassName)}
            >
                {text}
            </span>

            {Icon && ( // Ensure Icon is only rendered if provided
                <span
                    className={cn(
                        "flex justify-center items-center bg-primary-default group-hover:bg-secondary-default w-14 h-14 rounded-full transition",
                        iconSpanClassName
                    )}
                >
                    <Icon
                        className={cn(
                            "stroke-secondary-default group-hover:stroke-primary-default transition",
                            iconClassName
                        )}
                    />
                </span>
            )}
        </button>
    );
};

export default RightCircleLinkBtn;
