"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/context/LanguageContext";

export default function Achievements() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { t } = useLanguage();

  const achievements = [
    {
      title: '2nd Place - "Build on APEC Education Ecosystem using Solana" Side Track',
      event: t.achievements.items.hackathon.event,
      date: "Dec 2025",
      icon: "🥈",
      description: t.achievements.items.hackathon.description,
      gradient: "from-gray-400 to-gray-600",
    },
    {
      title: "Grant Winner - Solana Danang Connection 2025",
      event: t.achievements.items.grant.event,
      date: "Sep 2025",
      icon: "💰",
      description: t.achievements.items.grant.description,
      gradient: "from-accent-yellow to-accent-orange",
    },
  ];

  return (
    <section id="achievements" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-yellow/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent-yellow font-mono text-sm mb-4">{t.achievements.label}</p>
          <h2 className="section-title">{t.achievements.title}</h2>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
                className="achievement-card h-full relative overflow-hidden group"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Glowing Border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${achievement.gradient} opacity-20 blur-xl`} />
                </div>

                {/* Icon */}
                <div className="text-6xl mb-6">{achievement.icon}</div>

                {/* Event Badge */}
                <span className="inline-block px-3 py-1 text-xs font-mono text-accent-yellow bg-accent-yellow/10 rounded-full mb-4">
                  {achievement.event}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-accent-yellow transition-colors">
                  {achievement.title}
                </h3>

                {/* Date */}
                <p className="text-sm text-accent-orange font-mono mb-4">{achievement.date}</p>

                {/* Description */}
                <p className="text-white/70 leading-relaxed">{achievement.description}</p>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${achievement.gradient} opacity-10 transform rotate-45 translate-x-16 -translate-y-16`} />
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Trophy Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <span className="text-6xl">🏆</span>
          </motion.div>
          <p className="mt-4 text-white/50 font-mono text-sm">{t.achievements.more}</p>
        </motion.div>
      </div>
    </section>
  );
}
