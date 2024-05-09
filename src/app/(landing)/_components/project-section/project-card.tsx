import * as React from 'react';
import Image from 'next/image';

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

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex flex-col gap-2 row-span-1 rounded-lg hover:shadow-xl transition duration-200 shadow-input p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent">
      <div className="relative flex flex-1 justify-center items-center w-full max-h-[14rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] space-y-2">
        <Image
          src={project.image}
          alt="thumbnail"
          width={1000}
          height={1000}
          className={`w-full h-[14rem] object-contain rounded-lg`}
        />
      </div>
      <div className="p-2 space-y-2">
        <div className="flex items-center gap-1">
          {project.tags.map((tag) => {
            return (
              <p
                key={tag.text}
                className={cn(
                  `border border-${tag.color}-500 bg-${tag.color}-100 dark:bg-${tag.color}-900/20 text-${tag.color}-600 dark:text-${tag.color}-400 text-xs rounded-full px-2 py-0.5`
                )}
              >
                {tag.text}
              </p>
            );
          })}
        </div>
        <h1 className="font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {project.title}
        </h1>
        <h2 className="font-sans font-normal text-neutral-600 text-sm dark:text-neutral-300 pb-2">
          {project.description}
        </h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {project.links?.github ? (
              <Link
                href={project.links.github}
                target="_blank"
                className="hover:text-blue-500"
              >
                <IconBrandGithub className="w-6 h-6" />
              </Link>
            ) : null}
            {project.links?.homepage ? (
              <Link
                href={project.links.homepage}
                target="_blank"
                className="hover:text-blue-500"
              >
                <IconHome className="w-6 h-6" />
              </Link>
            ) : null}
            {project.links?.playstore ? (
              <Link
                href={project.links.playstore}
                target="_blank"
                className="hover:text-blue-500"
              >
                <IconBrandGooglePlay className="w-6 h-6" />
              </Link>
            ) : null}
            {project.links?.appstore ? (
              <Link
                href={project.links.appstore}
                target="_blank"
                className="hover:text-blue-500"
              >
                <IconBrandAppstore className="w-6 h-6" />
              </Link>
            ) : null}
          </div>

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
