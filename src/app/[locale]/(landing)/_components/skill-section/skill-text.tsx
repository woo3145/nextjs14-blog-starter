'use client';
import * as React from 'react';
import { motion, useInView } from 'framer-motion';

import { slideInFromLeft, slideInFromRight } from '@/lib/motion';
import { useTranslation } from '../../translation-provider';
import { useTranslations } from 'next-intl';

export const SkillText = () => {
  const t = useTranslations('Landing');
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
        className="text-2xl md:text-3xl text-center pt-4 pb-4 text-transparent font-bold bg-clip-text bg-gradient-to-r from-rose-400 to-orange-300"
      >
        {t('skillTitle')}
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-lg text-foreground/40 mb-10 pt-2 text-center"
      >
        {t('skillDescription')}
      </motion.div>
    </motion.div>
  );
};
