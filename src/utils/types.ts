export type Partner = {
  name: string;
  description: string;
  img: string;
  slug: string;
  link: string;
};

export type DocumentCustomType = {
  name: string;
  content: any;
  document: string;
};

export type News = {
  title: string;
  slug: string;
  modified: string;
  dateObject: {
    day: number;
    month: string;
    year: number;
    hours: number;
    minutes: number;
  };
  excerpt: string;
  featuredImg: string;
  author: string;
  tags?: string[];
  content?: any;
};

export type LinkMenu = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type BoardMember = {
  name: string;
  featuredImg: string;
  description: string;
};
