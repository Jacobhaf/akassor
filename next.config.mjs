/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/yrke/:slug',
                destination: '/yrken/:slug',
                permanent: true,
            },
            {
                source: '/artiklar/a-kassa-for-frilansare-2025',
                destination: '/artiklar/a-kassa-for-gigarbetare-och-frilansare',
                permanent: true,
            },
            {
                source: '/artiklar/a-kassa-for-frilansare-2026',
                destination: '/artiklar/a-kassa-for-gigarbetare-och-frilansare',
                permanent: true,
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'logo.clearbit.com',
            },
            {
                protocol: 'https',
                hostname: 'www.aea.se', // Keep original domains just in case
            },
            {
                protocol: 'https',
                hostname: 'www.alfakassan.se',
            },
            // Wildcard helpful if we switch back to direct URLs or user adds more
            {
                protocol: 'https',
                hostname: '**',
            }
        ],
    },
};

export default nextConfig;
