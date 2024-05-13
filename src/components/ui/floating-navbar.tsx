'use client';
import React, { useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollY, scrollYProgress } = useScroll({});
  const pathname = usePathname();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    let direction = current - (scrollYProgress.getPrevious() || 0);

    if (scrollY.get() === 0 || scrollYProgress.get() < 0.05) {
      setVisible(true);
    } else {
      if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });
  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: -100,
            opacity: 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            'flex max-w-fit fixed top-10 inset-x-0 mx-auto rounded-full bg-background shadow-md z-[100] px-8 py-2 items-center justify-center space-x-8',
            className
          )}
        >
          {navItems.map((navItem, idx) => {
            const isActive = pathname === navItem.link;
            return (
              <Link
                key={`nav-item-${idx}`}
                href={navItem.link}
                className={cn(
                  'text-sm font-medium relative text-foreground py-2 rounded-full hover:text-accent-foreground duration-200 bg-indi',
                  isActive
                    ? 'text-sm font-medium text-foreground'
                    : 'text-foreground/60'
                )}
              >
                {/* <span className="block sm:hidden">{navItem.icon}</span> */}
                <span className="block text-xs sm:text-sm">{navItem.name}</span>
                {isActive ? (
                  <motion.div className="absolute -bottom-[1px] left-0 right-0 h-[1px]">
                    <svg width="37" height="8" viewBox="0 0 37 8" fill="none">
                      <motion.path
                        d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                        className="stroke-indigo-400"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{
                          strokeDasharray: 84.20591735839844,
                          strokeDashoffset: 84.20591735839844,
                        }}
                        animate={{
                          strokeDashoffset: 0,
                        }}
                        transition={{
                          duration: 1,
                        }}
                      />
                    </svg>
                  </motion.div>
                ) : null}
              </Link>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
