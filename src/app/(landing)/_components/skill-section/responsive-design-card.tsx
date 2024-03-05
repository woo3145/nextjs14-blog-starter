'use client';
import * as React from 'react';
import { Variants, motion } from 'framer-motion';
import Image from 'next/image';

import { cn } from '@/lib/utils';

export const ResponsiveDesignCard = () => {
  const containerRef = React.useRef(null);
  const [isWide, setIsWide] = React.useState(false);

  // display는 animation의 대상이 아님으로 repeat가 불가능해서 ResizeObserver를 통해 크기 추적
  React.useEffect(() => {
    const currentRef = containerRef.current;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const crWidth = entry.contentRect.width;
        if (crWidth > 160) {
          setIsWide(true);
        } else {
          setIsWide(false);
        }
      }
    });

    if (currentRef) {
      resizeObserver.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        resizeObserver.unobserve(currentRef);
      }
    };
  }, []);

  const browserVariants: Variants = {
    initial: {
      width: 92,
    },
    animate: {
      width: 192,
      transition: {
        duration: 0.7,
        repeatDelay: 4,
        repeatType: 'mirror',
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="flex flex-1 justify-center items-center w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] space-y-2"
    >
      <motion.div
        variants={browserVariants}
        ref={containerRef}
        className="h-36 border rounded-md bg-background overflow-hidden relative"
      >
        <div className="flex items-center w-full h-4 bg-accent px-2 gap-1">
          <div className="w-2 h-2 rounded-full border bg-destructive" />
          <div className="w-2 h-2 rounded-full border" />
          <div className="w-2 h-2 rounded-full border bg-green-500" />
        </div>
        <div className={cn('w-full', isWide ? 'p-4' : 'py-4 px-2')}>
          <div
            className={cn(
              'w-full flex',
              isWide ? 'flex-row gap-4' : 'flex-col gap-2'
            )}
          >
            <div className="flex flex-col items-start min-w-6 gap-2">
              <div
                className={cn(
                  'flex items-center justify-center border rounded-full',
                  isWide ? 'w-3/5' : 'mx-auto w-1/2'
                )}
              >
                <Image
                  src="/문어_1.png"
                  alt="octopus"
                  width={60}
                  height={60}
                  className="w-full h-full"
                />
              </div>

              <div className="w-full space-y-1">
                <div className="w-full bg-gray-100 h-1 rounded-full dark:bg-neutral-900" />
                <div className="w-2/3 bg-gray-100 h-1 rounded-full dark:bg-neutral-900" />
              </div>
            </div>

            <div className="w-full h-full space-y-1">
              <div className="flex items-center justify-between">
                <div className="w-4 h-2 rounded-md bg-gray-100 dark:bg-neutral-900" />
                <div className="w-8 h-2 rounded-md bg-gray-200 dark:bg-neutral-700" />
              </div>

              <div
                className={cn(
                  'flex gap-1 w-full pt-1',
                  isWide ? 'flex-row' : 'flex-col'
                )}
              >
                <div className="w-full space-y-1">
                  <div className="h-8 border-2 border-gray-100 dark:border-neutral-900 rounded-md"></div>
                  <div className="h-12 border-2 border-gray-100 dark:border-neutral-900 rounded-md"></div>
                  <div className="h-8 border-2 border-gray-100 dark:border-neutral-900 rounded-md"></div>
                </div>
                <div className="w-full space-y-1">
                  <div className="h-12 border-2 border-gray-100 dark:border-neutral-900 rounded-md"></div>
                  <div className="h-8 border-2 border-gray-100 dark:border-neutral-900 rounded-md"></div>
                  <div className="h-12 border-2 border-gray-100 dark:border-neutral-900 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
