import { createContext, useContext } from 'react';
import { translations } from './translations';
import type { Language } from './translations';

const LanguageContext = createContext<Language>('en');

export function LanguageProvider({ children, lang }: { children: React.ReactNode; lang: Language }) {
  return (
    <LanguageContext.Provider value={lang}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useTranslations() {
  const lang = useLanguage();
  return translations[lang];
}