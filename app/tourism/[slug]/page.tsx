"use client";

import { useParams } from "next/navigation";
import Main from "@/components/layouts/Main";
import SelectedPlaceSection from "@/components/sections/tourism-page/SelectedPlaceSection";
import OtherPlacesSection from "@/components/sections/tourism-page/OtherPlacesSection";
import HeroSection from "@/components/sections/tourism-page/HeroSection";

const Page = () => {
    const { slug } = useParams();

    return (
        <Main>
            <HeroSection />
            <SelectedPlaceSection />
            <OtherPlacesSection />
        </Main>
    );
};

export default Page;
