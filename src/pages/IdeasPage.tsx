import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const IdeasPage: React.FC = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  // Idea status options
  const statusTypes = [
    { id: 'all', name: 'Alle Ideen' },
    { id: 'received', name: 'Eingegangen', color: 'bg-blue-100 text-blue-800' },
    { id: 'planned', name: 'Geplant', color: 'bg-purple-100 text-purple-800' },
    { id: 'inProgress', name: 'In Arbeit', color: 'bg-yellow-100 text-yellow-800' },
    { id: 'completed', name: 'Umgesetzt', color: 'bg-green-100 text-green-800' },
    { id: 'onHold', name: 'Auf Eis', color: 'bg-gray-100 text-gray-800' }
  ];

  // Demo ideas data
  const ideas = [
    {
      id: 1,
      title: 'Eigenes Buchungssystem für Restaurants',
      description: 'Ein einfaches Reservierungssystem für Restaurants, das direkt in die eigene Website integriert werden kann und keine monatlichen Gebühren kostet.',
      status: 'inProgress',
      votes: 42,
      category: 'tool',
      industry: 'gastronomy',
      date: '2023-09-15'
    },
    {
      id: 2,
      title: 'Open-Source Alternative zu Lieferando & Co.',
      description: 'Ein gemeinsames Bestellsystem für lokale Restaurants, das ohne hohe Provisionen auskommt und die direkte Beziehung zum Kunden stärkt.',
      status: 'planned',
      votes: 76,
      category: 'platform',
      industry: 'gastronomy',
      date: '2023-08-22'
    },
    {
      id: 3,
      title: 'Einfache Portfolio-Website für Kreative',
      description: 'Eine Möglichkeit für Künstler, Designer und andere Kreative, ihre Arbeiten zu präsentieren, ohne von großen Plattformen abhängig zu sein.',
      status: 'completed',
      votes: 38,
      category: 'tool',
      industry: 'creatives',
      date: '2023-10-05'
    },
    {
      id: 4,
      title: 'Gemeinsamer Marktplatz für lokale Händler',
      description: 'Eine Plattform, die lokale Händler zusammenbringt, aber in ihrem Besitz bleibt – ohne hohe Gebühren oder Abhängigkeiten.',
      status: 'received',
      votes: 51,
      category: 'platform',
      industry: 'retail',
      date: '2023-11-12'
    },
    {
      id: 5,
      title: 'Modulares Coaching-Buchungssystem',
      description: 'Ein System für Coaches und Berater:innen, um ihre Termine zu verwalten, ohne auf teure Plattformen angewiesen zu sein.',
      status: 'inProgress',
      votes: 29,
      category: 'tool',
      industry: 'coaches',
      date: '2023-10-18'
    },
    {
      id: 6,
      title: 'Verbundene Open-Source-Alternativen',
      description: 'Eine Initiative, bestehende Open-Source-Alternativen zu kommerziellen Plattformen miteinander zu verbinden und einfacher zugänglich zu machen.',
      status: 'onHold',
      votes: 63,
      category: 'initiative',
      industry: 'all',
      date: '2023-09-01'
    },
  ];

  // Filter and search ideas
  const filteredIdeas = ideas
    .filter(idea => activeFilter === 'all' || idea.status === activeFilter)
    .filter(idea => 
      searchTerm === '' || 
      idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      idea.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // Get status details for an idea
  const getStatusDetails = (statusId: string) => {
    const status = statusTypes.find(s => s.id === statusId);
    return status || statusTypes[0];
  };

  return (
    <main className="pt-24 pb-16">
      {/* Header Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Öffentliche Ideen" 
            subtitle="Verfolge den Stand unserer Lösungen und stimme für zukünftige Entwicklungen ab"
            centered
          />
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {statusTypes.map((status) => (
                <button
                  key={status.id}
                  onClick={() => setActiveFilter(status.id)}
                  className={`px-3 py-1 rounded-md text-sm font-lexend transition-all ${
                    activeFilter === status.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {status.name}
                </button>
              ))}
            </div>
            
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Ideen durchsuchen..."
                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideas List */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-6">
            {filteredIdeas.length > 0 ? (
              filteredIdeas.map((idea) => {
                const statusDetails = getStatusDetails(idea.status);
                
                return (
                  <div 
                    key={idea.id} 
                    className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all"
                  >
                    <div className="flex justify-between items-start flex-wrap gap-4">
                      <h3 className="font-lexend font-bold text-xl text-dark">
                        {idea.title}
                      </h3>
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${statusDetails.color}`}>
                        {statusDetails.name}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mt-3 mb-4">
                      {idea.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {t(`targetGroups.${idea.industry === 'all' ? 'all' : idea.industry}`)}
                      </span>
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {idea.category === 'tool' ? 'Werkzeug' : 
                          idea.category === 'platform' ? 'Plattform' : 'Initiative'}
                      </span>
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        Eingereicht: {new Date(idea.date).toLocaleDateString('de-DE')}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-1">
                        <button className="text-gray-400 hover:text-primary transition-colors">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        </button>
                        <span className="font-lexend font-medium text-gray-700">{idea.votes}</span>
                        <span className="text-sm text-gray-500">Stimmen</span>
                      </div>
                      
                      <button className="text-primary hover:underline font-lexend font-medium text-sm">
                        Details & Kommentare
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-lexend font-bold text-xl text-dark mb-2">
                  Keine Ideen gefunden
                </h3>
                <p className="text-gray-600 mb-6">
                  Versuche andere Filter oder eine andere Suche.
                </p>
                <button 
                  onClick={() => {
                    setActiveFilter('all');
                    setSearchTerm('');
                  }}
                  className="text-primary hover:underline font-lexend font-medium"
                >
                  Alle Ideen anzeigen
                </button>
              </div>
            )}
          </div>
          
          {filteredIdeas.length > 0 && (
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 mb-6">
                {ideas.length} Ideen insgesamt • {filteredIdeas.length} angezeigt
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Submit Idea CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-lexend font-bold text-2xl text-dark mb-6">
              Hast du eine eigene Idee?
            </h2>
            <p className="text-gray-600 mb-8">
              Teile deine Vorschläge für neue Lösungen zur digitalen Unabhängigkeit mit uns und der Community.
            </p>
            <Link 
              to="/deine-story" 
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-lexend font-medium text-base shadow-sm transition-all inline-block"
            >
              Eigene Idee einreichen
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IdeasPage; 