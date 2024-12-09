import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface FooterColTextProps {
    children: ReactNode;
    className?: string;
}

const FooterColText: FC<FooterColTextProps> = ({ children, className }) => {
    return (
        <p
            className={cn(
                "text-white text-[clamp(16px,_3vw,_24px)] transition",
                className
            )}
        >
            {children}
        </p>
    );
};

export default FooterColText;
