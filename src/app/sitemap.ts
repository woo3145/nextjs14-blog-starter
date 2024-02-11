import { siteMetadata } from '@/data/siteMetadata';
import { getDocs } from '@/lib/get-docs';
import { getPosts } from '@/lib/get-posts';

export default async function sitemap() {
  const posts = await getPosts();
  const docs = await getDocs();
  const postPages = posts.map((post) => ({
    url: `${siteMetadata.siteUrl}/blog/posts/${post.slug}`,
  }));
  const docPages = docs.map((post) => ({
    url: `${siteMetadata.siteUrl}/docs/${post.slug}`,
  }));

  const routes = ['', '/blog', '/blog/posts', '/docs'].map((route) => ({
    url: `${siteMetadata.siteUrl}${route}`,
  }));

  return [...routes, ...postPages, ...docPages];
}
