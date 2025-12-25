'use client';

import { motion } from 'framer-motion';

export default function MotionMain({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.main
      className="w-full bg-black text-white font-[var(--font-montserrat)] px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.main>
  );
}
