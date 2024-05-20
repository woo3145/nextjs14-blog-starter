import { docs } from '#site/content';

export const getDocsByLocale = (locale: string) => {
  return docs.filter((project) => project.locale === locale);
};

export const getDocBySlug = (locale: string, slug: string) => {
  return getDocsByLocale(locale).find(
    (project) => project.slugAsParams === slug
  );
};
