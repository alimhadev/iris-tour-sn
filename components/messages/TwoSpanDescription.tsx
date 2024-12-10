import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

type Tag = "span1" | "span2" | "br";

interface TwoSpanDescriptionProps {
    children(tags: Record<Tag, (chunks: ReactNode) => ReactNode>): ReactNode;
    className?: string;
    span1ClassName?: string;
    span2ClassName?: string;
    theme: "primary" | "secondary";
}

const TwoSpanDescription: FC<TwoSpanDescriptionProps> = ({
    children,
    className,
    span1ClassName,
    span2ClassName,
    theme,
}) => {
    return (
        <h2 className={cn("text-justify", className)}>
            {children({
                span1: (chunks) => (
                    <span
                        className={cn(
                            `font-bold text-[clamp(14px,_2vw,_18px)] leading-[22px] ${
                                theme === "primary"
                                    ? "text-secondary-default"
                                    : "text-primary-default"
                            }`,
                            span1ClassName
                        )}
                    >
                        {chunks}
                    </span>
                ),
                span2: (chunks) => (
                    <span
                        className={cn(
                            `italic text-[clamp(14px,_2vw,_18px)] leading-[22px] text-white font-secondary`,
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

export default TwoSpanDescription;
