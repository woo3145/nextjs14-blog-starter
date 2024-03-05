import * as React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  imgSrc: string;
  stacks?: React.ReactNode;
  footer?: React.ReactNode;
}

export const ProjectCard = ({
  title,
  description,
  imgSrc,
  stacks,
  footer,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col gap-2 row-span-1 rounded-lg hover:shadow-xl transition duration-200 shadow-input p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent">
      <div className="relative flex flex-1 justify-center items-center w-full min-h-[16rem] max-h-[16rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] space-y-2">
        <Image
          src={imgSrc}
          alt="thumbnail"
          width={1000}
          height={1000}
          className={`w-full h-full object-contain rounded-lg`}
        />
      </div>
      <div className="p-2 space-y-2">
        {stacks}
        <h1 className="font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </h1>
        <h2 className="font-sans font-normal text-neutral-600 text-sm dark:text-neutral-300 pb-2">
          {description}
        </h2>
        {footer}
      </div>
    </div>
  );
};
