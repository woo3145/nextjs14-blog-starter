export type Doc = {
  serialized: MDXRemoteSerializeResult;
  frontmatter: DocFrontmatter;
};

export type DocFrontmatter = {
  title: string;
  description: string;
  slug: string;
  published?: boolean;
};
