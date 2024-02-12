import matter from 'gray-matter';
import path from 'path';
import fs from 'fs/promises';
import { cache } from 'react';
import { Doc } from '@/types/doc';
import { getFiles } from './get-files';

export const getDocs = cache(async () => {
  const docs = await getFiles('./docs/');
  return Promise.all(
    docs
      .filter(
        (file) => path.extname(file) === '.md' || path.extname(file) === '.mdx'
      )
      .map(async (file) => {
        const filePath = `./docs/${file}`;
        const docContent = await fs.readFile(filePath, 'utf8');
        const { data, content } = matter(docContent);

        // published 옵션이 false이면 무시
        if (data.published === false) {
          return null;
        }

        return { ...data, body: content } as Doc;
      })
  ) as Promise<Doc[]>;
});

export async function getDoc(slug: string) {
  const docs = await getDocs();
  return docs.find((doc) => doc?.slug === slug);
}
