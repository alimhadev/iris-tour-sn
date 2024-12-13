import Pagination from "@/components/Pagination";
import SectionContainer from "../SectionContainer";
import SectionPattern from "../SectionPattern";
import SuiteCard from "@/components/cards/SuiteCard";
import SectionSubheading from "@/components/messages/SectionSubheading";
import SectionHeading from "@/components/messages/SectionHeading";
import DotsDeco from "@/public/assets/dots-deco6.svg";
import { useTranslations } from "next-intl";

const SuitesSections = () => {
    const t = useTranslations("HotelsPage.Slug.SuitesSection");

    return (
        <SectionPattern divClassName="p-0 pb-48">
            <SectionContainer className="relative flex flex-col items-center w-full h-full gap-20">
                <div className="absolute top-10 left-5">
                    <DotsDeco />
                </div>
                <div className="flex flex-col items-center w-full h-full gap-10">
                    <div className="flex flex-col items-center">
                        <SectionHeading>
                            {(tags) => t.rich("heading", tags)}
                        </SectionHeading>
                        <SectionSubheading>
                            {(tags) => t.rich("subheading", tags)}
                        </SectionSubheading>
                    </div>
                </div>
                <div className="flex flex-col items-center w-full h-full gap-28">
                    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 place-items-center w-full gap-7">
                        <div className="w-[310px] min-[500px]:w-full h-[520px] min-[500px]:h-[630px]">
                            <SuiteCard
                                suite={{
                                    name: "Suite VIP",
                                    slug: "suite-vip",
                                    description:
                                        "Lorem ipsum dolor sit amet consectetur. Faucibus sit vestibulum etiam pellentesque gravida metus sit quam. Quisque nibh pellentesque tincidunt etiam fermentum in aliquet. Quisque nibh pellentesque tincidunt",
                                    bgImg: "bg-[url('/assets/suite-vip.png')]",
                                    numberOfBeds: 2,
                                    numberOfBathrooms: 2,
                                    surface: 100,
                                    price: 500000,
                                }}
                            />
                        </div>
                        <div className="w-[310px] min-[500px]:w-full h-[520px] min-[500px]:h-[630px]">
                            <SuiteCard
                                suite={{
                                    name: "Junior Suite",
                                    slug: "junior-suite",
                                    description:
                                        "Lorem ipsum dolor sit amet consectetur. Faucibus sit vestibulum etiam pellentesque gravida metus sit quam. Quisque nibh pellentesque tincidunt etiam fermentum in aliquet. Quisque nibh pellentesque tincidunt",
                                    bgImg: "bg-[url('/assets/junior-suite.png')]",
                                    numberOfBeds: 2,
                                    numberOfBathrooms: 2,
                                    surface: 200,
                                    price: 100000,
                                }}
                            />
                        </div>
                        <div className="w-[310px] min-[500px]:w-full h-[520px] min-[500px]:h-[630px]">
                            <SuiteCard
                                suite={{
                                    name: "Executive Suite",
                                    slug: "executive-suite",
                                    description:
                                        "Lorem ipsum dolor sit amet consectetur. Faucibus sit vestibulum etiam pellentesque gravida metus sit quam. Quisque nibh pellentesque tincidunt etiam fermentum in aliquet. Quisque nibh pellentesque tincidunt",
                                    bgImg: "bg-[url('/assets/executive-suite.png')]",
                                    numberOfBeds: 2,
                                    numberOfBathrooms: 2,
                                    surface: 200,
                                    price: 300000,
                                }}
                            />
                        </div>
                        <div className="w-[310px] min-[500px]:w-full h-[520px] min-[500px]:h-[630px]">
                            <SuiteCard
                                suite={{
                                    name: "Suite VIP",
                                    slug: "suite-vip",
                                    description:
                                        "Lorem ipsum dolor sit amet consectetur. Faucibus sit vestibulum etiam pellentesque gravida metus sit quam. Quisque nibh pellentesque tincidunt etiam fermentum in aliquet. Quisque nibh pellentesque tincidunt",
                                    bgImg: "bg-[url('/assets/suite-vip2.png')]",
                                    numberOfBeds: 2,
                                    numberOfBathrooms: 2,
                                    surface: 200,
                                    price: 500000,
                                }}
                            />
                        </div>
                        <div className="w-[310px] min-[500px]:w-full h-[520px] min-[500px]:h-[630px]">
                            <SuiteCard
                                suite={{
                                    name: "Suite standard",
                                    slug: "suite-standard",
                                    description:
                                        "Lorem ipsum dolor sit amet consectetur. Faucibus sit vestibulum etiam pellentesque gravida metus sit quam. Quisque nibh pellentesque tincidunt etiam fermentum in aliquet. Quisque nibh pellentesque tincidunt",
                                    bgImg: "bg-[url('/assets/junior-suite.png')]",
                                    numberOfBeds: 2,
                                    numberOfBathrooms: 2,
                                    surface: 200,
                                    price: 150000,
                                }}
                            />
                        </div>
                        <div className="w-[310px] min-[500px]:w-full h-[520px] min-[500px]:h-[630px]">
                            <SuiteCard
                                suite={{
                                    name: "Suite Africa",
                                    slug: "suite-africa",
                                    description:
                                        "Lorem ipsum dolor sit amet consectetur. Faucibus sit vestibulum etiam pellentesque gravida metus sit quam. Quisque nibh pellentesque tincidunt etiam fermentum in aliquet. Quisque nibh pellentesque tincidunt",
                                    bgImg: "bg-[url('/assets/pullman-hotels4.png')]",
                                    numberOfBeds: 2,
                                    numberOfBathrooms: 2,
                                    surface: 200,
                                    price: 250000,
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex justify-end w-full h-fit">
                        <Pagination
                            currentPage={1}
                            totalPages={12}
                            href="/hotels/suite"
                        />
                    </div>
                </div>
            </SectionContainer>
        </SectionPattern>
    );
};

export default SuitesSections;
