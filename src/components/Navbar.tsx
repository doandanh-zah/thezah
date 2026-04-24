import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Menu, X, Moon, Sun, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

export function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') setTheme('light');
    else if (theme === 'light') setTheme('dark');
    else {
      // If system, toggle to the opposite of current system preference
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(isDark ? 'light' : 'dark');
    }
  };

  // Determine current active theme for icon display
  const isDarkTheme = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  const navLinks = [
    { href: '#community', label: t('Community', 'Cộng Đồng') },
    { href: '#products', label: t('Products', 'Sản Phẩm') },
    { href: '#proof', label: t('Proof', 'Dấu ấn') },
    { href: '#timeline', label: t('Timeline', 'Hành Trình') },
    { href: '#tech', label: t('Skills', 'Kỹ Năng') },
    { href: '#about', label: t('About', 'Về Zah') },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-vintage italic font-bold text-3xl tracking-tight text-foreground flex items-center gap-2">
          Zah<span className="text-accent">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm font-medium text-muted hover:text-foreground transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4 pl-8 border-l border-border">
            <a
              href="/cv-zah.pdf"
              download="cv-zah.pdf"
              className="flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-foreground uppercase bg-surface border border-border px-3 py-1.5 rounded-full transition-colors hover:border-accent/50"
              title="Download CV"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-foreground uppercase bg-surface border border-border px-2.5 py-1.5 rounded-full transition-colors hover:border-accent/50"
              title="Toggle Theme"
            >
              {isDarkTheme ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 text-xs font-semibold text-muted hover:text-foreground uppercase bg-surface border border-border px-3 py-1.5 rounded-full transition-colors hover:border-accent/50"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language}</span>
            </button>
            <a
              href="#contact"
              className="px-5 py-2 bg-foreground text-background text-sm font-bold rounded-full hover:bg-accent hover:text-foreground transition-colors"
            >
              {t('Contact', 'Liên hệ')}
            </a>
          </div>
        </div>

        <div className="lg:hidden flex items-center space-x-2">
          <a
            href="/cv-zah.pdf"
            download="cv-zah.pdf"
            className="flex px-2 py-1.5 bg-surface border border-border rounded-full text-foreground hover:bg-accent/10 transition-colors"
            title="Download CV"
          >
            <Download className="w-4 h-4" />
          </a>
          <button onClick={toggleTheme} className="flex px-2 py-1.5 bg-surface border border-border rounded-full text-foreground">
            {isDarkTheme ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
          <button onClick={toggleLanguage} className="flex px-3 py-1.5 bg-surface border border-border rounded-full text-xs font-semibold uppercase text-muted">
            {language}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden absolute top-full left-0 w-full shadow-2xl"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-display font-medium text-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-6 mt-2 border-t border-border">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full py-3 bg-foreground text-background font-bold rounded-full"
                >
                  {t('Contact Me', 'Liên Hệ')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
