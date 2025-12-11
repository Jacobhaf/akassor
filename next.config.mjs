/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/yrke/:slug',
                destination: '/yrken/:slug',
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
