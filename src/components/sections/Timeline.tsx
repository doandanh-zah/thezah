"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Timeline() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { t } = useLanguage();

  const milestones = [
    {
      title: "Student",
      organization: "Da Nang University of Science and Technology (DUT)",
      role: t.timeline.items.dut.role,
      period: "Aug 2024 - Present",
      logo: null,
      logoText: "DUT",
      description: t.timeline.items.dut.description,
      side: "left",
    },
    {
      title: "Founder & President",
      organization: "DUT Superteam University Club",
      role: t.timeline.items.dsuc.role,
      period: "Mar 2025 - Present",
      logo: "/assets/dsuc.png",
      description: t.timeline.items.dsuc.description,
      side: "right",
    },
    {
      title: "Founder",
      organization: "Gimme Idea",
      role: t.timeline.items.gmi.role,
      period: "Sep 2024",
      logo: "/assets/GMI-AVT.png",
      description: t.timeline.items.gmi.description,
      side: "left",
    },
    {
      title: "Member",
      organization: "SuperteamVN",
      role: t.timeline.items.superteam.role,
      period: "Jan 2025 - Present",
      logo: "/assets/superteamvn.png",
      description: t.timeline.items.superteam.description,
      side: "right",
    },
  ];

  return (
    <section id="timeline" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-yellow/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent-yellow font-mono text-sm mb-4">{t.timeline.label}</p>
          <h2 className="section-title">{t.timeline.title}</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-yellow via-accent-orange to-accent-yellow" />

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.organization}
                initial={{ opacity: 0, x: milestone.side === "left" ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  milestone.side === "left" ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-accent-yellow rounded-full border-4 border-primary-black z-10">
                  <div className="absolute inset-0 bg-accent-yellow rounded-full animate-ping opacity-30" />
                </div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-[45%] ${
                    milestone.side === "left" ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="p-6 rounded-2xl bg-secondary-black/50 backdrop-blur-md border border-white/5 hover:border-accent-yellow/30 transition-all duration-300 group"
                  >
                    {/* Logo */}
                    <div
                      className={`flex items-center gap-4 mb-4 ${
                        milestone.side === "left" ? "md:justify-end" : "md:justify-start"
                      }`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-secondary-black border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-accent-yellow/50 transition-colors">
                        {milestone.logo ? (
                          <Image
                            src={milestone.logo}
                            alt={milestone.organization}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        ) : (
                          <span className="text-accent-yellow font-bold text-sm">
                            {milestone.logoText}
                          </span>
                        )}
                      </div>
                      <div className={milestone.side === "left" ? "md:text-right" : ""}>
                        <h3 className="font-bold text-white group-hover:text-accent-yellow transition-colors">
                          {milestone.organization}
                        </h3>
                        <p className="text-sm text-white/50">{milestone.role}</p>
                      </div>
                    </div>

                    {/* Title & Period */}
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-mono text-accent-yellow bg-accent-yellow/10 rounded-full">
                        {milestone.period}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-white/70 text-sm leading-relaxed">
                      {milestone.description}
                    </p>

                    {/* Glitch Effect on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-cyan-500/5 animate-pulse" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
