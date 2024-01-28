import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { mdxComponents } from './markdown-components';
import { MDXRemote } from 'next-mdx-remote/rsc';

export function PostBody({ children }: { children: string }) {
  return (
    <MDXRemote
      source={children}
      options={{
        mdxOptions: {
          remarkPlugins: [
            // markdown 기본 문법이 아닌 github 문법들을 추가로 지원해주는 플러그인
            remarkGfm,
          ],
          // rehypeSlug: 헤더에 아이디를 추가해줌, rehypeAutolinkHeadings: 헤더에 링크를 생성해줌 #overview
          rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
        },
      }}
      components={mdxComponents}
    />
  );
}
