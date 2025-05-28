import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import ActionCards from './ActionCards';
import HistorySection from './HistorySection';

const MainContent: React.FC = () => {
  const { t } = useLanguage();

  return (
    <main className="flex-1 ml-64 bg-[#111827] p-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 flex justify-between items-start">
          <div>
            <h2 className="text-3xl font-semibold main-title">{t('dashboardTitle')}</h2>
            <p className="text-[#64748B] text-sm mt-1">{t('dashboardSubtitle')}</p>
          </div>
          <LanguageSelector />
        </header>

        <ActionCards />
        <HistorySection />

        <footer className="mt-12 text-center">
          <p className="text-xs text-[#64748B]" dangerouslySetInnerHTML={{ __html: t('footerRights') }}></p>
        </footer>
      </div>
    </main>
  );
};

export default MainContent;