const siteUrl = "https://lamiolowoniyi.info";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
      policies: [
          { userAgent: "*", disallow: "/secret" },
          { userAgent: "*", allow: "/" }, // rest of website 
      ],
      additionalSitemaps: [`${siteUrl}/server-sitemap-index.xml`, `${siteUrl}/sitemap-0.xml`] // no idea if this line works xD - why doesn't work ?
  },
  exclude: ["/secret*"], // excluding pages we don't want google indexing, private, etc...
};
