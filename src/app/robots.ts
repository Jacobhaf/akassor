import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: "https://akassa-portal-v2-wvsoh22w7-jacobhafs-projects.vercel.app/sitemap.xml",
    };
}
