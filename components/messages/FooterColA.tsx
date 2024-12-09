import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface FooterColLinkProps {
    url: string;
    children: ReactNode;
    className?: string;
}

const FooterColLink: FC<FooterColLinkProps> = ({
    url,
    children,
    className,
}) => {
    return (
        <a
            href={url}
            className={cn(
                "text-white hover:text-secondary-default text-[24px] transition",
                className
            )}
        >
            {children}
        </a>
    );
};

export default FooterColLink;