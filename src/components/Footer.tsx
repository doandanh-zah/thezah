import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 border-t border-border bg-background w-full">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-muted uppercase tracking-widest">
        <p>
          &copy; {new Date().getFullYear()} ZAH. {t('All rights reserved.', 'Bản quyền thuộc về Zah.')}
        </p>
        <p className="flex gap-6">
          <a href="https://x.com/doandanh_zah" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Twitter (X)</a>
          <a href="https://t.me/doandanh_zah" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Telegram</a>
          <a href="https://github.com/doandanh-zah" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
          <a href="https://facebook.com/doandanh_zah" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Facebook</a>
        </p>
      </div>
    </footer>
  );
}
