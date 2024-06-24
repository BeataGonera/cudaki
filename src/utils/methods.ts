import { BoardMember, DocumentCustomType, News, Partner } from "./types";
import parse from "html-react-parser";

export const getAllDocuments = async () => {
  try {
    const response = await fetch(
      "https://ijdb.com.pl/wp-json/wp/v2/dokumenty?acf_format=standard",
      { next: { revalidate: 100 } }
    );
    const documentsRes = await response.json();
    const documents: DocumentCustomType[] = documentsRes.map(
      (documentRes: any) => {
        const parsedDocument = parse(documentRes.acf.tresc_dokumentu) as any;
        return {
          name: documentRes.acf.nazwa,
          content: parsedDocument[0].props.children,
          document: documentRes.acf.zalacznik,
        } as DocumentCustomType;
      }
    );
    return documents;
  } catch (error: any) {
    console.log(error);
  }
};

const formatDate = (date: string) => {
  const d = new Date(date);
  const day = d.getUTCDate();
  const month = d.toLocaleString("pl-PL", { month: "long" });
  const year = d.getFullYear();
  const hours = d.getHours();
  const minutes = d.getMinutes();

  return { day: day, month: month, year: year, hours: hours, minutes: minutes };
};

export const getAllNews = async () => {
  try {
    const response = await fetch(
      "https://ijdb.com.pl/wp-json/wp/v2/aktualnosci?acf_format=standard&_embed",
      { next: { revalidate: 100 } }
    );
    const newsRes = await response.json();
    const newsPosts: News[] = newsRes.map((newsRes: any) => {
      const parsedExcerpt = parse(newsRes.excerpt.rendered) as any;
      return {
        title: newsRes.title.rendered,
        slug: newsRes.slug,
        modified: newsRes.modified,
        dateObject: formatDate(newsRes.modified),
        excerpt: parsedExcerpt,
        featuredImg: newsRes._embedded["wp:featuredmedia"]["0"].source_url,
        author: newsRes._embedded.author[0].name,
      } as News;
    });
    return newsPosts as News[];
  } catch (error: any) {
    console.log(error);
  }
};

export const getLatestNews = async () => {
  try {
    const response = await fetch(
      "https://ijdb.com.pl/wp-json/wp/v2/aktualnosci?acf_format=standard&_embed&per_page=6&page=1",
      { next: { revalidate: 100 } }
    );
    const newsRes = await response.json();
    const newsPosts: News[] = newsRes.map((newsRes: any) => {
      const parsedExcerpt = parse(newsRes.excerpt.rendered) as any;
      return {
        title: newsRes.title.rendered,
        slug: newsRes.slug,
        modified: newsRes.modified,
        dateObject: formatDate(newsRes.modified),
        excerpt: parsedExcerpt,
        featuredImg: newsRes._embedded["wp:featuredmedia"]["0"].source_url,
        author: newsRes._embedded.author[0].name,
      } as News;
    });
    return newsPosts;
  } catch (error: any) {
    console.log(error);
  }
};

const createTagsArray = (array: []) => {
  const tagsArray = array.map((tagRes: any) => {
    return tagRes.name;
  });
  return tagsArray;
};

export const getPostBySlug = async (slug: string) => {
  try {
    const response = await fetch(
      `https://ijdb.com.pl/wp-json/wp/v2/aktualnosci?slug=${slug}&_embed&format=standard&acf_format=standard`,
      { next: { revalidate: 100 } }
    );
    const postsRes = await response.json();
    const tagsRes = () => {
      if (postsRes[0]._embedded["wp:term"]) {
        return postsRes[0]._embedded["wp:term"]["0"];
      } else {
        return [""];
      }
    };

    const parsedContent = parse(postsRes[0].content.rendered);
    const post: News = {
      title: postsRes[0].title.rendered,
      slug: postsRes[0].slug,
      modified: postsRes[0].modified,
      dateObject: formatDate(postsRes[0].modified),
      excerpt: postsRes[0].excerpt.rendered,
      featuredImg: postsRes[0]._embedded["wp:featuredmedia"]["0"].source_url,
      author: postsRes[0]._embedded.author[0].name,
      tags: createTagsArray(tagsRes()),
      content: parsedContent,
    };
    return post;
  } catch (error: any) {
    console.log(error);
  }
};

export const getAllBoardMembers = async () => {
  try {
    const response = await fetch(
      "https://ijdb.com.pl/wp-json/wp/v2/zarzad?acf_format=standard&_embed",
      { next: { revalidate: 100 } }
    );
    const boardMembersRes = await response.json();
    const boardMembers: BoardMember[] = boardMembersRes.map(
      (boardMemberRes: any) => {
        return {
          name: boardMemberRes.title.rendered,
          featuredImg:
            boardMemberRes._embedded["wp:featuredmedia"]["0"].source_url,
          description: boardMemberRes.content.rendered,
        } as BoardMember;
      }
    );
    return boardMembers;
  } catch (error: any) {
    console.log(error);
  }
};

export const getAllCouncilMembers = async () => {
  try {
    const response = await fetch(
      "https://ijdb.com.pl/wp-json/wp/v2/rada-fundacji?acf_format=standard&_embed",
      { next: { revalidate: 100 } }
    );
    const boardMembersRes = await response.json();
    const boardMembers: BoardMember[] = boardMembersRes.map(
      (boardMemberRes: any) => {
        return {
          name: boardMemberRes.title.rendered,
          featuredImg:
            boardMemberRes._embedded["wp:featuredmedia"]["0"].source_url,
          description: boardMemberRes.content.rendered,
        } as BoardMember;
      }
    );
    return boardMembers;
  } catch (error: any) {
    console.log(error);
  }
};

export const getPartners = async () => {
  try {
    const response = await fetch(
      "https://ijdb.com.pl/wp-json/wp/v2/partner?acf_format=standard&_embed",
      { next: { revalidate: 100 } }
    );
    const partnersRes = await response.json();
    const partners: Partner[] = partnersRes.map((partnersRes: any) => {
      return {
        name: partnersRes.acf.nazwa,
        slug: partnersRes.slug,
        img: partnersRes._embedded["wp:featuredmedia"]["0"].source_url,
        link: partnersRes.acf.link,
        description: partnersRes.acf.description,
      } as Partner;
    });
    return partners as Partner[];
  } catch (error: any) {
    console.log(error);
  }
};
