import Link from "next/link";
import Image from "next/image";
import { Yrke, Akassa } from "@/types";
import { ArrowRight, Briefcase } from "lucide-react";

interface Props {
    yrke: Yrke;
    akassa?: Akassa;
}

export default function YrkeCard({ yrke, akassa }: Props) {
    return (
        <Link
            href={`/yrken/${yrke.slug}`}
            className="group relative flex flex-col rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-lg hover:ring-blue-200 hover:-translate-y-1 h-full"
        >
            {yrke.image ? (
                <div className="relative h-48 w-full overflow-hidden rounded-t-2xl bg-gray-100">
                    <Image
                        src={yrke.image}
                        alt={yrke.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            ) : (
                <div className="flex h-48 w-full items-center justify-center rounded-t-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
                    <Briefcase className="h-12 w-12 opacity-50" />
                </div>
            )}

            <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {yrke.name}
                </h3>

                {akassa && (
                    <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 mr-2">A-kassa:</span>
                            <span className="font-medium text-gray-900 bg-green-50 px-2 py-0.5 rounded text-green-700 border border-green-100">{akassa.name}</span>
                        </div>
                        {akassa.relatedFack && (
                            <div className="flex items-center text-sm text-gray-600">
                                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 mr-2">Fack:</span>
                                <span className="font-medium text-gray-900 truncate">{akassa.relatedFack}</span>
                            </div>
                        )}
                    </div>
                )}

                <div className="mt-auto flex items-center text-sm font-bold text-blue-600">
                    Se rekommendation
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
            </div>
        </Link>
    );
}
