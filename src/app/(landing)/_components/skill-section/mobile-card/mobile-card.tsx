'use client';
import * as React from 'react';
import { motion } from 'framer-motion';

import dynamic from 'next/dynamic';
import { MobileDevice } from './mobile-device';

// WatermelonGame Lazy Loading
const WatermelonGame = dynamic(
  () => import('./watermelon-game').then((mod) => mod.WatermelonGame),
  {
    ssr: false,
    loading: () => (
      <div className="w-[75px] h-[132px] flex items-center justify-center">
        <p className="text-xs">Loading...</p>
      </div>
    ),
  }
);

// FlySquidGame Lazy Loading
const FlySquidGame = dynamic(
  () => import('./fly-squid-game').then((mod) => mod.FlySquidGame),
  {
    ssr: false,
    loading: () => (
      <div className="w-[75px] h-[132px] flex items-center justify-center">
        <p className="text-xs">Loading...</p>
      </div>
    ),
  }
);

export const MobileCard = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="flex flex-1 justify-center items-center w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] space-x-8"
    >
      <MobileDevice>
        <WatermelonGame />
      </MobileDevice>

      <MobileDevice>
        <FlySquidGame />
      </MobileDevice>
    </motion.div>
  );
};
