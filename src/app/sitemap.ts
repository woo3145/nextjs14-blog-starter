import { siteMetadata } from '@/data/siteMetadata';
import getPosts from '@/lib/get-posts';

export default async function sitemap() {
  const posts = await getPosts();
  const blogs = posts.map((post) => ({
    url: `${siteMetadata.siteUrl}/posts/${post.slug}`,
  }));

  const routes = ['', '/posts'].map((route) => ({
    url: `${siteMetadata.siteUrl}${route}`,
  }));

  return [...routes, ...blogs];
}
