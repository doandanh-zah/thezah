import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Only run sequence once on mount
    let isMounted = true;
    
    const runSequence = async () => {
      if (!isMounted) return;
      
      // Stage 0: WELCOME (Vintage Fade)
      await new Promise(r => setTimeout(r, 800));
      if (!isMounted) return;
      setStage(1);
      
      // End animation after Welcome shows for a bit
      await new Promise(r => setTimeout(r, 2000));
      if (!isMounted) return;
      setIsVisible(false);
      
      // Trigger callback
      await new Promise(r => setTimeout(r, 1500));
      if (!isMounted) return;
      onComplete();
    };
    
    runSequence();

    return () => {
      isMounted = false;
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(30px)' }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Subtle noise pattern for texture */}
          <div className="absolute inset-0 opacity-[0.06] mix-blend-difference pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

          {/* Vignette effect */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none z-10" />

          <div className="relative flex flex-col items-center justify-center h-64 w-full z-20">
            <AnimatePresence mode="wait">
              {stage === 1 && (
                <motion.h1
                  key="welcome"
                  initial={{ opacity: 0, scale: 0.95, filter: 'blur(5px) sepia(10%)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px) sepia(20%)' }}
                  exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="text-5xl md:text-8xl font-vintage italic text-foreground absolute tracking-widest font-light"
                >
                  Welcome.
                </motion.h1>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
