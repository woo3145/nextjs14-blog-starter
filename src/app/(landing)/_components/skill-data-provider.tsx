'use client';
import { motion, Variants, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';

interface Props {
  src: string;
  srcDark?: string;
  width: number;
  height: number;
  index: number;
  title: string;
  description?: string;
}

export const SkillDataProvider = ({
  src,
  srcDark,
  width,
  height,
  index,
  title,
  description,
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isHovered, setIsHovered] = useState(false);

  // 이미지 애니메이션
  const imageVariants: Variants = {
    hidden: { opacity: 0 },
    animate: { opacity: 1 },
  };

  // 툴팁 애니메이션
  const tooltipVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
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
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative flex justify-center"
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
      {isHovered && (
        <motion.div
          className="absolute z-40 -top-12 p-2 bg-background text-foreground border border-border rounded-md text-sm whitespace-pre"
          variants={tooltipVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <strong>{title}</strong>
          {description ? (
            <p className="text-foreground/70">{description}</p>
          ) : null}
        </motion.div>
      )}
    </motion.div>
  );
};
