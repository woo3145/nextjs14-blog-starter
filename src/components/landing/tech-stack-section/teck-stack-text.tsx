'use client';
import * as React from 'react';

import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/common/reveal';

export const TechStackText = () => {
  const t = useTranslations('Landing');

  return (
    <Reveal
      initial={{ opacity: 0, x: 100 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, delay: 0.4 },
      }}
    >
      <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
        {t('techStackTitle')}
      </h3>
    </Reveal>
  );
};
