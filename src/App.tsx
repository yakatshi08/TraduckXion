import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <MainContent />
      </div>
    </LanguageProvider>
  );
}

export default App;