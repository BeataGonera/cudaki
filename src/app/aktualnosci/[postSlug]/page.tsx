import ChipOutlined from "@/components/atoms/ChipOutlined";
import { getPostBySlug } from "@/utils/methods";
import Image from "next/image";
import styles from "./styles.module.css";
import SectionSuggestedArticles from "@/components/organisms/SectionSuggestedArticles/SectionSuggestedArticles";

export async function generateMetadata() {
  return {
    title: `Fundacja Cudaki - Aktualności`,
    description: `Fundacja Cudaki - Aktualności`,
    openGraph: {
      title: `Fundacja Cudaki - Aktualności`,
      locale: "pl_PL",
      type: "website",
      description: `Fundacja Cudaki - Aktualności`,
      url: `https://cudaki.vercel.app/aktualnosci`,
      siteName: "Cudaki",
    },
  };
}

const PostPage = async ({ params }: { params: { postSlug: string } }) => {
  const post = await getPostBySlug(params.postSlug);

  return (
    <main className="flex flex-col gap-[24px] lg:gap-[48px] items-center justify-between pt-12 lg:pt-[6rem] px-2 lg:px-24 2xl:px-128">
      {post ? (
        <>
          <h1 className="text-[48px] font-bold w-full lg:max-w-[560px]">
            {post.title}
          </h1>
          <div className="w-full flex flex-col gap-[16px]">
            <div className="w-full flex flex-col justify-center text-center">
              <p>{post.author}</p>
              <div>
                <span className="capitalize">{post.dateObject.month} </span>
                <span>{`${post.dateObject.day}.${post.dateObject.year} | ${post.dateObject.hours}:${post.dateObject.minutes}`}</span>
              </div>
            </div>
            <div className="relative w-full aspect-square lg:aspect-[2] rounded-[8px]">
              <Image
                src={post.featuredImg}
                alt={post.title}
                fill
                className="object-cover rounded-[8px]"
              />
            </div>
            <div className="flex gap-[12px] ">
              {post.tags
                ? post.tags.map((tag: string, index: number) => (
                    <ChipOutlined label={tag} key={index} />
                  ))
                : null}
            </div>
          </div>
          <div className={styles.content}>{post.content}</div>
        </>
      ) : null}
      <SectionSuggestedArticles />
    </main>
  );
};

export default PostPage;
