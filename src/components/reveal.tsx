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
}

export const Reveal = ({ children, initial, whileInView }: RevealProps) => {
  return (
    <motion.div initial={initial} whileInView={whileInView}>
      {children}
    </motion.div>
  );
};
