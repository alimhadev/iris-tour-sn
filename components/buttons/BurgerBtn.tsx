import { MenuIcon, XIcon } from "lucide-react";
import { motion } from "motion/react";
import { FC } from "react";

interface BurgerBtnProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerBtn: FC<BurgerBtnProps> = ({ isOpen = false, setIsOpen }) => {
    return (
        <button
            className="relative flex justify-center text-white bg-secondary-default w-10 h-10 p-3 rounded-full overflow-hidden"
            onClick={() => setIsOpen((prev) => !prev)}
        >
            <motion.span
                className="group absolute top-1/2 left-1/2 flex flex-col gap-2"
                initial={{ x: "-50%", y: "-20%" }}
                animate={
                    isOpen ? { x: "-50%", y: "-80%" } : { x: "-50%", y: "-20%" }
                }
            >
                <MenuIcon className="h-6 w-6 group-hover:scale-110 transition" />
                <XIcon className="h-6 w-6 group-hover:scale-110 transition" />
            </motion.span>
        </button>
    );
};

export default BurgerBtn;
