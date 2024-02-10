'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

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
          {/* Front of the card */}
          <Image src="/문어_1.png" alt="front" width={300} height={300} />
        </motion.div>
        <motion.div
          style={{
            rotateY: 180,
            position: 'absolute',
            backfaceVisibility: 'hidden',
          }}
        >
          {/* Back of the card */}
          <Image src="/문어_2.png" alt="back" width={300} height={300} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FlipCard;
