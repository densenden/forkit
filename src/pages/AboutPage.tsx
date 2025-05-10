import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

// Define interface types for our data
interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

interface ValueItem {
  title: string;
  description: string;
}

interface Milestone {
  year: string;
  title: string;
  description: string;
}

// Define default fallback data
const defaultTeamMembers: TeamMember[] = [
  {
    name: 'Sarah Berger',
    role: 'Founder & Strategist',
    bio: 'Sarah has over 10 years of experience in digital product development.'
  },
  {
    name: 'Markus Weber',
    role: 'Technical Director',
    bio: 'Markus is an experienced developer focused on open-source solutions.'
  },
  {
    name: 'Jana Schmidt',
    role: 'Design & UX',
    bio: 'Jana combines user-friendly design with a deep understanding of small business needs.'
  },
  {
    name: 'Thomas Müller',
    role: 'Partnerships',
    bio: 'Thomas builds bridges between different stakeholders.'
  }
];

const defaultValues: ValueItem[] = [
  {
    title: 'Digital Self-Determination',
    description: 'We believe that people and businesses should maintain control over their digital presence.'
  },
  {
    title: 'Open Technologies',
    description: 'We rely on open source and open standards to avoid dependencies.'
  },
  {
    title: 'Human Support', 
    description: 'We offer real human support instead of automated systems.'
  },
  {
    title: 'Fair Business Models',
    description: 'We reject hidden fees and data collection.'
  }
];

const defaultMilestones: Milestone[] = [
  {
    year: '2022',
    title: 'The Idea Emerges',
    description: 'From frustration over increasing platform dependency, the idea for FORKIT is born.'
  },
  {
    year: '2023',
    title: 'Research Phase',
    description: 'Interviews with affected businesses, research on existing alternatives.'
  },
  {
    year: '2023',
    title: 'Manifest 1.0',
    description: 'The first manifest for digital independence is published.'
  },
  {
    year: '2024',
    title: 'Official Founding',
    description: 'FORKIT is established as a company focused on digital self-determination.'
  },
  {
    year: '2024',
    title: 'First Successes',
    description: 'The first independent websites and booking systems go live.'
  }
];

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  // Use safe translation with defaults
  const getTeamMembers = (): TeamMember[] => {
    try {
      const translated = t('about.teamMembers', { returnObjects: true });
      // Check if it's actually an array with the expected properties
      if (Array.isArray(translated) && translated.length > 0 && 'name' in translated[0]) {
        return translated as TeamMember[];
      }
      return defaultTeamMembers;
    } catch (error) {
      return defaultTeamMembers;
    }
  };

  const getValues = (): ValueItem[] => {
    try {
      const translated = t('about.values', { returnObjects: true });
      // Check if it's actually an array with the expected properties
      if (Array.isArray(translated) && translated.length > 0 && 'title' in translated[0]) {
        return translated as ValueItem[];
      }
      return defaultValues;
    } catch (error) {
      return defaultValues;
    }
  };
  
  const getMilestones = (): Milestone[] => {
    try {
      const translated = t('about.milestones', { returnObjects: true });
      // Check if it's actually an array with the expected properties
      if (Array.isArray(translated) && translated.length > 0 && 'year' in translated[0]) {
        return translated as Milestone[];
      }
      return defaultMilestones;
    } catch (error) {
      return defaultMilestones;
    }
  };

  const teamMembers = getTeamMembers();
  const values = getValues();
  const milestones = getMilestones();

  return (
    <main className="pt-24 pb-16">
      {/* Header Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <SectionTitle 
            title={t('about.title')}
            subtitle={t('about.subtitle')}
            centered
          />
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-lexend font-bold text-3xl text-slate-900 dark:text-white mb-6">
                {t('about.storyTitle')}
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                {t('about.storyP1')}
              </p>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                {t('about.storyP2')}
              </p>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                {t('about.storyP3')}
              </p>
            </div>
            <div className="relative">
              <div className="bg-primary/10 rounded-sm p-8 h-80 flex items-center justify-center">
                <div className="font-lexend font-bold text-7xl text-primary/80 text-center">
                  {t('about.tagline')}
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-sm p-6 shadow-lg">
                <div className="font-lexend font-semibold text-lg text-slate-900 dark:text-white">
                  {t('about.movementSince')} <span className="text-primary dark:text-primary-300">2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title={t('about.valuesTitle')}
            subtitle={t('about.valuesSubtitle')}
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value: ValueItem, index: number) => (
              <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-sm shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all">
                <div className="mb-4 bg-primary/5 dark:bg-primary-900/30 w-12 h-12 rounded-full flex items-center justify-center">
                  {index === 0 ? (
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                  ) : index === 1 ? (
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  ) : index === 2 ? (
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                <h3 className="font-lexend font-semibold text-xl mb-2 text-slate-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title={t('about.teamTitle')}
            subtitle={t('about.teamSubtitle')}
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member: TeamMember, index: number) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-sm overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all">
                <div className={`bg-primary/${20 - (index * 5 % 15)} dark:bg-primary-800/${20 + (index * 5 % 15)} h-48 flex items-center justify-center`}>
                  <span className="font-lexend font-bold text-4xl text-primary/50 dark:text-primary-300/50">
                    {member.name.split(' ')[0][0]}{member.name.split(' ')[1][0]}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-lexend font-bold text-xl text-slate-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary dark:text-primary-300 font-medium text-sm mb-4">
                    {member.role}
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Milestones */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title={t('about.milestonesTitle')}
            subtitle={t('about.milestonesSubtitle')}
            centered
          />
          
          <div className="max-w-3xl mx-auto mt-16">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-primary/20"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {milestones.map((milestone: Milestone, index: number) => (
                  <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white dark:bg-slate-800 rounded-full border-2 border-primary dark:border-primary-400 flex items-center justify-center">
                      <div className="w-3 h-3 bg-primary dark:bg-primary-400 rounded-full"></div>
                    </div>
                    
                    {/* Content */}
                    <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                      <span className="inline-block px-3 py-1 bg-primary/10 dark:bg-primary-900/30 text-primary dark:text-primary-300 rounded-sm text-sm font-medium mb-2">
                        {milestone.year}
                      </span>
                      <h3 className="font-lexend font-bold text-xl text-slate-900 dark:text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 text-sm">
                        {milestone.description}
                      </p>
                    </div>
                    
                    {/* Empty space for opposite side */}
                    <div className="hidden md:block md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-lexend font-bold text-3xl text-slate-900 dark:text-white mb-6">
              {t('about.joinTitle')}
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-8">
              {t('about.joinText')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                to="/kontakt" 
                className="bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-sm font-lexend font-medium text-base shadow-sm transition-all"
              >
                {t('about.contactUs')}
              </Link>
              <Link 
                to="/partner-werden" 
                className="bg-transparent border border-primary text-primary dark:text-primary-300 dark:border-primary-500 px-6 py-3 rounded-sm font-lexend font-medium text-base hover:bg-primary/5 dark:hover:bg-primary-900/30 transition-all"
              >
                {t('about.becomePartner')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage; 