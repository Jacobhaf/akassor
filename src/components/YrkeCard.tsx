import Link from "next/link";
import { Yrke, Akassa } from "@/types";

export default function YrkeCard({
    yrke,
    akassa,
}: {
    yrke: Yrke;
    akassa?: Akassa;
}) {
    return (
        <Link
            href={`/yrke/${yrke.slug}`}
            className="block p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow hover:border-green-300"
        >
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-900">{yrke.name}</h3>
            </div>
            {akassa && (
                <p className="text-sm text-gray-600">
                    Rekommenderas: <span className="font-medium">{akassa.name}</span>
                </p>
            )}
        </Link>
    );
}
