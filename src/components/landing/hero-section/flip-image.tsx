'use client';
import * as React from 'react';
import { motion } from 'framer-motion';
import { useToggleLocale } from '@/hooks/use-toggle-locale';

interface Props {
  frontImage: React.ReactNode;
  backImage: React.ReactNode;
}

export const FlipImage = ({ frontImage, backImage }: Props) => {
  const { locale, handleClick } = useToggleLocale();

  const toggleLanguage = () => {
    handleClick(locale === 'en' ? 'ko' : 'en');
  };

  const variants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  return (
    <div
      onClick={toggleLanguage}
      style={{ perspective: 1000, cursor: 'pointer' }}
    >
      <motion.div
        animate={locale == 'en' ? 'back' : 'front'}
        variants={variants}
        transition={{ duration: 0.8 }}
        style={{
          position: 'relative',
          width: 240,
          height: 240,
          transformStyle: 'preserve-3d',
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            backfaceVisibility: 'hidden',
          }}
        >
          {frontImage}
        </motion.div>
        <motion.div
          style={{
            rotateY: 180,
            position: 'absolute',
            backfaceVisibility: 'hidden',
          }}
        >
          {backImage}
        </motion.div>
      </motion.div>
    </div>
  );
};
