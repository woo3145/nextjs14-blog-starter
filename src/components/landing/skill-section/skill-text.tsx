'use client';
import * as React from 'react';

import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/reveal';

export const SkillText = () => {
  const t = useTranslations('Landing');

  return (
    <div>
      <Reveal
        initial={{ opacity: 0, x: -100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.4 },
        }}
      >
        <h3 className="text-2xl md:text-3xl text-center pt-4 pb-4 text-transparent font-bold bg-clip-text bg-gradient-to-r from-rose-400 to-orange-300">
          {t('skillTitle')}
        </h3>
      </Reveal>
      <Reveal
        initial={{ opacity: 0, x: 100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.4, delay: 0.5 },
        }}
      >
        <p className="cursive text-lg text-foreground/40 mb-10 pt-2 text-center">
          {t('skillDescription')}
        </p>
      </Reveal>
    </div>
  );
};
