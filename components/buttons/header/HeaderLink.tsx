import { FC } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface HeaderLinkProps {
    text: string;
    url: string;
    className?: string;
}

const HeaderLink: FC<HeaderLinkProps> = ({ text, url, className }) => {
    return (
        <Link
            href={url}
            className={cn(
                "font-light text-white text-xl hover:text-secondary-default transition",
                className
            )}
        >
            {text}
        </Link>
    );
};

export default HeaderLink;
