import React from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function ContactSection() {
  const { t, language } = useLanguage();

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto w-full flex flex-col items-center text-center border-x border-border/0 pb-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none z-0"></div>
        
        <div className="relative z-10 border border-border p-12 md:p-24 overflow-hidden bg-background">
          <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-display font-bold text-foreground mb-8 tracking-tighter uppercase leading-none">
            Let’s build <br />
            <span className="text-muted text-4xl md:text-6xl lg:text-[5rem]">something.</span>
          </h2>
          
          <p className="text-base md:text-lg text-muted mb-12 max-w-2xl mx-auto leading-relaxed font-sans">
            {language === 'en' 
              ? 'Open to ecosystem collaborations, student builder programs, Web3/AI workshops, product collaborations, and meaningful founder-to-founder conversations.'
              : 'Luôn sẵn sàng kết nối cho các sự kiện của hệ sinh thái, những chương trình xây dựng cộng đồng, đồng tổ chức workshop Web3/AI, bắt tay phát triển dự án, hoặc đơn thuần là một buổi gặp mặt trò chuyện thân mật với các builder / founder khác.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 font-mono text-sm uppercase tracking-widest">
            <a
              href="mailto:doanzah2710@gmail.com"
              className="w-full sm:w-auto flex items-center justify-center space-x-3 px-8 py-4 bg-foreground text-background font-bold hover:bg-muted transition-colors"
            >
              <Mail className="w-5 h-5 shrink-0" />
              <span>Email Zah</span>
            </a>
            <a
              href="https://t.me/doandanh_zah"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center space-x-3 px-8 py-4 bg-background text-foreground border border-border font-bold hover:bg-surface transition-colors"
            >
              <MessageSquare className="w-5 h-5 shrink-0" />
              <span>Telegram</span>
            </a>
            <a
              href="https://x.com/doandanh_zah"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center space-x-3 px-8 py-4 bg-background text-foreground border border-border font-bold hover:bg-surface transition-colors group"
            >
              <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
              <span>Twitter (X)</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
