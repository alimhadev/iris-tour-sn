import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface FooterColTitleProps {
    children: ReactNode;
    className?: string;
}

const FooterColTitle: FC<FooterColTitleProps> = ({ children, className }) => {
    return (
        <h2
            className={cn(
                "font-semibold text-secondary-default text-[34px]",
                className
            )}
        >
            {children}
        </h2>
    );
};

export default FooterColTitle;
