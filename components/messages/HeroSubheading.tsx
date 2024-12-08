import { ReactNode } from "react";

type Tag = "br";

interface Props {
    children(tags: Record<Tag, (chunks: ReactNode) => ReactNode>): ReactNode;
}

const HeroSubheading = ({ children }: Props) => {
    return (
        <p className="font-light text-[24px] text-white">
            {children({
                br: () => <br />,
            })}
        </p>
    );
};

export default HeroSubheading;
