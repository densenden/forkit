import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English translations
const en = {
  translation: {
    nav: {
      home: 'Home',
      manifest: 'Manifest',
      voting: 'Name Voting',
      targetGroups: 'Target Groups',
      solutions: 'Solutions',
      partners: 'Become a Partner',
      story: 'Your Story',
      ideas: 'Public Ideas',
      waitlist: 'Waitlist',
      blog: 'Blog',
      about: 'About Us',
      contact: 'Contact',
      resources: 'Resources',
      participate: 'Participate'
    },
    hero: {
      title: 'You fight for your business every day. But digitally, you\'re trapped.',
      subtitle: 'We\'re giving you back what belongs to you: your visibility, your tools, your customers.',
      cta: 'Join the Waitlist',
    },
    manifest: {
      title: 'Our Manifest',
      downloadPdf: 'Download as PDF',
    },
    targetGroups: {
      title: 'Who is this for?',
      gastronomy: 'Gastronomy',
      gastronomyDesc: 'Getting free from OpenTable, Lieferando & Co.',
      retail: 'Retail',
      retailDesc: 'Building independence from Amazon & marketplace fees',
      coaches: 'Coaches & Consultants',
      coachesDesc: 'Alternatives to LinkedIn, Calendly & expensive booking tools',
      studios: 'Studios & Local Services',
      studiosDesc: 'Breaking free from commissions and membership fees',
      seniors: 'Senior Citizens',
      seniorsDesc: 'Overcoming digital exclusion & dependency',
      creatives: 'Creatives',
      creativesDesc: 'Fair alternatives to Fiverr, Upwork & marketplace platforms',
    },
    solutions: {
      title: 'What we\'re building',
      subtitle: 'Tools and solutions that give you digital independence',
      introTitle: 'Digital tools for your freedom',
      introText: 'We develop solutions that you own and that you can control yourself. No hidden fees, no dependencies, no intermediaries.',
      featuresTitle: 'Features',
      learnMore: 'Learn more',
      noSolutionsFound: 'No solutions found in this category.',
      customTitle: 'Custom Solutions',
      customText: 'In addition to our standard solutions, we also develop custom digital tools tailored specifically to your needs.',
      contactForConsultation: 'Contact us for a consultation',
      openSourceTitle: 'Open Source First',
      openSourceText1: 'Whenever possible, we rely on open source solutions and also contribute to the open source community ourselves.',
      openSourceText2: 'This means for you: no vendor lock-in, sustainable solutions, and fair prices without licensing costs.',
      
      // Solution categories
      categories: {
        all: 'All Solutions',
        web: 'Websites',
        commerce: 'Sales & Ordering',
        service: 'Booking & Service',
        marketing: 'Marketing'
      },
      
      // Solution status
      status: {
        available: 'Available',
        development: 'In Development',
        planning: 'Planned'
      },
      
      // Solution titles and descriptions
      websites: 'Custom Websites',
      websitesDesc: 'Completely independent websites with full control over content, design, and data.',
      booking: 'Booking System',
      bookingDesc: 'A system that allows customers to book appointments directly with you – without commission fees.',
      shops: 'Online Shop',
      shopsDesc: 'Sell your products directly – without intermediaries and without sales commissions.',
      ordering: 'Ordering System',
      orderingDesc: 'A system that allows customers to order directly from you – without delivery platforms.',
      portfolio: 'Portfolio',
      portfolioDesc: 'Present your work professionally without relying on creative platforms.',
      newsletter: 'Newsletter System',
      newsletterDesc: 'Direct contact with your customers without dependency on social media.',
      social: 'Social Planning Tools',
      socialDesc: 'Schedule and automate without dependencies',
      visibility: 'AI-ready Visibility',
      visibilityDesc: 'Be found without paying for ads',
      content: 'Content Automation',
      contentDesc: 'Tools that save time and increase reach',
      
      // Features list
      features: {
        selfUpdate: 'Easy to update yourself',
        noMonthlyFees: 'No monthly fees',
        seoOptimized: 'SEO optimized for local visibility',
        modernTech: 'Modern and secure technology',
        websiteIntegration: 'Integration with your website',
        autoConfirmation: 'Automatic confirmations',
        calendarSync: 'Calendar synchronization',
        noTransactionFees: 'No transaction fees',
        directSales: 'Direct sales without commissions',
        priceControl: 'Control over prices and offers',
        inventoryManagement: 'Simple inventory management',
        flexiblePayment: 'Flexible payment methods',
        orderWithoutFees: 'Online orders without fees',
        menuManagement: 'Easy menu management',
        customerComm: 'Customer communication via SMS/Email',
        deliveryOptions: 'Delivery options & pickup',
        flexibleDisplay: 'Flexible presentation of your work',
        directContact: 'Direct contact options',
        dynamicContent: 'Dynamic content display',
        selfCustomizable: 'Customizable by yourself',
        subscriberManagement: 'Easy subscriber management',
        newsletterDesign: 'Attractive newsletter design',
        scheduledSending: 'Automated delivery scheduling',
        openRateAnalytics: 'Open rate analysis'
      }
    },
    about: {
      title: 'About Us',
      subtitle: 'Who we are and what we stand for – the story and mission behind FORKIT',
      storyTitle: 'Our Story',
      storyP1: 'FORKIT emerged from a simple observation: more and more small businesses and freelancers are losing their digital independence to large platforms – and with it, a significant portion of their revenue and control.',
      storyP2: 'What began as conversations among friends quickly evolved into a mission: developing tools and solutions that empower people and businesses to shape their digital presence themselves – without high ongoing costs or technical dependencies.',
      storyP3: 'Today, we work as a team of developers, designers, and strategists to make this vision a reality – for a digital world that belongs to everyone, not just the big platforms.',
      tagline: 'Fork the System',
      movementSince: 'Movement since',
      
      // Values section
      valuesTitle: 'Our Values',
      valuesSubtitle: 'Principles that guide our work and decisions',
      values: [
        {
          title: 'Digital Self-Determination',
          description: 'We believe that people and businesses should maintain control over their digital presence and data.'
        },
        {
          title: 'Open Technologies',
          description: 'We rely on open source and open standards to avoid dependencies and promote transparency.'
        },
        {
          title: 'Human Support',
          description: 'We offer real human support instead of automated systems or complicated documentation.'
        },
        {
          title: 'Fair Business Models',
          description: 'We reject hidden fees and data collection and opt for transparent, fair pricing models.'
        }
      ],
      
      // Team section
      teamTitle: 'Our Team',
      teamSubtitle: 'The people behind the movement',
      teamMembers: [
        {
          name: 'Sarah Berger',
          role: 'Founder & Strategist',
          bio: 'Sarah has over 10 years of experience in digital product development. After years at various platform companies, she decided to use her skills to promote digital self-determination.'
        },
        {
          name: 'Markus Weber',
          role: 'Technical Director',
          bio: 'Markus is an experienced developer focused on open-source solutions. He believes in technology that empowers people rather than restricting them.'
        },
        {
          name: 'Jana Schmidt',
          role: 'Design & UX',
          bio: 'Jana combines user-friendly design with a deep understanding of small business needs. She creates digital solutions that are easy to use.'
        },
        {
          name: 'Thomas Müller',
          role: 'Partnerships',
          bio: 'Thomas builds bridges between different stakeholders. He connects open-source communities, local initiatives, and businesses for a more equitable digital world.'
        }
      ],
      
      // Milestones section
      milestonesTitle: 'Milestones',
      milestonesSubtitle: 'The journey from idea to movement',
      milestones: [
        {
          year: '2022',
          title: 'The Idea Emerges',
          description: 'From frustration over increasing platform dependency, the idea for FORKIT is born.'
        },
        {
          year: '2023',
          title: 'Research Phase',
          description: 'Interviews with affected businesses, research on existing alternatives, and development of first prototypes.'
        },
        {
          year: '2023',
          title: 'Manifest 1.0',
          description: 'The first manifest for digital independence is published and resonates with the audience.'
        },
        {
          year: '2024',
          title: 'Official Founding',
          description: 'FORKIT is established as a company focused on digital self-determination.'
        },
        {
          year: '2024',
          title: 'First Successes',
          description: 'The first independent websites and booking systems go live, freeing businesses from platform dependency.'
        }
      ],
      
      // CTA section
      joinTitle: 'Join the Movement',
      joinText: 'We\'re always looking for like-minded individuals who share our vision of a more independent digital world.',
      contactUs: 'Contact Us',
      becomePartner: 'Become a Partner'
    },
    partners: {
      title: 'Become a Partner',
      tech: 'Tech Partners',
      ngos: 'NGOs & Activists',
      developers: 'Developers',
      social: 'Social Organizations',
    },
    story: {
      title: 'Share Your Story & Wishlist',
      whatHappened: 'What happened?',
      whichPlatform: 'Which platform was involved?',
      yourWish: 'What do you wish for?',
      contact: 'Contact (optional)',
      permission: 'Allow publication?',
      submit: 'Submit Story',
    },
    ideas: {
      title: 'Public Ideas',
      status: {
        received: 'Received',
        inProgress: 'In Progress',
        inDevelopment: 'In Development',
        solved: 'Solved',
      },
      prioritize: 'Prioritize',
    },
    waitlist: {
      title: 'Join the waitlist',
      whyJoin: 'Why do you want to join?',
      submit: 'Join Waitlist',
    },
    footer: {
      title1: 'Manifest & Mission',
      title2: 'Offering',
      title3: 'Participate',
      copyright: 'All rights reserved',
      imprint: 'Imprint',
      privacy: 'Privacy Policy',
    },
  },
};

