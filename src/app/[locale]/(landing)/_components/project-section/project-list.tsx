'use client';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { Project } from '#site/content';
import { ProjectCard } from './project-card';

interface ProjectListProps {
  projects: Project[];
  className?: string;
}

export const ProjectList = ({ className, projects }: ProjectListProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-8 max-w-6xl mx-auto pt-6 md:pt-12',
        className
      )}
    >
      {projects.map((item, idx) => {
        return <ProjectCard id={idx} key={idx} project={item} />;
      })}
    </div>
  );
};
