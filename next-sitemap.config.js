/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://valjaakassa.se',
    generateRobotsTxt: true, // (optional)
    // ...other options
}
