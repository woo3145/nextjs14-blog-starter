'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { Highlight } from '@/components/ui/highlight';
import { SnakeBeam } from './snake-beam';
import { FlipImage } from './flip-image';
import { CDN_IMAGES } from '@/data/cdn-images';
import { useTranslation } from '../../translation-provider';

export const HeroSection = () => {
  const { translate } = useTranslation();
  return (
    <div className="h-[40rem] md:h-screen w-full rounded-md flex items-center md:justify-center relative overflow-hidden bg-background bg-grid-black/[0.04] dark:bg-grid-white/[0.04]">
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 flex flex-col items-center">
        <SnakeBeam className="mb-4" />
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-3xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed md:leading-snug lg:leading-snug text-center mx-auto"
        >
          {translate('greeting')}
          {translate('introductionPreHilight') && (
            <Highlight className="text-black dark:text-white text-3xl md:text-4xl lg:text-5xl">
              {translate('introductionPreHilight')}
            </Highlight>
          )}
          {translate('introduction')}
          {translate('introductionPostHilight') && (
            <Highlight className="text-black dark:text-white text-3xl md:text-4xl lg:text-5xl">
              {translate('introductionPostHilight')}
            </Highlight>
          )}
          <br />
          <span className="text-2xl md:text-3xl lg:text-4xl font-medium">
            {translate('description')}
          </span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: [0.4, 0.0, 0.2, 1],
            delay: 0.3,
          }}
          className="flex items-center justify-center mt-10"
        >
          <FlipImage
            frontImage={
              <Image
                src={CDN_IMAGES.landing.octopus_1}
                alt="front"
                width={300}
                height={300}
                priority
                className="px-10 md:px-0"
              />
            }
            backImage={
              <Image
                src={CDN_IMAGES.landing.octopus_2}
                alt="back"
                width={300}
                height={300}
                className="px-10 md:px-0"
              />
            }
          />
        </motion.div>
      </div>
    </div>
  );
};
