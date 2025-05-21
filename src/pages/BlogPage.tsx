import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const BlogPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const currentLang = i18n.language;
  
  useEffect(() => {
    document.title = `${currentLang === 'de' ? 'Dossier & Blog' : 'Dossier & Blog'} | Fork:it`;
    
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, [currentLang]);
  
  // Category options
  const categories = [
    { id: 'all', name: currentLang === 'de' ? 'Alle Artikel' : 'All Articles' },
    { id: 'criticism', name: currentLang === 'de' ? 'Plattformkritik' : 'Platform Critique' },
    { id: 'alternatives', name: currentLang === 'de' ? 'Alternativen' : 'Alternatives' },
    { id: 'case-studies', name: currentLang === 'de' ? 'Fallstudien' : 'Case Studies' },
    { id: 'insights', name: currentLang === 'de' ? 'Analysen' : 'Insights' }
  ];

  // Demo blog posts data with image paths
  const blogPosts = [
    {
      id: 1,
      title: currentLang === 'de' ? 'Die wahren Kosten von Lieferplattformen' : 'The True Costs of Delivery Platforms',
      excerpt: currentLang === 'de' 
        ? 'Ein Einblick in die versteckten Kosten und Abhängigkeiten, die Restaurants durch die Zusammenarbeit mit großen Lieferplattformen entstehen.' 
        : 'An insight into the hidden costs and dependencies that arise for restaurants through working with large delivery platforms.',
      category: 'criticism',
      author: 'Markus Weber',
      date: '2023-11-15',
      readTime: 8,
      imagePath: '/images/content/restaurant_right.jpeg'
    },
    {
      id: 2,
      title: currentLang === 'de' ? 'Open-Source Alternativen für Onlineshops' : 'Open Source Alternatives for Online Shops',
      excerpt: currentLang === 'de'
        ? 'Eine Übersicht der besten Open-Source-Lösungen, die kleinen Händlern mehr Kontrolle und niedrigere Kosten bieten können.'
        : 'An overview of the best open source solutions that can offer small retailers more control and lower costs.',
      category: 'alternatives',
      author: 'Sarah Müller',
      date: '2023-10-28',
      readTime: 12,
      imagePath: '/images/content/customer-story4.jpg'
    },
    {
      id: 3,
      title: currentLang === 'de' ? 'Wie ein Café die Plattformabhängigkeit überwunden hat' : 'How a Café Overcame Platform Dependency',
      excerpt: currentLang === 'de'
        ? 'Die Geschichte eines Berliner Cafés, das durch eigene digitale Lösungen seine Unabhängigkeit zurückgewonnen hat.'
        : 'The story of a Berlin café that regained its independence through its own digital solutions.',
      category: 'case-studies',
      author: 'Jana Krause',
      date: '2023-09-22',
      readTime: 6,
      imagePath: '/images/content/forkit_restaurant_tablet.jpg'
    },
    {
      id: 4,
      title: currentLang === 'de' ? 'Die dunkle Seite der Sichtbarkeits-Algorithmen' : 'The Dark Side of Visibility Algorithms',
      excerpt: currentLang === 'de'
        ? 'Wie Plattformen mit intransparenten Algorithmen die Sichtbarkeit kleiner Anbieter steuern und was das für die digitale Wirtschaft bedeutet.'
        : 'How platforms use non-transparent algorithms to control the visibility of small providers and what this means for the digital economy.',
      category: 'criticism',
      author: 'Thomas Schmidt',
      date: '2023-11-05',
      readTime: 10,
      imagePath: '/images/content/customer-story7.jpg'
    },
    {
      id: 5,
      title: currentLang === 'de' ? 'Der Aufstieg gemeinschaftlich geführter digitaler Plattformen' : 'The Rise of Community-Led Digital Platforms',
      excerpt: currentLang === 'de'
        ? 'Ein Blick auf neue Modelle von Plattformen, die im Besitz ihrer Nutzer:innen stehen und demokratisch verwaltet werden.'
        : 'A look at new models of platforms that are owned by their users and democratically managed.',
      category: 'insights',
      author: 'Laura Becker',
      date: '2023-10-12',
      readTime: 9,
      imagePath: '/images/content/forkit_sportive_woman_left.jpg'
    },
    {
      id: 6,
      title: currentLang === 'de' ? 'Vom Plattformarbeiter zum unabhängigen Anbieter' : 'From Platform Worker to Independent Provider',
      excerpt: currentLang === 'de'
        ? 'Wie Freelancer und Gig-Worker ihre Unabhängigkeit zurückgewinnen können – mit praktischen Schritten und Werkzeugen.'
        : 'How freelancers and gig workers can regain their independence – with practical steps and tools.',
      category: 'alternatives',
      author: 'Kai Hoffmann',
      date: '2023-09-10',
      readTime: 7,
      imagePath: '/images/content/forkit_yoga_instructor_right.jpg'
    }
  ];

  // Filter posts by category
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  // Format date from YYYY-MM-DD to DD.MM.YYYY
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(currentLang === 'de' ? 'de-DE' : 'en-US');
  };

  // Get category name for display
  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : categoryId;
  };

  return (
    <main>
      {/* Hero Section - Fullscreen with image */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-black">
          <img 
            src="/images/content/manifest_top.jpg" 
            alt="Dossier Header" 
            className="w-full h-full object-cover opacity-75"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-lexend font-bold text-white mb-6">
              {currentLang === 'de' ? 'Dossier & Blog' : 'Dossier & Blog'}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10">
              {currentLang === 'de' 
                ? 'Analysen, Geschichten und Perspektiven rund um die Bewegung für digitale Unabhängigkeit' 
                : 'Analyses, stories, and perspectives around the movement for digital independence'}
            </p>
            <div>
              <a 
                href="#content" 
                className="bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-md font-lexend font-medium text-lg shadow-lg transition-all"
              >
                {currentLang === 'de' ? 'Entdecken' : 'Explore'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="content" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Site Navigation */}
          <div className="mb-16">
            <nav className="bg-white p-5 rounded-lg shadow-md">
              <ul className="flex flex-wrap justify-center md:justify-between gap-6 text-sm font-lexend font-medium">
                <li>
                  <a href="#featured" className="text-gray-700 hover:text-primary">{currentLang === 'de' ? 'Aktuelles Dossier' : 'Current Dossier'}</a>
                </li>
                <li>
                  <a href="#articles" className="text-gray-700 hover:text-primary">{currentLang === 'de' ? 'Artikel' : 'Articles'}</a>
                </li>
                <li>
                  <a href="#case-studies" className="text-gray-700 hover:text-primary">{currentLang === 'de' ? 'Fallstudien' : 'Case Studies'}</a>
                </li>
                <li>
                  <a href="#resources" className="text-gray-700 hover:text-primary">{currentLang === 'de' ? 'Ressourcen' : 'Resources'}</a>
                </li>
                <li>
                  <a href="#subscribe" className="text-gray-700 hover:text-primary">{currentLang === 'de' ? 'Newsletter' : 'Newsletter'}</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Featured Dossier */}
          <section id="featured" className="mb-24">
            <SectionTitle 
              title={currentLang === 'de' ? 'Aktuelles Dossier' : 'Current Dossier'}
              subtitle={currentLang === 'de' ? 'Umfassende Analysen zu Plattformkritik und digitaler Selbstbestimmung' : 'Comprehensive analyses on platform critique and digital self-determination'}
            />
            
            <div className="mt-12 relative overflow-hidden rounded-lg shadow-2xl">
              <div className="h-96 md:h-[500px] bg-black">
                <img 
                  src="/images/content/texture_3.jpg" 
                  alt="Dossier Cover" 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <span className="inline-block px-3 py-1 bg-primary text-white rounded-md text-sm font-medium mb-4">
                  {currentLang === 'de' ? 'Dossier' : 'Dossier'}
                </span>
                <h2 className="text-3xl md:text-4xl font-lexend font-bold text-white mb-4">
                  {currentLang === 'de' 
                    ? 'Die große Plattformumleitung: Warum wir alternative Wege brauchen' 
                    : 'The Great Platform Detour: Why We Need Alternative Paths'}
                </h2>
                <p className="text-white/90 text-lg mb-6 max-w-3xl">
                  {currentLang === 'de'
                    ? 'Ein umfassender Blick auf die zunehmende Dominanz der großen digitalen Plattformen und ihre Auswirkungen auf kleine Unternehmen, Selbstständige und Verbraucher.'
                    : 'A comprehensive look at the increasing dominance of large digital platforms and their impact on small businesses, freelancers, and consumers.'}
                </p>
                <div className="flex flex-wrap items-center gap-6 text-white/80 mb-8">
                  <span>{currentLang === 'de' ? 'Von Redaktion Fork:it' : 'By Fork:it Editorial Team'}</span>
                  <span>15.11.2023</span>
                  <span>{currentLang === 'de' ? 'Lesezeit: 15 Min.' : 'Reading time: 15 min.'}</span>
                </div>
                <Link 
                  to="#" 
                  className="inline-flex items-center bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-lexend font-medium transition-all"
                >
                  {currentLang === 'de' ? 'Dossier lesen' : 'Read Dossier'} <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Articles Section */}
          <section id="articles" className="mb-24">
            <SectionTitle 
              title={currentLang === 'de' ? 'Aktuelle Artikel' : 'Latest Articles'}
              subtitle={currentLang === 'de' ? 'Perspektiven und Analysen zur digitalen Unabhängigkeit' : 'Perspectives and analyses on digital independence'}
            />
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mt-10 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2.5 rounded-md text-sm font-lexend transition-all ${
                    activeCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div 
                  key={post.id} 
                  className="group bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 hover:shadow-xl transition-all"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={post.imagePath} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-medium rounded-md">
                        {getCategoryName(post.category)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-lexend font-bold text-xl text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                          <span className="text-primary font-medium text-xs">
                            {post.author.split(' ').map(name => name[0]).join('')}
                          </span>
                        </div>
                        <span className="text-sm text-gray-700">
                          {post.author}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 flex items-center">
                        <span className="mr-2">{formatDate(post.date)}</span>
                        <span>•</span>
                        <span className="ml-2">{post.readTime} {currentLang === 'de' ? 'Min.' : 'min'}</span>
                      </div>
                    </div>
                    
                    <Link 
                      to="#" 
                      className="mt-5 inline-flex items-center text-primary hover:text-primary-600 font-lexend font-medium text-sm"
                    >
                      {currentLang === 'de' ? 'Weiterlesen' : 'Read more'} <span className="ml-1">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-16 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-lexend font-bold text-xl text-gray-900 mb-2">
                  {currentLang === 'de' ? 'Keine Artikel in dieser Kategorie' : 'No articles in this category'}
                </h3>
                <p className="text-gray-600 mb-6">
                  {currentLang === 'de' 
                    ? 'Wir arbeiten daran, mehr Inhalte zu diesem Thema zu erstellen.' 
                    : 'We are working on creating more content on this topic.'}
                </p>
                <button 
                  onClick={() => setActiveCategory('all')}
                  className="text-primary hover:underline font-lexend font-medium"
                >
                  {currentLang === 'de' ? 'Alle Artikel anzeigen' : 'Show all articles'}
                </button>
              </div>
            )}
            
            {filteredPosts.length > 0 && filteredPosts.length >= 6 && (
              <div className="mt-12 text-center">
                <button className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-md font-lexend font-medium text-base transition-all">
                  {currentLang === 'de' ? 'Mehr Artikel laden' : 'Load more articles'}
                </button>
              </div>
            )}
          </section>
          
          {/* Resources Section */}
          <section id="resources" className="mb-24">
            <SectionTitle 
              title={currentLang === 'de' ? 'Ressourcen' : 'Resources'}
              subtitle={currentLang === 'de' ? 'Werkzeuge und Materialien für deine digitale Unabhängigkeit' : 'Tools and materials for your digital independence'}
            />
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 hover:shadow-md transition-all flex flex-col">
                <div className="bg-primary/10 w-12 h-12 rounded-md flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-lexend font-bold text-xl text-gray-900 mb-3">
                  {currentLang === 'de' ? 'Leitfäden & E-Books' : 'Guides & E-Books'}
                </h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {currentLang === 'de'
                    ? 'Ausführliche Anleitungen und Handbücher für den Weg in die digitale Unabhängigkeit.'
                    : 'Detailed instructions and manuals for the path to digital independence.'}
                </p>
                <Link 
                  to="#" 
                  className="inline-flex items-center text-primary hover:text-primary-600 font-lexend font-medium text-sm"
                >
                  {currentLang === 'de' ? 'Entdecken' : 'Explore'} <span className="ml-1">→</span>
                </Link>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 hover:shadow-md transition-all flex flex-col">
                <div className="bg-primary/10 w-12 h-12 rounded-md flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="font-lexend font-bold text-xl text-gray-900 mb-3">
                  {currentLang === 'de' ? 'Vorlagen & Tools' : 'Templates & Tools'}
                </h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {currentLang === 'de'
                    ? 'Direkt einsetzbare Werkzeuge und Vorlagen für deine digitalen Projekte.'
                    : 'Ready-to-use tools and templates for your digital projects.'}
                </p>
                <Link 
                  to="#" 
                  className="inline-flex items-center text-primary hover:text-primary-600 font-lexend font-medium text-sm"
                >
                  {currentLang === 'de' ? 'Herunterladen' : 'Download'} <span className="ml-1">→</span>
                </Link>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 hover:shadow-md transition-all flex flex-col">
                <div className="bg-primary/10 w-12 h-12 rounded-md flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                  </svg>
                </div>
                <h3 className="font-lexend font-bold text-xl text-gray-900 mb-3">
                  {currentLang === 'de' ? 'Webinare & Videos' : 'Webinars & Videos'}
                </h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {currentLang === 'de'
                    ? 'Aufzeichnungen und Live-Termine rund um die Themen digitale Unabhängigkeit und Plattformkritik.'
                    : 'Recordings and live events on digital independence and platform critique.'}
                </p>
                <Link 
                  to="#" 
                  className="inline-flex items-center text-primary hover:text-primary-600 font-lexend font-medium text-sm"
                >
                  {currentLang === 'de' ? 'Anschauen' : 'Watch'} <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </section>
          
          {/* Newsletter Section */}
          <section id="subscribe" className="py-16 bg-gray-50 rounded-lg">
            <div className="max-w-3xl mx-auto text-center px-4 md:px-0">
              <h2 className="font-lexend font-bold text-3xl text-gray-900 mb-4">
                {currentLang === 'de' ? 'Bleib informiert' : 'Stay Informed'}
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                {currentLang === 'de'
                  ? 'Erhalte regelmäßig neue Artikel, Dossiers und Updates zu digitaler Unabhängigkeit direkt in dein Postfach.'
                  : 'Regularly receive new articles, dossiers, and updates on digital independence directly in your inbox.'}
              </p>
              
              <form className="space-y-4">
                <div className="flex flex-col md:flex-row gap-3">
                  <input
                    type="email"
                    placeholder={currentLang === 'de' ? 'Deine E-Mail-Adresse' : 'Your email address'}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                  <button
                    type="submit"
                    className="whitespace-nowrap bg-primary hover:bg-primary-600 text-white px-8 py-3 rounded-md font-lexend font-medium shadow-md transition-all"
                  >
                    {currentLang === 'de' ? 'Abonnieren' : 'Subscribe'}
                  </button>
                </div>
                <p className="text-xs text-gray-500">
                  {currentLang === 'de'
                    ? 'Wir respektieren deine Privatsphäre. Abmeldung jederzeit möglich.'
                    : 'We respect your privacy. Unsubscribe at any time.'}
                </p>
              </form>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default BlogPage; 