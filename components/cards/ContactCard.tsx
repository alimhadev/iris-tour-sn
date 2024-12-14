import { ReactNode } from "react";

interface ContactCardProps {
    icon: ReactNode;
    title: string;
    line1?: string;
    line2?: string;
}

const ContactCard = ({ icon, title, line1, line2 }: ContactCardProps) => {
    return (
        <div className="flex flex-col justify-between items-center md:items-start bg-secondary-default w-full h-[250px] md:h-[300px] p-5 rounded-[53px]">
            <div className="flex justify-center items-center w-[80px] h-[80px] bg-primary-default rounded-full">
                {icon}
            </div>
            <div className="flex flex-col items-center md:items-start gap-2">
                <h3 className="font-semibold text-primary-default text-[clamp(24px,_6vw,_36px)] leading-none">
                    {title}
                </h3>
                <p className="font-light text-primary-default text-[clamp(20px,_6vw,_28px)] leading-none">
                    {line1}
                </p>
                <p className="font-light text-primary-default text-[clamp(20px,_6vw,_28px)] leading-none">
                    {line2}
                </p>
            </div>
        </div>
    );
};

export default ContactCard;
