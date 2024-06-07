import { DocumentCustomType } from "./types";
import parse from "html-react-parser";

export const getAllDocuments = async () => {
  try {
    const response = await fetch(
      "http://cudakicms.local/wp-json/wp/v2/dokumenty?acf_format=standard",
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
