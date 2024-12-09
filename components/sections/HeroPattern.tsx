import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface HeroPatternProps {
    children: ReactNode;
    bgImg?: string;
    className?: string;
    overlayClassName?: string;
}

const HeroPattern: FC<HeroPatternProps> = ({
    children,
    bgImg,
    className,
    overlayClassName,
}) => {
    return (
        <section
            className={cn(
                `bg-primary-default bg-bottom bg-cover bg-no-repeat w-full h-[700px]`,
                bgImg,
                className
            )}
        >
            <div
                className={cn(
                    "flex justify-center items-center bg-gradient-to-r from-black/60 via-35% via-primary-default/50 to-50% to-transparent w-full h-full",
                    overlayClassName
                )}
            >
                {children}
            </div>
        </section>
    );
};

export default HeroPattern;
