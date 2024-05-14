'use client';
import { cn } from '@/lib/utils';
import { TechStackDataProvider } from './tech-stack-data-provider';
import { CDN_IMAGES } from '@/data/cdn-images';
import * as React from 'react';
import { TeckStackText } from './teck-stack-text';

interface TechStack {
  imageSrc: string;
  darkImageSrc?: string;
  width: number;
  height: number;
  title: string;
  description?: string;
}

const frontStacks: TechStack[] = [
  { imageSrc: '/stacks/node-js.png', width: 100, height: 100, title: 'nodejs' },
  { imageSrc: '/stacks/js.png', width: 100, height: 100, title: 'javascript' },
  {
    imageSrc: '/stacks/ts.png',
    width: 100,
    height: 100,
    title: 'typescript',
  },
  {
    imageSrc: '/stacks/react-icon.png',
    width: 100,
    height: 100,
    title: 'react',
  },
  {
    imageSrc: '/stacks/react-query.svg',
    width: 100,
    height: 100,
    title: 'react-query',
  },
  {
    imageSrc: '/stacks/zustand.png',
    width: 100,
    height: 100,
    title: 'zustand',
  },
  {
    imageSrc: '/stacks/nextjs.svg',
    darkImageSrc: '/stacks/nextjs-dark.svg',
    width: 100,
    height: 100,
    title: 'nextjs',
  },
  {
    imageSrc: '/stacks/tailwind-css.svg',
    width: 100,
    height: 100,
    title: 'tailwindCSS',
  },
  {
    imageSrc: '/stacks/shadcn-ui.png',
    width: 100,
    height: 100,
    title: 'shadcn/ui',
  },
  {
    imageSrc: '/stacks/socket-io.svg',
    width: 100,
    height: 100,
    title: 'socket.io',
  },
];
const backStacks: TechStack[] = [
  {
    imageSrc: '/stacks/express.svg',
    darkImageSrc: '/stacks/express-dark.svg',
    width: 100,
    height: 100,
    title: 'expressjs',
  },
  {
    imageSrc: '/stacks/nestjs.svg',
    width: 100,
    height: 100,
    title: 'nestjs',
  },
  { imageSrc: '/stacks/mysql.png', width: 100, height: 100, title: 'mysql' },
  {
    imageSrc: '/stacks/postgre.png',
    width: 100,
    height: 100,
    title: 'postgresql',
  },
  {
    imageSrc: '/stacks/mongodb.png',
    width: 100,
    height: 100,
    title: 'mongodb',
  },
  {
    imageSrc: '/stacks/nginx.png',
    width: 100,
    height: 100,
    title: 'nginx',
  },
  {
    imageSrc: '/stacks/firebase.png',
    width: 100,
    height: 100,
    title: 'firebase',
  },
  {
    imageSrc: '/stacks/supabase.png',
    width: 100,
    height: 100,
    title: 'supabase',
  },
];
const otherStacks: TechStack[] = [
  {
    imageSrc: '/stacks/aws.png',
    width: 100,
    height: 100,
    title: 'aws',
  },
  {
    imageSrc: '/stacks/docker.png',
    width: 100,
    height: 100,
    title: 'docker',
  },
  {
    imageSrc: '/stacks/vercel.svg',
    darkImageSrc: '/stacks/vercel-dark.svg',
    width: 100,
    height: 100,
    title: 'vercel',
  },
  {
    imageSrc: CDN_IMAGES.landing.octopus_2,
    width: 100,
    height: 100,
    title: '하찮은 그림실력',
  },
];

interface TechStackSectionProps {
  className?: string;
}

export const TechStackSection = ({ className }: TechStackSectionProps) => {
  return (
    <section
      className={cn(
        'h-auto w-full flex justify-center items-center flex-col gap-12 overflow-hidden',
        className
      )}
    >
      <TeckStackText />
      <div className="w-full max-w-screen-xl">
        <div className="space-y-12">
          <div className="flex justify-center items-center flex-wrap gap-6">
            {frontStacks.map((stack, idx) => {
              return (
                <TechStackDataProvider
                  key={idx}
                  srcDark={stack.darkImageSrc}
                  src={stack.imageSrc}
                  width={stack.width}
                  height={stack.height}
                  index={idx}
                  title={stack.title}
                  description={stack.description}
                />
              );
            })}
          </div>
          <div className="flex justify-center items-center flex-wrap gap-6">
            {backStacks.map((stack, idx) => {
              return (
                <TechStackDataProvider
                  key={idx}
                  src={stack.imageSrc}
                  srcDark={stack.darkImageSrc}
                  width={stack.width}
                  height={stack.height}
                  index={idx}
                  title={stack.title}
                  description={stack.description}
                />
              );
            })}
          </div>
          <div className="flex justify-center items-center flex-wrap gap-6">
            {otherStacks.map((stack, idx) => {
              return (
                <TechStackDataProvider
                  key={idx}
                  src={stack.imageSrc}
                  srcDark={stack.darkImageSrc}
                  width={stack.width}
                  height={stack.height}
                  index={idx}
                  title={stack.title}
                  description={stack.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
