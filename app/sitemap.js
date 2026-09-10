const siteUrl = "https://tefahad.com";
const contentLastModified = new Date("2026-09-11T00:00:00.000Z");

export default function sitemap() {
  return [
    {
      url: siteUrl,
      lastModified: contentLastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
