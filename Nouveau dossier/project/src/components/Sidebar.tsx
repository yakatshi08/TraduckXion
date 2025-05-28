import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LogoComponent from './LogoComponent';

const Sidebar: React.FC = () => {
  const { t } = useLanguage();

  return (
    <aside className="w-64 bg-[#1E293B] p-6 space-y-8 flex flex-col fixed top-0 left-0 h-full z-10 shadow-lg">
      <div className="text-center py-4">
        <LogoComponent />
        <p className="text-xs text-[#64748B] mt-1">{t('logoSubtitle')}</p>
      </div>

      <nav className="flex-grow">
        <ul className="space-y-3">
          <li>
            <a href="#" className="flex items-center space-x-3 text-[#60A5FA] hover:text-white hover:bg-[#0A3D91]/30 py-2 px-3 rounded-lg transition-colors duration-200 text-sm font-medium">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              <span className="whitespace-nowrap">{t('navHome')}</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 text-[#60A5FA] hover:text-white hover:bg-[#0A3D91]/30 py-2 px-3 rounded-lg transition-colors duration-200 text-sm font-medium">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
              <span className="whitespace-nowrap">{t('navMyTranscriptions')}</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 text-[#60A5FA] hover:text-white hover:bg-[#0A3D91]/30 py-2 px-3 rounded-lg transition-colors duration-200 text-sm font-medium">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
              <span className="whitespace-nowrap">{t('navNewTranscription')}</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 text-[#60A5FA] hover:text-white hover:bg-[#0A3D91]/30 py-2 px-3 rounded-lg transition-colors duration-200 text-sm font-medium">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9.5A18.03 18.03 0 019 14.5m0-4.5v.742m5.553 2.258a18.003 18.003 0 01-2.18 3.498M12 20.25a3 3 0 01-3-3V9.75a3 3 0 013-3h.008a3 3 0 013 3v7.5a3 3 0 01-3 3h-.008zM12 15a.75.75 0 00.75-.75V9.75A.75.75 0 0012 9a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75z"></path></svg>
              <span className="whitespace-nowrap">{t('navNewTranslation')}</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="mt-auto">
        <a href="#" className="flex items-center space-x-3 text-[#60A5FA] hover:text-white hover:bg-[#0A3D91]/30 py-2 px-3 rounded-lg transition-colors duration-200 text-sm font-medium">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          <span className="whitespace-nowrap">{t('navSettings')}</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-[#60A5FA] hover:text-white hover:bg-[#0A3D91]/30 py-2 px-3 rounded-lg transition-colors duration-200 text-sm font-medium mt-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
          <span className="whitespace-nowrap">{t('navLogout')}</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;