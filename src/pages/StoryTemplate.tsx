import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface StoryTemplateProps {
  title: string;
  subtitle: string;
  heroImage: string;
  heroPosition?: 'left' | 'right' | 'center' | 'top';
  category: string;
  date: string;
  content: React.ReactNode;
  author?: {
    name: string;
    role?: string;
    image?: string;
  };
  relatedStories?: Array<{
    id: string;
    title: string;
    image: string;
    category: string;
  }>;
}

const StoryTemplate: React.FC<StoryTemplateProps> = ({
  title,
  subtitle,
  heroImage,
  heroPosition = 'left',
  category,
  date,
  content,
  author,
  relatedStories = []
}) => {
  const { t } = useTranslation();
  
  // Bestimme die richtige Hero-Content-Klasse basierend auf der Position
  const getHeroContentClass = () => {
    switch(heroPosition) {
      case 'right': return 'hero-content-right';
      case 'center': return 'hero-content-center';
      case 'top': return 'hero-content-center';
      default: return 'hero-content-left';
    }
  };

  return (
    <main className="pb-16">
      {/* Hero mit Vollbreite */}
      <div 
        className="hero-full-width" 
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className={getHeroContentClass()}>
          <div className="container">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-primary-600 text-white text-sm font-medium mb-4 rounded-sm" style={{ backgroundColor: 'rgba(45, 110, 126, 0.9)' }}>
                {category}
              </span>
              <h1 className="font-lexend font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
                {title}
              </h1>
              <p className="text-white text-lg md:text-xl mb-6" style={{ opacity: 0.9 }}>
                {subtitle}
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-white text-sm">
                  {date}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inhaltsbereich */}
      <section className="py-16">
        <div className="container">
          <div className="grid-2-col">
            <div className="prose max-w-prose">
              {content}
            </div>
            
            <div className="space-y-8">
              {/* Autor-Info */}
              {author && (
                <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-sm">
                  <h3 className="font-lexend font-semibold text-xl mb-4 text-slate-900 dark:text-white">
                    {t('story.author')}
                  </h3>
                  <div className="flex items-center space-x-4">
                    {author.image && (
                      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <img 
                          src={author.image} 
                          alt={author.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <p className="font-lexend font-semibold text-slate-900 dark:text-white">
                        {author.name}
                      </p>
                      {author.role && (
                        <p className="text-slate-700 dark:text-slate-300 text-sm">
                          {author.role}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Weitere Storys */}
              {relatedStories.length > 0 && (
                <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-sm">
                  <h3 className="font-lexend font-semibold text-xl mb-4 text-slate-900 dark:text-white">
                    {t('story.moreStories')}
                  </h3>
                  <div className="space-y-4">
                    {relatedStories.map((story) => (
                      <Link 
                        key={story.id}
                        to={`/deine-story/${story.id}`}
                        className="flex space-x-4 group no-underline hover:no-underline"
                      >
                        <div className="w-20 h-20 rounded-sm overflow-hidden flex-shrink-0">
                          <img 
                            src={story.image} 
                            alt={story.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div>
                          <span className="text-xs text-primary dark:text-primary-300 block mb-1">
                            {story.category}
                          </span>
                          <p className="font-lexend font-medium text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary-300 transition-colors">
                            {story.title}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-primary-50 dark:bg-primary-950/30">
        <div className="container text-center">
          <h2 className="font-lexend font-semibold text-2xl text-slate-900 dark:text-white mb-4">
            {t('story.shareYourStory')}
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
            {t('story.shareYourStoryText')}
          </p>
          <Link 
            to="/kontakt" 
            className="bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-sm font-lexend font-medium text-base shadow-sm transition-all inline-block"
          >
            {t('story.contactUs')}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default StoryTemplate; 