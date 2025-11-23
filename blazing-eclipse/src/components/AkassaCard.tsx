import Link from "next/link";
import { Akassa } from "@/types";

export default function AkassaCard({ akassa }: { akassa: Akassa }) {
    return (
        <Link
            href={`/akassa/${akassa.slug}`}
            className="block p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow hover:border-blue-300"
        >
            <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                {akassa.name}
            </h3>
            <p className="font-normal text-gray-700 mb-4 line-clamp-2">
                {akassa.primaryIndustries.join(", ")}
            </p>
            <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{akassa.membershipFee}</span>
                <span className="text-blue-600 font-medium group-hover:underline">
                    Läs mer &rarr;
                </span>
            </div>
        </Link>
    );
}
