import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sidkarta | Välj a-kassa",
    description: "Översikt över alla sidor på Välj a-kassa.",
};

export default function SitemapPage() {
    const sections = [
        {
            title: "Huvudsidor",
            links: [
                { label: "Hem", href: "/" },
                { label: "Alla a-kassor", href: "/akassa" },
                { label: "Alla yrken", href: "/yrke" },
                { label: "Vanliga frågor (FAQ)", href: "/faq" },
                { label: "Artiklar", href: "/artiklar" },
            ],
        },
        {
            title: "Information",
            links: [
                { label: "Om oss", href: "/om-oss" },
                { label: "Kontakt", href: "/kontakt" },
                { label: "Integritetspolicy", href: "/integritetspolicy" },
            ],
        },
    ];

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Sidkarta
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Här hittar du en översikt över innehållet på sajten.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {sections.map((section) => (
                        <div key={section.title} className="flex flex-col gap-4">
                            <h2 className="text-xl font-semibold text-gray-900">
                                {section.title}
                            </h2>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-base text-gray-600 hover:text-blue-600 transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
