"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex items-center gap-1 p-1 bg-secondary-black/50 backdrop-blur-md rounded-full border border-white/10"
    >
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
          language === "en"
            ? "bg-accent-yellow text-primary-black"
            : "text-white/60 hover:text-white"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("vi")}
        className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
          language === "vi"
            ? "bg-accent-yellow text-primary-black"
            : "text-white/60 hover:text-white"
        }`}
      >
        VI
      </button>
    </motion.div>
  );
}
