"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const moveCursor = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
    if (!isVisible) setIsVisible(true);
  }, [cursorX, cursorY, isVisible]);

  useEffect(() => {
    window.addEventListener("mousemove", moveCursor);
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("hoverable")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [moveCursor]);

  // Don't render on mobile/touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="custom-cursor hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 2 : 1,
            opacity: isHovering ? 0.5 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="relative -translate-x-1/2 -translate-y-1/2"
        >
          {/* Inner dot */}
          <div className="w-3 h-3 bg-accent-yellow rounded-full" />
          
          {/* Glow effect */}
          <div className="absolute inset-0 w-3 h-3 bg-accent-yellow rounded-full blur-md opacity-50" />
          
          {/* Outer ring */}
          <motion.div
            animate={{
              scale: isHovering ? 1.5 : 1,
              opacity: isHovering ? 1 : 0.5,
            }}
            className="absolute -inset-2 border border-accent-yellow/50 rounded-full"
          />
        </motion.div>
      </motion.div>

      {/* Trail effect */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="custom-cursor hidden md:block"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            opacity: isVisible ? (0.3 - i * 0.05) : 0,
          }}
          transition={{ delay: i * 0.02 }}
        >
          <motion.div
            className="relative -translate-x-1/2 -translate-y-1/2"
            style={{ scale: 1 + i * 0.2 }}
          >
            <div 
              className="w-2 h-2 bg-accent-yellow/30 rounded-full blur-sm"
              style={{ 
                transform: `scale(${1 + i * 0.3})`,
                opacity: 0.5 - i * 0.1 
              }}
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Hide default cursor */}
      <style jsx global>{`
        @media (min-width: 768px) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}
