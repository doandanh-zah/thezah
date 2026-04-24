import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { IntroAnimation } from './components/IntroAnimation';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CommunityBuilder } from './components/CommunityBuilder';
import { FeaturedProducts } from './components/FeaturedProducts';
import { ProofSection } from './components/ProofSection';
import { BuilderTimeline } from './components/BuilderTimeline';
import { SkillsMap } from './components/SkillsMap';
import { AboutZah } from './components/AboutZah';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Decorations } from './components/Decorations';

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <ThemeProvider defaultTheme="system">
      <LanguageProvider>
        {!introDone && <IntroAnimation onComplete={() => setIntroDone(true)} />}
        
        <div className={`w-full bg-background min-h-screen transition-opacity duration-1000 flex flex-col relative ${introDone ? 'opacity-100' : 'opacity-0 overflow-hidden h-screen'}`}>
          <Decorations />
          <Navbar />
          <main className="flex-grow flex flex-col relative z-10 w-full pb-24 space-y-12 md:space-y-24">
            <HeroSection />
            <AboutZah />
            <CommunityBuilder />
            <FeaturedProducts />
            <ProofSection />
            <BuilderTimeline />
            <SkillsMap />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
