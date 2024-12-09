import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

type Tag = "span1" | "span2" | "br";

interface SectionHeadingProps {
    children(tags: Record<Tag, (chunks: ReactNode) => ReactNode>): ReactNode;
    className?: string;
    span1ClassName?: string;
    span2ClassName?: string;
}

const SectionHeading: FC<SectionHeadingProps> = ({
    children,
    className,
    span1ClassName,
    span2ClassName,
}) => {
    return (
        <h2 className={cn("text-center", className)}>
            {children({
                span1: (chunks) => (
                    <span
                        className={cn(
                            "font-bold text-primary-default text-[clamp(36px,_6vw,_64px)]",
                            span1ClassName
                        )}
                    >
                        {chunks}
                    </span>
                ),
                span2: (chunks) => (
                    <span
                        className={cn(
                            "italic text-secondary-default font-secondary text-[clamp(42px,_7vw,_80px)]",
                            span2ClassName
                        )}
                    >
                        {chunks}
                    </span>
                ),
                br: () => <br />,
            })}
        </h2>
    );
};

export default SectionHeading;
