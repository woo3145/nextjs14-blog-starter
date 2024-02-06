import fs from 'fs';
import RSS from 'rss';
import path from 'path';
import { marked } from 'marked';
import matter from 'gray-matter';
import { siteMetadata } from '@/data/siteMetadata';

const posts = fs
  .readdirSync(path.resolve(__dirname, '../posts/'))
  .filter(
    (file) => path.extname(file) === '.md' || path.extname(file) === '.mdx'
  )
  .map((file) => {
    const postContent = fs.readFileSync(`./posts/${file}`, 'utf8');
    const { data, content }: { data: any; content: string } =
      matter(postContent);
    return { ...data, body: content };
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const renderer = new marked.Renderer();

renderer.link = (href, _, text) =>
  `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

marked.setOptions({
  gfm: true,
  breaks: true,
  renderer,
});

const renderPost = (md: string) => marked.parse(md);

const main = () => {
  const feed = new RSS({
    title: siteMetadata.title,
    site_url: siteMetadata.siteUrl,
    feed_url: `${siteMetadata.siteUrl}/feed.xml`,
    language: 'ko',
    description: siteMetadata.description,
  });

  posts.forEach(async (post) => {
    const url = `${siteMetadata.siteUrl}/posts/${post.slug}`;

    feed.item({
      title: post.title,
      description: await renderPost(post.body),
      date: new Date(post?.date),
      author: siteMetadata.hero.author,
      url,
      guid: url,
    });
  });

  const rss = feed.xml({ indent: true });
  fs.writeFileSync(path.join(__dirname, '../public/feed.xml'), rss);
};

main();
