'use client';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { ProjectText } from './project-text';
import { ProjectCard } from './project-card';
import { IconBrandGithub } from '@tabler/icons-react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { IconHome } from '@tabler/icons-react';

interface ProjectSectionProps {
  className?: string;
}

export const ProjectSection = ({ className }: ProjectSectionProps) => {
  return (
    <section className={cn('min-h-screen w-full space-y-10', className)}>
      <ProjectText />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8 px-4 max-w-6xl mx-auto">
        {items.map((item, idx) => {
          return (
            <ProjectCard
              key={idx}
              stacks={item.stacks}
              footer={item.footer}
              imgSrc={item.imgSrc}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </section>
  );
};

const items = [
  {
    imgSrc:
      'https://images.unsplash.com/photo-1709491135369-4b65470fc8ae?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Woo3145.com',
    description:
      'NextJS를 사용한 웹사이트 NextJS를 사용한 웹사이트 NextJS를 사용한 웹사이트 NextJS를 사용한 웹사이트 NextJS를 사용한 웹사이트',
    stacks: (
      <div className="flex items-center gap-1">
        <p className="border border-blue-500 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs rounded-full px-2 py-0.5">
          개인
        </p>
        <p className="border border-purple-500 bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-xs rounded-full px-2 py-0.5">
          NextJS
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-xs rounded-full px-2 py-0.5">
          Supabase
        </p>
      </div>
    ),
    footer: (
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/woo3145/woo3145.com"
            target="_blank"
            className="hover:text-blue-500"
          >
            <IconBrandGithub className="w-6 h-6" />
          </Link>
          <Link
            href="https://woo3145.com"
            target="_blank"
            className="hover:text-blue-500"
          >
            <IconHome className="w-6 h-6" />
          </Link>
        </div>

        <Link
          href="/portfolio/woo3145"
          className={cn(
            buttonVariants(),
            'h-8 bg-black hover:bg-black/80 dark:bg-white dark:hover:bg-gray-200 dark:text-black'
          )}
        >
          자세히 보기
        </Link>
      </div>
    ),
  },
  {
    stacks: (
      <div className="flex items-center gap-1">
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs rounded-full px-2 py-0.5">
          팀
        </p>
      </div>
    ),
    imgSrc:
      'https://plus.unsplash.com/premium_photo-1675188410128-08479b027489?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Woo3145.com',
    description: 'NextJS를 사용한 웹사이트',
  },
  {
    stacks: (
      <div className="flex items-center gap-1">
        <p className="border border-blue-500 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs rounded-full px-2 py-0.5">
          개인
        </p>
      </div>
    ),
    imgSrc:
      'https://images.unsplash.com/photo-1555169062-013468b47731?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Woo3145.com',
    description: 'NextJS를 사용한 웹사이트',
  },
  {
    stacks: (
      <div className="flex items-center gap-1">
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs rounded-full px-2 py-0.5">
          팀
        </p>
      </div>
    ),
    imgSrc:
      'https://plus.unsplash.com/premium_photo-1675188410128-08479b027489?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Woo3145.com',
    description: 'NextJS를 사용한 웹사이트',
  },
  {
    stacks: (
      <div className="flex items-center gap-1">
        <p className="border border-blue-500 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs rounded-full px-2 py-0.5">
          개인
        </p>
      </div>
    ),
    imgSrc:
      'https://images.unsplash.com/photo-1555169062-013468b47731?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Woo3145.com',
    description: 'NextJS를 사용한 웹사이트',
  },
];
