'use client';

import { motion } from 'framer-motion';

interface MotionDivProps {
  children: React.ReactNode;
  className?: string;
  variants?: any;
  initial?: any;
  animate?: any;
  whileInView?: any;
  viewport?: any;
  transition?: any;
  whileHover?: any;
  whileTap?: any;
}

export default function MotionDiv({
  children,
  className,
  variants,
  initial,
  animate,
  whileInView,
  viewport,
  transition,
  whileHover,
  whileTap,
}: MotionDivProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      whileHover={whileHover}
      whileTap={whileTap}
    >
      {children}
    </motion.div>
  );
}
