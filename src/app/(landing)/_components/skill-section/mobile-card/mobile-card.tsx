'use client';
import * as React from 'react';
import { motion, useInView } from 'framer-motion';

import dynamic from 'next/dynamic';
import { MobileDevice } from './mobile-device';
import { IconLoader } from '@tabler/icons-react';

// WatermelonGame Lazy Loading
const WatermelonGame = dynamic(
  () => import('./watermelon-game').then((mod) => mod.WatermelonGame),
  {
    ssr: false,
    loading: () => (
      <div className="w-[75px] h-[132px] flex items-center justify-center">
        <IconLoader className="animate-spin" />
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
        <IconLoader className="animate-spin" />
      </div>
    ),
  }
);

export const MobileCard = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 1.0 });
  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate="animate"
      className="flex flex-1 justify-center items-center w-full h-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] space-x-8"
    >
      <MobileDevice>{isInView && <WatermelonGame />}</MobileDevice>

      <MobileDevice>{isInView && <FlySquidGame />}</MobileDevice>
    </motion.div>
  );
};
