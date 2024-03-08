import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';
import { visit } from 'unist-util-visit';

export const serializeMdx = async (raw: string) => {
  const serialized = await serialize(raw, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [
        // markdown 기본 문법이 아닌 github 문법들을 추가로 지원해주는 플러그인
        remarkGfm,
      ],
      // rehypeSlug: 헤더에 아이디를 추가해줌, rehypeAutolinkHeadings: 헤더에 링크를 생성해줌 #overview
      rehypePlugins: [
        preProcess,
        rehypeSlug,
        rehypePrism as any,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor'],
            },
          },
        ],
        postProcess,
      ],
      format: 'mdx',
    },
  });

  return serialized;
};

const preProcess = () => (tree: any) => {
  visit(tree, (node) => {
    if (node?.type === 'element' && node?.tagName === 'pre') {
      const [codeEl] = node.children;

      if (codeEl.tagName !== 'code') return;

      node.raw = codeEl.children?.[0].value;
    }
  });
};

const postProcess = () => (tree: any) => {
  visit(tree, 'element', (node) => {
    if (node?.type === 'element' && node?.tagName === 'pre') {
      node.properties['raw'] = node.raw;
      // console.log(node) here to see if you're getting the raw text
    }
  });
};
