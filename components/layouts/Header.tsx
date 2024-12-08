"use client";

import Link from "next/link";
import { useState } from "react";

import Logo from "@/public/assets/logo.svg";
import Navbar from "./Navbar";
import SearchBtn from "../buttons/SearchBtn";
import LinkBtn from "../buttons/LinkBtn";
import { useTranslations } from "next-intl";
import BurgerBtn from "../buttons/BurgerBtn";
import SectionContainer from "../sections/SectionContainer";

const Header = () => {
    const t = useTranslations("Header");

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="relative flex justify-center items-center bg-primary-default w-full h-fit z-50">
            <SectionContainer>
                <div className="flex justify-between items-center w-full h-full py-4 gap-4">
                    <div>
                        <Link href="/">
                            <Logo />
                        </Link>
                    </div>
                    <div className="hidden lg:block">
                        <Navbar isOpen={false} />
                    </div>
                    <div
                        className={
                            "hidden md:flex justify-center items-center h-fit gap-4"
                        }
                    >
                        <SearchBtn />
                        <LinkBtn
                            text={t("Buttons.Booking")}
                            className="text-[20px]"
                        />
                    </div>

                    <div className="block lg:hidden">
                        <BurgerBtn isOpen={isOpen} setIsOpen={setIsOpen} />
                    </div>

                    <div className="absolute top-full right-0 flex lg:hidden justify-end w-full">
                        {isOpen && (
                            <div className="flex flex-col justify-center items-center bg-primary-default border-t border-secondary-default w-full sm:w-[400px] h-fit gap-4 sm:rounded-bl-md p-10 z-50">
                                <div className="block lg:hidden">
                                    <Navbar isOpen={isOpen} />
                                </div>
                                <div className="flex md:hidden flex-col justify-center items-center gap-4">
                                    <SearchBtn />
                                    <LinkBtn
                                        text={t("Buttons.Booking")}
                                        className="text-[20px]"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </SectionContainer>
        </header>
    );
};

export default Header;
