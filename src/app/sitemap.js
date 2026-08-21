export default function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://graceamoko.vercel.app";

  const projects = [
    "contraktek",
    "erastus-quartus",
    "waystream",
    "drive45",
    "logistic-app",
  ];

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      priority: 1,
    },
    ...projects.map((slug) => ({
      url: `${siteUrl}/projects/${slug}`,
      lastModified: new Date(),
      priority: 0.8,
    })),
  ];
}
