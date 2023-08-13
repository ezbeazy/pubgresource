/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://pubgresource.com',
    generateRobotsTxt: true, // (optional)
    generateIndexSitemap: false,
    outDir: "out",
    // ...other options
  }