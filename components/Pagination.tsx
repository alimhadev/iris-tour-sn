"use client";

import Link from "next/link";
import ChevronLeft from "@/public/assets/chevron-left.svg";
import ChevronRight from "@/public/assets/chevron-right.svg";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    href: string;
}

const Pagination = ({ currentPage, totalPages, href }: PaginationProps) => {
    return (
        <div className="flex items-center gap-5">
            <div className="flex items-center gap-5">
                <Link
                    className={`bg-white ${
                        currentPage === 1
                            ? "opacity-50 cursor-not-allowed"
                            : "hover:bg-gray-100"
                    } w-fit h-fit p-2 rounded-s-2xl rounded-e-md transition`}
                    href={
                        currentPage === 1
                            ? "#"
                            : `/${href}/page/${currentPage - 1}`
                    }
                    onClick={(e) => {
                        if (currentPage === 1) e.preventDefault();
                    }}
                >
                    <ChevronLeft />
                </Link>
                <div className="flex justify-center items-center border border-secondary-default bg-gray-100 w-[50px] h-[50px] rounded-full">
                    <span className="font-semibold text-[clamp(16px,1.5vw,20px)] text-secondary-default">
                        {currentPage}
                    </span>
                </div>
                <Link
                    className={`bg-white ${
                        currentPage === totalPages
                            ? "opacity-50 cursor-not-allowed"
                            : "hover:bg-gray-100"
                    } w-fit h-fit p-2 rounded-e-2xl rounded-s-md transition`}
                    href={
                        currentPage === totalPages
                            ? "#"
                            : `/${href}/page/${currentPage + 1}`
                    }
                    onClick={(e) => {
                        if (currentPage === totalPages) e.preventDefault();
                    }}
                >
                    <ChevronRight />
                </Link>
            </div>
            <div>
                <span className="font-semibold text-[clamp(16px,1.5vw,20px)] text-primary-default">
                    {`${currentPage} / ${totalPages}`}
                </span>
            </div>
        </div>
    );
};

export default Pagination;
