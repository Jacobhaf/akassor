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
                        className="group flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
                    >
                        <div className="relative mb-4 h-16 w-full">
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
                        <h3 className="text-center text-sm font-medium text-gray-900 group-hover:text-blue-600">
                            {akassa.name}
                        </h3>
                    </Link>
                );
            })}
        </div>
    );
}
