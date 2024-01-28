import getPosts from '@/lib/get-posts';

export default async function sitemap() {
  const posts = await getPosts();
  const blogs = posts.map((post) => ({
    url: `https://mysite.com/posts/${post.slug}`,
  }));

  const routes = ['', '/posts'].map((route) => ({
    url: `https://mysite.com${route}`,
  }));

  return [...routes, ...blogs];
}
