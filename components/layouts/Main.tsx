import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface MainProps {
    children?: ReactNode;
    className?: string;
}

const Main: FC<MainProps> = ({ children, className }) => {
    return (
        <main className={cn("w-full h-full flex-auto", className)}>
            {children}
        </main>
    );
};

export default Main;
