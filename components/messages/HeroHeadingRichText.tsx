import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Tag = "span1" | "span2" | "br";

type Props = {
    children(tags: Record<Tag, (chunks: ReactNode) => ReactNode>): ReactNode;
    className?: string;
    span1ClassName?: string;
    span2ClassName?: string;
};

const HeroHeadingRichText = ({
    children,
    className,
    span1ClassName,
    span2ClassName,
}: Props) => {
    return (
        <h1 className={cn("leading-none text-center lg:text-start", className)}>
            {children({
                span1: (chunks) => (
                    <span
                        className={cn(
                            "font-bold text-white text-[clamp(44px,_6vw,_74px)]",
                            span1ClassName
                        )}
                    >
                        {chunks}
                    </span>
                ),
                span2: (chunks) => (
                    <span
                        className={cn(
                            "italic text-secondary-default font-secondary text-[clamp(44px,_6vw,_74px)]",
                            span2ClassName
                        )}
                    >
                        {chunks}
                    </span>
                ),
                br: () => <br />,
            })}
        </h1>
    );
};

export default HeroHeadingRichText;
