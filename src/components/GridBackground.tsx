import { motion } from 'motion/react';
import React, { useEffect, useState } from 'react';

export const GridBackground = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none w-full h-full z-0">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Sharp moving geometric elements instead of glowing blobs */}
      <motion.div 
        className="absolute top-[20%] left-[5%] md:left-[10%] w-[120px] h-[120px] border-4 border-ink opacity-30"
        animate={{
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="absolute bottom-[20%] right-[5%] md:right-[10%] w-[200px] h-[200px] border-4 border-accent opacity-30 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-[60%] left-[20%] w-[60px] h-[60px] bg-ink opacity-[0.05]"
        animate={{
          y: [0, -40, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};
