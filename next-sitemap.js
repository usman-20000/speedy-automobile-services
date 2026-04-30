/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://speedyautomobileservices.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  // Use standard function syntax if your environment is strict
  transform: async function(config, path) {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: (path === '/' || path.includes('car-ac-repair')) ? 1.0 : config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
};