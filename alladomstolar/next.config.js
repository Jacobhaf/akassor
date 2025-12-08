// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    // Disable type checking during Vercel builds (temporary workaround)
    typescript: {
        ignoreBuildErrors: true,
    },
};
module.exports = nextConfig;
