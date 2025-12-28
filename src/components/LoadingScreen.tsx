"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const names = ["Đoàn Đỗ Thành Danh", "Zah", "Lil Zah"];

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  // Name cycling with glitch effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => {
        setCurrentNameIndex((prev) => (prev + 1) % names.length);
        setTimeout(() => setIsGlitching(false), 150);
      }, 150);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-primary-black flex items-center justify-center overflow-hidden"
        >
          {/* Background Grid */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(255,215,0,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,215,0,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />

          <div className="relative z-10">
            {/* Glitch Name Display */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className={`relative ${isGlitching ? "animate-glitch" : ""}`}>
                {/* Main Text */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display text-accent-yellow text-center whitespace-nowrap">
                  {names[currentNameIndex]}
                </h1>

                {/* Glitch Layers */}
                {isGlitching && (
                  <>
                    <h1
                      className="absolute inset-0 text-4xl sm:text-5xl md:text-7xl font-bold font-display text-red-500 text-center whitespace-nowrap"
                      style={{
                        clipPath: "inset(10% 0 60% 0)",
                        transform: "translate(-5px, 0)",
                        opacity: 0.8,
                      }}
                    >
                      {names[currentNameIndex]}
                    </h1>
                    <h1
                      className="absolute inset-0 text-4xl sm:text-5xl md:text-7xl font-bold font-display text-cyan-500 text-center whitespace-nowrap"
                      style={{
                        clipPath: "inset(40% 0 20% 0)",
                        transform: "translate(5px, 0)",
                        opacity: 0.8,
                      }}
                    >
                      {names[currentNameIndex]}
                    </h1>
                    <h1
                      className="absolute inset-0 text-4xl sm:text-5xl md:text-7xl font-bold font-display text-green-500 text-center whitespace-nowrap"
                      style={{
                        clipPath: "inset(70% 0 5% 0)",
                        transform: "translate(-3px, 2px)",
                        opacity: 0.8,
                      }}
                    >
                      {names[currentNameIndex]}
                    </h1>
                  </>
                )}

                {/* Constant subtle glitch */}
                <motion.h1
                  className="absolute inset-0 text-4xl sm:text-5xl md:text-7xl font-bold font-display text-red-500/30 text-center whitespace-nowrap"
                  animate={{
                    x: [0, -2, 2, -1, 0],
                    opacity: [0.3, 0.5, 0.3, 0.4, 0.3],
                  }}
                  transition={{ duration: 0.15, repeat: Infinity }}
                >
                  {names[currentNameIndex]}
                </motion.h1>
                <motion.h1
                  className="absolute inset-0 text-4xl sm:text-5xl md:text-7xl font-bold font-display text-cyan-500/30 text-center whitespace-nowrap"
                  animate={{
                    x: [0, 2, -2, 1, 0],
                    opacity: [0.3, 0.4, 0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 0.15, repeat: Infinity }}
                >
                  {names[currentNameIndex]}
                </motion.h1>
              </div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-4 text-white/50 font-mono text-sm text-center"
              >
                Solana Buidler
              </motion.p>
            </motion.div>

            {/* Loading Bar */}
            <motion.div
              className="mt-8 h-1 bg-secondary-black rounded-full overflow-hidden w-64 mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-accent-yellow to-accent-orange"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-white/30 font-mono text-xs text-center"
            >
              Initializing portfolio...
            </motion.p>
          </div>

          {/* Scan Lines */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-full h-px bg-gradient-to-r from-transparent via-accent-yellow/40 to-transparent"
                initial={{ y: "-100%" }}
                animate={{ y: "100vh" }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-accent-yellow/30" />
          <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-accent-yellow/30" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-accent-yellow/30" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-accent-yellow/30" />

          {/* Noise Overlay */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
