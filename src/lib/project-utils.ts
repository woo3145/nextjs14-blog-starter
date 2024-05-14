import { Project, projects } from '#site/content';

export const getProjectsByLocale = (locale: string) => {
  return projects
    .filter((project) => project.published)
    .filter((project) => project.locale === locale);
};

export const getSortedProjects = (locale: string) => {
  return getProjectsByLocale(locale).sort((a: Project, b: Project) => {
    return b.id - a.id;
  });
};

export const getProjectBySlug = (locale: string, slug: string) => {
  return getProjectsByLocale(locale).find(
    (project) => project.slugAsParams === slug
  );
};
