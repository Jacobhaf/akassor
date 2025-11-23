import { articles } from "@/data/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

interface Props {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) return { title: "Artikel hittades inte" };
    return {
        title: `${article.title} | Välj a-kassa`,
        description: article.summary,
    };
}

export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export default function ArticlePage({ params }: Props) {
    const article = articles.find((a) => a.slug === params.slug);

    if (!article) {
        notFound();
    }

    return (
        <div className="bg-white px-6 py-32 lg:px-8">
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                <div className="mb-8">
                    <Link href="/artiklar" className="text-blue-600 hover:text-blue-500 text-sm font-semibold">
                        &larr; Tillbaka till artiklar
                    </Link>
                </div>
                <p className="text-base font-semibold leading-7 text-blue-600">Guide</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {article.title}
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-600">
                    {article.summary}
                </p>
                <div className="mt-10 max-w-2xl prose prose-blue prose-lg mx-auto">
                    {/* Render HTML content safely since it comes from our internal data file */}
                    <div dangerouslySetInnerHTML={{ __html: article.content }} />
                </div>

                <div className="mt-16 border-t border-gray-200 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Läs mer</h3>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/akassa" className="text-blue-600 hover:underline">
                            Jämför a-kassor
                        </Link>
                        <Link href="/yrke" className="text-blue-600 hover:underline">
                            Hitta a-kassa för ditt yrke
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
