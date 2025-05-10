import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';

const ManifestPage: React.FC = () => {
  const { t } = useTranslation();
  const [viewMode, setViewMode] = useState<'verse' | 'prose'>('verse');

  // Verse-style manifest (numbered points)
  const verseManifest = [
    {
      number: 1,
      text: "Wir sehen, was passiert. Die digitale Welt gehört nicht mehr den Menschen, die sie nutzen. Sie gehört den Plattformen, die sie kontrollieren. Jede Buchung, jede Sichtbarkeit – sie kostet. Nicht nur Geld, sondern Unabhängigkeit."
    },
    {
      number: 2,
      text: "Kleine Unternehmen, Selbstständige, Kreative – sie kämpfen täglich, um sichtbar zu bleiben. Aber die Systeme sind gegen sie gebaut. Wer nicht zahlt, wird nicht gesehen. Wer nicht mitmacht, bleibt draußen."
    },
    {
      number: 3,
      text: "Sichtbarkeit ist zur Ware geworden. Und die größten Plattformen halten das Monopol. Sie vermieten Reichweite, verlangen Gebühren, sammeln Daten – und kontrollieren den Zugang."
    },
    {
      number: 4,
      text: "Das Internet war einmal frei. Heute ist es ein Netz aus Verträgen, Abhängigkeiten und Algorithmen. Nicht jede Plattform ist schlecht. Aber die großen ziehen die Kontrolle an sich – und lassen die Kleinen zurück."
    },
    {
      number: 5,
      text: "Wir sagen: Es geht anders. Wir glauben an ein anderes digitales Modell. Eines, das Menschen stärkt – nicht ihre Abhängigkeit."
    },
    {
      number: 6,
      text: "Wir bauen Werkzeuge, die dir gehören. Webseiten, die du selbst bedienen kannst. Shops ohne Prozentabgabe. Buchungen ohne monatliche Gebühren. Technik, die sichtbar macht – nicht versteckt."
    },
    {
      number: 7,
      text: "Wir zeigen Alternativen, die existieren – aber kaum einer kennt. Weil sie Open Source sind. Weil sie Beratung brauchen. Weil sie keine Werbung schalten."
    },
    {
      number: 8,
      text: "Wir sind Entwickler:innen, Kreative, Strateg:innen. Wir sind keine klassische Agentur. Wir sind eine Bewegung. Und wir arbeiten für dich – damit du für deine Kunden da sein kannst."
    },
    {
      number: 9,
      text: "Du bekommst einen echten Menschen, keinen anonymen Support. Du bekommst Beratung und Umsetzung, keinen Lizenzvertrag."
    },
    {
      number: 10,
      text: "Es geht nicht um Technik. Es geht um Würde. Es geht um deine Arbeit. Deine Sichtbarkeit. Deine digitale Freiheit."
    }
  ];

  // Prose-style manifest (paragraph form)
  const proseManifest = `
    Wir sehen, was passiert: Die digitale Welt gehört nicht mehr den Menschen, die sie nutzen – sondern den Plattformen, die sie kontrollieren. Sichtbarkeit kostet. Zugriff kostet. Nicht nur Geld, sondern Unabhängigkeit.

    Kleine Unternehmen, Selbstständige und Kreative kämpfen täglich darum, gesehen zu werden. Doch die digitalen Systeme sind nicht für sie gemacht. Wer nicht zahlt, wird nicht gefunden. Wer nicht mitspielt, bleibt unsichtbar.

    Sichtbarkeit ist zur Ware geworden – und die größten Plattformen halten das Monopol. Sie vermieten Reichweite, kassieren Gebühren, sammeln Daten und lenken den Zugang. Nicht jede Plattform ist schlecht. Aber die Großen machen die Spielregeln. Und für viele bleibt nur das Nachsehen.

    Wir glauben, dass es anders geht.

    Wir glauben an ein digitales Modell, das Menschen stärkt – nicht ihre Abhängigkeit. Deshalb bauen wir Werkzeuge, die dir gehören: Websites, die du selbst pflegen kannst. Shops ohne Umsatzbeteiligung. Buchungssysteme ohne laufende Gebühren. Sichtbarkeit ohne Abo-Zwang.

    Die Alternativen gibt es längst – im Open-Source-Bereich, dezentral, unabhängig. Was fehlt, ist jemand, der sie für dich auswählt, aufsetzt, erklärt. Genau das tun wir.

    Wir sind keine klassische Agentur. Wir sind eine Bewegung. Ein Netzwerk aus Entwickler:innen, Gestalter:innen und Strateg:innen, die Technologie zurück in die Hände derer geben wollen, die sie brauchen.

    Und wir arbeiten für dich – damit du für deine Kunden da sein kannst.

    Du bekommst einen echten Menschen, nicht nur ein Tool. Beratung und Umsetzung, statt Lizenzen und Knebelverträge.

    Denn am Ende geht es nicht um Technik.

    Es geht um Würde.

    Es geht um deine Arbeit, deine Sichtbarkeit, deine digitale Freiheit.
  `.split('\n\n').map(paragraph => paragraph.trim()).filter(p => p);

  return (
    <main className="pt-24 pb-16">
      {/* Header Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title={t('manifest.title')} 
            subtitle="Version 1.1 – Unsere Haltung zur digitalen Selbstbestimmung"
            centered
          />
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={() => setViewMode('verse')}
              className={`px-4 py-2 rounded-md font-lexend text-sm ${
                viewMode === 'verse' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Versartige Form
            </button>
            <button 
              onClick={() => setViewMode('prose')}
              className={`px-4 py-2 rounded-md font-lexend text-sm ${
                viewMode === 'prose' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Fließtext
            </button>
            <a 
              href="#" 
              className="px-4 py-2 rounded-md font-lexend text-sm bg-gray-800 text-white hover:bg-gray-700 flex items-center"
              onClick={(e) => e.preventDefault()}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t('manifest.downloadPdf')}
            </a>
          </div>
        </div>
      </section>

      {/* Manifest Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            {viewMode === 'verse' ? (
              <div className="space-y-12">
                {verseManifest.map((item) => (
                  <div key={item.number} className="flex">
                    <div className="mr-6">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-lexend font-bold text-primary">
                        {item.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
                
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="font-lexend font-bold text-2xl text-center text-dark">
                    Willkommen bei FORKIT.
                  </div>
                  <div className="font-lexend font-bold text-2xl text-center text-primary mt-2">
                    Das System gehört dir.
                  </div>
                </div>
              </div>
            ) : (
              <div className="prose prose-lg max-w-none">
                {proseManifest.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 mb-6 text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="font-lexend font-bold text-2xl text-center text-dark">
                    Willkommen bei FORKIT.
                  </div>
                  <div className="font-lexend font-bold text-2xl text-center text-primary mt-2">
                    Das System gehört dir.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-lexend font-bold text-3xl text-dark mb-6">
              Teile unsere Vision
            </h2>
            <p className="text-gray-600 mb-8">
              Wenn du mit unserem Manifest übereinstimmst, hilf uns dabei, die digitale Welt zu verändern.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="#" 
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-lexend font-medium text-base shadow-sm transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link kopiert!');
                }}
              >
                Manifest teilen
              </a>
              <a 
                href="/warteliste" 
                className="bg-transparent border border-primary text-primary px-6 py-3 rounded-md font-lexend font-medium text-base hover:bg-primary/5 transition-all"
              >
                {t('waitlist.title')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ManifestPage; 