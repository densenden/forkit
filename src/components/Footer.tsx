import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  // Footer links organized by category
  const linkGroups = [
    {
      title: "Manifest & Mission",
      links: [
        { path: '/manifest', label: 'Manifest' },
        { path: '/ueber-uns', label: 'Über uns' },
        { path: '/name-voting', label: 'Namensabstimmung' },
      ]
    },
    {
      title: "Angebot",
      links: [
        { path: '/fuer-wen', label: 'Für wen ist das?' },
        { path: '/loesungen', label: 'Was wir bauen' },
        { path: '/partner-werden', label: 'Partner werden' },
      ]
    },
    {
      title: "Mitmachen",
      links: [
        { path: '/deine-story', label: 'Story & Wunschliste' },
        { path: '/ideen', label: 'Öffentliche Ideen' },
        { path: '/warteliste', label: 'Warteliste' },
        { path: '/blog', label: 'Blog / Dossier' },
      ]
    },
  ];

  return (
    <footer className="bg-dark text-white pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-lexend font-bold text-white tracking-tight">
              <span className="text-primary">Fork</span>it
            </Link>
            <p className="mt-4 text-gray-300 text-sm max-w-md">
              Eine Bewegung für digitale Selbstbestimmung. Wir helfen kleinen Unternehmen, 
              Selbstständigen und benachteiligten Zielgruppen, sich von digitalen Abhängigkeiten
              großer Plattformen zu lösen.
            </p>
          </div>

          {/* Link Groups */}
          {linkGroups.map((group, i) => (
            <div key={i} className="md:col-span-1">
              <h3 className="font-lexend font-semibold text-lg mb-4">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.links.map((link, j) => (
                  <li key={j}>
                    <Link 
                      to={link.path} 
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs">
            © {currentYear} Forkit. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/impressum" className="text-gray-400 hover:text-white transition-colors text-xs">
              Impressum
            </Link>
            <Link to="/datenschutz" className="text-gray-400 hover:text-white transition-colors text-xs">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 