'use client';
import * as React from 'react';
import { motion } from 'framer-motion';

interface Props {
  frontImage: React.ReactNode;
  backImage: React.ReactNode;
}

export const FlipImage = ({ frontImage, backImage }: Props) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const variants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  return (
    <div
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ perspective: 1000, cursor: 'pointer' }}
    >
      <motion.div
        animate={isFlipped ? 'back' : 'front'}
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
