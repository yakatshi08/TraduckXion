import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const HistorySection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section>
      <h3 className="text-xl font-semibold text-white mb-4">{t('historyTitle')}</h3>
      <div className="bg-[#1F2937] p-4 rounded-xl shadow-lg">
        <ul className="space-y-3">
          <li className="flex justify-between items-center p-3 bg-[#111827]/50 rounded-lg hover:bg-[#0A3D91]/20 transition-colors duration-200">
            <div>
              <p className="text-sm font-medium text-white">{t('historyItem1Title')}</p>
              <p className="text-xs text-[#64748B]">{t('historyItem1Desc')}</p>
            </div>
            <button className="btn btn-sm btn-primary-small">{t('btnView')}</button>
          </li>
          <li className="flex justify-between items-center p-3 bg-[#111827]/50 rounded-lg hover:bg-[#0A3D91]/20 transition-colors duration-200">
            <div>
              <p className="text-sm font-medium text-white">{t('historyItem2Title')}</p>
              <p className="text-xs text-[#64748B]">{t('historyItem2Desc')}</p>
            </div>
            <button className="btn btn-sm btn-primary-small">{t('btnView')}</button>
          </li>
          <li className="flex justify-between items-center p-3 bg-[#111827]/50 rounded-lg hover:bg-[#0A3D91]/20 transition-colors duration-200">
            <div>
              <p className="text-sm font-medium text-white">{t('historyItem3Title')}</p>
              <p className="text-xs text-[#64748B]">{t('historyItem3Desc')}</p>
            </div>
            <button className="btn btn-sm btn-neutral-small cursor-not-allowed">{t('btnInProgress')}</button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HistorySection;