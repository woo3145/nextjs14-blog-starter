import { Variants, motion } from 'framer-motion';
import Image from 'next/image';

export const MiniBrowser = () => {
  const profileVariants: Variants = {
    initial: {
      width: 20,
      height: 20,
    },
    animate: {
      width: 32,
      height: 32,
      borderRadius: '4px',
      transition: {
        duration: 0.7,
        repeatDelay: 4,
        repeatType: 'reverse',
        repeat: Infinity,
      },
    },
  };
  const leftVariants: Variants = {
    initial: {
      height: 32,
    },
    animate: {
      height: 48,
      transition: {
        duration: 0.7,
        repeatDelay: 6,
        repeatType: 'reverse',
        repeat: Infinity,
      },
    },
  };
  const rightVariants: Variants = {
    initial: {
      height: 48,
    },
    animate: {
      height: 32,
      transition: {
        duration: 0.7,
        repeatDelay: 6,
        repeatType: 'reverse',
        repeat: Infinity,
      },
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="flex flex-1 justify-center items-center w-full h-full space-y-2"
    >
      <div className="w-48 h-36 border rounded-md bg-background overflow-hidden">
        <div className="flex items-center w-full h-4 bg-accent px-2 gap-1">
          <div className="w-2 h-2 rounded-full border bg-destructive" />
          <div className="w-2 h-2 rounded-full border" />
          <div className="w-2 h-2 rounded-full border bg-green-500" />
        </div>
        <div className="w-full p-4">
          <div className="flex w-full gap-4">
            <div className="flex flex-col items-start min-w-8 gap-2">
              <motion.div
                variants={profileVariants}
                className="flex items-center justify-center border rounded-full"
              >
                <Image
                  src="/octopus_1.png"
                  alt="octopus"
                  width={80}
                  height={80}
                  className="w-full h-full"
                />
              </motion.div>

              <div className="w-full space-y-1">
                <div className="w-full bg-gray-100 h-1 rounded-full dark:bg-neutral-900" />
                <div className="w-1/3 bg-gray-100 h-1 rounded-full dark:bg-neutral-900" />
                <div className="w-full bg-gray-100 h-1 rounded-full dark:bg-neutral-900" />
                <div className="w-2/3 bg-gray-100 h-1 rounded-full dark:bg-neutral-900" />
                <div className="w-full bg-gray-100 h-1 rounded-full dark:bg-neutral-900" />
              </div>
            </div>

            <div className="w-full h-full space-y-1">
              <div className="flex items-center justify-between">
                <div className="w-4 h-2 rounded-md bg-gray-100 dark:bg-neutral-900" />
                <div className="w-8 h-2 rounded-md bg-gray-200 dark:bg-neutral-700" />
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="w-6 h-1.5 rounded-md bg-gray-100 dark:bg-neutral-900" />
                <div className="w-full h-1.5 rounded-md bg-gray-100 dark:bg-neutral-900" />
              </div>

              <div className="flex gap-1 w-full pt-1">
                <div className="w-full space-y-1">
                  <motion.div
                    variants={leftVariants}
                    className="border-2 border-gray-100 dark:border-neutral-900 rounded-md"
                  ></motion.div>
                  <motion.div
                    variants={leftVariants}
                    className="border-2 border-gray-100 dark:border-neutral-900 rounded-md"
                  ></motion.div>
                  <motion.div
                    variants={leftVariants}
                    className="border-2 border-gray-100 dark:border-neutral-900 rounded-md"
                  ></motion.div>
                </div>
                <div className="w-full space-y-1">
                  <motion.div
                    variants={rightVariants}
                    className="border-2 border-gray-100 dark:border-neutral-900 rounded-md"
                  ></motion.div>
                  <motion.div
                    variants={rightVariants}
                    className="border-2 border-gray-100 dark:border-neutral-900 rounded-md"
                  ></motion.div>
                  <motion.div
                    variants={rightVariants}
                    className="border-2 border-gray-100 dark:border-neutral-900 rounded-md"
                  ></motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
