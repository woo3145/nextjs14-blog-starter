import Image from 'next/image';
import { FlipImage } from './flip-image';
import { SnakeBeam } from '../main-section/snake-beam';
import { TypewriterEffect } from '../main-section/typewriter-effect';
import { CDN_IMAGES } from '@/data/cdn-images';
import { AuroraBackground } from '@/components/ui/aurora-background';

export const MainSection = () => {
  const words = [
    {
      text: 'NodeJS',
      className:
        'text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold text-center text-blue-500 dark:text-blue-500',
    },
    {
      text: 'Developer',
      className:
        'text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold text-center text-blue-500 dark:text-blue-500',
    },
  ];
  return (
    <AuroraBackground>
      <div className="h-[40rem] md:h-screen w-full rounded-md flex items-center md:justify-center relative overflow-hidden">
        <div className="w-full max-w-screen-lg">
          <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 flex flex-col items-center">
            <SnakeBeam className="" />
            <h1 className="text-4xl md:text-7xl py-4 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Lee Chang Woo
            </h1>
            <TypewriterEffect words={words} />
            <div className="flex items-center justify-center h-40 md:h-60 mt-10">
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
            </div>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
};
