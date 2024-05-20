import fs from 'fs';
import RSS from 'rss';
import path from 'path';
import matter from 'gray-matter';
import { siteMetadata } from '../src/data/site-metadata';

const getPosts = (locale: string): File[] => {
  try {
    const directory = path.resolve(__dirname, `../content/${locale}/blog/`);
    return fs
      .readdirSync(directory)
      .filter(
        (file) => path.extname(file) === '.md' || path.extname(file) === '.mdx'
      )
      .map((file) => {
        const postContent = fs.readFileSync(path.join(directory, file), 'utf8');
        const { data, content }: { data: any; content: string } =
          matter(postContent);
        return { ...data, body: content };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (e) {
    console.log(e);
    return [];
  }
};

const posts_ko = getPosts('ko');
const posts_en = getPosts('en');

const addPostsToFeed = (feed: RSS, posts: any[], locale: string) => {
  posts.forEach((post) => {
    const url = `${siteMetadata.siteUrl}/${locale}/blog/${post.slug}`;
    feed.item({
      title: post.title,
      description: post.description,
      date: new Date(post.date),
      author: siteMetadata.hero.author,
      url,
      guid: url,
    });
  });
};

const main = async () => {
  const feed = new RSS({
    title: siteMetadata.title,
    site_url: siteMetadata.siteUrl,
    feed_url: `${siteMetadata.siteUrl}/feed.xml`,
    description: siteMetadata.description,
  });

  addPostsToFeed(feed, posts_ko, 'ko');
  addPostsToFeed(feed, posts_en, 'en');

  const rss = feed.xml({ indent: true });
  fs.writeFileSync(path.join(__dirname, '../public/feed.xml'), rss);
};

main();
