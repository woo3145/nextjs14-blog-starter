export type Post = {
  title: string;
  slug: string;
  date: Date;
  excerpt: string;
  tags: string[];
  description: string;
  body: string;
  published?: boolean;
};
