import React, { useState } from 'react';
import ForkButton from '../components/ForkButton';
import { useTranslation } from 'react-i18next';

const ForkButtonDemoPage: React.FC = () => {
  const { t } = useTranslation();
  const [forkCount, setForkCount] = useState(42);
  
  const handleFork = () => {
    setForkCount(prev => prev + 1);
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="headline-section mb-8">Fork Button Component</h1>
        
        <div className="bg-white dark:bg-deepblue-900 rounded-sm shadow-md p-8 mb-12">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Project Example</h2>
            <div className="p-6 border border-gray-200 dark:border-deepblue-800 rounded-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Restaurant Website Template</h3>
                <div className="flex items-center">
                  <span className="mr-4 text-gray-600 dark:text-gray-400">Forks: {forkCount}</span>
                  <ForkButton onClick={handleFork} text={t('actions.fork')} />
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">A beautiful responsive website template for restaurants with online ordering system.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 dark:bg-deepblue-800 text-xs rounded-sm">React</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-deepblue-800 text-xs rounded-sm">TailwindCSS</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-deepblue-800 text-xs rounded-sm">TypeScript</span>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Button Variants</h2>
            <div className="flex flex-wrap gap-4">
              <div>
                <p className="text-sm mb-2">Primary</p>
                <ForkButton variant="primary" />
              </div>
              <div>
                <p className="text-sm mb-2">Secondary</p>
                <ForkButton variant="secondary" />
              </div>
              <div>
                <p className="text-sm mb-2">Outline</p>
                <ForkButton variant="outline" />
              </div>
              <div>
                <p className="text-sm mb-2">Text</p>
                <ForkButton variant="text" />
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Button Sizes</h2>
            <div className="flex flex-wrap gap-4 items-end">
              <div>
                <p className="text-sm mb-2">Small</p>
                <ForkButton size="sm" />
              </div>
              <div>
                <p className="text-sm mb-2">Medium (default)</p>
                <ForkButton size="md" />
              </div>
              <div>
                <p className="text-sm mb-2">Large</p>
                <ForkButton size="lg" />
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Custom Text</h2>
            <div className="flex flex-wrap gap-4">
              <ForkButton text="Fork Project" />
              <ForkButton text="Create Fork" variant="secondary" />
              <ForkButton text="Clone" variant="outline" />
              <ForkButton text="Fork it!" variant="text" />
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-deepblue-900 rounded-sm shadow-md p-8">
          <h2 className="text-xl font-semibold mb-4">Usage</h2>
          <div className="bg-gray-100 dark:bg-deepblue-800 p-4 rounded-sm font-mono text-sm overflow-x-auto mb-6">
            <pre>{`import ForkButton from '../components/ForkButton';

// Basic usage
<ForkButton onClick={() => console.log('Forked!')} />

// With custom text
<ForkButton text="Fork Project" />

// Different variants
<ForkButton variant="primary" />
<ForkButton variant="secondary" />
<ForkButton variant="outline" />
<ForkButton variant="text" />

// Different sizes
<ForkButton size="sm" />
<ForkButton size="md" />
<ForkButton size="lg" />`}</pre>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            The ForkButton component integrates with your existing UI system and supports all standard button properties.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForkButtonDemoPage; 