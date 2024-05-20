'use client';
import { motion } from 'framer-motion';

export const BaaSCard = () => {
  const variants = {
    initial: {
      backgroundPosition: '0 50%',
    },
    animate: {
      backgroundPosition: ['0, 50%', '100% 50%', '0 50%'],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
      className="flex flex-1 justify-center items-center w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] space-y-2"
      style={{
        background:
          'linear-gradient(-45deg, #eecda3, #ef629f, #ba5370, #f4e2d8)',
        backgroundSize: '400% 400%',
      }}
    >
      <motion.div className="text-5xl text-white">BaaS</motion.div>
    </motion.div>
  );
};
