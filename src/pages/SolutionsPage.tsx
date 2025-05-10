import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const SolutionsPage: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('all');

  // Solutions with categories - using translation keys
  const solutions = [
    {
      id: 'websites',
      category: 'web',
      title: t('solutions.websites'),
      description: t('solutions.websitesDesc'),
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        t('solutions.features.selfUpdate'),
        t('solutions.features.noMonthlyFees'),
        t('solutions.features.seoOptimized'),
        t('solutions.features.modernTech')
      ],
      status: 'available',
      targetGroups: ['gastronomy', 'retail', 'coaches', 'creatives'],
    },
    {
      id: 'booking',
      category: 'service',
      title: t('solutions.booking'),
      description: t('solutions.bookingDesc'),
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        t('solutions.features.websiteIntegration'),
        t('solutions.features.autoConfirmation'),
        t('solutions.features.calendarSync'),
        t('solutions.features.noTransactionFees')
      ],
      status: 'development',
      targetGroups: ['gastronomy', 'coaches'],
    },
    {
      id: 'shop',
      category: 'commerce',
      title: t('solutions.shops'),
      description: t('solutions.shopsDesc'),
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      features: [
        t('solutions.features.directSales'),
        t('solutions.features.priceControl'),
        t('solutions.features.inventoryManagement'),
        t('solutions.features.flexiblePayment')
      ],
      status: 'development',
      targetGroups: ['retail', 'creatives'],
    },
    {
      id: 'ordering',
      category: 'commerce',
      title: t('solutions.ordering'),
      description: t('solutions.orderingDesc'),
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      features: [
        t('solutions.features.orderWithoutFees'),
        t('solutions.features.menuManagement'),
        t('solutions.features.customerComm'),
        t('solutions.features.deliveryOptions')
      ],
      status: 'planning',
      targetGroups: ['gastronomy'],
    },
    {
      id: 'portfolio',
      category: 'web',
      title: t('solutions.portfolio'),
      description: t('solutions.portfolioDesc'),
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        t('solutions.features.flexibleDisplay'),
        t('solutions.features.directContact'),
        t('solutions.features.dynamicContent'),
        t('solutions.features.selfCustomizable')
      ],
      status: 'available',
      targetGroups: ['creatives'],
    },
    {
      id: 'newsletter',
      category: 'marketing',
      title: t('solutions.newsletter'),
      description: t('solutions.newsletterDesc'),
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        t('solutions.features.subscriberManagement'),
        t('solutions.features.newsletterDesign'),
        t('solutions.features.scheduledSending'),
        t('solutions.features.openRateAnalytics')
      ],
      status: 'planning',
      targetGroups: ['gastronomy', 'retail', 'coaches', 'creatives'],
    },
  ];

  // Categories filter with translations
  const categories = [
    { id: 'all', name: t('solutions.categories.all') },
    { id: 'web', name: t('solutions.categories.web') },
    { id: 'commerce', name: t('solutions.categories.commerce') },
    { id: 'service', name: t('solutions.categories.service') },
    { id: 'marketing', name: t('solutions.categories.marketing') }
  ];

  // Status labels with translations
  const statusLabels = {
    available: { label: t('solutions.status.available'), color: 'bg-green-100 text-green-800' },
    development: { label: t('solutions.status.development'), color: 'bg-yellow-100 text-yellow-800' },
    planning: { label: t('solutions.status.planning'), color: 'bg-blue-100 text-blue-800' },
  };

  // Filter solutions based on active tab
  const filteredSolutions = activeTab === 'all' 
    ? solutions 
    : solutions.filter(solution => solution.category === activeTab);

  return (
    <main className="pt-24 pb-16">
      {/* Header Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <SectionTitle 
            title={t('solutions.title')}
            subtitle={t('solutions.subtitle')}
            centered
          />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-lexend font-bold text-2xl text-dark mb-6">
              {t('solutions.introTitle')}
            </h2>
            <p className="text-gray-600 mb-8">
              {t('solutions.introText')}
            </p>
            
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-8 mb-16">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-4 py-2 rounded-md text-sm font-lexend transition-all ${
                    activeTab === category.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution) => (
              <div key={solution.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="mr-4">
                      {solution.icon}
                    </div>
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${statusLabels[solution.status as keyof typeof statusLabels].color}`}>
                      {statusLabels[solution.status as keyof typeof statusLabels].label}
                    </span>
                  </div>
                  
                  <h3 className="font-lexend font-bold text-xl text-dark mt-4 mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    {solution.description}
                  </p>
                  
                  <h4 className="font-lexend font-medium text-dark text-sm mb-2">
                    {t('solutions.featuresTitle')}:
                  </h4>
                  <ul className="space-y-1 text-gray-600 text-sm mb-6">
                    {solution.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-1 mb-4">
                      {solution.targetGroups.map((group) => (
                        <Link
                          key={group}
                          to={`/fuer-wen#${group}`}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded hover:bg-gray-200 transition-all"
                        >
                          {t(`targetGroups.${group}`)}
                        </Link>
                      ))}
                    </div>
                    
                    <Link
                      to="/kontakt"
                      className="text-primary hover:underline font-lexend font-medium text-sm inline-flex items-center"
                    >
                      {t('solutions.learnMore')} <span className="ml-1">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredSolutions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">
                {t('solutions.noSolutionsFound')}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Custom Development */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-lexend font-bold text-2xl text-dark mb-6">
              {t('solutions.customTitle')}
            </h2>
            <p className="text-gray-600 mb-8">
              {t('solutions.customText')}
            </p>
            <Link 
              to="/kontakt" 
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-lexend font-medium text-base shadow-sm transition-all"
            >
              {t('solutions.contactForConsultation')}
            </Link>
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start">
                <svg className="w-12 h-12 text-primary mr-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <div>
                  <h3 className="font-lexend font-bold text-xl text-dark mb-4">
                    {t('solutions.openSourceTitle')}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t('solutions.openSourceText1')}
                  </p>
                  <p className="text-gray-600">
                    {t('solutions.openSourceText2')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SolutionsPage; 