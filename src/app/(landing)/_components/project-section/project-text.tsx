'use client';
import * as React from 'react';
import { motion, useInView } from 'framer-motion';

import { slideInFromLeft, slideInFromRight } from '@/lib/motion';

export const ProjectText = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="w-full h-auto flex flex-col items-center justify-center"
    >
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-foreground font-medium mt-[10px] text-center mb-[15px]"
      >
        Portfolio
      </motion.div>
    </motion.div>
  );
};
