'use client';
import * as React from 'react';
import { motion, useInView } from 'framer-motion';

import { slideInFromRight } from '@/lib/motion';
import { useTranslation } from '../../translation-provider';

export const TeckStackText = () => {
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
        className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"
      >
        {translate('teckStackTitle')}
      </motion.div>
    </motion.div>
  );
};
