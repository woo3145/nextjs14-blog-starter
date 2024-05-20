import {
  posts as allPosts,
  docs as allDocs,
  projects as allProjects,
} from '#site/content';
import { host, locales, pathnames } from '@/config/app-config';
import { getPathname } from '@/navigation';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const keys = Object.keys(pathnames) as Array<keyof typeof pathnames>;

  function getUrl(
    key: keyof typeof pathnames,
    locale: (typeof locales)[number]
  ) {
    const pathname = getPathname({ locale, href: key });
    return `${host}/${locale}${pathname === '/' ? '' : pathname}`;
  }
  const routes: {
    url: string;
    lastModified: Date;
  }[] = [];
  keys.forEach((key) => {
    locales.forEach((locale) => {
      routes.push({ url: getUrl(key, locale), lastModified: new Date() });
    });
  });

  const posts = allPosts.filter((post) => post.published);
  const docs = allDocs.filter((doc) => doc.published);
  const projects = allProjects;

  const postPages = posts.map((post) => ({
    url: `${host}/${post.slug}`,
    lastModified: new Date(),
  }));
  const projectPages = projects.map((post) => ({
    url: `${host}/${post.slug}`,
    lastModified: new Date(),
  }));
  const docPages = docs.map((doc) => ({
    url: `${host}/${doc.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...postPages, ...docPages, ...projectPages];
}
