'use client';

import Image from 'next/image';
import { TechStack } from '../../../data/teck-stack-data';

interface TechStackItemProps {
  stack: TechStack;
}

export const TechStackItem = ({ stack }: TechStackItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {stack.darkImageSrc ? (
        <>
          <Image
            src={stack.darkImageSrc}
            width={stack.width}
            height={stack.height}
            alt="skill image"
            className="hidden dark:block w-20 md:w-24 rounded-md"
          />
          <Image
            src={stack.imageSrc}
            width={stack.width}
            height={stack.height}
            alt="skill image"
            className="block dark:hidden w-20 md:w-24 rounded-md"
          />
        </>
      ) : (
        <Image
          src={stack.imageSrc}
          width={stack.width}
          height={stack.height}
          alt="skill image"
          className="fill-foreground w-20 md:w-24 rounded-md"
        />
      )}
      <p className="text-sm text-muted-foreground first-letter:uppercase">
        {stack.title}
      </p>
    </div>
  );
};
