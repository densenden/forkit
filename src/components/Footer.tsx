import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-deepblue-950 text-gray-700 dark:text-gray-200 pt-12 pb-8 border-t border-gray-200 dark:border-deepblue-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo and Tagline */}
          <div className="col-span-1">
            <Link to="/" className="text-xl font-lexend font-bold text-primary tracking-tight">
              <span className="text-dark dark:text-white">Fork</span>:it
            </Link>
            <p className="mt-2 text-sm leading-relaxed">
              Giving small businesses back their digital independence.
            </p>
          </div>

          {/* Column 2: Manifest & Mission */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-3">{t('footer.title1')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/manifest" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-ocean-300 transition-colors no-underline">
                  {t('nav.manifest')}
                </Link>
              </li>
              <li>
                <Link to="/ueber-uns" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-ocean-300 transition-colors no-underline">
                  {t('nav.about')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Offering */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-3">{t('footer.title2')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/loesungen" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-ocean-300 transition-colors no-underline">
                  {t('nav.solutions')}
                </Link>
              </li>
              <li>
                <Link to="/fuer-wen" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-ocean-300 transition-colors no-underline">
                  {t('nav.targetGroups')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Participate */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-3">{t('footer.title3')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/partner-werden" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-ocean-300 transition-colors no-underline">
                  {t('nav.partners')}
                </Link>
              </li>
              <li>
                <Link to="/deine-story" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-ocean-300 transition-colors no-underline">
                  {t('nav.story')}
                </Link>
              </li>
              <li>
                <Link to="/warteliste" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-ocean-300 transition-colors no-underline">
                  {t('nav.waitlist')}
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-ocean-300 transition-colors no-underline">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with legal links */}
        <div className="border-t border-gray-200 dark:border-deepblue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between">
          <div className="text-xs text-gray-500 dark:text-gray-400">
            &copy; {currentYear} Fork:it. {t('footer.copyright')}
          </div>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link to="/impressum" className="text-xs text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-ocean-300 transition-colors no-underline">
              {t('footer.imprint')}
            </Link>
            <Link to="/datenschutz" className="text-xs text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-ocean-300 transition-colors no-underline">
              {t('footer.privacy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 