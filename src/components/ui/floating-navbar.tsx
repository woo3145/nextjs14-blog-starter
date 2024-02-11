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
            'flex max-w-fit fixed top-10 inset-x-0 mx-auto rounded-full bg-background shadow-md z-[100] px-8 py-2 items-center justify-center space-x-4',
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
                  'text-sm font-medium relative text-foreground px-4 py-2 rounded-full hover:bg-accent hover:text-accent-foreground',
                  isActive ? 'text-sm font-medium text-foreground' : ''
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block text-sm">{navItem.name}</span>
                {isActive ? (
                  <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-primary to-transparent h-px" />
                ) : null}
              </Link>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
