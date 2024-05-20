'use client';
import * as React from 'react';

import { Project } from '#site/content';
import { Reveal } from '@/components/reveal';
import { Project3dCard } from '@/components/project-3d-card';
import { cn } from '@/lib/utils';

interface ProjectListProps {
  projects: Project[];
  className?: string;
}

export const ProjectList = ({ className, projects }: ProjectListProps) => {
  return (
    <div
      className={cn(
        'flex flex-row flex-wrap gap-x-4 justify-evenly',
        className
      )}
    >
      {projects.map((project, index) => (
        <Reveal
          key={project.title}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, delay: index / 30 },
          }}
        >
          <Project3dCard project={project} />
        </Reveal>
      ))}
    </div>
  );
};
