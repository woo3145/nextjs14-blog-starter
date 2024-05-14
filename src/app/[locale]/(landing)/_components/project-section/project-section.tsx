'use client';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { ProjectText } from './project-text';
import { ProjectList } from './project-list';
import { getSortedProjects } from '@/lib/project-utils';

interface ProjectSectionProps {
  className?: string;
  locale: string;
}

export const ProjectSection = ({ className, locale }: ProjectSectionProps) => {
  const projects = getSortedProjects(locale);

  return (
    <section className={cn('min-h-screen w-full space-y-10', className)}>
      <ProjectText />
      <ProjectList projects={projects} />
    </section>
  );
};
