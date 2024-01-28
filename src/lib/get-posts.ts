import matter from 'gray-matter';
import path from 'path';
import type { Post } from '../types/post';
import fs from 'fs/promises';
import { cache } from 'react';

// 'cache'는 React 18 기능으로 요청 주기동안 함수를 한번만 호출할 수 있도록 캐시해줌
// 예를들어 페이지를 렌더링할때 컴포넌트들을 구성하는동안 리렌더링이 발생하더라도 한번만 호출됨
export const getPosts = cache(async () => {
  const posts = await fs.readdir('./posts/');

  return Promise.all(
    posts
      .filter((file) => path.extname(file) === '.md')
      .map(async (file) => {
        const filePath = `./posts/${file}`;
        const postContent = await fs.readFile(filePath, 'utf8');
        const { data, content } = matter(postContent);

        // published 옵션이 false이면 무시
        if (data.published === false) {
          return null;
        }

        return { ...data, body: content } as Post;
      })
  ) as Promise<Post[]>;
});

export async function getPost(slug: string) {
  const posts = await getPosts();
  return posts.find((post) => post?.slug === slug);
}

export default getPosts;
