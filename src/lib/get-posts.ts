import path from 'path';
import type { PostFrontmatter, Post } from '../types/post';
import fs from 'fs/promises';
import { cache } from 'react';
import { getFiles } from './get-files';
import { serializeMdx } from './mdx-helper';

// 'cache'는 React 18 기능으로 요청 주기동안 함수를 한번만 호출할 수 있도록 캐시해줌
// 예를들어 페이지를 렌더링할때 컴포넌트들을 구성하는동안 리렌더링이 발생하더라도 한번만 호출됨
export const getPosts = cache(async () => {
  const posts = await getFiles('./posts/');

  // Promise.all로 모든 파일 처리 후 결과에서 null을 제거
  const filteredPosts = await Promise.all(
    posts
      .filter((file) => path.extname(file) === '.mdx')
      .map(async (file) => {
        const filePath = `./posts/${file}`;
        const raw = await fs.readFile(filePath, 'utf8');
        const serialized = await serializeMdx(raw);
        const frontmatter = serialized.frontmatter as PostFrontmatter;

        if (frontmatter.published === false) {
          return null; // published가 false일 경우 null 반환
        }
        return {
          frontmatter,
          serialized,
        } as Post;
      })
  );

  // null 값 제거
  const validPosts = filteredPosts.filter(
    (post): post is Post => post !== null
  );

  const sortedPosts = validPosts.sort((a, b) => {
    return (
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
    );
  });

  return sortedPosts;
});

export async function getPost(slug: string) {
  const posts = await getPosts();
  return posts.find((post) => post.frontmatter.slug === slug);
}

export const getTags = cache(async () => {
  const tags = (await getPosts()).map((n) => n.frontmatter.tags);

  // null 값 제거, 태그 배열을 단일 배열로 평탄화, 중복 제거
  const uniqueTags = Array.from(new Set(tags.flat().filter(Boolean)));

  return uniqueTags;
});
