import Image from 'next/image';
import { FlipImage } from './flip-image';
import { SnakeBeam } from './snake-beam';
import { Spotlight } from './spotlight';
import { TypewriterEffect } from './typewriter-effect';

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
    <div className="h-[40rem] md:h-screen w-full rounded-md flex md:items-center md:justify-center relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
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
                  src="/문어_1.png"
                  alt="front"
                  width={300}
                  height={300}
                  priority
                  className="px-10 md:px-0"
                />
              }
              backImage={
                <Image
                  src="/문어_2.png"
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
  );
};
