import React, { FC, ReactNode } from "react";
import { cn } from "@/lib/utils";
interface SectionPatternProps {
    children: ReactNode;
    sectionClassName?: string;
    divClassName?: string;
}

const SectionPattern: FC<SectionPatternProps> = ({
    children,
    sectionClassName,
    divClassName,
}) => {
    return (
        <section className={cn("w-full h-fit", sectionClassName)}>
            <div
                className={cn(
                    "flex justify-center items-center w-full h-full py-20",
                    divClassName
                )}
            >
                {children}
            </div>
        </section>
    );
};

export default SectionPattern;
