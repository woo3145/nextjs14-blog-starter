'use client';
import * as React from 'react';
import { IconBrandGithub, IconHome } from '@tabler/icons-react';
import Link from 'next/link';
import Image from 'next/image';

import { cn } from '@/lib/utils';

interface ProjectSectionProps {
  className?: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  projectType?: string;
  tags?: React.ReactNode;
  footer?: React.ReactNode;
}

// 작업중
export const PortfolioDetailHeader = ({
  className,
  title,
  description,
  thumbnailUrl,
  projectType,
  tags,
  footer,
}: ProjectSectionProps) => {
  return (
    <section className={cn('w-full bg-background overflow-hidden', className)}>
      <div className="relative w-full max-w-[1200px] h-auto mx-auto">
        <div className="py-24 px-4 lg:px-16 border-l border-dashed">
          <div className="flex items-end pb-12 gap-4">
            <h2 className="text-3xl font-bold antialiased">{title}</h2>
            <p className="">{projectType}</p>
          </div>
          <div className="relative flex justify-between flex-col-reverse lg:flex-row lg:gap-20 pt-16 w-full">
            <div className="absolute -left-[150px] top-0 w-[1500px] h-[1px] border-t border-dashed" />

            <div className="w-full lg:w-1/2 space-y-4">
              {tags}

              <p className="font-sans font-normal text-neutral-600 dark:text-neutral-300">
                {description}
              </p>

              {footer}
            </div>

            <div className="w-full lg:w-1/2 relative -top-12">
              <Image
                src={thumbnailUrl}
                alt="thumbnail"
                width={1000}
                height={1000}
                className={`w-full h-auto rounded-lg`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
