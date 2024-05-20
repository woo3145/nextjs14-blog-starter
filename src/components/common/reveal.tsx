'use client';

import {
  AnimationProps,
  TargetAndTransition,
  VariantLabels,
  motion,
} from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  initial: AnimationProps['initial'];
  whileInView: TargetAndTransition | VariantLabels | undefined;
  className?: string;
}

export const Reveal = ({
  children,
  initial,
  whileInView,
  className,
}: RevealProps) => {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      className={className}
    >
      {children}
    </motion.div>
  );
};
