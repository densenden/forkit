import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import ImageContainer from '../components/ImageContainer';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  // Key features to highlight on the homepage
  const features = [
    {
      title: t('solutions.websites'),
      description: t('solutions.websitesDesc'),
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: '/loesungen',
    },
    {
      title: t('solutions.booking'),
      description: t('solutions.bookingDesc'),
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      link: '/loesungen',
    },
    {
      title: t('ideas.title'),
      description: t('ideas.status.received'),
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <main className="bg-light dark:bg-slate-900 transition-colors duration-300">
      {/* Hero Section - Text on left (based on forkit_hero_left.jpg) */}
      <section className="min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="headline-hero">
                {t('hero.title')}
              </h1>
              <p className="body-large mt-6 max-w-lg">
                {t('hero.subtitle')}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link 
                  to="/warteliste" 
                  className="bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-sm font-urbanist font-medium text-base shadow-sm transition-all"
                >
                  {t('hero.cta')}
                </Link>
                <Link 
                  to="/manifest" 
                  className="bg-transparent border border-primary text-primary dark:text-primary-300 dark:border-primary-500 px-6 py-3 rounded-sm font-urbanist font-medium text-base hover:bg-primary/5 dark:hover:bg-primary-900/30 transition-all"
                >
                  {t('manifest.title')}
                </Link>
              </div>
            </div>
            <div className="relative">
              <ImageContainer 
                src="/images/hero/forkit_hero_left.jpg"
                alt="Digital independence for small businesses"
                aspectRatio="3:2"
                className="rounded-sm shadow-lg"
              >
                <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-slate-900/80 to-transparent">
                  <span className="text-on-image text-lg">
                    Digitale Präsenz ohne Abhängigkeit
                  </span>
                </div>
              </ImageContainer>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 rounded-sm p-6 shadow-lg">
                <div className="font-urbanist font-semibold text-lg text-slate-900 dark:text-white">
                  &lt;code&gt; <span className="text-primary dark:text-primary-300">digitalFreiheit()</span> &lt;/code&gt;
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifest Intro Section - Left-aligned text with image top positioning */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <ImageContainer 
                src="/images/hero/manifest-hero_top.jpg"
                alt="Our manifesto for digital independence"
                aspectRatio="3:2"
                className="rounded-sm shadow-lg"
              >
                <div className="absolute top-0 left-0 p-6 w-full bg-gradient-to-b from-slate-900/80 to-transparent">
                  <span className="text-on-image-heading">
                    Manifest 1.1
                  </span>
                </div>
              </ImageContainer>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="headline-section mb-6">
                Manifest 1.1
              </h2>
              <div className="space-y-6 text-lg">
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
                  className="font-urbanist font-medium text-primary dark:text-primary-300 hover:underline"
                >
                  Vollständiges Manifest lesen →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features/CTA Boxes - Grid layout with individual cards */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
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
                className="bg-white dark:bg-slate-800 p-6 rounded-sm shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-urbanist font-semibold text-xl mb-2 text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="body-small mb-6">
                  {feature.description}
                </p>
                <Link 
                  to={feature.link} 
                  className="font-urbanist text-sm font-medium text-primary dark:text-primary-300 hover:underline inline-flex items-center"
                >
                  Mehr erfahren <span className="ml-1">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Feature - Solution section with left-positioned text */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="headline-section mb-6">
                Digitale Lösungen direkt für kleine Unternehmen
              </h2>
              <p className="body-normal mb-6">
                Wir entwickeln digitale Lösungen, die speziell auf die Bedürfnisse kleiner und mittlerer Unternehmen zugeschnitten sind. Keine unnötigen Funktionen, keine versteckten Kosten.
              </p>
              <Link 
                to="/loesungen" 
                className="font-urbanist text-primary dark:text-primary-300 hover:underline inline-flex items-center"
              >
                Alle Lösungen entdecken <span className="ml-1">→</span>
              </Link>
            </div>
            <div>
              <ImageContainer 
                src="/images/solution/solution_left.jpeg"
                alt="Digital solutions for small businesses"
                aspectRatio="3:2"
                className="rounded-sm shadow-lg"
              >
                <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-slate-900/80 to-transparent">
                  <span className="text-on-image text-lg">
                    Maßgeschneiderte Lösungen
                  </span>
                </div>
              </ImageContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Target Groups Section - Image with text alignment */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
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
                className="group overflow-hidden rounded-sm border border-slate-200 dark:border-slate-700 transition-all"
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
                <div className="p-4 bg-white dark:bg-slate-800 flex items-center space-x-3">
                  <span className="text-2xl">{group.icon}</span>
                  <span className="font-urbanist font-medium text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary-300 transition-colors">
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
                className="px-4 py-2 rounded-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-urbanist font-medium text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary-300 transition-colors"
              >
                {audience.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Stories Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
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
            <div className="bg-white dark:bg-slate-800 rounded-sm shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="h-48">
                <img 
                  src="/images/content/customer-story_hero_left.jpg" 
                  alt="Customer story 1" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-urbanist font-semibold text-xl mb-3 text-slate-900 dark:text-white">
                  Vom Foodora-Lieferanten zum eigenen Shop
                </h3>
                <p className="body-small mb-4">
                  Wie ein kleines Restaurant sich von Lieferplattformen unabhängig gemacht hat.
                </p>
                <Link 
                  to="/deine-story" 
                  className="font-urbanist text-sm font-medium text-primary dark:text-primary-300 hover:underline inline-flex items-center"
                >
                  Geschichte lesen <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-sm shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="h-48">
                <img 
                  src="/images/content/customer-story3_hero_left.jpg" 
                  alt="Customer story 2" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-urbanist font-semibold text-xl mb-3 text-slate-900 dark:text-white">
                  Fotografin findet Kunden ohne Instagram
                </h3>
                <p className="body-small mb-4">
                  Wie eine selbständige Fotografin ihre eigene digitale Präsenz aufgebaut hat.
                </p>
                <Link 
                  to="/deine-story" 
                  className="font-urbanist text-sm font-medium text-primary dark:text-primary-300 hover:underline inline-flex items-center"
                >
                  Geschichte lesen <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-sm shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="h-48">
                <img 
                  src="/images/content/restaurant_right.jpeg" 
                  alt="Customer story 3" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-urbanist font-semibold text-xl mb-3 text-slate-900 dark:text-white">
                  Vom Etsy-Shop zur eigenen Plattform
                </h3>
                <p className="body-small mb-4">
                  Wie ein kleines Handwerksunternehmen nach Jahren auf Etsy unabhängig wurde.
                </p>
                <Link 
                  to="/deine-story" 
                  className="font-urbanist text-sm font-medium text-primary dark:text-primary-300 hover:underline inline-flex items-center"
                >
                  Geschichte lesen <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section - Text on right, image on left */}
      <section className="py-16 bg-primary-50 dark:bg-primary-950/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <ImageContainer 
                src="/images/content/forkit_restaurant_tablet.jpg"
                alt="Join the movement for digital independence"
                aspectRatio="16:9"
                className="rounded-sm shadow-lg"
              >
                <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-slate-900/80 to-transparent">
                  <span className="text-on-image text-lg">
                    Digitale Unabhängigkeit für kleine Unternehmen
                  </span>
                </div>
              </ImageContainer>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="headline-section mb-6">
                Werde Teil der Bewegung
              </h2>
              <p className="body-normal mb-8">
                Wir wollen digitale Unabhängigkeit zurückgewinnen - für dich und dein Geschäft.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/warteliste" 
                  className="bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-sm font-urbanist font-medium text-base shadow-sm transition-all"
                >
                  {t('waitlist.title')}
                </Link>
                <Link 
                  to="/deine-story" 
                  className="bg-transparent border border-primary text-primary dark:text-primary-300 dark:border-primary-500 px-6 py-3 rounded-sm font-urbanist font-medium text-base hover:bg-primary/5 dark:hover:bg-primary-900/30 transition-all"
                >
                  {t('story.title')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage; 