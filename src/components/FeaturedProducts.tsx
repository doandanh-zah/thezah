import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function FeaturedProducts() {
  const { t, language } = useLanguage();

  const products = [
    {
      name: 'Gimme Idea',
      status: 'Live public',
      type: 'Hackathon / ecosystem project',
      link: 'https://gimmeidea.com',
      image: '/gimmeidea.png',
      desc: language === 'en' 
        ? 'A hackathon and ecosystem idea platform where builders can share startup ideas, receive AI-powered feedback, and discover better directions to build.'
        : 'Một nền tảng chia sẻ ý tưởng hackathon và ecosystem, nơi builder có thể chia sẻ ý tưởng startup, nhận feedback từ AI và tìm ra hướng đi tốt hơn để build.',
      focus: ['AI feedback', 'Web3 innovation', 'Startup validation']
    },
    {
      name: 'VORA',
      status: 'Demo live',
      type: 'AI agent product',
      link: 'https://heyvora.fun',
      image: '/vora.png',
      desc: language === 'en'
        ? 'A voice-first AI agent interface for non-technical users — designed to make powerful computer automation feel simple, natural, and accessible.'
        : 'Giao diện AI agent bằng giọng nói cho người dùng không quá rành kỹ thuật — được thiết kế để tự động hoá máy tính một cách đơn giản và tự nhiên.',
      focus: ['Voice AI', 'Agents', 'Workflows']
    },
    {
      name: 'SolREM',
      status: 'Building',
      type: 'Solana consumer dApp',
      link: '#',
      image: '/solrem.png',
      desc: language === 'en'
        ? 'A gamified sleep habit tracker with Solana incentives — exploring how consumer crypto can reward healthier daily routines.'
        : 'Ứng dụng theo dõi thói quen ngủ kết hợp gamification và phần thưởng Solana.',
      focus: ['Sleep-to-earn', 'Consumer crypto']
    },
    {
      name: 'Atrax World',
      status: 'In Development',
      type: 'GameFi Pixel Art / Livestream Drop',
      link: '#',
      image: '/atraxworld.png',
      desc: language === 'en'
        ? 'A gamified pixel art world with real-time item drops powered by on-chain Solana donations during livestreams.'
        : 'Thế giới GameFi pixel art tích hợp tính năng drop vật phẩm theo thời gian thực qua donate on-chain Solana trên livestream.',
      focus: ['GameFi', 'Solana', 'Streaming']
    },
    {
      name: 'DSUC Labs',
      status: 'Live',
      type: 'Web3 education hub',
      link: 'https://dsuc.fun',
      image: '/dsuclabs.png',
      desc: language === 'en'
        ? 'A community management and Web3 learning hub for DSUC — built to support events, members, learning paths, and student builder activities.'
        : 'Nền tảng quản lý cộng đồng và học tập Web3 cho DSUC — tối ưu cho quản lý sự kiện, lộ trình học và hoạt động builder.',
      focus: ['Community platform', 'Web3 education']
    },
    {
      name: 'The Builzer',
      status: 'Service concept',
      type: 'Productized service',
      link: 'https://builzer.org',
      image: '/thebuilzer.png',
      desc: language === 'en'
        ? 'A productized service concept for deploying custom community management platforms for tech communities, student clubs, and nonprofits.'
        : 'Mô hình productized service chuyên triển khai các nền tảng quản lý cộng đồng tuỳ chỉnh cho tech communities, CLB sinh viên.',
      focus: ['Community websites', 'SaaS']
    }
  ];

  return (
    <section id="products" className="py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="mb-16 border-b border-border pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground uppercase tracking-tight">
          Featured<br />Products
        </h2>
        <p className="text-muted font-mono uppercase tracking-widest text-sm md:text-right max-w-xs">
          {t('Products as proof of work', 'Sản phẩm là minh chứng năng lực rõ nhất')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="border border-border bg-background flex flex-col group h-full"
          >
            <div className="w-full border-b border-border overflow-hidden relative bg-surface aspect-square">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-transform duration-700 ease-in-out group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop`;
                }}
              />
            </div>

            <div className="flex flex-col p-6 flex-grow relative">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-display font-bold text-foreground uppercase tracking-wide group-hover:text-accent transition-colors">{product.name}</h3>
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    <span className="px-1.5 py-0.5 text-[9px] font-mono border border-border bg-surface text-muted uppercase tracking-wider">
                      {product.status}
                    </span>
                    <span className="text-[11px] font-mono text-accent uppercase tracking-wider">{product.type}</span>
                  </div>
                </div>
                
                {product.link !== '#' && (
                  <a 
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-surface border border-border flex items-center justify-center shrink-0 hover:bg-foreground hover:text-background transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>

              <p className="text-sm text-muted leading-relaxed font-sans mt-2 mb-6 flex-grow">
                {product.desc}
              </p>

              <div className="pt-4 border-t border-border mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {product.focus.map((focus, j) => (
                    <span key={j} className="px-2 py-0.5 text-[10px] font-mono bg-surface border border-border text-muted uppercase tracking-wider">
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
