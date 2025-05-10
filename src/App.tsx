import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';

// Pages
import HomePage from './pages/HomePage';
import ManifestPage from './pages/ManifestPage';
import VotingPage from './pages/VotingPage';
import TargetGroupsPage from './pages/TargetGroupsPage';
import SolutionsPage from './pages/SolutionsPage';
import PartnerPage from './pages/PartnerPage';
import StoryPage from './pages/StoryPage';
import IdeasPage from './pages/IdeasPage';
import WaitlistPage from './pages/WaitlistPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SeniorsPage from './pages/SeniorsPage';
import CustomerStoryPage from './pages/CustomerStoryPage';

function App() {
  const [currentLang, setCurrentLang] = useState('de'); // Set default to German
  const { t, i18n } = useTranslation();

  // Initialize language from browser or localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem('language') || navigator.language?.substring(0, 2) || 'de';
    if (savedLang) {
      changeLanguage(savedLang);
    }
  }, []);

  // Handle language change with better error handling
  const changeLanguage = (lang: string) => {
    try {
      i18n.changeLanguage(lang);
      setCurrentLang(lang);
      localStorage.setItem('language', lang);
      
      // Update HTML lang attribute for accessibility
      document.documentElement.setAttribute('lang', lang);
      
      // Force component re-render by triggering a small state change
      const event = new Event('languageChanged');
      window.dispatchEvent(event);
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  // Define routes with dynamic names based on current language
  const getRoutes = () => [
    { path: '/', name: t('nav.home'), element: <HomePage /> },
    { path: '/manifest', name: t('nav.manifest'), element: <ManifestPage /> },
    { path: '/name-voting', name: t('nav.voting'), element: <VotingPage /> },
    { path: '/fuer-wen', name: t('nav.targetGroups'), element: <TargetGroupsPage /> },
    { path: '/loesungen', name: t('nav.solutions'), element: <SolutionsPage /> },
    { path: '/partner-werden', name: t('nav.partners'), element: <PartnerPage /> },
    { path: '/deine-story', name: t('nav.story'), element: <StoryPage /> },
    { path: '/deine-story/restaurant-meier', name: 'Story: Restaurant Meier', element: <CustomerStoryPage />, showInNav: false },
    { path: '/ideen', name: t('nav.ideas'), element: <IdeasPage /> },
    { path: '/warteliste', name: t('nav.waitlist'), element: <WaitlistPage /> },
    { path: '/blog', name: t('nav.blog'), element: <BlogPage /> },
    { path: '/ueber-uns', name: t('nav.about'), element: <AboutPage /> },
    { path: '/kontakt', name: t('nav.contact'), element: <ContactPage /> },
    { path: '/senioren', name: 'Für Senioren', element: <SeniorsPage /> }
  ];

  const routes = getRoutes();
  const navRoutes = routes.filter(route => route.showInNav !== false);

  return (
    <Router>
      <div className="App font-lexend">
        <Navbar currentLang={currentLang} routes={navRoutes} />
        <LanguageSwitcher currentLang={currentLang} setCurrentLang={changeLanguage} />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
