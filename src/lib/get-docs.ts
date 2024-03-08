import path from 'path';
import fs from 'fs/promises';
import { cache } from 'react';
import { Doc, DocFrontmatter } from '@/types/doc';
import { getFiles } from './get-files';
import { serializeMdx } from './mdx-helper';

export const getDocs = cache(async () => {
  const docs = await getFiles('./docs/');
  const allDocs = await Promise.all(
    docs
      .filter((file) => path.extname(file) === '.mdx')
      .map(async (file) => {
        const filePath = `./docs/${file}`;
        const raw = await fs.readFile(filePath, 'utf8');
        const serialized = await serializeMdx(raw);
        const frontmatter = serialized.frontmatter as DocFrontmatter;

        if (frontmatter.published === false) {
          return null; // published가 false일 경우 null 반환
        }

        return {
          frontmatter,
          serialized,
        };
      })
  );

  // null 값 제거
  return allDocs.filter((doc): doc is Doc => doc !== null);
});

export async function getDoc(slug: string) {
  const docs = await getDocs();
  return docs.find((doc) => doc?.frontmatter.slug === slug);
}
