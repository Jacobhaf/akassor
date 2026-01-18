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

    const title = article.metaTitle || `${article.title} | Välja A-kassa`;
    const description = article.metaDescription || article.summary;

    return {
        title: title,
        description: description,
        keywords: [article.title, "a-kassa", "arbetslöshetsförsäkring", "ersättning", article.slug.replace(/-/g, " ")],
        alternates: {
            canonical: `https://www.valjaakassa.se/artiklar/${article.slug}`,
        },
        openGraph: {
            title: title,
            description: description,
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
        "mainEntity": article.faq.map((item: { question: string; answer: string }) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    } : null;

    return (
        <div className="bg-white min-h-screen">
            {jsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            )}

            {/* Minimal Header Breadcrumb */}
            <div className="bg-slate-50 border-b border-slate-100 py-4">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <nav className="flex gap-2 text-sm text-slate-500">
                        <Link href="/" className="hover:text-blue-600 transition-colors">Hem</Link>
                        <span>/</span>
                        <Link href="/artiklar" className="hover:text-blue-600 transition-colors">Artiklar</Link>
                        <span>/</span>
                        <span className="text-slate-900 font-medium truncate">{article.title}</span>
                    </nav>
                </div>
            </div>

            <article className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Main Content Column */}
                        <div className="flex-1 lg:max-w-3xl">
                            <header className="mb-12">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                        Guide
                                    </span>
                                    <span className="text-slate-400 text-sm">|</span>
                                    <time className="text-sm text-slate-500 font-medium" dateTime={article.publishedAt}>
                                        {article.publishedAt}
                                    </time>
                                </div>

                                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-56xl mb-8 leading-[1.1]">
                                    {article.title}
                                </h1>

                                <p className="text-xl leading-8 text-slate-600 font-medium">
                                    {article.summary}
                                </p>
                            </header>

                            {/* Image Section - More flexible aspect ratio */}
                            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-3xl overflow-hidden mb-16 shadow-2xl ring-1 ring-gray-900/10">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>

                            <div className="prose prose-blue prose-lg max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-strong:text-slate-900 prose-img:rounded-3xl">
                                <div dangerouslySetInnerHTML={{ __html: article.content }} />
                            </div>

                            {/* Bottom CTA */}
                            <div className="mt-20 border-t border-slate-100 pt-16">
                                <div className="relative isolate overflow-hidden bg-slate-900 rounded-3xl px-8 py-12 text-center shadow-2xl sm:px-16">
                                    <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                        Välj rätt a-kassa direkt
                                    </h2>
                                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
                                        Tappa inte din medlemstid. Jämför de bästa alternativen för din bransch och gå med idag.
                                    </p>
                                    <div className="mt-10 flex items-center justify-center gap-x-6">
                                        <Link
                                            href="/jamfor"
                                            className="rounded-full bg-white px-8 py-4 text-base font-bold text-slate-900 shadow-sm hover:bg-slate-100 transition-all hover:scale-105"
                                        >
                                            Jämför A-kassor
                                        </Link>
                                        <Link href="/yrken" className="text-sm font-bold leading-6 text-white hover:text-blue-400 transition-colors">
                                            Visa alla yrken <span aria-hidden="true">→</span>
                                        </Link>
                                    </div>
                                    <svg
                                        viewBox="0 0 1024 1024"
                                        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                                        aria-hidden="true"
                                    >
                                        <circle cx={512} cy={512} r={512} fill="url(#gradient)" fillOpacity="0.15" />
                                        <defs>
                                            <radialGradient id="gradient">
                                                <stop stopColor="#3b82f6" />
                                                <stop offset={1} stopColor="#1e3a8a" />
                                            </radialGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Column */}
                        <aside className="lg:w-80 space-y-12">
                            {/* Author Box */}
                            <div className="bg-slate-50 rounded-2xl p-6 ring-1 ring-slate-200/50">
                                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Granskad av</h3>
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg shadow-inner">
                                        V
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900">Välja A-kassa</p>
                                        <p className="text-xs text-slate-500">Redaktionen</p>
                                    </div>
                                </div>
                            </div>

                            {/* FAQ Sidebar */}
                            {article.faq && (
                                <div className="space-y-6">
                                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                        <span className="h-6 w-1 bg-blue-600 rounded-full"></span>
                                        Vanliga frågor
                                    </h3>
                                    <div className="space-y-4">
                                        {article.faq.slice(0, 5).map((item, idx) => (
                                            <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:border-blue-200 transition-colors group">
                                                <p className="font-bold text-slate-900 text-sm mb-2 group-hover:text-blue-700 transition-colors">
                                                    {item.question}
                                                </p>
                                                <p className="text-sm text-slate-500 line-clamp-2">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Sticky Card */}
                            <div className="sticky top-8">
                                <div className="bg-gradient-to-b from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-xl overflow-hidden relative">
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold mb-4 leading-tight">Hitta bästa a-kassan för dig</h3>
                                        <p className="text-blue-100 text-sm mb-8 leading-relaxed">
                                            Vi har jämfört alla a-kassor i Sverige. Hitta den som har lägst avgift och bäst villkor för just din utbildning.
                                        </p>
                                        <Link href="/jamfor" className="block w-full bg-white text-blue-700 text-center py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                            Starta jämförelse
                                        </Link>
                                    </div>
                                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                                </div>
                            </div>
                        </aside>

                    </div>
                </div>
            </article>
        </div>
    );
}
