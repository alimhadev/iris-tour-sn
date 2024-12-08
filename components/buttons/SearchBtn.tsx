import React from "react";
import SearchIcon from "@/public/assets/search-icon.svg";

const SearchBtn = () => {
    return (
        <button className="group flex justify-center items-center border border-secondary-default bg-secondary-default hover:bg-transparent w-12 h-12 rounded-full transition">
            <SearchIcon className="stroke-white group-hover:stroke-secondary-default transition" />
        </button>
    );
};

export default SearchBtn;
