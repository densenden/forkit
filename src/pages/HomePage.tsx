import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import ImageContainer from '../components/ImageContainer';
import HeroBackground from '../components/HeroBackground';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  // Key features to highlight on the homepage
  const features = [
    {
      title: t('solutions.websites'),
      description: t('solutions.websitesDesc'),
      icon: (
        <svg className="w-8 h-8 text-ocean-600 dark:text-ocean-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: '/loesungen',
    },
    {
      title: t('solutions.booking'),
      description: t('solutions.bookingDesc'),
      icon: (
        <svg className="w-8 h-8 text-ocean-600 dark:text-ocean-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      link: '/loesungen',
    },
    {
      title: t('ideas.title'),
      description: t('ideas.status.received'),
      icon: (
        <svg className="w-8 h-8 text-ocean-600 dark:text-ocean-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      link: '/ideen',
    },
  ];

  // Target groups to highlight
  const targetGroups = [
    { name: t('targetGroups.gastronomy'), icon: '🍽️', path: '/fuer-wen', image: '/images/target/target-gastronomy_left.jpg', textPosition: 'left' },
    { name: t('targetGroups.retail'), icon: '🛍️', path: '/fuer-wen', image: '/images/target/target-retail.jpg', textPosition: 'right' },
    { name: t('targetGroups.coaches'), icon: '📊', path: '/fuer-wen', image: '/images/target/target-coach.jpg', textPosition: 'right' },
    { name: t('targetGroups.creatives'), icon: '🎨', path: '/fuer-wen', image: '/images/target/target-creative.jpg', textPosition: 'left' },
  ];

  const targetAudiences = [
    { name: 'Gastronomie', path: '/fuer-wen' },
    { name: 'Einzelhandel', path: '/fuer-wen' },
    { name: 'Coaches', path: '/fuer-wen' },
    { name: 'Kreative', path: '/fuer-wen' },
    { name: 'Senioren', path: '/senioren' },
    { name: 'Vereine', path: '/fuer-wen' }
  ];

  return (
    <main className="bg-light dark:bg-deepblue-900 transition-colors duration-300">
      {/* Hero Section with full background image */}
      <HeroBackground 
        imageSrc="/images/hero/forkit_hero_left.jpg"
        position="left"
        overlayOpacity="medium"
      >
        <div className="max-w-3xl">
          <h1 className="homepage-hero-title mb-6">
            {t('hero.title')}
          </h1>
          <p className="homepage-hero-subtitle">
            {t('hero.subtitle')}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link 
              to="/warteliste" 
              className="bg-ocean-600 hover:bg-ocean-700 text-white px-6 py-3 rounded-sm font-lexend font-medium text-base shadow-md transition-all"
            >
              {t('hero.cta')}
            </Link>
            <Link 
              to="/manifest" 
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-sm font-lexend font-medium text-base hover:bg-white/20 transition-all"
            >
              {t('manifest.title')}
            </Link>
          </div>
        </div>
      </HeroBackground>

      {/* Manifest Intro Section with background image */}
      <HeroBackground 
        imageSrc="/images/hero/manifest-hero_top.jpg"
        position="center"
        overlayOpacity="medium"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="homepage-hero-title mb-6">
            Manifest 1.1
          </h2>
          <div className="space-y-6 text-white text-xl font-light drop-shadow-md">
            <p>
              Wir sehen, was passiert: Die digitale Welt gehört nicht mehr den Menschen, die sie nutzen – sondern den Plattformen, die sie kontrollieren.
            </p>
            <p>
              Sichtbarkeit ist zur Ware geworden – und die größten Plattformen halten das Monopol.
            </p>
            <p>
              Wir glauben, dass es anders geht.
            </p>
          </div>
          <div className="mt-10">
            <Link 
              to="/manifest" 
              className="inline-flex items-center font-lexend font-medium text-white text-lg hover:text-white/80 transition-colors"
            >
              Vollständiges Manifest lesen <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </HeroBackground>

      {/* Features/CTA Boxes - Grid layout with individual cards */}
      <section className="py-16 bg-slate-50 dark:bg-deepblue-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h2 className="headline-section">
              Unsere Lösungen
            </h2>
            <p className="body-normal mt-3">
              Digitale Unabhängigkeit durch maßgeschneiderte Lösungen
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-deepblue-800 p-6 rounded-sm shadow-sm border border-gray-200 dark:border-deepblue-700 hover:shadow-md transition-all"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-lexend font-semibold text-xl mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="body-small mb-6">
                  {feature.description}
                </p>
                <Link 
                  to={feature.link} 
                  className="font-lexend text-sm font-medium text-ocean-600 dark:text-ocean-400 hover:underline inline-flex items-center"
                >
                  Mehr erfahren <span className="ml-1">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Feature - Solution section with background image */}
      <HeroBackground 
        imageSrc="/images/solution/solution_left.jpeg"
        position="left"
        overlayOpacity="medium"
      >
        <div className="max-w-3xl">
          <h2 className="homepage-hero-title mb-6">
            Digitale Lösungen direkt für kleine Unternehmen
          </h2>
          <p className="homepage-hero-subtitle mb-8">
            Wir entwickeln digitale Lösungen, die speziell auf die Bedürfnisse kleiner und mittlerer Unternehmen zugeschnitten sind. Keine unnötigen Funktionen, keine versteckten Kosten.
          </p>
          <Link 
            to="/loesungen" 
            className="inline-flex items-center font-lexend text-white text-lg hover:text-white/80 transition-colors"
          >
            Alle Lösungen entdecken <span className="ml-2">→</span>
          </Link>
        </div>
      </HeroBackground>

      {/* Target Groups Section */}
      <section className="py-16 bg-gray-50 dark:bg-deepblue-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            <div>
              <h2 className="headline-section">
                {t('targetGroups.title')}
              </h2>
              <p className="body-normal mt-3 max-w-2xl">
                Wir helfen verschiedenen Branchen und Menschen, die von Plattformabhängigkeit betroffen sind
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {targetGroups.map((group, index) => (
              <Link
                key={index}
                to={group.path}
                className="group overflow-hidden rounded-sm border border-gray-200 dark:border-deepblue-700 transition-all"
              >
                <ImageContainer
                  src={group.image}
                  alt={group.name}
                  aspectRatio="4:3"
                  overlay
                >
                  <div className={`absolute inset-0 flex items-center justify-${group.textPosition === 'left' ? 'start' : 'end'} p-6`}>
                    <span className="text-on-image-heading px-4 text-center text-xl">
                      {group.name}
                    </span>
                  </div>
                </ImageContainer>
                <div className="p-4 bg-white dark:bg-deepblue-800 flex items-center space-x-3">
                  <span className="text-2xl">{group.icon}</span>
                  <span className="font-lexend font-medium text-gray-900 dark:text-white group-hover:text-ocean-600 dark:group-hover:text-ocean-400 transition-colors">
                    {group.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            {targetAudiences.map((audience, index) => (
              <Link
                key={index}
                to={audience.path}
                className="px-4 py-2 rounded-sm bg-white dark:bg-deepblue-800 border border-gray-200 dark:border-deepblue-700 font-lexend font-medium text-gray-900 dark:text-white hover:text-ocean-600 dark:hover:text-ocean-400 transition-colors"
              >
                {audience.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Stories Section */}
      <section className="py-16 bg-white dark:bg-deepblue-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h2 className="headline-section">
              Erfolgsgeschichten
            </h2>
            <p className="body-normal mt-3">
              Erfahre, wie wir anderen Unternehmen zu digitaler Unabhängigkeit verholfen haben
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-deepblue-800 rounded-sm shadow-sm border border-gray-200 dark:border-deepblue-700 overflow-hidden">
              <div className="h-48">
                <img 
                  src="/images/content/customer-story_hero_left.jpg" 
                  alt="Customer story 1" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-lexend font-semibold text-xl mb-3 text-gray-900 dark:text-white">
                  Vom Foodora-Lieferanten zum eigenen Shop
                </h3>
                <p className="body-small mb-4">
                  Wie ein kleines Restaurant sich von Lieferplattformen unabhängig gemacht hat.
                </p>
                <Link 
                  to="/deine-story" 
                  className="font-lexend text-sm font-medium text-ocean-600 dark:text-ocean-400 hover:underline inline-flex items-center"
                >
                  Geschichte lesen <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
            
            <div className="bg-white dark:bg-deepblue-800 rounded-sm shadow-sm border border-gray-200 dark:border-deepblue-700 overflow-hidden">
              <div className="h-48">
                <img 
                  src="/images/content/customer-story3_hero_left.jpg" 
                  alt="Customer story 2" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-lexend font-semibold text-xl mb-3 text-gray-900 dark:text-white">
                  Fotografin findet Kunden ohne Instagram
                </h3>
                <p className="body-small mb-4">
                  Wie eine selbständige Fotografin ihre eigene digitale Präsenz aufgebaut hat.
                </p>
                <Link 
                  to="/deine-story" 
                  className="font-lexend text-sm font-medium text-ocean-600 dark:text-ocean-400 hover:underline inline-flex items-center"
                >
                  Geschichte lesen <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
            
            <div className="bg-white dark:bg-deepblue-800 rounded-sm shadow-sm border border-gray-200 dark:border-deepblue-700 overflow-hidden">
              <div className="h-48">
                <img 
                  src="/images/content/restaurant_right.jpeg" 
                  alt="Customer story 3" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-lexend font-semibold text-xl mb-3 text-gray-900 dark:text-white">
                  Vom Etsy-Shop zur eigenen Plattform
                </h3>
                <p className="body-small mb-4">
                  Wie ein kleines Handwerksunternehmen nach Jahren auf Etsy unabhängig wurde.
                </p>
                <Link 
                  to="/deine-story" 
                  className="font-lexend text-sm font-medium text-ocean-600 dark:text-ocean-400 hover:underline inline-flex items-center"
                >
                  Geschichte lesen <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section with background image */}
      <HeroBackground 
        imageSrc="/images/content/forkit_restaurant_tablet.jpg"
        position="left"
        overlayOpacity="medium"
      >
        <div className="max-w-3xl">
          <h2 className="homepage-hero-title mb-6">
            Werde Teil der Bewegung
          </h2>
          <p className="homepage-hero-subtitle mb-8">
            Wir wollen digitale Unabhängigkeit zurückgewinnen - für dich und dein Geschäft.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/warteliste" 
              className="bg-ocean-600 hover:bg-ocean-700 text-white px-6 py-3 rounded-sm font-lexend font-medium text-base shadow-md transition-all"
            >
              {t('waitlist.title')}
            </Link>
            <Link 
              to="/deine-story" 
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-sm font-lexend font-medium text-base hover:bg-white/20 transition-all"
            >
              {t('story.title')}
            </Link>
          </div>
        </div>
      </HeroBackground>
    </main>
  );
};

export default HomePage; 