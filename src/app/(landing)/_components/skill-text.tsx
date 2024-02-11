'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '@/lib/motion';

const SkillText = () => {
  const ref = useRef(null);
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
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] rounded-md"
      >
        <h1 className="Welcome-text text-[13px]">my skills</h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-foreground font-medium mt-[10px] text-center mb-[15px]"
      >
        I love creating full-stack apps
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-foreground/40 mb-10 mt-[10px] text-center"
      >
        also, I love learning and enjoy bringing my ideas to life.
      </motion.div>
    </motion.div>
  );
};

export default SkillText;
