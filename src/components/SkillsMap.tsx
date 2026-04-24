import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function SkillsMap() {
  const { t } = useLanguage();

  const skillGroups = [
    {
      title: 'Community & Ecosystem',
      skills: ['DSUC', 'Event Operations', 'Student Onboarding', 'Partnerships', 'Workshops', 'Local Builder Community']
    },
    {
      title: 'Product Thinking',
      skills: ['Idea Validation', 'MVP Design', 'Founder Storytelling', 'Hackathon Strategy', 'Product Positioning']
    },
    {
      title: 'Full-stack Web',
      skills: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Node.js', 'Express', 'Supabase', 'PostgreSQL']
    },
    {
      title: 'Web3 / Solana',
      skills: ['Solana dApps', 'Wallet Flows', 'NFT Concepts', 'Rust/Anchor (Learning)', 'Ecosystem Tooling']
    },
    {
      title: 'AI / Agents',
      skills: ['Voice-first UX', 'AI Feedback Systems', 'OpenClaw-inspired Workflows', 'Prompt & System Design']
    },
    {
      title: 'Design / UI/UX',
      skills: ['Landing Pages', 'Portfolio Design', 'Product UI', 'Community Branding', 'Motion Interfaces']
    }
  ];

  return (
    <section id="tech" className="py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="mb-16 border-b border-border pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground uppercase tracking-tight">
          Skills &<br />Capabilities
        </h2>
        <p className="text-muted font-mono uppercase tracking-widest text-sm md:text-right max-w-sm">
          {t('Grouped by capability, not just logos.', 'Phân loại theo năng lực thực tế, không chỉ là qua hình thức.')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        {skillGroups.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-background p-8 group hover:bg-surface transition-colors"
          >
            <h3 className="text-xl font-display font-bold text-foreground mb-6 uppercase tracking-wide pb-4 border-b border-border">
              {group.title}
            </h3>
            <ul className="flex flex-col gap-3 font-sans">
              {group.skills.map((skill, j) => (
                <li key={j} className="text-sm text-muted group-hover:text-foreground transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-border group-hover:bg-accent transition-colors"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
