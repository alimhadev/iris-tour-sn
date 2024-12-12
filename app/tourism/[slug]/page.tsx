"use client";

import { useParams } from "next/navigation";
import Main from "@/components/layouts/Main";
import SelectedPlaceSection from "@/components/sections/tourism-page/SelectedPlaceSection";

const Page = () => {
    const { slug } = useParams();

    return (
        <Main>
            <SelectedPlaceSection />
        </Main>
    );
};

export default Page;
