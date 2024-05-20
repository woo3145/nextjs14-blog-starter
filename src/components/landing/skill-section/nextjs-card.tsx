import Image from 'next/image';
import * as React from 'react';

import { CDN_IMAGES } from '@/data/cdn-images';
import { Reveal } from '@/components/common/reveal';

export const NextJsCard = () => {
  return (
    <div className="flex flex-1 justify-center w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] space-y-2 overflow-hidden">
      <Reveal
        initial={{ opacity: 0, x: -100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.4, delay: 0.4 },
        }}
      >
        <Image
          src={CDN_IMAGES.landing.render_tree}
          alt="render-tree"
          width={300}
          height={300}
          className="w-full h-full"
        />
      </Reveal>
    </div>
  );
};
