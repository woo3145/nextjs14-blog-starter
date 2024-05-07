'use client';
import React from 'react';

import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import { IconClipboardData } from '@tabler/icons-react';

export const IconContainer = ({ icon, text, delay }: any) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.2,
        delay: delay ? delay : 0,
      }}
      className={twMerge(
        'relative z-50 flex flex-col items-center justify-center space-y-2'
      )}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-accent bg-accent shadow-inner">
        {icon || <IconClipboardData className="  h-6 w-6 text-foreground/60" />}
      </div>
      <div className="hidden rounded-md px-2 py-1 md:block">
        <div className="text-center text-xs font-bold text-foreground/60">
          {text || `Web Development`}
        </div>
      </div>
    </motion.div>
  );
};
