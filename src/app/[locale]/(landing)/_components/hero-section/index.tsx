'use client';
import * as React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { Highlight } from '@/components/ui/highlight';
import { SnakeBeam } from './snake-beam';
import { FlipImage } from './flip-image';
import { CDN_IMAGES } from '@/data/cdn-images';
import { BubbleMessage } from './bubble-message';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/reveal';

interface HeroSectionProps {
  className?: string;
}

export const HeroSection = ({ className }: HeroSectionProps) => {
  const t = useTranslations('Landing');
  const [showBubble, setShowBubble] = React.useState(true);
  const hoverTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    setShowBubble(true);
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setShowBubble(false);
    }, 3000);
  };

  React.useEffect(() => {
    hoverTimeoutRef.current = setTimeout(() => {
      setShowBubble(false);
    }, 5000);
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className={cn(
        'h-screen w-full rounded-md flex items-center justify-center relative overflow-hidden',
        className
      )}
    >
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="md:p-4 max-w-7xl mx-auto relative z-10 w-full pb-20 md:pt-0 flex flex-col items-center"
      >
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
          className={cn(
            'px-4  font-bold text-neutral-700 dark:text-white max-w-4xl text-center mx-auto',
            'text-2xl leading-normal sm:text-3xl sm:leading-snug md:text-4xl md:leading-snug lg:text-5xl lg:leading-snug'
          )}
        >
          {t('greeting')}
          {t('introductionPreHilight') && (
            <Highlight className="text-black dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              {t('introductionPreHilight')}
            </Highlight>
          )}
          <br />
          {t('introduction')}
          {t('introductionPostHilight') && (
            <Highlight className="text-black dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              {t('introductionPostHilight')}
            </Highlight>
          )}
          <br />
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
            {t('description')}
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
          className="flex flex-col items-center justify-center md:mt-10 relative"
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
          <Reveal
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.4, delay: 0.4 },
            }}
            className="absolute bottom-12 md:bottom-0"
          >
            <motion.div
              animate={{ opacity: showBubble ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="animate-bounce"
            >
              <BubbleMessage>{t('characterMessage')}</BubbleMessage>
            </motion.div>
          </Reveal>
        </motion.div>
      </div>
    </div>
  );
};
