import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ThemeToggle from './ThemeToggle';
import { ReactComponent as ForkitDarkWordmark } from '../assets/logos/forkit_dark_wordmark.svg';

interface RouteType {
  path: string;
  name: string;
  element: React.ReactNode;
  navSection?: string;
  showInNav?: boolean;
}

interface NavbarProps {
  currentLang: string;
  routes: RouteType[];
  setCurrentLang: (lang: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentLang, routes, setCurrentLang }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Keep the code but don't set the unused variable
      // if (window.scrollY > 10) {
      //   setScrolled(true);
      // } else {
      //   setScrolled(false);
      // }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Close menu when route changes
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  const toggleLanguage = () => {
    const newLang = currentLang === 'de' ? 'en' : 'de';
    setCurrentLang(newLang);
  };

  // Organize routes based on new navigation structure
  const menuGroups = {
    // Start
    start: {
      name: 'Start',
      items: routes.filter(route => route.navSection === 'start'),
    },
    // Von Uns
    'von-uns': {
      name: 'Von uns',
      items: routes.filter(route => route.navSection === 'von-uns'),
    },
    // Für Euch
    'fuer-euch': {
      name: 'Für euch',
      items: routes.filter(route => route.navSection === 'fuer-euch'),
    },
    // Ressourcen
    ressourcen: {
      name: 'Ressourcen',
      items: routes.filter(route => route.navSection === 'ressourcen'),
    },
    // Action items remain separate for emphasis
    actions: {
      name: t('actions'),
      items: routes.filter(route => route.navSection === 'actions'),
    }
  };

  const toggleDropdown = (key: string) => {
    if (openDropdown === key) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(key);
    }
  };

  const isActiveSection = (section: string): boolean => {
    const activePage = routes.find(route => route.path === location.pathname);
    return activePage?.navSection === section;
  };

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 bg-deepblue-950 py-2`}>
      <div className="container mx-auto px-3 md:px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center" style={{ height: 24 }}>
            <ForkitDarkWordmark style={{ height: 24, width: 'auto', display: 'block' }} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1" ref={dropdownRef}>
            {/* Main nav items with dropdowns */}
            {Object.entries(menuGroups).filter(([key]) => key !== 'actions').map(([key, group]) => (
              <div key={key} className="relative">
                <button 
                  className={`font-lexend text-xs font-medium px-2 py-2 rounded-sm flex items-center ${
                    openDropdown === key || isActiveSection(key) 
                      ? 'text-ocean-300 bg-ocean-900/30' 
                      : 'text-gray-200 hover:bg-ocean-900/30 hover:text-ocean-300'
                  }`}
                  onClick={() => toggleDropdown(key)}
                >
                  {group.name}
                  <svg className={`ml-1 w-4 h-4 transition-transform ${openDropdown === key ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown menu */}
                {openDropdown === key && (
                  <div className="absolute top-full left-0 mt-1 bg-deepblue-900 rounded-sm shadow-lg py-1 min-w-[180px] z-50">
                    {group.items.map((route) => (
                      <Link
                        key={route.path}
                        to={route.path}
                        className={`block px-4 py-2 text-xs hover:bg-ocean-900/30 ${
                          location.pathname === route.path
                            ? 'text-ocean-300 font-medium bg-ocean-900/20'
                            : 'text-gray-300'
                        }`}
                        onClick={closeMenu}
                      >
                        {route.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Action Items and Theme/Language Toggles */}
          <div className="hidden md:flex items-center space-x-2">
            {menuGroups.actions.items.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={`font-lexend text-xs font-medium px-2 py-1 rounded-sm ${
                  route.path === location.pathname
                    ? 'bg-primary text-white' 
                    : route.path === '/warteliste'
                      ? 'bg-primary text-white hover:bg-primary-600'
                      : 'bg-deepblue-900 border border-gray-600 text-gray-200 hover:border-ocean-400 hover:text-ocean-300'
                }`}
              >
                {route.name}
              </Link>
            ))}
            
            {/* Theme Toggle & Language Switcher moved to the right */}
            <div className="flex items-center ml-3 space-x-2">
              <ThemeToggle />
              <button 
                onClick={toggleLanguage}
                className="px-2 py-1 bg-deepblue-900 text-gray-200 rounded-sm border border-gray-600 font-lexend font-medium text-xs shadow-sm hover:border-ocean-400 hover:text-ocean-300 transition-all"
              >
                {currentLang === 'de' ? 'EN' : 'DE'}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button and Language/Theme Switches */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button 
              onClick={toggleLanguage}
              className="px-2 py-1 bg-deepblue-900 text-gray-200 rounded-sm border border-gray-600 font-lexend font-medium text-xs shadow-sm hover:border-ocean-400 hover:text-ocean-300 transition-all"
            >
              {currentLang === 'de' ? 'EN' : 'DE'}
            </button>
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none ml-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-deepblue-900 border-b border-deepblue-800 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[80vh] opacity-100 shadow-md overflow-y-auto' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-2">
          {/* Mobile accordion menu */}
          <div className="flex flex-col space-y-1">
            {Object.entries(menuGroups).filter(([key]) => key !== 'actions').map(([key, group]) => (
              <div key={key} className="border-b border-deepblue-800 pb-1">
                <button 
                  className={`w-full text-left font-lexend py-2 flex justify-between items-center ${
                    openDropdown === `mobile-${key}` || isActiveSection(key) 
                      ? 'text-ocean-300 font-medium' 
                      : 'text-gray-200'
                  }`}
                  onClick={() => toggleDropdown(`mobile-${key}`)}
                >
                  {group.name}
                  <svg className={`w-4 h-4 transition-transform ${openDropdown === `mobile-${key}` ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Mobile submenu */}
                <div className={`overflow-hidden transition-all duration-200 ${
                  openDropdown === `mobile-${key}` ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  {group.items.map((route) => (
                    <Link
                      key={route.path}
                      to={route.path}
                      className={`block pl-4 py-2 text-sm ${
                        location.pathname === route.path
                          ? 'text-ocean-300 bg-ocean-900/20'
                          : 'text-gray-300 hover:bg-ocean-900/30'
                      }`}
                      onClick={closeMenu}
                    >
                      {route.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Mobile action items */}
            <div className="flex flex-col space-y-2 pt-2">
              {menuGroups.actions.items.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  className={`font-lexend text-sm font-medium py-2 text-center rounded-sm ${
                    route.path === location.pathname
                      ? 'bg-primary text-white'
                      : route.path === '/warteliste' 
                        ? 'bg-primary text-white hover:bg-primary-600' 
                        : 'bg-deepblue-900 border border-gray-600 text-gray-200'
                  }`}
                  onClick={closeMenu}
                >
                  {route.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 