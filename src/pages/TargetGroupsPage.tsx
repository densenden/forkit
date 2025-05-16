import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const TargetGroupsPage: React.FC = () => {
  const { t } = useTranslation();

  // Target groups with detailed information
  const targetGroups = [
    {
      id: 'gastronomy',
      name: t('targetGroups.gastronomy'),
      icon: '🍽️',
      title: 'Gastronomie & Restaurants',
      description: 'Die meisten Restaurants sind auf Plattformen angewiesen, um online gefunden zu werden. Doch deren Gebühren schmälern die ohnehin knappen Margen drastisch.',
      problems: [
        'Hohe Provisionen bei Lieferdiensten (bis zu 30%)',
        'Abhängigkeit von Bewertungs-Plattformen',
        'Teure Tischreservierungs-Systeme',
        'Komplexe oder veraltete Digitallösungen'
      ],
      solutions: [
        'Eigene Website mit integriertem Bestellsystem',
        'Unabhängiges Reservierungssystem ohne Abokosten',
        'Direktes Liefersystem ohne Provisionen',
        'Einfache Verwaltung von Speisekarten und Angeboten'
      ],
      imagePath: '/images/target/target-gastronomy_left.jpg'
    },
    {
      id: 'retail',
      name: t('targetGroups.retail'),
      icon: '🛍️',
      title: 'Einzelhandel & kleine Shops',
      description: 'Der lokale Handel kämpft mit der Übermacht der großen Plattformen. Eigene Verkaufskanäle sind oft zu teuer oder zu komplex in der Umsetzung.',
      problems: [
        'Hohe Abhängigkeit von Marktplatz-Plattformen',
        'Versteckte Gebühren und Provisionen',
        'Schwierige Kundenbindung auf Plattformen',
        'Komplexe Shop-Systeme mit hohen laufenden Kosten'
      ],
      solutions: [
        'Eigener Online-Shop ohne Verkaufsprovisionen',
        'Direkter Kundenkontakt & Datenhoheit',
        'Einfaches Bestandsmanagement',
        'Integration von lokalen Abhol- und Lieferoptionen'
      ],
      imagePath: '/images/target/target-retail.jpg'
    },
    {
      id: 'coaches',
      name: t('targetGroups.coaches'),
      icon: '📊',
      title: 'Coaches & Beratende',
      description: 'Trainer:innen und Coaches müssen sich auf teure Buchungs- und Vermittlungsplattformen verlassen und verlieren dabei wertvolle Margen.',
      problems: [
        'Hohe Vermittlungsgebühren pro Termin',
        'Fehlendes Branding auf Buchungsportalen',
        'Begrenzte Kontrolle über den Kundenkontakt',
        'Komplexe oder unflexible Buchungssysteme'
      ],
      solutions: [
        'Eigenes Buchungssystem ohne Vermittlungsgebühren',
        'Branding-konforme digitale Präsenz',
        'Flexible Termingestaltung mit Kalender-Integration',
        'Direkter Kontakt und Nachbetreuung von Kunden'
      ],
      imagePath: '/images/target/target-coach.jpg'
    },
    {
      id: 'creatives',
      name: t('targetGroups.creatives'),
      icon: '🎨',
      title: 'Kreative & Freischaffende',
      description: 'Kreative Dienstleister:innen kämpfen mit der Sichtbarkeit im Netz und der Abhängigkeit von Plattformen, die ihre Arbeit vermitteln.',
      problems: [
        'Hohe Vermittlungsgebühren auf Kreativ-Plattformen',
        'Schwierige Preisgestaltung durch Plattform-Konkurrenz',
        'Fehlende eigene digitale Präsenz mit Portfolio',
        'Komplexe oder teure Portfolio-Verwaltung'
      ],
      solutions: [
        'Eigene Website mit integriertem Portfolio',
        'Direktes Annahmen von Aufträgen ohne Vermittler',
        'Individuelle Preisgestaltung und Angebote',
        'Einfache Darstellung von Referenzen und Arbeitsproben'
      ],
      imagePath: '/images/target/target-creative.jpg'
    }
  ];

  return (
    <main className="pt-24 pb-16">
      {/* Header Section */}
      <section className="bg-primary dark:bg-deepblue-900 py-16" style={{ opacity: 0.05 }}>
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Für wen ist das?" 
            subtitle="Wir fokussieren uns auf Branchen, die besonders von Plattform-Abhängigkeit betroffen sind"
            centered
          />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white dark:bg-deepblue-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-lexend font-bold text-2xl text-gray-900 dark:text-white mb-6">
              Plattformabhängigkeit trifft nicht alle gleich
            </h2>
            <p className="text-gray-800 dark:text-gray-200 mb-8">
              Einige Branchen leiden besonders unter der Macht der Plattformen. Wir haben uns auf diese Schwerpunkte spezialisiert, um gezielt zu helfen:
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              {targetGroups.map((group) => (
                <a
                  key={group.id}
                  href={`#${group.id}`}
                  className="image-with-text-overlay h-40 w-64 rounded-lg overflow-hidden transition-all"
                >
                  <img 
                    src={group.imagePath} 
                    alt={group.name} 
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-70 hover:opacity-80 transition-opacity"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                    <span className="text-3xl mb-2">{group.icon}</span>
                    <span className="font-lexend font-medium text-white text-lg">{group.name}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Groups Detailed */}
      <section className="py-16 bg-gray-50 dark:bg-deepblue-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-20">
            {targetGroups.map((group, index) => (
              <div 
                key={group.id} 
                id={group.id}
                className={`scroll-mt-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="image-with-text-overlay rounded-xl overflow-hidden h-full min-h-[300px]">
                    <img 
                      src={group.imagePath} 
                      alt={group.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="overlay"></div>
                    <div className="text-content p-8">
                      <div className="flex items-center mb-6">
                        <span className="text-4xl mr-4">{group.icon}</span>
                        <h3 className="font-lexend font-bold text-2xl text-white">
                          {group.title}
                        </h3>
                      </div>
                      <p className="text-white mb-8 opacity-90">
                        {group.description}
                      </p>
                      <Link 
                        to="/loesungen" 
                        className="inline-flex items-center font-lexend font-medium text-white bg-primary hover:bg-primary-600 px-4 py-2 rounded transition-all"
                        style={{ opacity: 0.8 }}
                      >
                        Unsere Lösungen für {group.name} <span className="ml-1">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-white dark:bg-deepblue-900 p-8 rounded-xl shadow-sm mb-8">
                    <h4 className="font-lexend font-semibold text-xl text-gray-900 dark:text-white mb-4 flex items-center">
                      <svg className="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      Typische Probleme
                    </h4>
                    <ul className="space-y-3 text-gray-800 dark:text-gray-200">
                      {group.problems.map((problem, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          {problem}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white dark:bg-deepblue-900 p-8 rounded-xl shadow-sm">
                    <h4 className="font-lexend font-semibold text-xl text-gray-900 dark:text-white mb-4 flex items-center">
                      <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Unsere Lösungsansätze
                    </h4>
                    <ul className="space-y-3 text-gray-800 dark:text-gray-200">
                      {group.solutions.map((solution, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary dark:bg-deepblue-900" style={{ opacity: 0.05 }}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-lexend font-bold text-3xl text-gray-900 dark:text-white mb-6">
              Keine passende Branche dabei?
            </h2>
            <p className="text-gray-800 dark:text-gray-200 mb-8">
              Wir erweitern ständig unseren Fokus. Wenn deine Branche auch von Plattformabhängigkeit betroffen ist, lass es uns wissen.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                to="/deine-story" 
                className="bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-md font-lexend font-medium text-base shadow-sm transition-all"
              >
                Erzähl uns deine Story
              </Link>
              <Link 
                to="/kontakt" 
                className="bg-transparent border border-primary text-primary dark:text-ocean-300 dark:border-ocean-300 px-6 py-3 rounded-md font-lexend font-medium text-base hover:bg-primary hover:text-white dark:hover:bg-ocean-900 transition-all"
                style={{ opacity: 0.05 }}
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TargetGroupsPage; 