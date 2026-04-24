import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Mail, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function HeroSection() {
  const { t, language } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-24 px-6 max-w-7xl mx-auto w-full min-h-[90vh] flex flex-col justify-center border-x border-border/0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none -z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-background border border-border mb-8 text-xs font-mono uppercase tracking-widest text-muted">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span>Danang, VN</span>
            <span className="text-border mx-2">|</span>
            <span>Founder & Builder</span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-[5.5rem] font-name font-bold text-foreground leading-[1] mb-6 tracking-tight">
            {language === 'en' ? (
              <>Doan Do<br />Thanh Danh</>
            ) : (
              <>Đoàn Đỗ<br />Thành Danh</>
            )}
            <span className="block text-accent text-3xl sm:text-4xl md:text-5xl mt-3 font-vintage italic font-normal tracking-normal">aka Zah.</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-foreground font-medium mb-6 leading-relaxed max-w-2xl font-sans">
            {t(
              'Young founder building at the intersection of Web3, AI, and education.',
              'Mình là một builder trẻ đang tập trung phát triển các sản phẩm kết nối Web3, AI và giáo dục.'
            )}
          </h2>
          
          <p className="text-base md:text-lg text-muted mb-10 max-w-xl leading-relaxed font-sans">
            {t(
              'I connect students, builders, and ecosystems through products, communities, and events.',
              'Mục tiêu của mình là kết nối các bạn sinh viên, developer và hệ sinh thái lại gần nhau hơn thông qua những sản phẩm thực tế, cộng đồng và các sự kiện ý nghĩa.'
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto font-mono text-sm uppercase tracking-wider">
            <a href="#contact" className="px-8 py-4 bg-foreground text-background font-bold text-center hover:bg-muted transition-colors flex items-center justify-center gap-2">
              {t('Let’s build', 'Cùng build nhé!')}
            </a>
            <a href="#proof" className="px-8 py-4 bg-transparent text-foreground font-bold text-center border border-border hover:bg-surface transition-colors flex items-center justify-center gap-2">
              {t('View Proof', 'Xem dự án của mình')} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 w-full"
        >
          <div className="border border-border p-8 grid grid-cols-2 gap-px bg-border shadow-xl">
            <div className="bg-background p-6">
              <p className="text-4xl font-display font-bold text-foreground mb-2">3+</p>
              <p className="text-xs text-muted font-mono uppercase tracking-wide">{t('Years Exp.', 'Năm kinh nghiệm')}</p>
            </div>
            
            <div className="bg-background p-6">
              <p className="text-4xl font-display font-bold text-foreground mb-2">1+</p>
              <p className="text-xs text-muted font-mono uppercase tracking-wide">{t('Years founding', 'Năm làm founder')}</p>
            </div>
            
            <div className="bg-background p-6">
              <p className="text-4xl font-display font-bold text-accent mb-2">$7.1K</p>
              <p className="text-xs text-muted font-mono uppercase tracking-wide">{t('Earned', 'Giải thưởng & Grant')}</p>
            </div>

            <div className="bg-background p-6">
              <p className="text-4xl font-display font-bold text-accent mb-2">40+</p>
              <p className="text-xs text-muted font-mono uppercase tracking-wide">{t('Events hosted', 'Sự kiện tổ chức')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
