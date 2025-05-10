import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const BlogPage: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Category options
  const categories = [
    { id: 'all', name: 'Alle Artikel' },
    { id: 'criticism', name: 'Plattformkritik' },
    { id: 'alternatives', name: 'Alternativen' },
    { id: 'case-studies', name: 'Fallstudien' },
    { id: 'insights', name: 'Analysen' }
  ];

  // Demo blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Die wahren Kosten von Lieferplattformen',
      excerpt: 'Ein Einblick in die versteckten Kosten und Abhängigkeiten, die Restaurants durch die Zusammenarbeit mit großen Lieferplattformen entstehen.',
      category: 'criticism',
      author: 'Markus Weber',
      date: '2023-11-15',
      readTime: 8,
      image: 'bg-gray-100'
    },
    {
      id: 2,
      title: 'Open-Source Alternativen für Onlineshops',
      excerpt: 'Eine Übersicht der besten Open-Source-Lösungen, die kleinen Händlern mehr Kontrolle und niedrigere Kosten bieten können.',
      category: 'alternatives',
      author: 'Sarah Müller',
      date: '2023-10-28',
      readTime: 12,
      image: 'bg-gray-100'
    },
    {
      id: 3,
      title: 'Wie ein Café die Plattformabhängigkeit überwunden hat',
      excerpt: 'Die Geschichte eines Berliner Cafés, das durch eigene digitale Lösungen seine Unabhängigkeit zurückgewonnen hat.',
      category: 'case-studies',
      author: 'Jana Krause',
      date: '2023-09-22',
      readTime: 6,
      image: 'bg-gray-100'
    },
    {
      id: 4,
      title: 'Die dunkle Seite der Sichtbarkeits-Algorithmen',
      excerpt: 'Wie Plattformen mit intransparenten Algorithmen die Sichtbarkeit kleiner Anbieter steuern und was das für die digitale Wirtschaft bedeutet.',
      category: 'criticism',
      author: 'Thomas Schmidt',
      date: '2023-11-05',
      readTime: 10,
      image: 'bg-gray-100'
    },
    {
      id: 5,
      title: 'Der Aufstieg gemeinschaftlich geführter digitaler Plattformen',
      excerpt: 'Ein Blick auf neue Modelle von Plattformen, die im Besitz ihrer Nutzer:innen stehen und demokratisch verwaltet werden.',
      category: 'insights',
      author: 'Laura Becker',
      date: '2023-10-12',
      readTime: 9,
      image: 'bg-gray-100'
    },
    {
      id: 6,
      title: 'Vom Plattformarbeiter zum unabhängigen Anbieter',
      excerpt: 'Wie Freelancer und Gig-Worker ihre Unabhängigkeit zurückgewinnen können – mit praktischen Schritten und Werkzeugen.',
      category: 'alternatives',
      author: 'Kai Hoffmann',
      date: '2023-09-10',
      readTime: 7,
      image: 'bg-gray-100'
    }
  ];

  // Filter posts by category
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  // Format date from YYYY-MM-DD to DD.MM.YYYY
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE');
  };

  return (
    <main className="pt-24 pb-16">
      {/* Header Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Blog / Dossier" 
            subtitle="Artikel, Analysen und Fallstudien zur digitalen Unabhängigkeit und Plattformkritik"
            centered
          />
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-primary/10 h-64 md:h-full flex items-center justify-center">
                  <span className="text-primary font-lexend font-bold text-5xl opacity-30">
                    Dossier
                  </span>
                </div>
                <div className="p-8">
                  <span className="inline-block text-xs font-medium bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded mb-4">
                    Plattformkritik
                  </span>
                  <h2 className="font-lexend font-bold text-2xl text-dark mb-4">
                    Die große Plattformumleitung: Warum wir alternative Wege brauchen
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Ein umfassender Blick auf die zunehmende Dominanz der großen digitalen Plattformen und ihre Auswirkungen auf kleine Unternehmen, Selbstständige und Verbraucher.
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <span className="mr-4">Von Redaktion FORKIT</span>
                    <span className="mr-4">15.11.2023</span>
                    <span>Lesezeit: 15 Min.</span>
                  </div>
                  <Link 
                    to="#" 
                    className="inline-flex items-center text-primary hover:underline font-lexend font-medium"
                  >
                    Zum Dossier <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-md text-sm font-lexend transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div 
                key={post.id} 
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div className={`${post.image} h-48 flex items-center justify-center`}>
                  <span className="font-lexend font-bold text-primary/30 text-2xl">
                    {post.category === 'criticism' ? 'Plattformkritik' : 
                     post.category === 'alternatives' ? 'Alternativen' :
                     post.category === 'case-studies' ? 'Fallstudie' : 'Analyse'}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-medium bg-gray-100 text-gray-800 px-2.5 py-0.5 rounded">
                      {post.category === 'criticism' ? 'Plattformkritik' : 
                       post.category === 'alternatives' ? 'Alternativen' :
                       post.category === 'case-studies' ? 'Fallstudie' : 'Analyse'}
                    </span>
                    <span className="text-xs text-gray-500">
                      {formatDate(post.date)}
                    </span>
                  </div>
                  
                  <h3 className="font-lexend font-bold text-xl text-dark mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">
                      Von {post.author}
                    </span>
                    <span className="text-xs text-gray-500">
                      {post.readTime} Min. Lesezeit
                    </span>
                  </div>
                  
                  <Link 
                    to="#" 
                    className="mt-4 inline-flex items-center text-primary hover:underline font-lexend font-medium text-sm"
                  >
                    Weiterlesen <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-lexend font-bold text-xl text-dark mb-2">
                Keine Artikel in dieser Kategorie
              </h3>
              <p className="text-gray-600 mb-6">
                Wir arbeiten daran, mehr Inhalte zu diesem Thema zu erstellen.
              </p>
              <button 
                onClick={() => setActiveCategory('all')}
                className="text-primary hover:underline font-lexend font-medium"
              >
                Alle Artikel anzeigen
              </button>
            </div>
          )}
          
          {filteredPosts.length > 0 && (
            <div className="mt-12 text-center">
              <button className="bg-transparent border border-primary text-primary px-6 py-3 rounded-md font-lexend font-medium text-base hover:bg-primary/5 transition-all">
                Mehr Artikel laden
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50 mt-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-lexend font-bold text-2xl text-dark mb-4">
              Bleib informiert
            </h2>
            <p className="text-gray-600 mb-8">
              Erhalte regelmäßig neue Artikel und Updates zu digitaler Unabhängigkeit direkt in dein Postfach.
            </p>
            
            <form className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Deine E-Mail-Adresse"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
                <button
                  type="submit"
                  className="whitespace-nowrap bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md font-lexend font-medium shadow-sm transition-all"
                >
                  Abonnieren
                </button>
              </div>
              <p className="text-xs text-gray-500">
                Wir respektieren deine Privatsphäre. Abmeldung jederzeit möglich.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage; 