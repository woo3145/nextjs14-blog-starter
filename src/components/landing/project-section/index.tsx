import * as React from 'react';

import { cn } from '@/lib/utils';
import { ProjectText } from './project-text';
import { getSortedProjects } from '@/lib/velite/project-utils';
import { ProjectList } from './project-list';

interface ProjectSectionProps {
  className?: string;
  locale: string;
}

export const ProjectSection = ({ className, locale }: ProjectSectionProps) => {
  const projects = getSortedProjects(locale);
  return (
    <section
      className={cn(
        'flex flex-col items-center justify-center max-w-screen-2xl mx-auto gap-4',
        className
      )}
    >
      <ProjectText />
      <ProjectList projects={projects} />
    </section>
  );
};
