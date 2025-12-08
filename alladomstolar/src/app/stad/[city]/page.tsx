import { courts } from "@/data/courts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

// Helper to normalize strings for comparison
const normalize = (str: string) =>
    str.toLowerCase().replace(/å/g, 'a').replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/\s+/g, '-');

interface Props {
    params: {
        city: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    // Find court that contains this city (by normalized slug match)
    const citySlug = params.city;
    const court = courts.find(c => c.cities.some(city => normalize(city) === citySlug));

    // Need to find the actual display name of the city
    const cityDisplayName = court?.cities.find(city => normalize(city) === citySlug) || citySlug;

    if (!court) return {};

    return {
        title: `Tingsrätten i ${cityDisplayName} – Domstolsinformation`,
        description: `Invånare i ${cityDisplayName} tillhör ${court.name}. Hitta adress, telefonnummer och öppettider.`,
    };
}

export async function generateStaticParams() {
    const paths: { city: string }[] = [];
    courts.forEach(court => {
        court.cities.forEach(city => {
            paths.push({ city: normalize(city) });
        });
    });
    return paths;
}

export default function CityPage({ params }: Props) {
    const citySlug = params.city;
    const court = courts.find(c => c.cities.some(city => normalize(city) === citySlug));

    if (!court) {
        return notFound();
    }

    const cityDisplayName = court.cities.find(city => normalize(city) === citySlug) || citySlug;

    return (
        <main className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
            <div className="max-w-2xl w-full text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                    Tingsrätten i {cityDisplayName} – Domstolsinformation
                </h1>

                <div className="bg-blue-50 rounded-2xl p-8 md:p-12 mb-8">
                    <p className="text-xl md:text-2xl text-gray-800 mb-8">
                        Invånare i <strong>{cityDisplayName}</strong> tillhör <strong>{court.name}s</strong> domkrets.
                    </p>

                    <Link
                        href={`/${court.slug}`}
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Gå till {court.name}
                    </Link>
                </div>

                <Link href="/" className="text-gray-500 hover:text-gray-900 underline">
                    Sök efter en annan stad
                </Link>
            </div>
        </main>
    );
}
