import { getAllNews } from "@/utils/methods";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllNews();
  const postsToSitemap = posts?.map((post) => {
    return {
      url: `https://cudaki.vercel.app/aktualnosci/${post.slug}`,
      lastModified: post.modified,
      changeFrequency: "weekly",
      priority: 0.5,
    };
  });
  return [
    {
      url: "https://cudaki.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://cudaki.vercel.app/aktualnosci",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://cudaki.vercel.app/partnerzy",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://cudaki.vercel.app/kontakt",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://cudaki.vercel.app/misja-fundacji",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://cudaki.vercel.app/partnerzy",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://cudaki.vercel.app/wladze-fundacji",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://cudaki.vercel.app/dokumenty-fundacji",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...(postsToSitemap as any),
  ];
}
