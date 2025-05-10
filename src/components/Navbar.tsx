import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface RouteType {
  path: string;
  name: string;
  element: React.ReactNode;
}

interface NavbarProps {
  currentLang: string;
  routes: RouteType[];
}

const Navbar: React.FC<NavbarProps> = ({ currentLang, routes }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  // Organize routes in a more logical structure
  const menuGroups = {
    // Main section with Homepage and Manifest
    main: {
      name: t('nav.home'),
      items: routes.filter(route => ['/', '/manifest'].includes(route.path)),
    },
    // For whom and what we're building (core offering)
    offering: {
      name: t('nav.solutions'),
      items: routes.filter(route => ['/loesungen', '/fuer-wen'].includes(route.path)),
    },
    // Ways to participate
    participate: {
      name: t('nav.participate'),
      items: routes.filter(route => ['/partner-werden', '/deine-story', '/name-voting'].includes(route.path)),
    },
    // Information and resources
    resources: {
      name: t('nav.resources'),
      items: routes.filter(route => ['/blog', '/ideen', '/ueber-uns'].includes(route.path)),
    },
    // Action items remain separate for emphasis
    actions: {
      name: t('actions'),
      items: routes.filter(route => ['/warteliste', '/kontakt'].includes(route.path)),
    }
  };

  const toggleDropdown = (key: string) => {
    if (openDropdown === key) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(key);
    }
  };

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-sm shadow-md py-1' : 'bg-transparent py-2'}`}>
      <div className="container mx-auto px-3 md:px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-lexend font-bold text-primary tracking-tight">
            <span className="text-dark">Fork</span>it
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1" ref={dropdownRef}>
            {/* Main nav items with dropdowns */}
            {Object.entries(menuGroups).filter(([key]) => key !== 'actions').map(([key, group]) => (
              <div key={key} className="relative">
                <button 
                  className={`font-lexend text-xs font-medium px-2 py-2 hover:text-primary rounded-md flex items-center ${
                    openDropdown === key ? 'text-primary' : 
                    location.pathname === '/' && key === 'main' ? 'text-primary' :
                    (key === 'offering' && ['/loesungen', '/fuer-wen'].includes(location.pathname)) ||
                    (key === 'participate' && ['/partner-werden', '/deine-story', '/name-voting'].includes(location.pathname)) ||
                    (key === 'resources' && ['/blog', '/ideen', '/ueber-uns'].includes(location.pathname))
                    ? 'text-primary' : 'text-gray-700'
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
                  <div className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg py-1 min-w-[180px] z-50">
                    {group.items.map((route) => (
                      <Link
                        key={route.path}
                        to={route.path}
                        className={`block px-4 py-2 text-xs hover:bg-gray-100 ${
                          location.pathname === route.path
                            ? 'text-primary font-medium'
                            : 'text-gray-700'
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
          
          {/* Action Items */}
          <div className="hidden md:flex items-center space-x-2">
            {menuGroups.actions.items.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={`font-lexend text-xs font-medium px-2 py-1 rounded-md ${
                  route.path === '/warteliste' 
                    ? 'bg-primary text-white hover:bg-primary/90' 
                    : 'border border-gray-300 hover:border-primary hover:text-primary'
                }`}
              >
                {route.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
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
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[80vh] opacity-100 shadow-md overflow-y-auto' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-2">
          {/* Mobile accordion menu */}
          <div className="flex flex-col space-y-1">
            {Object.entries(menuGroups).filter(([key]) => key !== 'actions').map(([key, group]) => (
              <div key={key} className="border-b border-gray-100 pb-1">
                <button 
                  className={`w-full text-left font-lexend py-2 flex justify-between items-center ${
                    openDropdown === `mobile-${key}` ? 'text-primary font-medium' : 'text-gray-700'
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
                  openDropdown === `mobile-${key}` ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  {group.items.map((route) => (
                    <Link
                      key={route.path}
                      to={route.path}
                      className={`block pl-4 py-2 text-sm ${
                        location.pathname === route.path
                          ? 'text-primary'
                          : 'text-gray-600'
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
                  className={`font-lexend text-sm font-medium py-2 text-center rounded-md ${
                    route.path === '/warteliste' 
                      ? 'bg-primary text-white' 
                      : 'border border-gray-300 text-gray-700'
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