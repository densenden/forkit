import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ForkButton from '../components/ForkButton';

const ProjectPage: React.FC = () => {
  const { t } = useTranslation();
  const [forks, setForks] = useState(24);
  const [hasFork, setHasFork] = useState(false);
  
  const handleFork = () => {
    if (!hasFork) {
      setForks(prev => prev + 1);
      setHasFork(true);
    }
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h1 className="text-3xl font-bold mb-4 md:mb-0">Restaurant Meier Website Template</h1>
            <div className="flex items-center space-x-4">
              <div className="text-gray-600 dark:text-gray-400">
                <span>{forks} forks</span>
              </div>
              <ForkButton 
                onClick={handleFork} 
                text={hasFork ? "Forked" : t('actions.fork')}
                variant={hasFork ? "secondary" : "primary"}
                disabled={hasFork}
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-3 py-1 bg-gray-100 dark:bg-deepblue-800 rounded-sm text-sm">React</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-deepblue-800 rounded-sm text-sm">TailwindCSS</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-deepblue-800 rounded-sm text-sm">TypeScript</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-deepblue-800 rounded-sm text-sm">Restaurant</span>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300">
            A fully customizable restaurant website template with online ordering capabilities, 
            menu management, table reservations, and customer reviews - all without third-party dependencies.
          </p>
        </header>
        
        <div className="mb-10">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
            alt="Restaurant website example" 
            className="w-full h-auto rounded-sm shadow-md" 
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-deepblue-900 p-6 rounded-sm shadow-sm">
            <h3 className="text-lg font-semibold mb-3">Features</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Responsive design
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                SEO optimized
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Online ordering system
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Table booking
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Customer reviews
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-deepblue-900 p-6 rounded-sm shadow-sm">
            <h3 className="text-lg font-semibold mb-3">Dependencies</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-center">
                <span className="text-gray-600 dark:text-gray-400 mr-2">•</span>
                React 18.2.0
              </li>
              <li className="flex items-center">
                <span className="text-gray-600 dark:text-gray-400 mr-2">•</span>
                TailwindCSS 3.3.0
              </li>
              <li className="flex items-center">
                <span className="text-gray-600 dark:text-gray-400 mr-2">•</span>
                TypeScript 4.9.5
              </li>
              <li className="flex items-center">
                <span className="text-gray-600 dark:text-gray-400 mr-2">•</span>
                React Router 6.10.0
              </li>
              <li className="flex items-center">
                <span className="text-gray-600 dark:text-gray-400 mr-2">•</span>
                React Hook Form 7.43.9
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-deepblue-900 p-6 rounded-sm shadow-sm">
            <h3 className="text-lg font-semibold mb-3">Benefits</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-ocean-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                No platform fees
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-ocean-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                Full data ownership
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-ocean-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                Easy to customize
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-ocean-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                No monthly subscriptions
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-ocean-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                Direct customer relationships
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white dark:bg-deepblue-900 p-6 rounded-sm shadow-sm mb-10">
          <h3 className="text-xl font-semibold mb-4">Getting Started</h3>
          <div className="bg-gray-100 dark:bg-deepblue-800 p-4 rounded-sm font-mono text-sm overflow-x-auto mb-4">
            <pre>{`# Clone the repository
git clone https://github.com/forkit/restaurant-template.git

# Install dependencies
npm install

# Start development server
npm run dev`}</pre>
          </div>
          
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            After forking this template, you can customize it to match your restaurant's branding
            and requirements. The project includes a detailed README with configuration instructions.
          </p>
          
          <div className="flex justify-between items-center mt-6">
            <a href="https://github.com/forkit/restaurant-template" className="text-ocean-600 dark:text-ocean-400 hover:underline">
              View Documentation (Fork:it)
            </a>
            <ForkButton 
              onClick={handleFork} 
              text={hasFork ? "Forked" : t('actions.fork')}
              variant={hasFork ? "secondary" : "primary"}
              disabled={hasFork}
            />
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-deepblue-800 pt-8">
          <h3 className="text-xl font-semibold mb-6">Related Projects</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-deepblue-800 rounded-sm p-4">
              <h4 className="font-medium mb-2">Bakery Website Template</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                A specialized template for bakeries and cake shops with product showcase and order forms.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">18 forks</span>
                <ForkButton size="sm" text={t('actions.fork')} />
              </div>
            </div>
            
            <div className="border border-gray-200 dark:border-deepblue-800 rounded-sm p-4">
              <h4 className="font-medium mb-2">Café Website Template</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Perfect for coffee shops and cafés with event calendar and loyalty program integration.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">32 forks</span>
                <ForkButton size="sm" text={t('actions.fork')} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage; 