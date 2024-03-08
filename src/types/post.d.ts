import { type MDXRemoteSerializeResult } from 'next-mdx-remote';

export type Post = {
  serialized: MDXRemoteSerializeResult;
  frontmatter: PostFrontmatter;
};

export type PostFrontmatter = {
  title: string;
  description: string;
  slug: string;
  date: Date;
  excerpt: string;
  tags: string[];
  published?: boolean;
};
