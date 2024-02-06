export type Post = {
  title: string;
  slug: string;
  date: Date;
  tags: string[];
  description: string;
  body: string;
  href?: string;
  published?: boolean;
};