// German translations
const de = {
  translation: {
    nav: {
      home: 'Startseite',
      manifest: 'Manifest',
      voting: 'Namensabstimmung',
      targetGroups: 'Für wen ist das?',
      solutions: 'Was wir bauen',
      partners: 'Partner werden',
      story: 'Deine Story',
      ideas: 'Öffentliche Ideen',
      waitlist: 'Warteliste',
      blog: 'Blog / Dossier',
      about: 'Über uns',
      contact: 'Kontakt',
      resources: 'Ressourcen',
      participate: 'Mitmachen'
    },
    hero: {
      title: 'Du kämpfst jeden Tag für dein Geschäft. Aber digital bist du gefangen.',
      subtitle: 'Wir geben dir zurück, was dir gehört: deine Sichtbarkeit, deine Werkzeuge, deine Kunden.',
      cta: 'Auf die Warteliste',
    },
    manifest: {
      title: 'Unser Manifest',
      downloadPdf: 'Als PDF herunterladen',
    },
    targetGroups: {
      title: 'Für wen ist das?',
      gastronomy: 'Gastronomie',
      gastronomyDesc: 'Unabhängigkeit von OpenTable, Lieferando & Co.',
      retail: 'Einzelhandel',
      retailDesc: 'Befreiung von Amazon & Marktplatzgebühren',
      coaches: 'Coaches & Berater',
      coachesDesc: 'Alternativen zu LinkedIn, Calendly & teuren Buchungstools',
      studios: 'Studios & lokale Dienstleister',
      studiosDesc: 'Schluss mit Vermittlungsgebühren und Mitgliedsbeiträgen',
      seniors: 'Senior:innen',
      seniorsDesc: 'Überwindung digitaler Ausgrenzung & Abhängigkeit',
      creatives: 'Kreative',
      creativesDesc: 'Faire Alternativen zu Fiverr, Upwork & Plattformen',
    },
    solutions: {
      title: 'Was wir bauen',
      subtitle: 'Werkzeuge und Lösungen, die dir digitale Unabhängigkeit geben',
      introTitle: 'Digitale Werkzeuge für deine Freiheit',
      introText: 'Wir entwickeln Lösungen, die dir gehören und die du selbst kontrollieren kannst. Keine versteckten Gebühren, keine Abhängigkeiten, keine Zwischenhändler.',
      featuresTitle: 'Features',
      learnMore: 'Mehr erfahren',
      noSolutionsFound: 'Keine Lösungen in dieser Kategorie gefunden.',
      customTitle: 'Individuelle Lösungen',
      customText: 'Neben unseren Standardlösungen entwickeln wir auch individuelle digitale Werkzeuge, die genau auf deine Bedürfnisse zugeschnitten sind.',
      contactForConsultation: 'Kontaktiere uns für ein Beratungsgespräch',
      openSourceTitle: 'Open-Source-First',
      openSourceText1: 'Wir setzen wo immer möglich auf Open-Source-Lösungen und tragen auch selbst zur Open-Source-Gemeinschaft bei.',
      openSourceText2: 'Das bedeutet für dich: kein Vendor Lock-in, nachhaltige Lösungen und faire Preise ohne Lizenzkosten.',
      
      // Solution categories
      categories: {
        all: 'Alle Lösungen',
        web: 'Webseiten',
        commerce: 'Verkauf & Bestellung',
        service: 'Buchung & Service',
        marketing: 'Marketing'
      },
      
      // Solution status
      status: {
        available: 'Verfügbar',
        development: 'In Entwicklung',
        planning: 'In Planung'
      },
      
      // Solution titles and descriptions
      websites: 'Eigene Websites',
      websitesDesc: 'Komplett unabhängige Webseiten mit voller Kontrolle über Inhalte, Design und Daten.',
      booking: 'Buchungssystem',
      bookingDesc: 'Ein System, mit dem Kunden direkt bei dir Termine buchen können – ohne Vermittlungsgebühren.',
      shops: 'Online-Shop',
      shopsDesc: 'Verkaufe deine Produkte direkt – ohne Zwischenhändler und ohne Verkaufsprovisionen.',
      ordering: 'Bestellsystem',
      orderingDesc: 'Ein System, mit dem Kunden direkt bei dir bestellen können – ohne Lieferplattformen.',
      portfolio: 'Portfolio',
      portfolioDesc: 'Präsentiere deine Arbeiten professionell, ohne auf Kreativplattformen angewiesen zu sein.',
      newsletter: 'Newsletter-System',
      newsletterDesc: 'Direkter Kontakt mit deinen Kunden ohne Abhängigkeit von sozialen Medien.',
      social: 'Social-Media-Planung',
      socialDesc: 'Plane und automatisiere ohne Abhängigkeiten',
      visibility: 'KI-fähige Sichtbarkeit',
      visibilityDesc: 'Gefunden werden ohne für Anzeigen zu zahlen',
      content: 'Content-Automatisierung',
      contentDesc: 'Tools, die Zeit sparen und Reichweite erhöhen',
      
      // Features list
      features: {
        selfUpdate: 'Einfach selbst anpassbar',
        noMonthlyFees: 'Keine monatlichen Gebühren',
        seoOptimized: 'SEO-optimiert für lokale Sichtbarkeit',
        modernTech: 'Technologisch aktuell und sicher',
        websiteIntegration: 'Integration in deine Website',
        autoConfirmation: 'Automatische Bestätigungen',
        calendarSync: 'Kalender-Synchronisation',
        noTransactionFees: 'Keine Transaktionsgebühren',
        directSales: 'Direkter Verkauf ohne Provisionen',
        priceControl: 'Kontrolle über Preise und Angebote',
        inventoryManagement: 'Einfache Bestandsverwaltung',
        flexiblePayment: 'Flexible Zahlungsmethoden',
        orderWithoutFees: 'Online-Bestellungen ohne Gebühren',
        menuManagement: 'Einfaches Menü-Management',
        customerComm: 'Kundenkommunikation per SMS/Email',
        deliveryOptions: 'Lieferoptionen & Abholung',
        flexibleDisplay: 'Flexible Darstellung deiner Arbeiten',
        directContact: 'Direkte Kontaktmöglichkeiten',
        dynamicContent: 'Dynamische Inhaltsdarstellung',
        selfCustomizable: 'Selbst anpassbar',
        subscriberManagement: 'Einfache Verwaltung von Abonnenten',
        newsletterDesign: 'Ansprechendes Newsletter-Design',
        scheduledSending: 'Automatische Versandplanung',
        openRateAnalytics: 'Analyse der Öffnungsraten'
      }
    },
    about: {
      title: 'Über uns',
      subtitle: 'Wer wir sind und wofür wir stehen – die Geschichte und Mission hinter FORKIT',
      storyTitle: 'Unsere Geschichte',
      storyP1: 'FORKIT entstand aus einer einfachen Beobachtung: Immer mehr kleine Unternehmen und Selbstständige verlieren ihre digitale Unabhängigkeit an große Plattformen – und damit auch einen erheblichen Teil ihrer Einnahmen und Kontrolle.',
      storyP2: 'Was als Gespräche unter Freunden begann, entwickelte sich schnell zu einer Mission: Die Entwicklung von Werkzeugen und Lösungen, die Menschen und Unternehmen wieder in die Lage versetzen, ihre digitale Präsenz selbst zu gestalten – ohne hohe laufende Kosten oder technische Abhängigkeiten.',
      storyP3: 'Heute arbeiten wir als Team aus Entwickler:innen, Designer:innen und Strateg:innen daran, diese Vision Wirklichkeit werden zu lassen – für eine digitale Welt, die allen gehört, nicht nur den großen Plattformen.',
      tagline: 'Fork the System',
      movementSince: 'Bewegung seit',
      
      // Values section
      valuesTitle: 'Unsere Werte',
      valuesSubtitle: 'Prinzipien, die unsere Arbeit und Entscheidungen leiten',
      values: [
        {
          title: 'Digitale Selbstbestimmung',
          description: 'Wir glauben, dass Menschen und Unternehmen die Kontrolle über ihre digitale Präsenz und Daten behalten sollten.'
        },
        {
          title: 'Offene Technologien',
          description: 'Wir setzen auf Open Source und offene Standards, um Abhängigkeiten zu vermeiden und Transparenz zu fördern.'
        },
        {
          title: 'Menschlicher Support',
          description: 'Wir bieten echte menschliche Unterstützung statt automatisierter Systeme oder komplizierter Dokumentationen.'
        },
        {
          title: 'Faire Geschäftsmodelle',
          description: 'Wir lehnen versteckte Gebühren und Datensammlungen ab und setzen auf transparente, faire Preismodelle.'
        }
      ],
      
      // Team section
      teamTitle: 'Unser Team',
      teamSubtitle: 'Die Menschen hinter der Bewegung',
      teamMembers: [
        {
          name: 'Sarah Berger',
          role: 'Gründerin & Strategin',
          bio: 'Sarah hat über 10 Jahre Erfahrung in der digitalen Produktentwicklung. Nach Jahren bei verschiedenen Plattformunternehmen beschloss sie, ihre Fähigkeiten für mehr digitale Selbstbestimmung einzusetzen.'
        },
        {
          name: 'Markus Weber',
          role: 'Technischer Leiter',
          bio: 'Markus ist ein erfahrener Entwickler mit Fokus auf Open-Source-Lösungen. Er glaubt an Technologie, die Menschen befähigt, statt sie einzuschränken.'
        },
        {
          name: 'Jana Schmidt',
          role: 'Design & UX',
          bio: 'Jana verbindet nutzerfreundliches Design mit einem tiefen Verständnis für die Bedürfnisse kleiner Unternehmen. Sie gestaltet digitale Lösungen, die einfach zu bedienen sind.'
        },
        {
          name: 'Thomas Müller',
          role: 'Partnerschaften',
          bio: 'Thomas baut Brücken zwischen verschiedenen Akteuren. Er vernetzt Open-Source-Communities, lokale Initiativen und Unternehmen für eine gerechtere digitale Welt.'
        }
      ],
      
      // Milestones section
      milestonesTitle: 'Meilensteine',
      milestonesSubtitle: 'Der Weg von der Idee zur Bewegung',
      milestones: [
        {
          year: '2022',
          title: 'Die Idee entsteht',
          description: 'Aus der Frustration über zunehmende Plattformabhängigkeit entsteht die Idee für FORKIT.'
        },
        {
          year: '2023',
          title: 'Forschungsphase',
          description: 'Interviews mit betroffenen Unternehmen, Recherche zu bestehenden Alternativen und Aufbau erster Prototypen.'
        },
        {
          year: '2023',
          title: 'Manifest 1.0',
          description: 'Das erste Manifest für digitale Unabhängigkeit wird veröffentlicht und findet Anklang.'
        },
        {
          year: '2024',
          title: 'Offizielle Gründung',
          description: 'FORKIT wird als Unternehmen mit Fokus auf digitale Selbstbestimmung gegründet.'
        },
        {
          year: '2024',
          title: 'Erste Erfolge',
          description: 'Die ersten unabhängigen Websites und Buchungssysteme gehen live und befreien Unternehmen von Plattformabhängigkeit.'
        }
      ],
      
      // CTA section
      joinTitle: 'Werde Teil der Bewegung',
      joinText: 'Wir suchen immer nach Gleichgesinnten, die unsere Vision einer unabhängigeren digitalen Welt teilen.',
      contactUs: 'Kontaktiere uns',
      becomePartner: 'Partner werden'
    },
    partners: {
      title: 'Partner werden',
      tech: 'Tech-Partner',
      ngos: 'NGOs & Aktivist:innen',
      developers: 'Entwickler:innen',
      social: 'Soziale Organisationen',
    },
    story: {
      title: 'Deine Story & Wunschliste',
      whatHappened: 'Was ist passiert?',
      whichPlatform: 'Welche Plattform war beteiligt?',
      yourWish: 'Was wünschst du dir?',
      contact: 'Kontakt (optional)',
      permission: 'Veröffentlichung erlaubt?',
      submit: 'Story einreichen',
    },
    ideas: {
      title: 'Öffentliche Ideen',
      status: {
        received: 'Eingegangen',
        inProgress: 'In Arbeit',
        inDevelopment: 'In Entwicklung',
        solved: 'Gelöst',
      },
      prioritize: 'Priorisieren',
    },
    waitlist: {
      title: 'Auf die Warteliste',
      whyJoin: 'Warum möchtest du dazugehören?',
      submit: 'Auf die Warteliste',
    },
    footer: {
      title1: 'Manifest & Mission',
      title2: 'Angebot',
      title3: 'Mitmachen',
      copyright: 'Alle Rechte vorbehalten',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
    },
  },
};

// Initialize i18n
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en,
      de,
    },
    lng: 'de', // Default language
    fallbackLng: 'de',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n; 