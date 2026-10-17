module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://roundhilldental.com",
  generateRobotsTxt: true, // (optional)
  sitemapSize: 1000,
  generateIndexSitemap: false,
  // Static export serves "out/", so the sitemap and robots.txt must be written there
  outDir: "out",
  exclude: ["/404"],
};
