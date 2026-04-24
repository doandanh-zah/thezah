import { motion } from 'motion/react';
import React from 'react';

const steps = [
  {
    num: "01",
    title: "Tell us what you need",
    desc: "Share your vision, your requirements, and your constraints. No lengthy RFPs required — just a direct conversation about your goals."
  },
  {
    num: "02",
    title: "Scope & Align",
    desc: "We break down the feature set, establish concrete milestones, and give you a transparent timeline and budget estimate."
  },
  {
    num: "03",
    title: "Build & Review",
    desc: "Continuous delivery. We share progress asynchronously and iterate quickly based on your direct, unfiltered feedback."
  },
  {
    num: "04",
    title: "Ship & Support",
    desc: "Your product goes live. We stick around for technical handoff, documentation, and ongoing maintenance if you require."
  }
];

export const HowWeWork = () => {
  return (
    <section className="py-32 px-6 bg-accent relative overflow-hidden text-surface border-b-4 border-ink">
      {/* Heavy typographic background */}
      <h2 className="absolute top-0 right-0 text-[15rem] leading-[0.8] font-display font-bold opacity-[0.15] text-ink pointer-events-none overflow-hidden h-full rotate-90 origin-top-right transform translate-x-[20%] translate-y-[20%] text-nowrap mix-blend-overlay">
        PROCESS
      </h2>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24 bg-surface p-8 md:p-16 border-4 border-ink shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] inline-block text-ink"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tight uppercase leading-[1.1]">
            Simple Process.<br />
            <span className="text-accent underline decoration-8 underline-offset-[12px] pb-2 inline-block">Serious Results.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-bone text-ink p-8 md:p-12 border-4 border-ink shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] relative group hover:-translate-y-2 transition-transform"
            >
              <div className="absolute top-0 right-0 bg-ink text-surface font-mono font-bold text-4xl p-4 border-b-4 border-l-4 border-ink group-hover:bg-surface group-hover:text-ink transition-colors">
                {step.num}
              </div>
              <div className="pt-8 md:pt-12">
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 uppercase leading-tight pr-16 text-ink">
                  {step.title}
                </h3>
                <p className="text-lg text-ink-light font-medium bg-surface p-6 border-4 border-ink relative">
                  {/* Decorative dot */}
                  <span className="absolute -left-2 -top-2 w-4 h-4 bg-accent border-2 border-ink"></span>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
