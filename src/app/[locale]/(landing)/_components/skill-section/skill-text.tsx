'use client';
import * as React from 'react';
import { motion, useInView } from 'framer-motion';

import { slideInFromLeft, slideInFromRight } from '@/lib/motion';
import { useTranslation } from '../../translation-provider';

export const SkillText = () => {
  const { translate } = useTranslation();
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
        variants={slideInFromRight(0.5)}
        className="flex items-center gap-2"
      >
        {(translate('skillTags') as string[]).map((tag) => (
          <div
            key={tag}
            className="py-2 px-2 border border-[#7042f88b] opacity-[0.9] rounded-md"
          >
            <h1 className="text-xs">{tag}</h1>
          </div>
        ))}
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-2xl md:text-3xl text-center pt-4 pb-4 text-transparent font-bold bg-clip-text bg-gradient-to-r from-rose-400 to-orange-300"
      >
        {translate('skillTitle')}
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-lg text-foreground/40 mb-10 pt-2 text-center"
      >
        {translate('skillDescription')}
      </motion.div>
    </motion.div>
  );
};
