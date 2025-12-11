import Link from "next/link";
import Image from "next/image";
import { articles } from "@/data/articles";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Artiklar om a-kassa | Välja A-kassa",
    description: "Läs våra guider och artiklar om a-kassa, ersättning och trygghet på arbetsmarknaden.",
};

export default function ArticlesPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-[#0B1B3F] py-24 sm:py-32">
                <div className="absolute inset-0 -z-10 h-full w-full">
                    <Image
                        src="/assets/images/hero-artiklar.png"
                        alt="Hero background"
                        fill
                        className="object-cover object-center opacity-20"
                        priority
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Artiklar & Guider
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-blue-100">
                            Allt du behöver veta om a-kassa, ersättning och din trygghet.
                        </p>
                    </div>
                </div>
            </div>

            <div className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {articles.map((article) => (
                            <article key={article.slug} className="flex flex-col items-start justify-between">
                                <div className="relative w-full">
                                    <div className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] overflow-hidden relative group-hover:opacity-90 transition-opacity">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                </div>
                                <div className="max-w-xl">
                                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                                        <time dateTime={article.publishedAt} className="text-gray-500">
                                            {article.publishedAt}
                                        </time>
                                        <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                                            Guide
                                        </span>
                                    </div>
                                    <div className="group relative">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                            <Link href={`/artiklar/${article.slug}`}>
                                                <span className="absolute inset-0" />
                                                {article.title}
                                            </Link>
                                        </h3>
                                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                                            {article.summary}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
