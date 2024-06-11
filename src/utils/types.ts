export type Partner = {
  name: string;
  description: string;
  img: string;
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
  excerpt: string;
  featuredImg: string;
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
