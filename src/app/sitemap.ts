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
      url: "https://forbis.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://forbis.vercel.app/realizacje",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.interhandler.pl/fit-out",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...(postsToSitemap as any),
  ];
}
