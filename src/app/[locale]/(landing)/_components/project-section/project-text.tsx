'use client';
import * as React from 'react';

import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/reveal';

export const ProjectText = () => {
  const t = useTranslations('Landing');

  return (
    <Reveal
      initial={{ opacity: 0, x: -100 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.4 },
      }}
    >
      <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        {t('projectTitle')}
      </h3>
    </Reveal>
  );
};
