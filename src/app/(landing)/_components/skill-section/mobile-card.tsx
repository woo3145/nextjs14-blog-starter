'use client';
import * as React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { IconHandClick } from '@tabler/icons-react';
import { CDN_IMAGES } from '@/data/cdn-images';

export const MobileCard = () => {
  const [flyAway, setFlyAway] = React.useState(false);

  const handleCardClick = () => {
    if (!flyAway) {
      setFlyAway(true);

      setTimeout(() => {
        setFlyAway(false);
      }, 8000);
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      onClick={handleCardClick}
      className="flex flex-1 justify-center items-center w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] space-y-2
      group cursor-pointer"
    >
      <motion.div className="flex flex-col aspect-[9/16] h-36 border-[3px] border-black rounded-md bg-background relative">
        {/* Top Nav */}
        <div className="flex items-start justify-center w-full h-2">
          <div className="w-12 h-[6px] rounded-full bg-black rounded-t-lg" />
        </div>
        <div
          className={cn(
            'flex-1 flex flex-col justify-between items-center w-full py-4 px-2'
          )}
        >
          <motion.div
            animate={
              flyAway
                ? {
                    y: [-10, -100, -250, -350, -450, -500],
                    x: [-20, 20, -20, 20, -20],
                    opacity: [1, 0.9, 1],
                  }
                : { scale: 1, x: 0, y: 0 }
            }
            transition={
              flyAway
                ? {
                    duration: 8,
                    ease: 'easeInOut',
                    times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                  }
                : { type: 'spring', stiffness: 300, damping: 15 }
            }
            initial={{ scale: 1, x: 0, y: 0 }}
          >
            <Image
              src={CDN_IMAGES.landing.squid_1}
              alt="squid"
              width={200}
              height={200}
              draggable={false}
              className="select-none z-40 "
            />
          </motion.div>

          <p className="flex gap-1 items-center text-xs font-bold text-blue-400 group-hover:scale-110 duration-200">
            Touch
            <IconHandClick className="text-foreground size-4 text-blue-400" />
          </p>
        </div>

        {/* Bottom Nav */}
        <div className="flex items-start justify-center w-full h-1">
          <div className="w-8 h-1 rounded-full bg-black border" />
        </div>
      </motion.div>
    </motion.div>
  );
};
