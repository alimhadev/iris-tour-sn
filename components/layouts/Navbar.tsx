"use client";

import { FC, useEffect, useState } from "react";
import { navbarLinks } from "@/data/navbarLinks";
import HeaderLink from "../buttons/header/HeaderLink";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

interface NavbarProps {
    isOpen: boolean;
}

const Navbar: FC<NavbarProps> = ({ isOpen }) => {
    const t = useTranslations("Header.Navbar");

    const pathname = usePathname();
    const [activeLink, setActiveLink] = useState<number>(0);

    useEffect(() => {
        navbarLinks.forEach(
            (link, index) => pathname == link.url && setActiveLink(index)
        );
    }, [pathname]);

    return (
        <nav
            className={`flex items-center ${
                isOpen ? "flex-col gap-4" : "gap-8"
            }`}
        >
            {navbarLinks.map((link, index) => (
                <HeaderLink
                    key={link.text}
                    text={t(link.text)}
                    url={link.url}
                    className={`${
                        activeLink == index &&
                        "text-secondary-default font-black"
                    }`}
                />
            ))}
        </nav>
    );
};

export default Navbar;
