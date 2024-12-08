import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface SectionContainerProps {
    children: ReactNode;
    className?: string;
}

const SectionContainer: FC<SectionContainerProps> = ({
    children,
    className,
}) => {
    return (
        <div className={cn("container w-full h-full px-10", className)}>
            {children}
        </div>
    );
};

export default SectionContainer;
