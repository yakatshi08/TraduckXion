import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../data/translations';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'fr',
  setLanguage: () => {},
  t: (key: string) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<string>('fr');

  useEffect(() => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'fr';
    setLanguage(savedLang);
    document.documentElement.lang = savedLang;
    console.log(`Preferred language ${savedLang} loaded.`);
  }, []);

  const handleSetLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.lang = lang;
    console.log(`Language changed to ${lang} and saved.`);
  };

  const t = (key: string): string => {
    if (translations[language] && translations[language][key]) {
      return translations[language][key];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};