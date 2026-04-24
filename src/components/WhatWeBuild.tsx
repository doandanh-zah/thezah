import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react';
import { MonitorPlay, Smartphone, Blocks, Database, LayoutTemplate, Network } from 'lucide-react';

const capabilities = [
  {
    title: "Websites & LPs",
    description: "High-converting, visually stunning pages optimized for performance and SEO.",
    icon: LayoutTemplate,
  },
  {
    title: "Web Applications",
    description: "Complex, scalable dashboards, SaaS products, and internal enterprise tools.",
    icon: MonitorPlay,
  },
  {
    title: "Mobile Apps",
    description: "Cross-platform mobile apps that feel absolutely native and perform flawlessly.",
    icon: Smartphone,
  },
  {
    title: "Web3 Solutions",
    description: "Smart contracts, decentralized apps, Solana integration, and wallet connectivity.",
    icon: Blocks,
  },
  {
    title: "Backend & APIs",
    description: "Robust database architectures, microservices, and high-throughput data pipelines.",
    icon: Database,
  },
  {
    title: "Community Platforms",
    description: "Custom social networks, sophisticated membership sites, and organization hubs.",
    icon: Network,
  }
];

export const WhatWeBuild = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <section ref={targetRef} id="services" className="relative h-[300vh] bg-surface border-b-4 border-ink">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        {/* Background graphic */}
        <div className="absolute top-0 right-0 w-[40vw] h-[100vh] border-l-4 border-ink/5 pointer-events-none" />

        <div className="max-w-7xl px-6 w-full mx-auto mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
          >
            <div>
              <h2 className="text-5xl md:text-8xl font-display font-bold text-ink tracking-tighter uppercase mb-4">
                We build <br/><span className="text-accent underline decoration-8 underline-offset-8 mt-2 inline-block">anything.</span>
              </h2>
            </div>
            <p className="text-lg md:text-2xl text-ink-light font-medium max-w-xl font-mono border-l-8 border-ink pl-6 py-2">
              From responsive sites to blockchain apps. If it runs on the internet, we've probably built it.
            </p>
          </motion.div>
        </div>

        <motion.div 
          style={{ x }} 
          className="flex gap-8 px-6 md:pl-[calc((100vw-80rem)/2+1.5rem)] pb-12 w-max relative z-10 pt-4"
        >
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="w-[320px] md:w-[450px] h-[400px] shrink-0 bg-bone border-4 border-ink p-8 md:p-10 flex flex-col justify-between group hover:-translate-y-4 transition-transform duration-300 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,255,102,1)] relative"
              >
                <div className="relative z-10 w-20 h-20 bg-surface border-4 border-ink flex items-center justify-center mb-8 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] group-hover:bg-accent transition-colors duration-300">
                  <Icon className="w-10 h-10 text-ink group-hover:text-surface transition-colors" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-accent font-display font-bold text-2xl">0{index + 1}</span>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-ink uppercase leading-none mt-1">{item.title}</h3>
                  </div>
                  <p className="text-ink-light text-lg font-medium pt-6 border-t-4 border-ink/20 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
        
        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-3 bg-bone border-t-4 border-ink">
          <motion.div 
            className="h-full bg-accent origin-left"
            style={{ scaleX: scrollYProgress }}
          />
        </div>

      </div>
    </section>
  );
};
