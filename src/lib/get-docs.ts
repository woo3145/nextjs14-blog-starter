import matter from 'gray-matter';
import path from 'path';
import fs from 'fs/promises';
import { cache } from 'react';
import { Doc } from '@/types/doc';
import { getFiles } from './get-files';

export const getDocs = cache(async () => {
  const docs = await getFiles('./docs/');
  const allDocs = await Promise.all(
    docs
      .filter((file) => path.extname(file) === '.mdx')
      .map(async (file) => {
        const filePath = `./docs/${file}`;
        const docContent = await fs.readFile(filePath, 'utf8');
        const { data, content } = matter(docContent);

        if (data.published === false) {
          return null;
        }

        return { ...data, body: content } as Doc;
      })
  );

  // null 값 제거
  return allDocs.filter((doc): doc is Doc => doc !== null);
});

export async function getDoc(slug: string) {
  const docs = await getDocs();
  return docs.find((doc) => doc?.slug === slug);
}
