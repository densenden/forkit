import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

// Define interface types for our data
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  longBio?: string;
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
    name: 'Denis Kreuzer',
    role: 'Founder & CEO',
    bio: 'Multidisciplinary Full-Stack Developer & Product Strategist with over 15 years of experience.',
    image: '/images/team/denis.jpg',
    longBio: 'Denis brings a unique blend of technical depth and creative vision to Fork:it. With extensive experience spanning full-stack development, AI integration, design systems, and product strategy, he bridges the crucial gap between UX, branding, and engineering. As a critical mind and subversive free thinker, Denis is passionate about using AI to do good for people and giving back to society.'
  },
  {
    name: 'Sarah Berger',
    role: 'Chief Experience Officer',
    bio: 'Sarah leads our user experience initiatives with over 10 years in digital product development.',
    image: '/images/team/sarah.jpg',
    longBio: 'With a background in both psychology and interface design, Sarah ensures that all our solutions are truly accessible for users of all ages and technical abilities. She specializes in creating intuitive experiences for elderly users who may be unfamiliar with digital interfaces.'
  },
  {
    name: 'Markus Weber',
    role: 'Technical Director',
    bio: 'Markus is an experienced developer focused on creating sustainable open-source solutions.',
    image: '/images/team/markus.jpg',
    longBio: 'Having worked with various tech giants before joining Fork:it, Markus brings a wealth of knowledge about what doesn\'t work in conventional digital ecosystems. He leads our development team with a focus on privacy, accessibility, and independence from proprietary systems.'
  },
  {
    name: 'Jana Schmidt',
    role: 'Design & UX Lead',
    bio: 'Jana combines user-friendly design with a deep understanding of diverse user needs across generations.',
    image: '/images/team/jana.jpg',
    longBio: 'Jana\'s design philosophy centers on creating interfaces that respect users\' cognitive processes regardless of age or technical proficiency. Her research into the specific needs of elderly users has shaped our approach to accessible design that doesn\'t compromise on aesthetics or functionality.'
  },
  {
    name: 'Thomas Müller',
    role: 'Partnerships & Community',
    bio: 'Thomas builds bridges between different stakeholders and ensures our solutions reach those who need them most.',
    image: '/images/team/thomas.jpg',
    longBio: 'With a background in community organizing and social work, Thomas ensures that our technological solutions are grounded in real human needs. He works directly with elderly community groups to understand their challenges and co-create solutions that truly serve their needs.'
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
    description: 'From frustration over increasing platform dependency, the idea for Fork:it is born.'
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
    description: 'Fork:it is established as a company focused on digital self-determination.'
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
    <main className="pb-16">
      {/* Hero Section with Background Image */}
      <section 
        className="relative h-screen flex items-start justify-center pt-32"
        style={{
          backgroundImage: "url('/images/team/team-group.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="font-lexend font-bold text-5xl text-white mb-4">
            Fork:it
          </h1>
          <h2 className="font-lexend font-semibold text-3xl text-white mb-6">
            About Us
          </h2>
          <p className="text-white text-xl max-w-3xl mx-auto">
            We are a collective of subversive free thinkers using technology to build a more inclusive digital world.
            In an aging society where digital advancements often leave elderly populations behind, 
            we're committed to restoring balance and creating tools that serve real human needs.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-lexend font-bold text-3xl text-slate-900 dark:text-white mb-6">
                Our Mission: Digital Independence For All
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Great possibilities in digital development have always led to some people being left behind. Our focus is on elderly people - a major group in our aging society who need support to maintain their digital self-determination but are often overlooked by mainstream tech.
              </p>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                We believe that everyone deserves access to digital tools that enhance their lives, even if they aren't contributing to the endless stream of content on social media platforms. As critical minds, we question the status quo of digital engagement and create alternatives that truly serve people rather than exploit them.
              </p>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                By harnessing AI and technology for good, we're giving back to society and creating systems that respect users' autonomy, privacy, and unique needs regardless of their technical proficiency. Our subversive approach challenges the dominant narratives about who technology should serve and how it should be designed.
              </p>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                In an aging society, we see tremendous untapped potential in bridging the digital divide - not by forcing elderly people to adapt to poorly designed systems, but by creating intuitive interfaces that adapt to their needs and respect their existing knowledge and skills.
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

      {/* Our Founder */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Meet Our Founder"
            subtitle="The visionary behind Fork:it's mission for digital self-determination"
            centered
          />
          
          <div className="max-w-5xl mx-auto mt-12 bg-white dark:bg-slate-800 rounded-sm overflow-hidden shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="col-span-1">
                <div 
                  className="h-full min-h-[300px] bg-primary/10 dark:bg-primary-900/30 flex items-center justify-center"
                  style={{
                    backgroundImage: "url('/images/team/denis.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Fallback for missing image */}
                  <span className="font-lexend font-bold text-8xl text-primary/50 dark:text-primary-300/50 opacity-0">
                    DK
                  </span>
                </div>
              </div>
              <div className="col-span-2 p-8">
                <h3 className="font-lexend font-bold text-2xl text-slate-900 dark:text-white mb-2">
                  Denis Kreuzer
                </h3>
                <p className="text-primary dark:text-primary-300 font-medium mb-6">
                  Founder & CEO
                </p>
                <p className="text-slate-700 dark:text-slate-300 mb-4 font-medium">
                  Multidisciplinary Full-Stack Developer & Product Strategist with over 15 years of experience.
                </p>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  Denis brings a unique blend of technical depth and creative vision to Fork:it. With extensive experience spanning full-stack development, AI integration, design systems, and product strategy, he bridges the crucial gap between UX, branding, and engineering.
                </p>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  As a critical mind and subversive free thinker, Denis is passionate about using AI to do good for people and giving back to society. He believes in the power of technology to create more inclusive digital ecosystems, with a special focus on elderly people—a major group often left behind in the digital revolution.
                </p>
                <blockquote className="border-l-4 border-primary dark:border-primary-400 pl-4 italic text-slate-700 dark:text-slate-300 mb-4">
                  "In an aging society, we need to support those who might not be uploading videos to social media, but who have just as much right to digital self-determination. The great possibilities in digital development have always led to some being left behind—our mission is to change that."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16">
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
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title={t('about.teamTitle')}
            subtitle="The critical minds working together to create more inclusive digital solutions"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.filter(member => member.name !== "Denis Kreuzer").map((member: TeamMember, index: number) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-sm overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all">
                <div 
                  className="h-48 flex items-center justify-center bg-primary/10 dark:bg-primary-800/20"
                  style={{
                    backgroundImage: `url('${member.image || ''}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  {/* Initials shown if image fails to load */}
                  <span className={`font-lexend font-bold text-4xl text-primary/50 dark:text-primary-300/50 ${member.image ? 'opacity-0' : 'opacity-100'}`}>
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
                  <p className="text-slate-700 dark:text-slate-300 text-sm mb-4">
                    {member.bio}
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                    {member.longBio}
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