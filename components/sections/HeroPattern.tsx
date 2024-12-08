import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface HeroPatternProps {
    children: ReactNode;
    bgImg?: string;
    className?: string;
}

const HeroPattern: FC<HeroPatternProps> = ({ children, bgImg, className }) => {
    return (
        <section
            className={cn(
                `bg-primary-default ${bgImg} bg-bottom bg-cover bg-no-repeat w-full h-[700px]`,
                className
            )}
        >
            <div className="flex justify-center items-center bg-gradient-to-r from-black/60 via-35% via-primary-default/50 to-50% to-transparent w-full h-full">
                {children}
            </div>
        </section>
    );
};

export default HeroPattern;
