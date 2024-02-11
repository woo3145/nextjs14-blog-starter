import { motion, Variant, Variants, animate, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

interface Props {
  src: string;
  srcDark?: string;
  width: number;
  height: number;
  index: number;
}

export const SkillDataProvider = ({
  src,
  srcDark,
  width,
  height,
  index,
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const imageVariants: Variants = {
    hidden: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const animationDealy = 0.3;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={isInView ? 'animate' : 'hidden'}
      custom={index}
      transition={{ delay: index * animationDealy }}
    >
      {srcDark ? (
        <>
          <Image
            src={srcDark}
            width={width}
            height={height}
            alt="skill image"
            className="fill-foreground hidden dark:block"
          />
          <Image
            src={src}
            width={width}
            height={height}
            alt="skill image"
            className="fill-foreground block dark:hidden"
          />
        </>
      ) : (
        <Image
          src={src}
          width={width}
          height={height}
          alt="skill image"
          className="fill-foreground"
        />
      )}
    </motion.div>
  );
};
