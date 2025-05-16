import React, { useEffect, useState } from 'react';

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // On mount, read the initial theme from localStorage or user preferences
    const isDark = 
      localStorage.theme === 'dark' || 
      (!('theme' in localStorage) && 
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setDarkMode(isDark);
    updateThemeClass(isDark);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    updateThemeClass(newDarkMode);
    
    // Save preference to localStorage
    localStorage.theme = newDarkMode ? 'dark' : 'light';
  };

  const updateThemeClass = (isDark: boolean) => {
    // Add or remove dark class from root html element
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-2 py-1 bg-white dark:bg-deepblue-900 text-gray-700 dark:text-gray-200 rounded-sm border border-gray-300 dark:border-gray-600 font-lexend font-medium text-xs shadow-sm hover:border-primary hover:text-primary dark:hover:border-ocean-400 dark:hover:text-ocean-300 transition-all flex items-center justify-center"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle; 