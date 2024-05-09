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
  const [zoomedProjectId, setZoomedProjectId] = React.useState<number | null>(
    null
  );

  const handleOutsideClick = () => {
    setZoomedProjectId(null);
  };

  const handleZoomToggle = (projectId: number) => {
    setZoomedProjectId((prev) => (prev === projectId ? null : projectId));
  };

  React.useEffect(() => {
    const handleClickOutside = () => {
      handleOutsideClick();
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-8 max-w-6xl mx-auto',
        className
      )}
    >
      {projects.map((item, idx) => {
        return (
          <ProjectCard
            id={idx}
            key={idx}
            project={item}
            isZoomed={zoomedProjectId === idx}
            onZoomToggle={handleZoomToggle}
          />
        );
      })}
    </div>
  );
};
