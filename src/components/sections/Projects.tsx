"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/context/LanguageContext";

type ProjectStatus = "live" | "pause" | "processing";

interface Project {
  title: string;
  status: ProjectStatus;
  description: string;
  descriptionVi: string;
  link?: string;
  tags: string[];
  gradient: string;
}

const projects: Project[] = [
  {
    title: "Gimme Idea",
    status: "live",
    description: "Platform for sharing ideas and receiving feedback from community and AI",
    descriptionVi: "Nền tảng chia sẻ ý tưởng nhận feedback từ cộng đồng và AI",
    link: "https://gimmeidea.com",
    tags: ["Next.js", "AI", "Community"],
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    title: "Atrax World",
    status: "pause",
    description: "Game with live donation mechanism to drop items in real-time",
    descriptionVi: "Game có cơ chế live và donate realtime để drop items",
    tags: ["Game", "Realtime", "Web3"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "DSUC Labs",
    status: "live",
    description: "Online workspace for DUT Superteam University Club",
    descriptionVi: "Nơi làm việc online của CLB DUT Superteam University Club",
    link: "https://dsuc.fun",
    tags: ["Workspace", "Community", "Solana"],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "RTS Game",
    status: "processing",
    description: "Online ninja RPG game with real-time mechanism based on real-world map like Pokemon Go",
    descriptionVi: "Game online nhập vai ninja bảo vệ mật thư có cơ chế realtime theo map thực tế tương tự Pokemon Go",
    tags: ["Game", "Realtime", "GPS"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Remit Bridge",
    status: "processing",
    description: "Crypto to cash transaction software supporting foreign workers with remittances",
    descriptionVi: "Phần mềm giao dịch crypto thành tiền mặt lưu thông hỗ trợ cho lao động nước ngoài gửi kiều hối",
    tags: ["Fintech", "Crypto", "Remittance"],
    gradient: "from-red-500 to-rose-500",
  },
];

const statusConfig: Record<ProjectStatus, { label: string; labelVi: string; color: string; icon: JSX.Element }> = {
  live: {
    label: "LIVE",
    labelVi: "LIVE",
    color: "bg-green-500",
    icon: (
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  pause: {
    label: "PAUSED",
    labelVi: "TẠM DỪNG",
    color: "bg-yellow-500",
    icon: (
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
        <rect x="6" y="4" width="4" height="16" rx="1" />
        <rect x="14" y="4" width="4" height="16" rx="1" />
      </svg>
    ),
  },
  processing: {
    label: "IN PROGRESS",
    labelVi: "ĐANG PHÁT TRIỂN",
    color: "bg-blue-500",
    icon: (
      <svg className="w-3 h-3 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
};

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { t, language } = useLanguage();

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-yellow/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-orange/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent-yellow font-mono text-sm mb-4">{t.projects.label}</p>
          <h2 className="section-title">{t.projects.title}</h2>
        </motion.div>

        {/* Card Deck Layout */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {projects.map((project, index) => {
            const status = statusConfig[project.status];
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                animate={inView ? { 
                  opacity: 1, 
                  y: 0, 
                  rotateY: 0,
                  scale: isHovered ? 1.08 : 1,
                  zIndex: isHovered ? 50 : 10 - index,
                } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  scale: { duration: 0.3 },
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative w-full sm:w-[280px] md:w-[300px]"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Card */}
                <div
                  className={`
                    relative h-[380px] rounded-2xl overflow-hidden
                    bg-gradient-to-br from-secondary-black/80 to-secondary-black/40
                    backdrop-blur-md border-2 transition-all duration-300
                    ${isHovered 
                      ? "border-accent-yellow shadow-[0_0_40px_rgba(255,215,0,0.4)]" 
                      : "border-white/10 hover:border-white/20"
                    }
                  `}
                >
                  {/* Glow Effect on Hover */}
                  <div 
                    className={`
                      absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-300
                      ${isHovered ? "opacity-10" : ""}
                    `}
                  />

                  {/* Card Top Decoration */}
                  <div className={`h-2 w-full bg-gradient-to-r ${project.gradient}`} />

                  {/* Card Content */}
                  <div className="p-6 flex flex-col h-full">
                    {/* Status Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-white ${status.color}`}>
                        {status.icon}
                        <span>{language === "vi" ? status.labelVi : status.label}</span>
                      </div>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/5 hover:bg-accent-yellow/20 text-white/60 hover:text-accent-yellow transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>

                    {/* Project Title */}
                    <h3 className={`text-xl font-bold font-display mb-3 transition-colors duration-300 ${isHovered ? "text-accent-yellow" : "text-white"}`}>
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/70 text-sm leading-relaxed flex-grow">
                      {language === "vi" ? project.descriptionVi : project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`
                            px-3 py-1 text-xs font-mono rounded-full transition-colors duration-300
                            ${isHovered 
                              ? "bg-accent-yellow/20 text-accent-yellow" 
                              : "bg-white/5 text-white/50"
                            }
                          `}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Card Number */}
                    <div className={`
                      absolute bottom-4 right-4 text-6xl font-bold font-display opacity-5
                      transition-opacity duration-300 ${isHovered ? "opacity-10" : ""}
                    `}>
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/lilzahs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-accent-yellow border border-accent-yellow/50 rounded-full hover:bg-accent-yellow/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.3)]"
          >
            {t.projects.viewAll}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
