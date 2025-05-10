import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false
  });
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Contact channels
  const contactChannels = [
    {
      title: 'E-Mail',
      value: 'hallo@forkit.de',
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Standort',
      value: 'Berlin, Deutschland',
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'Social Media',
      value: '@forkitHQ',
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: 'Wie läuft eine Zusammenarbeit mit euch ab?',
      answer: 'Wir beginnen mit einem kostenlosen Erstgespräch, um deine Situation zu verstehen. Anschließend entwickeln wir einen individuellen Plan, wie wir dir bei der digitalen Unabhängigkeit helfen können. Je nach Bedarf setzen wir dann die passenden Lösungen für dich um.'
    },
    {
      question: 'Was kostet eine eigene digitale Lösung?',
      answer: 'Unsere Preise variieren je nach Umfang und Anforderungen. Wir setzen auf faire, transparente Festpreise statt auf monatliche Abonnements. In einem persönlichen Gespräch können wir dir ein individuelles Angebot machen.'
    },
    {
      question: 'Wie lange dauert die Umsetzung?',
      answer: 'Einfache Websites oder Buchungssysteme können wir innerhalb von 2-4 Wochen umsetzen. Komplexere Lösungen benötigen entsprechend mehr Zeit. Wir legen aber immer Wert auf schnelle Ergebnisse und regelmäßige Zwischenupdates.'
    },
    {
      question: 'Bietet ihr auch Support nach der Umsetzung?',
      answer: 'Ja, wir lassen dich nicht allein. Nach der Umsetzung bieten wir Schulungen an, damit du deine Lösung selbst bedienen kannst. Zudem haben wir verschiedene Support-Pakete für die kontinuierliche Betreuung.'
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when field is edited
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Bitte gib deinen Namen ein';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Bitte gib deine E-Mail-Adresse ein';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Bitte gib eine gültige E-Mail-Adresse ein';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Bitte gib eine Nachricht ein';
    }
    
    if (!formData.consent) {
      errors.consent = 'Bitte stimme der Datenschutzerklärung zu';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // In a real application, you would submit the form to a backend
    console.log('Contact form submitted:', formData);
    
    // Show success message
    setFormSubmitted(true);
  };

  return (
    <main className="pt-24 pb-16">
      {/* Header Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Kontakt" 
            subtitle="Sprich mit uns über deine digitale Unabhängigkeit"
            centered
          />
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactChannels.map((channel, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg text-center shadow-sm border border-gray-100"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {channel.icon}
                  </div>
                  <h3 className="font-lexend font-semibold text-lg text-dark mb-2">
                    {channel.title}
                  </h3>
                  <p className="text-gray-600">
                    {channel.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="font-lexend font-bold text-2xl text-dark mb-6">
                Schreib uns
              </h2>
              
              {formSubmitted ? (
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-lexend font-bold text-2xl text-dark mb-4">
                      Nachricht gesendet!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Vielen Dank für deine Nachricht. Wir werden uns so schnell wie möglich bei dir melden.
                    </p>
                    <button 
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          subject: '',
                          message: '',
                          consent: false
                        });
                      }}
                      className="text-primary hover:underline font-lexend font-medium"
                    >
                      Neue Nachricht senden
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary`}
                        />
                        {formErrors.name && (
                          <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          E-Mail *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary`}
                        />
                        {formErrors.email && (
                          <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Betreff
                        </label>
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Nachricht *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary`}
                        ></textarea>
                        {formErrors.message && (
                          <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>
                        )}
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="consent"
                            name="consent"
                            type="checkbox"
                            checked={formData.consent}
                            onChange={handleChange}
                            className={`h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded ${formErrors.consent ? 'border-red-500' : ''}`}
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="consent" className={`font-medium ${formErrors.consent ? 'text-red-500' : 'text-gray-700'}`}>
                            Ich habe die <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a> gelesen und stimme zu *
                          </label>
                          {formErrors.consent && (
                            <p className="text-red-500 text-xs mt-1">{formErrors.consent}</p>
                          )}
                        </div>
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded-md font-lexend font-medium transition-all"
                      >
                        Nachricht senden
                      </button>
                      
                      <p className="text-xs text-gray-500 text-center">
                        * Pflichtfelder
                      </p>
                    </div>
                  </form>
                </div>
              )}
            </div>
            
            {/* FAQ Section */}
            <div>
              <h2 className="font-lexend font-bold text-2xl text-dark mb-6">
                Häufige Fragen
              </h2>
              
              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                  >
                    <h3 className="font-lexend font-semibold text-lg text-dark mb-2">
                      {item.question}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item.answer}
                    </p>
                  </div>
                ))}
                
                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="font-lexend font-semibold text-lg text-dark mb-2">
                    Noch Fragen?
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Buche ein kostenloses 30-minütiges Erstgespräch, um persönlich mit uns zu sprechen.
                  </p>
                  <Link 
                    to="/warteliste" 
                    className="inline-flex items-center text-primary hover:underline font-lexend font-medium text-sm"
                  >
                    Termin vereinbaren <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-lexend font-medium text-dark">
                    Berlin, Deutschland
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Unsere Büros befinden sich im Herzen von Berlin.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-500 text-sm mt-4">
              In einer echten Anwendung würde hier eine interaktive Karte angezeigt werden.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage; 