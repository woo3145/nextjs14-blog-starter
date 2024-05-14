'use client';
import * as React from 'react';
import { motion, useInView } from 'framer-motion';

import { slideInFromLeft } from '@/lib/motion';
import { useTranslations } from 'next-intl';

export const ProjectText = () => {
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
        className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
      >
        {t('projectTitle')}
      </motion.div>
    </motion.div>
  );
};
