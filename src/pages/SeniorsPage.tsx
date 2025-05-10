import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import ImageContainer from '../components/ImageContainer';

const SeniorsPage: React.FC = () => {
  const { t } = useTranslation();

  // Benefits specific to seniors
  const benefits = [
    {
      title: "Einfache Bedienung",
      description: "Unsere Lösungen sind speziell für Menschen entwickelt, die nicht mit der digitalen Welt aufgewachsen sind.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Keine Abhängigkeit",
      description: "Eigene digitale Präsenz ohne die Kontrolle großer Plattformen und ohne versteckte Kosten.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Altersgerechte Gestaltung",
      description: "Größere Schrift, kontrastreiche Farben und übersichtliche Navigation für einfachen Zugang.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
    },
    {
      title: "Persönliche Schulung",
      description: "Wir begleiten Sie Schritt für Schritt in die digitale Welt mit persönlicher Betreuung.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return (
    <main className="bg-light dark:bg-slate-900 transition-colors duration-300">
      {/* Hero Section - Text on right (as indicated by filename), image on left */}
      <section className="min-h-[60vh] flex items-center pt-24 pb-16 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <ImageContainer 
                src="/images/senior/forkit_senior_right.jpeg"
                alt="Digital independence for seniors"
                aspectRatio="3:2"
                className="rounded-sm shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h1 className="headline-hero">
                Digitale Unabhängigkeit für Senioren
              </h1>
              <p className="body-large mt-6 max-w-lg">
                Wir helfen älteren Menschen, die digitale Welt ohne Abhängigkeit von komplexen Plattformen zu nutzen.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link 
                  to="/warteliste" 
                  className="bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-sm font-urbanist font-medium text-base shadow-sm transition-all"
                >
                  Beratungstermin vereinbaren
                </Link>
                <Link 
                  to="/loesungen" 
                  className="bg-transparent border border-primary text-primary dark:text-primary-300 dark:border-primary-500 px-6 py-3 rounded-sm font-urbanist font-medium text-base hover:bg-primary/5 dark:hover:bg-primary-900/30 transition-all"
                >
                  Lösungen entdecken
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <SectionTitle 
              title="Digitale Herausforderungen im Alter" 
              subtitle="Warum viele Senioren mit heutigen digitalen Angeboten Schwierigkeiten haben"
              centered
            />
            
            <div className="mt-10 space-y-6">
              <p className="body-normal">
                Viele digitale Angebote und Plattformen sind nicht für ältere Menschen konzipiert. Sie setzen technisches Verständnis voraus, haben kleine Schrift und komplexe Bedienkonzepte. Dazu kommen undurchsichtige Kosten, Datenschutzprobleme und ständige Änderungen der Oberfläche.
              </p>
              <p className="body-normal">
                Große Plattformen wie Facebook oder Instagram sind für die Bedürfnisse junger Menschen optimiert. Die Folge: Viele Senioren fühlen sich von der digitalen Welt ausgeschlossen oder sind auf Hilfe angewiesen.
              </p>
              <p className="body-normal">
                Wir glauben, dass es besser geht. Mit maßgeschneiderten, altersgerechten Lösungen ermöglichen wir echte digitale Teilhabe - ohne Abhängigkeit von großen Plattformen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Vorteile für Senioren" 
            subtitle="Unsere Lösungen sind speziell auf die Bedürfnisse älterer Menschen zugeschnitten"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-slate-800 p-8 rounded-sm shadow-sm border border-slate-200 dark:border-slate-700"
              >
                <div className="mb-4 bg-primary-50 dark:bg-primary-900/30 p-4 inline-block rounded-full">
                  {benefit.icon}
                </div>
                <h3 className="font-urbanist font-semibold text-xl mb-3 text-slate-900 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="body-normal">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-50 dark:bg-primary-950/30 p-8 rounded-sm">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src="/images/content/forkit_contact.jpg" 
                    alt="Margarete, 72" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-slate-700 dark:text-slate-300 text-lg italic">
                    "Ich wollte schon lange eine Webseite für meinen Handarbeitskreis, aber die Angebote waren immer viel zu kompliziert. Mit Forkit konnte ich endlich eine einfache, schöne Seite erstellen, die ich selbst pflegen kann. Jetzt finden neue Interessenten unseren Kreis viel leichter!"
                  </p>
                  <p className="mt-4 font-urbanist font-semibold text-slate-900 dark:text-white">
                    Margarete, 72
                  </p>
                  <p className="text-primary dark:text-primary-300 text-sm">
                    Leiterin eines Handarbeitskreises
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Unsere Lösungen für Senioren" 
            subtitle="Maßgeschneiderte digitale Angebote für Menschen im Ruhestand"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white dark:bg-slate-800 rounded-sm shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="h-48">
                <img 
                  src="/images/solution/solution-website.jpg" 
                  alt="Eigene Webseite" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-urbanist font-semibold text-xl mb-3 text-slate-900 dark:text-white">
                  Einfache Webseiten
                </h3>
                <p className="body-small mb-4">
                  Übersichtliche, barrierefreie Webseiten für Vereine, Gruppen oder persönliche Präsenz. Mit großer Schrift und klarer Navigation.
                </p>
                <Link 
                  to="/loesungen#websites" 
                  className="font-urbanist text-sm font-medium text-primary dark:text-primary-300 hover:underline inline-flex items-center"
                >
                  Mehr erfahren <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-sm shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="h-48">
                <img 
                  src="/images/solution/solution-booking.jpg" 
                  alt="Terminbuchung" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-urbanist font-semibold text-xl mb-3 text-slate-900 dark:text-white">
                  Digitale Gruppenverwaltung
                </h3>
                <p className="body-small mb-4">
                  Verwalten Sie Ihre Gruppe oder Ihren Verein digital. Mit einfacher Mitgliederverwaltung, Terminplanung und Nachrichtenfunktion.
                </p>
                <Link 
                  to="/loesungen#booking" 
                  className="font-urbanist text-sm font-medium text-primary dark:text-primary-300 hover:underline inline-flex items-center"
                >
                  Mehr erfahren <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-sm shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="h-48">
                <img 
                  src="/images/solution/solution-newsletter.jpg" 
                  alt="Digitale Schulung" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-urbanist font-semibold text-xl mb-3 text-slate-900 dark:text-white">
                  Persönliche Schulung
                </h3>
                <p className="body-small mb-4">
                  Individuelle Schulungen und Begleitung bei der Nutzung digitaler Angebote. Von der Einrichtung bis zur regelmäßigen Nutzung.
                </p>
                <Link 
                  to="/loesungen#training" 
                  className="font-urbanist text-sm font-medium text-primary dark:text-primary-300 hover:underline inline-flex items-center"
                >
                  Mehr erfahren <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-50 dark:bg-primary-950/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="headline-section mb-6">
              Starten Sie Ihre digitale Unabhängigkeit
            </h2>
            <p className="body-large mb-8">
              Wir begleiten Sie gerne auf Ihrem Weg in die digitale Welt - mit Lösungen, die zu Ihnen passen.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                to="/warteliste" 
                className="bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-sm font-urbanist font-medium text-base shadow-sm transition-all"
              >
                Kostenloses Erstgespräch vereinbaren
              </Link>
              <Link 
                to="/deine-story" 
                className="bg-transparent border border-primary text-primary dark:text-primary-300 dark:border-primary-500 px-6 py-3 rounded-sm font-urbanist font-medium text-base hover:bg-primary/5 dark:hover:bg-primary-900/30 transition-all"
              >
                Erfolgsgeschichten lesen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SeniorsPage; 