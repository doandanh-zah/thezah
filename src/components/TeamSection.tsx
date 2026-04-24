import { motion } from 'motion/react';
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const team = [
  {
    name: "Doan Do Thanh Danh",
    nickname: "Zah",
    role: "Founder & Lead Dev",
    link: "thezah.space",
    initials: "ZD",
  },
  {
    name: "Le Thanh Danh",
    nickname: "Danny",
    role: "Co-Founder & Dev",
    link: "inugami.dev",
    initials: "LD",
  },
  {
    name: "Ngo Van Nhat Duy",
    nickname: "Thodium",
    role: "Co-Founder & Dev",
    link: "thodium.space",
    initials: "ND",
  }
];

export const TeamSection = () => {
  return (
    <section id="team" className="py-32 px-6 bg-bone overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24 flex flex-col lg:flex-row items-start lg:items-end justify-between border-b-4 border-ink pb-8"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tight uppercase text-ink leading-none">
            The people behind <br className="hidden md:block"/> the builds
          </h2>
          <span className="font-mono text-xl font-bold bg-accent text-surface px-6 py-3 mt-8 lg:mt-0 border-4 border-ink shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] tracking-wider">
            TEAM STATUS: ONLINE
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-24">
          {team.map((member, index) => (
            <motion.a
              key={index}
              href={`https://${member.link}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group block relative bg-surface border-4 border-ink shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,255,102,1)] hover:-translate-y-2 transition-all duration-300"
            >
              <div className="p-8 border-b-4 border-ink bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.05)_25%,rgba(0,0,0,0.05)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.05)_75%,rgba(0,0,0,0.05)_100%)] bg-[length:20px_20px]">
                <div className="w-24 h-24 bg-ink border-4 border-surface flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,255,102,1)] group-hover:scale-110 transition-transform duration-300">
                  <span className="font-display font-bold text-4xl text-surface tracking-tighter">{member.initials}</span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-display font-bold text-ink uppercase leading-none mb-3">
                      {member.name}
                    </h3>
                    <span className="text-ink-light font-mono font-bold text-sm bg-bone px-3 py-1.5 border-2 border-ink">
                      AKA: {member.nickname}
                    </span>
                  </div>
                  <div className="w-12 h-12 shrink-0 border-4 border-ink flex items-center justify-center text-ink group-hover:bg-accent group-hover:text-surface transition-colors">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <span className="text-surface bg-ink text-sm font-bold uppercase tracking-wider px-4 py-2 w-max border-2 border-ink">
                    {member.role}
                  </span>
                  <span className="text-ink font-mono font-bold hover:text-accent transition-colors underline underline-offset-4 decoration-2">
                    {member.link}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl text-ink font-bold font-mono uppercase tracking-widest flex flex-col md:flex-row items-center justify-center gap-6">
            <span className="hidden md:block w-32 h-[4px] bg-ink border-y border-transparent"></span>
            Ready to ship.
            <span className="hidden md:block w-32 h-[4px] bg-ink border-y border-transparent"></span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
