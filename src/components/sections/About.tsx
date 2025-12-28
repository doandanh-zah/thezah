"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { t } = useLanguage();

  const stats = [
    { label: t.about.stats.projects, value: "5+" },
    { label: t.about.stats.years, value: "1+" },
    { label: t.about.stats.members, value: "30+" },
    { label: t.about.stats.hackathons, value: "5+" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent-yellow/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Section Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-accent-yellow font-mono text-sm mb-4"
          >
            {t.about.label}
          </motion.p>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="section-title mb-8"
          >
            {t.about.title}
          </motion.h2>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              {t.about.bio1}
            </p>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              {t.about.bio2}
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="p-4 rounded-xl bg-secondary-black/50 border border-white/5 hover:border-accent-yellow/30 transition-colors"
              >
                <p className="text-3xl md:text-4xl font-bold font-display text-accent-yellow">
                  {stat.value}
                </p>
                <p className="text-sm text-white/50 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Decorative Code Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="mt-12 p-6 rounded-xl bg-secondary-black/50 border border-white/5 text-left font-mono text-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-white/30">lilzah.sol</span>
            </div>
            <pre className="text-white/70 overflow-x-auto">
              <code>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">lilzah</span> = {`{`}
                {"\n"}
                {"  "}<span className="text-green-400">name</span>:{" "}
                <span className="text-accent-yellow">&quot;Đoàn Đỗ Thành Danh&quot;</span>,
                {"\n"}
                {"  "}<span className="text-green-400">alias</span>:{" "}
                <span className="text-accent-yellow">&quot;Zah | Lil Zah&quot;</span>,
                {"\n"}
                {"  "}<span className="text-green-400">role</span>:{" "}
                <span className="text-accent-yellow">&quot;Solana BUIDLER&quot;</span>,
                {"\n"}
                {"  "}<span className="text-green-400">location</span>:{" "}
                <span className="text-accent-yellow">&quot;Da Nang, Vietnam&quot;</span>,
                {"\n"}
                {"  "}<span className="text-green-400">passion</span>:{" "}
                <span className="text-accent-yellow">&quot;Building the future of Web3&quot;</span>,
                {"\n"}
                {"  "}<span className="text-green-400">community</span>:{" "}
                <span className="text-accent-yellow">&quot;DSUC Leader&quot;</span>,
                {"\n"}
                {`}`};
              </code>
            </pre>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
