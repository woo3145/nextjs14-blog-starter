import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import * as React from 'react';

import { slideInFromLeft } from '@/lib/motion';
import { CDN_IMAGES } from '@/data/cdn-images';

export const NextJsCard = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="flex flex-1 justify-center w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] space-y-2 overflow-hidden"
    >
      <motion.div variants={slideInFromLeft(0.3)}>
        <Image
          src={CDN_IMAGES.landing.render_tree}
          alt="render-tree"
          width={300}
          height={300}
          className="w-full h-full"
        />
      </motion.div>
    </motion.div>
  );
};
