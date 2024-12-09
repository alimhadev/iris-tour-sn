import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Tag = "br";

interface Props {
    children(tags: Record<Tag, (chunks: ReactNode) => ReactNode>): ReactNode;
    className?: string;
}

const HeroSubheading = ({ children, className }: Props) => {
    return (
        <p
            className={cn(
                "font-light text-[clamp(16px,_2vw,_24px)] text-white text-center lg:text-start",
                className
            )}
        >
            {children({
                br: () => <br />,
            })}
        </p>
    );
};

export default HeroSubheading;
