import React from 'react';
import { motion } from 'motion/react';

const SolanaLogo = () => (
  <svg width="100%" height="100%" viewBox="0 0 397 311" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7z" fill="currentColor"/>
    <path d="M64.6 3.8C67 1.4 70.3 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z" fill="currentColor"/>
    <path d="M333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z" fill="currentColor"/>
  </svg>
);

export function Decorations() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
      {/* Floating Solana Logo */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 10, 0],
          rotate: [15, 20, 15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[20%] right-[10%] w-32 h-32 md:w-48 md:h-48 text-accent opacity-15 dark:opacity-[0.08] blur-[1px] dark:blur-[2px]"
      >
        <div className="absolute inset-0 bg-accent/30 dark:bg-accent/40 blur-3xl rounded-full" />
        <SolanaLogo />
      </motion.div>

      {/* Floating Solana Logo 2 */}
      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
          rotate: [-15, -5, -15],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-[20%] left-[5%] w-40 h-40 md:w-64 md:h-64 text-accent opacity-15 dark:opacity-[0.08] blur-[2px] dark:blur-[3px]"
      >
        <div className="absolute inset-0 bg-accent/30 dark:bg-accent/40 blur-3xl rounded-full" />
        <SolanaLogo />
      </motion.div>
    </div>
  );
}
