'use client';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { ProjectText } from './project-text';
import { projects as allProjects } from '#site/content';
import { compareDesc } from 'date-fns';
import { ProjectList } from './project-list';

interface ProjectSectionProps {
  className?: string;
}

export const ProjectSection = ({ className }: ProjectSectionProps) => {
  const projects = allProjects
    .filter((project) => project.published)
    .filter((project) => project.featured)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return (
    <section className={cn('min-h-screen w-full space-y-10', className)}>
      <ProjectText />
      <ProjectList projects={projects} />
    </section>
  );
};
