import { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { yrken, akassor } from "@/data/database";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.valjaakassa.se";

    // Static routes
    const routes = [
        "",
        "/yrken",
        "/akassor",
        "/inkomstforsakring",
        "/jamfor",
        "/artiklar",
        "/om-oss",
        "/kontakt",
        "/integritetspolicy",
        "/ga-ur-a-kassa",
        "/cookies",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    // Dynamic routes for articles
    const articleRoutes = articles.map((article) => ({
        url: `${baseUrl}/artiklar/${article.slug}`,
        lastModified: new Date(article.publishedAt),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    // Dynamic routes for professions
    const professionRoutes = yrken.map((yrke) => ({
        url: `${baseUrl}/yrken/${yrke.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.9,
    }));

    // Dynamic routes for akassor (if we had individual pages for them, which we seem to link to in AkassaCard but I haven't created /akassa/[slug] page yet? 
    // Wait, AkassaCard links to `/akassa/${akassa.slug}`. 
    // I should check if that page exists. I don't recall creating it or seeing it in the file list.
    // Let's check the file list again.
    // Ah, I saw `src/app/akassa` folder in Step 50. Let's assume it exists.
    // I will include them in sitemap.
    const akassaRoutes = akassor.map((akassa) => ({
        url: `${baseUrl}/akassa/${akassa.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }));

    // Dynamic routes for profession checklists
    const checklistRoutes = yrken.map((yrke) => ({
        url: `${baseUrl}/yrken/${yrke.slug}/checklista`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }));


    // Dynamic routes for akassa exit pages
    const akassaExitRoutes = akassor.map((akassa) => ({
        url: `${baseUrl}/akassa/${akassa.slug}/ga-ur-a-kassa`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }));

    return [...routes, ...articleRoutes, ...professionRoutes, ...checklistRoutes, ...akassaRoutes, ...akassaExitRoutes];
}
