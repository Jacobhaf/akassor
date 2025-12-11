
import Image from "next/image";
import Link from "next/link";
import { Akassa } from "@/types";
import { ArrowRight, Check } from "lucide-react";

interface Props {
    akassa: Akassa;
}

export default function AkassaCard({ akassa }: Props) {
    // Format numbers
    const membersFormatted = new Intl.NumberFormat("sv-SE").format(akassa.members);
    const maxCompFormatted = new Intl.NumberFormat("sv-SE").format(akassa.maxCompPerMonth);

    return (
        <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:border-blue-200 hover:shadow-lg md:flex-row md:items-center">

            {/* Logo & Name Section */}
            <div className="flex flex-col gap-4 p-6 md:w-[35%] md:flex-row md:items-center md:gap-6 md:p-6">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-gray-50 p-2 md:h-14 md:w-14">
                    <Image
                        src={`/logos/${akassa.id}.png`}
                        alt={`${akassa.name} logotyp`}
                        fill
                        className="object-contain"
                    />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {akassa.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                        {akassa.primaryIndustries[0] || "För dig som jobbar"}
                    </p>
                </div>
            </div>

            {/* Middle Section: Stats */}
            <div className="flex flex-1 flex-col justify-center gap-4 border-t border-gray-100 bg-gray-50/50 p-4 px-6 md:border-0 md:border-l md:bg-transparent md:py-6">
                <div className="grid grid-cols-2 gap-4 md:flex md:items-center md:justify-around md:gap-8">
                    <div className="flex flex-col gap-1">
                        <span className="text-xs font-medium uppercase tracking-wider text-gray-500">Medlemmar</span>
                        <span className="font-semibold text-gray-900">{membersFormatted} st</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs font-medium uppercase tracking-wider text-gray-500">Max ersättning</span>
                        <span className="font-semibold text-gray-900">{maxCompFormatted} kr/mån</span>
                    </div>
                </div>
            </div>

            {/* Right Section: Price & Action */}
            <div className="flex items-center justify-between gap-6 border-t border-gray-100 p-6 md:w-auto md:border-0 md:pl-0 md:pr-6">
                <div className="flex flex-col items-end md:items-end">
                    <span className="text-xs font-medium uppercase tracking-wider text-gray-500 text-right">
                        Pris
                    </span>
                    <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-blue-600">
                            {akassa.pricePerMonth}
                        </span>
                        <span className="text-sm font-medium text-gray-600">
                            kr/mån
                        </span>
                    </div>
                </div>

                <Link
                    href={`/akassa/${akassa.slug}`}
                    className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Läs mer
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </div>
        </div>
    );
}
