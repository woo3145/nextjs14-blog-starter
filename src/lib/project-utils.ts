import { Project, projects } from '#site/content';

export const getProjectsByLocale = (locale: string) => {
  return projects.filter((project) => project.locale === locale);
};

export const getSortedProjects = (locale: string) => {
  return getProjectsByLocale(locale).sort((a: Project, b: Project) => {
    return b.id - a.id;
  });
};
