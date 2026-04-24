import React from 'react';
import { motion } from 'motion/react';
import { Users, Calendar, MapPin, Zap, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function CommunityBuilder() {
  const { t, language } = useLanguage();

  const cards = [
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Founder & President',
      desc: 'DUT Superteam University Club'
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: '40+ Events',
      desc: 'Community events hosted & supported'
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: '800+ Attendees',
      desc: 'Students, builders, and community members reached'
    },
    {
      icon: <MapPin className="w-5 h-5 text-accent" />,
      title: 'Solana in Da Nang',
      desc: 'Helping grow local Web3 builder culture'
    },
    {
      icon: <Zap className="w-5 h-5 text-accent" />,
      title: 'Agora Ambassador / Evangelist',
      desc: 'Bringing real-time engagement and AI/voice technology to students'
    }
  ];

  return (
    <section id="community" className="py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="border border-border p-8 md:p-16 relative overflow-hidden bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="uppercase tracking-widest text-xs font-mono text-muted mb-8 border-b border-border pb-4 inline-block">
              Community & Ecosystem
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-bold text-foreground mb-8 leading-[1.1] uppercase">
              {t('Building the ecosystem,', 'Góp phần xây dựng hệ sinh thái,')}<br />
              <span className="text-muted">{t('one student at a time.', 'từ những sinh viên nhỏ nhất.')}</span>
            </h2>
            
            <div className="prose prose-invert prose-lg text-muted max-w-none font-sans">
              {language === 'en' ? (
                <>
                  <p className="mb-6 leading-relaxed">
                    I’ve spent the last year helping grow a student builder movement in Da Nang — connecting university students with Web3, AI, Solana, and real product-building opportunities.
                  </p>
                  <p className="leading-relaxed">
                    Through DSUC and ecosystem collaborations, I’ve hosted and supported 40+ community events, reached 800+ attendees, and helped bring Solana and Agora closer to local students and builders.
                  </p>
                </>
              ) : (
                <>
                  <p className="mb-6 leading-relaxed">
                    Trong hơn một năm qua, mình tập trung xây dựng một cộng đồng builder sinh viên tại Đà Nẵng — kết nối sinh viên với Web3, AI, Solana và các cơ hội build sản phẩm thật.
                  </p>
                  <p className="leading-relaxed">
                    Thông qua DSUC và các hoạt động ecosystem, mình đã tổ chức và hỗ trợ hơn 40 hoạt động cộng đồng, tiếp cận hơn 800 lượt tham gia, đồng thời góp phần đưa Solana và Agora đến gần hơn với sinh viên và builder địa phương.
                  </p>
                </>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col border border-border"
          >
            {cards.map((card, i) => (
              <div key={i} className={`p-6 bg-surface hover:bg-white/5 transition-colors flex items-start gap-4 ${i !== cards.length - 1 ? 'border-b border-border' : ''}`}>
                <div className="w-10 h-10 mt-1 bg-background border border-border flex items-center justify-center shrink-0">
                  {card.icon}
                </div>
                <div>
                  <h4 className="text-lg font-display font-bold text-foreground uppercase tracking-wide mb-1">{card.title}</h4>
                  <p className="text-sm text-muted font-sans font-medium">{card.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
