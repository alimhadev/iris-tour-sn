import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Tag = "br";

interface Props {
    children(tags: Record<Tag, (chunks: ReactNode) => ReactNode>): ReactNode;
    className?: string;
}

const SectionSubheading = ({ children, className }: Props) => {
    return (
        <p
            className={cn(
                "font-light text-[24px] text-center text-primary-text",
                className
            )}
        >
            {children({ br: () => <br /> })}
        </p>
    );
};

export default SectionSubheading;
