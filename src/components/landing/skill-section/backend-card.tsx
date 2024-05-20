'use client';
import { motion } from 'framer-motion';
import { IconDatabase, IconGhost2, IconTestPipe } from '@tabler/icons-react';

export const BackEndCard = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <IconTestPipe className="rounded-full h-10 w-10" />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          jest, supertest
        </p>
        <p className="border border-blue-500 bg-blue-100 dark:bg-blue-900/20 text-blue-600 text-xs rounded-full px-2 py-0.5 mt-4">
          테스팅
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <IconDatabase className="rounded-full h-10 w-10" />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          postgreSQL, mySQL, mongoDB, redis
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          DB 설계 및 최적화
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <IconGhost2 className="rounded-full h-10 w-10" />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          nginx, docker, gitActions
        </p>
        <p className="border border-purple-500 bg-purple-100 dark:bg-purple-900/20 text-purple-600 text-xs rounded-full px-2 py-0.5 mt-4">
          인프라 & CI/CD 구축
        </p>
      </motion.div>
    </motion.div>
  );
};
