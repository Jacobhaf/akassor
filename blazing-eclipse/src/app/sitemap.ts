import { MetadataRoute } from 'next'
import { akassor, yrken } from '@/data/database'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://valjakassa.se' // Replace with actual domain

    // Static routes
    const routes = [
        '',
        '/faq',
        '/om-oss',
        '/kontakt',
        '/integritetspolicy',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic routes for A-kassor
    const akassaRoutes = akassor.map((akassa) => ({
        url: `${baseUrl}/akassa/${akassa.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    // Dynamic routes for Yrken
    const yrkeRoutes = yrken.map((yrke) => ({
        url: `${baseUrl}/yrke/${yrke.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    return [...routes, ...akassaRoutes, ...yrkeRoutes]
}
