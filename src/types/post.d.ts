export type Post = {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  description: string;
  body: string;
  href?: string;
  published?: boolean;
};
