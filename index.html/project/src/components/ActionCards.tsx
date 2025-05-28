import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ActionCards: React.FC = () => {
  const { t, language } = useLanguage();

  const handleVoiceInputClick = (e: React.MouseEvent) => {
    e.preventDefault();
    alert(t('tooltipVoiceInput') + ' (fonctionnalité à implémenter)');
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <div className="bg-[#1F2937] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white whitespace-nowrap overflow-hidden text-ellipsis">{t('cardTitleNewTranscription')}</h3>
          <svg className="w-4 h-4 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
        </div>
        <p className="text-sm text-[#64748B] mb-4 flex-grow">{t('cardDescNewTranscription')}</p>
        <button className="btn btn-action w-full mt-auto">
          {t('btnStartTranscription')}
        </button>
      </div>

      <div className="bg-[#1F2937] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white whitespace-nowrap overflow-hidden text-ellipsis">{t('cardTitleNewTranslation')}</h3>
          <a 
            href="#" 
            className="clickable-icon-wrapper" 
            aria-label={t('tooltipVoiceInput')} 
            title={t('tooltipVoiceInput')} 
            id="voiceInputIconLink"
            onClick={handleVoiceInputClick}
          >
            <svg className="w-5 h-5" style={{ color: '#F57C00' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
          </a>
        </div>
        <p className="text-sm text-[#64748B] mb-4 flex-grow">{t('cardDescNewTranslation')}</p>
        <button className="btn btn-action w-full mt-auto">
          {t('btnStartTranslation')}
        </button>
      </div>

      <div className="bg-[#1F2937] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white whitespace-nowrap overflow-hidden text-ellipsis">{t('cardTitleYoutube')}</h3>
          <svg className="w-4 h-4 text-[#EF4444]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.582,6.186c-0.23-0.86-0.908-1.539-1.768-1.768C18.267,4,12,4,12,4S5.733,4,4.186,4.418 c-0.86,0.23-1.539,0.908-1.768,1.768C2,7.733,2,12,2,12s0,4.267,0.418,5.814c0.23,0.86,0.908,1.539,1.768,1.768 C5.733,20,12,20,12,20s6.267,0,7.814-0.418c0.861-0.23,1.539-0.908,1.768-1.768C22,16.267,22,12,22,12S22,7.733,21.582,6.186z M9.999,15.5v-7l6.001,3.5L9.999,15.5z" />
          </svg>
        </div>
        <p className="text-sm text-[#64748B] mb-4 flex-grow">{t('cardDescYoutube')}</p>
        <button className="btn btn-action w-full mt-auto">
          {t('btnImportYoutube')}
        </button>
      </div>
    </section>
  );
};

export default ActionCards;