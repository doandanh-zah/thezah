import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function ProofSection() {
  const { t } = useLanguage();

  const proofs = [
    {
      title: '15+ Projects Built',
      desc: t('Built and shipped multiple products, experiments, and hackathon projects.', 'Nghiên cứu, thực hiện và cho ra mắt nhiều sản phẩm, dự án thử nghiệm cũng như các ý tưởng hackathon táo bạo.')
    },
    {
      title: '20+ Projects Mentored',
      desc: t('Supported and advised student teams and builders within the local community.', 'Trực tiếp hỗ trợ và tư vấn định hướng cho nhiều nhóm sinh viên và team builder tại Đà Nẵng.')
    },
    {
      title: '40+ Comm. Events',
      desc: t('Hosted and supported activities across Web3, AI, education, and student communities.', 'Tham gia với vai trò tổ chức, điều phối các sự kiện kết nối về Web3, AI, giáo dục và cộng đồng sinh viên.')
    },
    {
      title: '800+ Attendees reached',
      desc: t('Connected students and builders through workshops, meetups, and ecosystem programs.', 'Kết nối sinh viên với các anh chị builder thông qua những workshop, meetup và những chương trình lớn của hệ sinh thái.')
    },
    {
      title: 'President of DSUC',
      desc: t('Founded and led DUT Superteam University Club as a dynamic student Web3 builder community.', 'Sáng lập và điều hành DUT Superteam University Club, với mong muốn tạo ra một cộng đồng sinh viên đam mê xây dựng Web3 năng động và chất lượng.')
    },
    {
      title: 'Agora Ambassador',
      desc: t('Bringing Agora technology closer to students, builders, and local innovation communities.', 'Nỗ lực mang những công nghệ của Agora đến gần hơn với các bạn sinh viên, developer và những cộng đồng công nghệ tại địa phương.')
    }
  ];

  return (
    <section id="proof" className="py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-border pb-8">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground uppercase tracking-tight">
          Proof &<br />Recognition
        </h2>
        <p className="text-muted font-mono uppercase tracking-widest text-sm md:text-right max-w-sm">
          {t('Real products. Real communities.', 'Sản phẩm thật. Cộng đồng thật.')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        {proofs.map((proof, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="bg-background p-8 group hover:bg-surface transition-colors flex flex-col justify-between min-h-[240px]"
          >
            <div>
              <span className="text-xs font-mono text-muted mb-4 block">{(i + 1).toString().padStart(2, '0')}</span>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4 uppercase tracking-wide">
                {proof.title}
              </h3>
            </div>
            <p className="text-muted text-sm leading-relaxed font-sans mt-auto">
              {proof.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
