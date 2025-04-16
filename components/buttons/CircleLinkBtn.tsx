import { cn } from "@/lib/utils";
import { ElementType } from "react";
import ArrowRight from "@/public/assets/arrow-right.svg";
import Link from "next/link";

interface CircleBtnProps {
    tag?: "Link" | "Button";
    href?: string;
    className?: string;
    Icon?: ElementType;
    theme?: "primary" | "secondary" | "black";
}

const CircleBtn = ({
    tag = "Button",
    href = "#",
    className,
    Icon = ArrowRight,
    theme = "primary",
}: CircleBtnProps) => {
    return tag === "Button" ? (
        <button
            className={cn(
                `group flex justify-center items-center bg-transparent w-[65px] h-[65px] rounded-full border-[2px] ${
                    theme === "primary" &&
                    "border-primary-default hover:bg-primary-default"
                } ${
                    theme === "secondary" &&
                    "border-secondary-default hover:bg-secondary-default"
                } ${
                    theme === "black" && "border-black hover:bg-black"
                } transition`,
                className
            )}
        >
            {Icon && (
                <Icon
                    className={`group-hover:stroke-white ${
                        theme === "primary" && "stroke-primary-default"
                    } ${theme === "secondary" && "stroke-secondary-default"} ${
                        theme === "black" && "stroke-black"
                    } transition`}
                />
            )}
        </button>
    ) : (
        <Link
            href={href}
            className={cn(
                `group flex justify-center items-center bg-transparent w-[65px] h-[65px] rounded-full border-[2px] ${
                    theme === "primary" &&
                    "border-primary-default hover:bg-primary-default"
                } ${
                    theme === "secondary" &&
                    "border-secondary-default hover:bg-secondary-default"
                } ${
                    theme === "black" && "border-black hover:bg-black"
                } transition`,
                className
            )}
        >
            {Icon && (
                <Icon
                    className={`group-hover:stroke-white ${
                        theme === "primary" && "stroke-primary-default"
                    } ${theme === "secondary" && "stroke-secondary-default"} ${
                        theme === "black" && "stroke-black"
                    } transition`}
                />
            )}
        </Link>
    );
};

export default CircleBtn;
