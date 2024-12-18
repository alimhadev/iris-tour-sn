import Image, { StaticImageData } from "next/image";
import avatar1 from "@/public/assets/avatar1.png";
import { cn } from "@/lib/utils";
import QuotesOpened from "@/public/assets/quotes-opened.svg";
import QuotesClosed from "@/public/assets/quotes-closed.svg";

interface TestimonyCardProps {
    testimony: string;
    avatar?: StaticImageData;
    name: string;
    role: string;
    className?: string;
}

const TestimonyCard = ({
    testimony,
    avatar = avatar1,
    name,
    role,
    className,
}: TestimonyCardProps) => {
    return (
        <div
            className={cn(
                "flex flex-col justify-between border border-white/20 bg-white/5 backdrop-blur-lg w-full h-full px-16 py-3 gap-2 rounded-[24px]",
                className
            )}
        >
            <div className="flex items-center justify-center w-full h-full">
                <p className="relative text-[clamp(16px, 1.5vw, 23px)] text-justify text-white">
                    <QuotesOpened className="absolute -top-3 -left-12" />
                    {testimony}
                    <QuotesClosed className="absolute -bottom-3 -right-12" />
                </p>
            </div>
            <div className="flex items-center justify-center border-t w-full h-fit pt-2 gap-3">
                <div className="flex items-center justify-center w-14 h-14 rounded-full overflow-hidden">
                    <Image src={avatar} alt={name} width={100} height={100} />
                </div>
                <div className="flex flex-col justify-center w-full h-full">
                    <p className="font-semibold text-[clamp(20px, 3vw, 24px)] text-white">
                        {name}
                    </p>
                    <p className="font-light text-[clamp(16px, 3vw, 18px)] text-secondary-default leading-none">
                        {role}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TestimonyCard;
