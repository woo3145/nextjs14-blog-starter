import matter from 'gray-matter';
import { remark } from 'remark';
import path from 'path';
import fs from 'fs/promises';
import { TransformedNode, headingTree } from './custom-remark';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getHeadings(slug: string) {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = await fs.readFile(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    if (matterResult.data.published === false) {
      return null;
    }

    const processedContent = await remark()
      .use(headingTree)
      .process(matterResult.content);

    return processedContent.data.headings as TransformedNode[];
  } catch (error) {
    console.error(`Error processing post: ${slug}`, error);
    return null;
  }
}
