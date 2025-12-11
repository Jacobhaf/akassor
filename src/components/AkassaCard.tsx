import Link from "next/link";
import { Akassa } from "@/types";
import { ArrowRight, Check } from "lucide-react";

interface Props {
    akassa: Akassa;
}

export default function AkassaCard({ akassa }: Props) {
    return (
        <div className="flex flex-col rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 transition-all hover:shadow-xl">
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">{akassa.name}</h3>
                {akassa.shortName && (
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                        {akassa.shortName}
                    </span>
                )}
            </div>
            {akassa.relatedFack && (
                <p className="mb-4 text-xs font-medium text-gray-500">
                    Fackförbund: <span className="text-gray-900">{akassa.relatedFack}</span>
                </p>
            )}

            <div className="mb-6 flex-grow">
                <p className="text-sm text-gray-500 mb-2">Passar för:</p>
                <ul className="space-y-1">
                    {akassa.primaryIndustries.slice(0, 3).map((industry, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700">
                            <Check className="mr-2 h-4 w-4 shrink-0 text-green-500" />
                            <span>{industry}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-auto border-t border-gray-100 pt-4">
                <div className="mb-4 flex items-baseline justify-between">
                    <span className="text-sm text-gray-500">Avgift</span>
                    <span className="text-lg font-bold text-gray-900">
                        {akassa.membershipFee}
                    </span>
                </div>
                <Link
                    href={`/akassa/${akassa.slug}`}
                    className="group flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all"
                >
                    Läs mer
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    );
}
