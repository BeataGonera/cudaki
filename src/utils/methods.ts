import { BoardMember, DocumentCustomType, News } from "./types";
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
        excerpt: parsedExcerpt,
        featuredImg: newsRes._embedded["wp:featuredmedia"]["0"].source_url,
      } as News;
    });
    return newsPosts;
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
