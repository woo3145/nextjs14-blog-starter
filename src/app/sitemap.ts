import {
  posts as allPosts,
  docs as allDocs,
  projects as allProjects,
} from '#site/content';
import { siteMetadata } from '@/data/siteMetadata';

export default async function sitemap() {
  const posts = allPosts.filter((post) => post.published);
  const docs = allDocs.filter((doc) => doc.published);
  const projects = allProjects.filter((doc) => doc.published);

  const postPages = posts.map((post) => ({
    url: `${siteMetadata.siteUrl}/${post.slug}`,
  }));
  const projectPages = projects.map((post) => ({
    url: `${siteMetadata.siteUrl}/${post.slug}`,
  }));
  const docPages = docs.map((doc) => ({
    url: `${siteMetadata.siteUrl}/${doc.slug}`,
  }));

  const routes = ['', '/blog', '/projects'].map((route) => ({
    url: `${siteMetadata.siteUrl}${route}`,
  }));

  return [...routes, ...postPages, ...projectPages, ...docPages];
}
