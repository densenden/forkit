import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface Author {
  name: string;
  role?: string;
  image?: string;
}

interface RelatedStory {
  id: string;
  title: string;
  image: string;
  category?: string;
}

interface StoryTemplateProps {
  title: string;
  subtitle?: string;
  heroImage: string;
  heroPosition?: 'left' | 'right' | 'center';
  category?: string;
  date?: string;
  content: React.ReactNode;
  author?: Author;
  relatedStories?: RelatedStory[];
}

const StoryTemplate: React.FC<StoryTemplateProps> = ({
  title,
  subtitle,
  heroImage,
  heroPosition = 'center',
  category,
  date,
  content,
  author,
  relatedStories = []
}) => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 pb-16 bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section 
        className="relative h-[40vh] md:h-[60vh] bg-cover bg-center flex items-center"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${heroImage})` 
        }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className={`max-w-3xl ${
            heroPosition === 'center' ? 'mx-auto text-center' :
            heroPosition === 'right' ? 'ml-auto text-right' : ''
          }`}>
            {category && (
              <span className="inline-block bg-primary text-white px-3 py-1 text-sm font-medium mb-4">
                {category}
              </span>
            )}
            <h1 className="font-lexend font-bold text-3xl md:text-5xl text-white mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl md:text-2xl text-white font-light">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                {/* Date */}
                {date && (
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">
                    {date}
                  </p>
                )}
                
                {/* Content */}
                <article className="text-gray-800 dark:text-gray-200">
                  {content}
                </article>
              </div>

              {/* Author */}
              {author && (
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center">
                    {author.image && (
                      <img 
                        src={author.image} 
                        alt={author.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                    )}
                    <div>
                      <h3 className="font-lexend font-semibold text-gray-900 dark:text-white">
                        {author.name}
                      </h3>
                      {author.role && (
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {author.role}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 dark:bg-deepblue-800 p-6 rounded-sm sticky top-24">
                <h3 className="font-lexend font-semibold text-gray-900 dark:text-white text-xl mb-4">
                  {t('story.relatedStories')}
                </h3>
                
                <div className="space-y-6">
                  {relatedStories.map((story) => (
                    <div key={story.id} className="group">
                      <Link to={`/story/${story.id}`} className="block">
                        <div className="mb-3 overflow-hidden rounded-sm">
                          <img 
                            src={story.image} 
                            alt={story.title}
                            className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        {story.category && (
                          <p className="text-xs text-primary dark:text-ocean-300 mb-1">
                            {story.category}
                          </p>
                        )}
                        <h4 className="font-lexend font-medium text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-ocean-300 transition-colors">
                          {story.title}
                        </h4>
                      </Link>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <Link 
                    to="/blog" 
                    className="font-lexend font-medium text-primary dark:text-ocean-300 text-sm hover:underline"
                  >
                    {t('story.allStories')} →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StoryTemplate; 