import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function AboutZah() {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="border border-border p-8 md:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 lg:gap-20 bg-background">
        
        {/* Real photo placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-5/12 aspect-[4/5] border border-border overflow-hidden bg-surface relative group shrink-0"
        >
          <img 
            src="/zah.jpg" 
            alt="Zah" 
            className="w-full h-full object-cover filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          />
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-20">
            <div className="bg-background border border-border px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-foreground">
              Da Nang, Vietnam
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 z-20">
            <h3 className="font-display text-4xl font-bold text-foreground bg-background border border-border inline-block px-4 py-2 uppercase tracking-wide">Zah.</h3>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-7/12"
        >
          <div className="mb-8 border-b border-border pb-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground uppercase tracking-tight">
              About Zah
            </h2>
          </div>
          
          <div className="prose prose-invert prose-lg text-muted max-w-none space-y-6 font-sans">
            {language === 'en' ? (
              <>
                <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed font-display">
                  I connect students, builders, and ecosystems through products and events.
                </p>
                <p>
                  I’m a student founder from Da Nang, Vietnam, currently studying at DUT while building across Web3, AI, and education. My work combines community building, product thinking, full-stack development, and design — with a focus on helping more young builders turn ideas into real products.
                </p>
                <p>
                  From founding DSUC and growing local Solana activities in Da Nang to building Gimme Idea, VORA, SolREM, and DSUC Labs, my goal is simple: build useful products, create real opportunities, and bring more students into the builder economy.
                </p>
              </>
            ) : (
              <>
                <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed font-display">
                  Mục tiêu của mình là kết nối các bạn sinh viên, developer và hệ sinh thái lại gần nhau hơn thông qua những sản phẩm thực tế và sự kiện ý nghĩa.
                </p>
                <p>
                  Mình là một builder trẻ đến từ Đà Nẵng, hiện đang theo học tại Đại học Bách khoa Đà Nẵng (DUT). Đam mê của mình là mày mò và xây dựng các sản phẩm liên quan đến Web3, AI và giáo dục. Mình thường kết hợp giữa việc xây dựng cộng đồng, tư duy sản phẩm, full-stack development và cả thiết kế — tất cả đều hướng tới mục tiêu: giúp thật nhiều bạn trẻ biến những ý tưởng hay ho thành sản phẩm thật.
                </p>
                <p>
                  Từ việc gắn kết cộng đồng DSUC, phát triển các hoạt động Solana tại Đà Nẵng, cho đến hành trình xây dựng Gimme Idea, VORA, SolREM và DSUC Labs, mình luôn tâm niệm: hãy tạo ra những sản phẩm thực sự hữu ích, mang lại cơ hội thiết thực và truyền năng lượng để nhiều anh em sinh viên mạnh dạn dấn thân vào con đường builder.
                </p>
              </>
            )}
            
            <div className="mt-8 flex items-center gap-4 p-4 border border-border bg-surface w-fit">
              <div className="w-16 h-16 shrink-0 border border-border overflow-hidden">
                <img src="/zahnft.png" alt="Zah's NFT" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-muted mb-1">On-chain Identity</p>
                <p className="text-sm font-medium text-foreground">lilzah.sol</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
