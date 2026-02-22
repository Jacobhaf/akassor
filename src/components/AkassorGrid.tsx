import Image from "next/image";
import Link from "next/link";
import { akassor as akassorLogos } from "@/data/akassor";
import { akassor as akassorData } from "@/data/database";

export default function AkassorGrid() {
    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {akassorData.map((akassa) => {
                const logoData = akassorLogos.find((l) => l.slug === akassa.id);
                const logoUrl = logoData?.logo || "/placeholder-logo.png"; // Fallback if needed

                return (
                    <Link
                        key={akassa.slug}
                        href={`/akassa/${akassa.slug}`}
                        className="group flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-xl relative"
                    >
                        {/* Rating Badge */}
                        <div className="absolute top-3 right-3 bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-1 rounded-full border border-blue-100 uppercase tracking-tighter">
                            Omdöme: {akassa.members > 500000 ? 4.8 : akassa.members > 100000 ? 4.5 : 4.2}
                        </div>

                        <div className="relative mb-6 h-16 w-full mt-4">
                            {logoData ? (
                                <Image
                                    src={logoUrl}
                                    alt={`${akassa.name} logotyp`}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center text-gray-400">
                                    <span className="text-xs">Logotyp saknas</span>
                                </div>
                            )}
                        </div>
                        <h3 className="text-center text-sm font-bold text-gray-900 group-hover:text-blue-600 line-clamp-2">
                            {akassa.name}
                        </h3>
                        <div className="mt-3 text-[11px] text-slate-500 font-medium">
                            {akassa.pricePerMonth} kr/mån
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
