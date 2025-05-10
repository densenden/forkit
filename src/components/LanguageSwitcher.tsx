import React from 'react';
import { useTranslation } from 'react-i18next';
import ThemeToggle from './ThemeToggle';

interface LanguageSwitcherProps {
  currentLang: string;
  setCurrentLang: (lang: string) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang, setCurrentLang }) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = currentLang === 'de' ? 'en' : 'de';
    setCurrentLang(newLang);
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center space-x-2">
      <ThemeToggle />
      <button 
        onClick={toggleLanguage}
        className="px-2 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-sm border border-slate-300 dark:border-slate-600 font-lexend font-medium text-xs shadow-sm hover:bg-slate-300 dark:hover:bg-slate-600 transition-all"
      >
        {currentLang === 'de' ? 'EN' : 'DE'}
      </button>
    </div>
  );
};

export default LanguageSwitcher; 