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
        <h2 className={cn("", className)}>
            {children({
                span1: (chunks) => (
                    <span
                        className={cn(
                            "font-bold text-primary-default text-[64px]",
                            span1ClassName
                        )}
                    >
                        {chunks}
                    </span>
                ),
                span2: (chunks) => (
                    <span
                        className={cn(
                            "italic text-secondary-default font-secondary text-[80px]",
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
