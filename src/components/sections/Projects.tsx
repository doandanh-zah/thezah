"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const projects = [
  {
    title: "DUT Superteam Portal",
    descriptionKey: "dsuc",
    image: "/assets/dsuc.png",
    tags: ["Next.js", "Solana", "TypeScript", "TailwindCSS"],
    github: "https://github.com/lilzahs",
    live: "#",
    featured: true,
  },
  {
    title: "Gimme Idea",
    descriptionKey: "gmi",
    image: "/assets/GMI-AVT.png",
    tags: ["React", "Node.js", "OpenAI", "PostgreSQL"],
    github: "https://github.com/lilzahs",
    live: "#",
    featured: true,
  },
  {
    title: "Solana NFT Marketplace",
    descriptionKey: "nft",
    image: "/assets/zahnft.png",
    tags: ["Solana", "Anchor", "Rust", "Metaplex"],
    github: "https://github.com/lilzahs",
    live: "#",
    featured: false,
  },
  {
    title: "Web3 Wallet Tracker",
    descriptionKey: "wallet",
    image: "/assets/superteamvn.png",
    tags: ["Next.js", "Solana", "Web3.js", "Chart.js"],
    github: "https://github.com/lilzahs",
    live: "#",
    featured: false,
  },
];

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { t } = useLanguage();

  const getProjectDescription = (key: string) => {
    const descriptions: Record<string, string> = {
      dsuc: t.projects.items.dsuc,
      gmi: t.projects.items.gmi,
      nft: t.projects.items.nft,
      wallet: t.projects.items.wallet,
    };
    return descriptions[key] || "";
  };

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

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="project-card h-full group"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-black to-transparent" />
                    
                    {/* Glitch Overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 bg-red-500/10 animate-pulse" style={{ clipPath: 'inset(0 0 70% 0)' }} />
                      <div className="absolute inset-0 bg-cyan-500/10 animate-pulse" style={{ clipPath: 'inset(30% 0 30% 0)', animationDelay: '0.1s' }} />
                      <div className="absolute inset-0 bg-yellow-500/10 animate-pulse" style={{ clipPath: 'inset(70% 0 0 0)', animationDelay: '0.2s' }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-accent-yellow transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/70 text-sm mb-4 line-clamp-3">
                      {getProjectDescription(project.descriptionKey)}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-mono text-accent-yellow/80 bg-accent-yellow/10 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-white/60 hover:text-accent-yellow transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        {t.projects.code}
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-white/60 hover:text-accent-yellow transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        {t.projects.live}
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-6 rounded-xl bg-secondary-black/30 backdrop-blur-md border border-white/5 hover:border-accent-yellow/30 transition-all duration-300 group h-full"
                >
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-yellow transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4 line-clamp-2">
                    {getProjectDescription(project.descriptionKey)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-mono text-white/50 bg-white/5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
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
