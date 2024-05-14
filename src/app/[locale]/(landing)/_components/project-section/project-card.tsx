'use client';
import * as React from 'react';

import { Project } from '#site/content';
import Link from 'next/link';
import {
  IconBrandAppstore,
  IconBrandGithub,
  IconBrandGooglePlay,
  IconHome,
} from '@tabler/icons-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { ProjectTag } from './project-tag';
import ZoomableImage from '@/components/ui/zoomable-image';

interface ProjectCardProps {
  id: number;
  project: Project;
}

export const ProjectCard = ({ id, project }: ProjectCardProps) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col gap-2 row-span-1 rounded-lg hover:shadow-xl transition duration-200 shadow-input p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent"
    >
      <div
        className={cn(
          'flex flex-1 justify-center items-center w-full max-h-[14rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] space-y-2'
        )}
      >
        <ZoomableImage
          src={project.image}
          alt="thumbnail"
          width={1200}
          height={1200}
          className="w-full h-[14rem] object-contain rounded-md"
        />
      </div>
      <div className="p-2 space-y-2">
        <div className="flex items-center gap-1 flex-wrap">
          {project.tags.map((tag) => (
            <ProjectTag key={tag.text} text={tag.text} color={tag.color} />
          ))}
        </div>
        <h1 className="font-sans font-semibold text-foreground text-md pb-2">
          {project.title}
        </h1>
        <h2 className="font-sans font-normal text-neutral-600 text-sm dark:text-neutral-300 pb-2">
          {project.description}
        </h2>
        <p className="font-sans text-sm text-zinc-600 dark:text-zinc-200">
          {project.period}
        </p>

        <div className="flex items-center justify-between">
          <ProjectLinks links={project.links} />
          <Link
            href={project.slug}
            className={cn(
              buttonVariants(),
              'h-8 bg-black hover:bg-black/80 dark:bg-white dark:hover:bg-gray-200 dark:text-black'
            )}
          >
            자세히 보기
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProjectLinks = ({ links }: { links: Project['links'] }) => (
  <div className="flex items-center gap-4">
    {links?.github && (
      <Link href={links.github} target="_blank" className="hover:text-blue-500">
        <IconBrandGithub className="w-6 h-6" />
      </Link>
    )}
    {links?.homepage && (
      <Link
        href={links.homepage}
        target="_blank"
        className="hover:text-blue-500"
      >
        <IconHome className="w-6 h-6" />
      </Link>
    )}
    {links?.playstore && (
      <Link
        href={links.playstore}
        target="_blank"
        className="hover:text-blue-500"
      >
        <IconBrandGooglePlay className="w-6 h-6" />
      </Link>
    )}
    {links?.appstore && (
      <Link
        href={links.appstore}
        target="_blank"
        className="hover:text-blue-500"
      >
        <IconBrandAppstore className="w-6 h-6" />
      </Link>
    )}
  </div>
);
