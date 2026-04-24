import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function BuilderTimeline() {
  const { t } = useLanguage();

  const milestones = [
    {
      year: '2022',
      title: t('The Beginning', 'Bắt đầu từ con số 0'),
      desc: t('Exploring tech, learning to code, and building foundational projects.', 'Bắt đầu mày mò công nghệ, học code và xây dựng những project nền tảng đầu tiên.')
    },
    {
      year: '2023',
      title: t('Building the Foundation', 'Xây dựng nền móng'),
      desc: t('Fell in love with Web3. Deep dived into frontend, joined hackathons, and started connecting with local builders.', 'Vén màn thế giới Web3. Chìm đắm vào frontend, cày cuốc học hỏi qua các mùa hackathon và bắt đầu kết nối với anh em builder trong khu vực.')
    },
    {
      year: '8/2024',
      title: t('DUT Journey Begins', 'Hành trình sinh viên Bách Khoa'),
      desc: t('Started studying at Danang University of Science and Technology (DUT).', 'Trở thành tân sinh viên tại Đại học Bách khoa Đà Nẵng (DUT).')
    },
    {
      year: '3/2025',
      title: t('Community Leadership', 'Bén duyên với cộng đồng'),
      desc: t('Founded DSUC (DUT Superteam University Club). Hosted events, attracted students to Solana.', 'Thành lập câu lạc bộ DSUC cho sinh viên Bách khoa. Thường xuyên tổ chức các sự kiện và lan toả tinh thần builder & Solana đến các giảng đường.')
    },
    {
      year: '4/2025',
      title: t('Colosseum Breakout & Summer Camp', 'Colosseum Breakout & Summer Camp'),
      desc: t('Participated in Hackathon Colosseum Breakout & Solana Summer Camp by SuperteamVN.', 'Thử thách lớn đầu tiên: tham gia Hackathon toàn cầu Colosseum Breakout và được chọn là một hạt giống với Solana Summer Camp của SuperteamVN.')
    },
    {
      year: '6/2025',
      title: t('Solana Summit APAC 2025', 'Solana Summit APAC 2025'),
      desc: t('Received student sponsor to attend Solana Summit APAC 2025.', 'Trải nghiệm đáng giá khi được nhận tài trợ vé sinh viên tham dự siêu sự kiện Solana Summit APAC 2025.')
    },
    {
      year: '9/2025',
      title: t('Community Builder Grant', 'Giành suất Community Builder Grant'),
      desc: t('Won Solana Community Builder grant ($2000) in Da Nang.', 'Xuất sắc nhận được grant trị giá 2000$ từ Solana Community Builder dành riêng cho các cống hiến ở khu vực Đà Nẵng.')
    },
    {
      year: '10/2025',
      title: t('Cypherpunk & Startup Village', 'Hà Nội vẫy gọi'),
      desc: t('Participated in Hackathon Colosseum Cypherpunk and Solana Startup Village Hanoi (Sponsored).', 'Mang dự án chu du tận Hà Nội tranh tài tại Hackathon Colosseum Cypherpunk và Solana Startup Village với tư cách là ứng viên được tài trợ trọn gói.')
    },
    {
      year: '11/2025',
      title: t('SuperteamVN Demo Day', 'SuperteamVN Demo Day'),
      desc: t('Showcased projects at the Solana SuperteamVN Demo Day in HCMC (Sponsored).', 'Tiếp tục Nam tiến vác dự án đi thuyết trình gọi vốn tại Solana SuperteamVN Demo Day ở TP Hồ Chí Minh và lọt vào mắt xanh của các nhà tài trợ.')
    },
    {
      year: '12/2025',
      title: t('Second Prize: Build on APEC', 'Á quân APEC Education Ecosystem'),
      desc: t('Won second prize ($1500) in "Build on APEC Education Ecosystem using Solana" with project GIMME IDEA.', 'Đem dự án tâm huyết GIMME IDEA chinh chiến tại giải đấu "Build on APEC Education Ecosystem using Solana" và giành chức Á quân cùng với tiền thưởng 1500$.')
    },
    {
      year: '3/2026',
      title: t('Agora Ambassador', 'Trở thành Cầu Nối cho Agora'),
      desc: t('Became Ambassador & Evangelist for Agora.', 'Thêm một cột mốc lớn trong sự nghiệp với tư cách là một Đại sứ & Evangelist chính thức của Agora.')
    },
    {
      year: '5/2026',
      title: t('CEO The Builzer Org', 'CEO của The Builzer Org'),
      desc: t('Stepped up as CEO of The Builzer Org to deploy community platforms.', 'Mạnh dạn đảm nhận vị trí CEO của The Builzer Org, hướng tới mục tiêu triển khai các nền tảng hữu ích cho cộng đồng.')
    }
  ];

  return (
    <section id="timeline" className="py-24 px-6 max-w-7xl mx-auto w-full overflow-hidden">
      <div className="mb-16 border-b border-border pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground uppercase tracking-tight">
          Builder<br />Timeline
        </h2>
        <p className="text-muted font-mono uppercase tracking-widest text-sm md:text-right max-w-sm">
          {t('The Journey So Far', 'Hành Trình Đã Đi Qua')}
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto pl-8 md:pl-0">
        {/* Center Line for Desktop, Left Line for Mobile */}
        <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2"></div>
        
        <div className="space-y-12">
          {milestones.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={i} className={`relative flex flex-col md:flex-row w-full ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                
                {/* Dot */}
                <div className="absolute left-[-21px] md:left-1/2 top-6 w-3 h-3 rounded-full bg-accent md:-translate-x-1/2 shadow-[0_0_10px_var(--color-accent)] z-10"></div>
                
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`w-full md:w-[45%] bg-background border border-border p-6 group hover:border-accent transition-colors ${isEven ? 'md:pr-12' : 'md:pl-12'}`}
                >
                  <span className="inline-block px-3 py-1 mb-4 border border-border bg-surface text-xs font-mono text-muted uppercase group-hover:text-accent transition-colors">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3 uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed font-sans mt-auto">
                    {item.desc}
                  </p>
                </motion.div>
              </div>
            );
          })}
          
          <div className="relative flex flex-col md:flex-row w-full justify-center mt-10">
            <div className="absolute left-[15px] md:left-1/2 top-10 w-5 h-5 rounded-full border-2 border-accent border-r-transparent bg-background md:-translate-x-1/2 -translate-y-1/2 z-10 animate-spin"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-14 md:mt-14 ml-12 md:ml-0 bg-background border border-border p-5 group hover:border-accent transition-colors w-full md:w-[35%] max-w-sm text-left md:text-center"
            >
              <span className="inline-block px-2 py-1 mb-3 border border-border bg-surface text-[10px] font-mono text-muted uppercase group-hover:text-accent transition-colors">
                Upcoming
              </span>
              <h3 className="text-lg font-display font-bold text-foreground uppercase tracking-wide">
                {t('More to come...', 'Cùng đón chờ nhé...')}
              </h3>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
