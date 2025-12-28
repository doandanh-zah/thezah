"use client";

import { useEffect, useState, useCallback } from "react";

export default function KonamiCode() {
  const [tokenRain, setTokenRain] = useState(false);
  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "KeyB",
    "KeyA",
  ];

  const [inputSequence, setInputSequence] = useState<string[]>([]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const newSequence = [...inputSequence, e.code].slice(-10);
      setInputSequence(newSequence);

      if (newSequence.join(",") === konamiCode.join(",")) {
        setTokenRain(true);
        setInputSequence([]);
        setTimeout(() => setTokenRain(false), 5000);
      }
    },
    [inputSequence]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!tokenRain) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[100]">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="token"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${2 + Math.random() * 3}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          {Math.random() > 0.5 ? "◎" : "☀"}
        </div>
      ))}
      <style jsx>{`
        .token {
          position: fixed;
          top: -50px;
          font-size: 24px;
          color: #FFD700;
          text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
          animation: token-fall linear forwards;
        }
        @keyframes token-fall {
          0% {
            transform: translateY(-50px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
