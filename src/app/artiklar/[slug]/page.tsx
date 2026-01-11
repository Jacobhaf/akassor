import { articles } from "@/data/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
        title: `${article.title} | Välja A-kassa`,
        description: article.summary,
        keywords: [article.title, "a-kassa", "arbetslöshetsförsäkring", "ersättning", article.slug.replace(/-/g, " ")],
        alternates: {
            canonical: `https://www.valjaakassa.se/artiklar/${article.slug}`,
        },
        openGraph: {
            title: `${article.title} | Välja A-kassa`,
            description: article.summary,
            type: "article",
            publishedTime: article.publishedAt,
            url: `https://www.valjaakassa.se/artiklar/${article.slug}`,
            images: [
                {
                    url: article.image,
                    width: 1200,
                    height: 630,
                    alt: article.title,
                },
            ],
        },
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

    const jsonLd = article.faq ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": article.faq.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    } : null;

    return (
        <div className="bg-white px-6 py-32 lg:px-8">
            {jsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            )}
            <div className="mx-auto max-w-4xl text-base leading-7 text-gray-700">
                <div className="mb-8 text-center">
                    <Link href="/artiklar" className="text-blue-600 hover:text-blue-500 text-sm font-semibold inline-flex items-center gap-1 mb-8 transition-colors">
                        &larr; Tillbaka till artiklar
                    </Link>

                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6 text-center max-w-3xl mx-auto leading-tight">
                        {article.title}
                    </h1>

                    <p className="text-xl text-slate-600 leading-8 max-w-2xl mx-auto mb-10">
                        {article.summary}
                    </p>

                    <div className="flex items-center justify-center gap-4 text-sm text-gray-500 border-t border-b border-gray-100 py-4 mb-10 w-full max-w-2xl mx-auto">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                                V
                            </div>
                            <span className="font-medium text-gray-900">Redaktionen</span>
                        </div>
                        <span className="h-1 w-1 bg-gray-300 rounded-full"></span>
                        <time dateTime={article.publishedAt}>
                            {article.publishedAt}
                        </time>
                        <span className="h-1 w-1 bg-gray-300 rounded-full"></span>
                        <span className="text-blue-600 bg-blue-50 px-2 py-1 rounded-full font-medium">Guide</span>
                    </div>
                </div>

                <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-16 shadow-xl ring-1 ring-gray-900/5">
                    <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
                </div>

                <div className="max-w-prose mx-auto prose prose-blue prose-lg prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600 prose-img:rounded-xl">
                    {/* Render HTML content */}
                    <div dangerouslySetInnerHTML={{ __html: article.content }} />
                </div>

                <div className="mt-20 border-t border-gray-200 pt-10 max-w-prose mx-auto">
                    <div className="bg-slate-50 rounded-2xl p-8 text-center">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Hittade du inte rätt?</h3>
                        <p className="text-slate-600 mb-6">Jämför alla a-kassor och se vilken som passar just dig bäst.</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/jamfor" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-all hover:scale-105">
                                Jämför a-kassor
                            </Link>
                            <Link href="/yrken" className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all">
                                Hitta via yrke
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
