import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: string, e: React.MouseEvent) => {
    e.preventDefault();
    setLanguage(lang);
  };

  return (
    <div className="language-selector text-sm text-[#60A5FA] flex-shrink-0 ml-4">
      <a 
        href="#" 
        id="lang-fr" 
        className={language === 'fr' ? 'active px-2 py-1 hover:text-white' : 'px-2 py-1 hover:text-white'} 
        onClick={(e) => handleLanguageChange('fr', e)}
      >
        FR
      </a>
      <span className="text-[#64748B]">|</span>
      <a 
        href="#" 
        id="lang-en" 
        className={language === 'en' ? 'active px-2 py-1 hover:text-white' : 'px-2 py-1 hover:text-white'} 
        onClick={(e) => handleLanguageChange('en', e)}
      >
        EN
      </a>
    </div>
  );
};

export default LanguageSelector;