'use client';
import * as React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../../translation-provider';

interface Props {
  frontImage: React.ReactNode;
  backImage: React.ReactNode;
}

export const FlipImage = ({ frontImage, backImage }: Props) => {
  const { toggleLanguage, language } = useTranslation();

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
        animate={language == 'ko' ? 'back' : 'front'}
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
