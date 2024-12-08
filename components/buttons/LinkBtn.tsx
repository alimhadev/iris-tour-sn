import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

interface BtnProps {
    text?: string;
    url?: string;
    className?: string;
}

const Btn: FC<BtnProps> = ({ text = "Button", url = "#", className }) => {
    return (
        <Link
            href={url}
            className={cn(
                "flex justify-center items-center font-bold text-white hover:text-secondary-default border border-secondary-default bg-secondary-default hover:bg-transparent rounded-full h-12 px-6 transition",
                className
            )}
        >
            {text}
        </Link>
    );
};

export default Btn;
