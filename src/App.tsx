import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
import ImpressumPage from './pages/ImpressumPage';
import DatenschutzPage from './pages/DatenschutzPage';
import ForkButtonDemoPage from './pages/ForkButtonDemoPage';
import ProjectPage from './pages/ProjectPage';

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
    // Start (Home)
    { path: '/', name: t('nav.home'), element: <HomePage />, navSection: 'start' },
    
    // Von Uns (About Us)
    { path: '/manifest', name: t('nav.manifest'), element: <ManifestPage />, navSection: 'von-uns' },
    { path: '/ueber-uns', name: t('nav.about'), element: <AboutPage />, navSection: 'von-uns' },
    
    // Für Euch (For You)
    { path: '/loesungen', name: t('nav.solutions'), element: <SolutionsPage />, navSection: 'fuer-euch' },
    { path: '/fuer-wen', name: t('nav.targetGroups'), element: <TargetGroupsPage />, navSection: 'fuer-euch' },
    { path: '/senioren', name: 'Für Senioren', element: <SeniorsPage />, navSection: 'fuer-euch' },
    
    // Ressourcen (Resources)
    { path: '/partner-werden', name: t('nav.partners'), element: <PartnerPage />, navSection: 'ressourcen' },
    { path: '/deine-story', name: t('nav.story'), element: <StoryPage />, navSection: 'ressourcen' },
    { path: '/deine-story/restaurant-meier', name: 'Story: Restaurant Meier', element: <CustomerStoryPage />, showInNav: false },
    { path: '/ideen', name: t('nav.ideas'), element: <IdeasPage />, navSection: 'ressourcen' },
    { path: '/blog', name: t('nav.blog'), element: <BlogPage />, navSection: 'ressourcen' },
    { path: '/name-voting', name: t('nav.voting'), element: <VotingPage />, navSection: 'ressourcen' },
    
    // Action items (separate section)
    { path: '/warteliste', name: t('nav.waitlist'), element: <WaitlistPage />, navSection: 'actions' },
    { path: '/kontakt', name: t('nav.contact'), element: <ContactPage />, navSection: 'actions' },
    
    // Legal pages
    { path: '/impressum', name: 'Impressum', element: <ImpressumPage />, showInNav: false },
    { path: '/datenschutz', name: 'Datenschutz', element: <DatenschutzPage />, showInNav: false },
    
    // Component demos
    { path: '/components/fork-button', name: 'Fork Button', element: <ForkButtonDemoPage />, showInNav: false },
    
    // Project pages
    { path: '/projekte/restaurant-template', name: 'Restaurant Template', element: <ProjectPage />, showInNav: false }
  ];

  const routes = getRoutes();
  const navRoutes = routes.filter(route => route.showInNav !== false);

  return (
    <Router>
      <div className="App font-lexend">
        <Navbar currentLang={currentLang} routes={navRoutes} setCurrentLang={changeLanguage} />
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
