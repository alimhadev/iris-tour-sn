"use client";

import Main from "@/components/layouts/Main";
import HeroSection from "@/components/sections/hotels-page/HeroSection";
import SelectedHotelSection from "@/components/sections/hotels-page/SelectedHotelSection";
import SuitesSections from "@/components/sections/hotels-page/SuitesSections";
import { useParams } from "next/navigation";

const Page = () => {
    const { slug } = useParams();
    return (
        <Main>
            <HeroSection />
            <SelectedHotelSection />
            <SuitesSections />
        </Main>
    );
};

export default Page;
