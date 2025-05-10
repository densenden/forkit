import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const StoryPage: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    industry: '',
    story: '',
    wishList: '',
    shareConsent: false,
    contactConsent: false
  });
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Industry options
  const industries = [
    { value: 'gastronomy', label: t('targetGroups.gastronomy') },
    { value: 'retail', label: t('targetGroups.retail') },
    { value: 'coaches', label: t('targetGroups.coaches') },
    { value: 'creatives', label: t('targetGroups.creatives') },
    { value: 'other', label: 'Andere Branche' }
  ];

  // Story examples for inspiration
  const storyExamples = [
    {
      title: "Restaurant verliert 30% an Lieferdienst",
      snippet: "Seit wir bei der großen Lieferplattform sind, geht ein Drittel unseres Umsatzes für Provisionen drauf. Trotzdem können wir nicht aussteigen, weil wir sonst nicht mehr gefunden werden."
    },
    {
      title: "Coach muss Termine auf fünf Plattformen pflegen",
      snippet: "Als Coach muss ich meine Verfügbarkeit auf fünf verschiedenen Plattformen aktuell halten, sonst verpasse ich Kunden. Eine eigene Lösung wäre viel einfacher."
    },
    {
      title: "Einzelhändler durch Algorithmus ausgebremst",
      snippet: "Unser Shop lief gut auf der Plattform, bis der Algorithmus geändert wurde. Über Nacht brachen die Verkäufe ein, ohne dass wir etwas dagegen tun konnten."
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
    
    if (!formData.story.trim()) {
      errors.story = 'Bitte teile deine Geschichte mit uns';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Bitte gib deine E-Mail-Adresse ein';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Bitte gib eine gültige E-Mail-Adresse ein';
    }
    
    if (!formData.contactConsent) {
      errors.contactConsent = 'Bitte erlaube uns, dich zu kontaktieren';
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
    console.log('Story submitted:', formData);
    
    // Show success message
    setFormSubmitted(true);
  };

  return (
    <main className="pt-24 pb-16">
      {/* Header Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Deine Story & Wunschliste" 
            subtitle="Teile deine Erfahrungen mit Plattformabhängigkeit und hilf uns, die richtigen Lösungen zu bauen"
            centered
          />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-lexend font-bold text-2xl text-dark mb-6 text-center">
              Warum Geschichten wichtig sind
            </h2>
            <p className="text-gray-600 mb-6 text-center">
              Jede Erfahrung mit digitaler Abhängigkeit ist einzigartig. Durch das Sammeln dieser Geschichten können wir:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-lexend font-semibold text-lg mb-2 text-dark">
                  Probleme identifizieren
                </h3>
                <p className="text-gray-600 text-sm">
                  Verstehen, welche digitalen Abhängigkeiten am dringendsten gelöst werden müssen.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <h3 className="font-lexend font-semibold text-lg mb-2 text-dark">
                  Bessere Lösungen bauen
                </h3>
                <p className="text-gray-600 text-sm">
                  Maßgeschneiderte Alternativen entwickeln, die echte Bedürfnisse erfüllen.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-lexend font-semibold text-lg mb-2 text-dark">
                  Gemeinschaft aufbauen
                </h3>
                <p className="text-gray-600 text-sm">
                  Eine Bewegung von Menschen schaffen, die für digitale Unabhängigkeit einstehen.
                </p>
              </div>
            </div>
            
            {/* Story Examples */}
            <div className="bg-gray-50 p-6 rounded-lg mb-12">
              <h3 className="font-lexend font-semibold text-lg mb-4 text-dark">
                Beispiele für Geschichten:
              </h3>
              <div className="space-y-4">
                {storyExamples.map((example, index) => (
                  <div key={index} className="bg-white p-4 rounded-md border border-gray-100">
                    <h4 className="font-lexend font-medium text-md text-dark mb-2">
                      {example.title}
                    </h4>
                    <p className="text-gray-600 text-sm italic">
                      "{example.snippet}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Form */}
      <section className="pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            {formSubmitted ? (
              <div className="text-center bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-lexend font-bold text-2xl text-dark mb-4">
                  Vielen Dank für deine Geschichte!
                </h3>
                <p className="text-gray-600 mb-6">
                  Dein Beitrag hilft uns, bessere Lösungen für digitale Unabhängigkeit zu entwickeln. Wir werden uns bald bei dir melden.
                </p>
                <Link 
                  to="/ideen" 
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-lexend font-medium text-base shadow-sm transition-all inline-block"
                >
                  Öffentliche Ideen ansehen
                </Link>
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-lexend font-bold text-xl text-dark mb-6">
                  Teile deine Geschichte
                </h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name <span className="text-gray-500">(optional)</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                        placeholder="Wie sollen wir dich nennen?"
                      />
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
                        placeholder="Damit wir nachfragen können"
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                        Branche <span className="text-gray-500">(optional)</span>
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                      >
                        <option value="">Bitte wählen</option>
                        {industries.map((industry) => (
                          <option key={industry.value} value={industry.value}>
                            {industry.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="story" className="block text-sm font-medium text-gray-700 mb-1">
                        Deine Geschichte mit Plattformen *
                      </label>
                      <textarea
                        id="story"
                        name="story"
                        rows={6}
                        value={formData.story}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border ${formErrors.story ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary`}
                        placeholder="Erzähle uns von deinen Erfahrungen mit digitaler Abhängigkeit..."
                      ></textarea>
                      {formErrors.story && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.story}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="wishList" className="block text-sm font-medium text-gray-700 mb-1">
                        Wunschliste <span className="text-gray-500">(optional)</span>
                      </label>
                      <textarea
                        id="wishList"
                        name="wishList"
                        rows={3}
                        value={formData.wishList}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                        placeholder="Was würde dir helfen? Welche Lösungen wünschst du dir?"
                      ></textarea>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="shareConsent"
                            name="shareConsent"
                            type="checkbox"
                            checked={formData.shareConsent}
                            onChange={handleChange}
                            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="shareConsent" className="font-medium text-gray-700">
                            Meine Geschichte darf anonymisiert geteilt werden
                          </label>
                          <p className="text-gray-500">
                            Wir entfernen alle persönlichen Informationen, bevor wir deine Geschichte öffentlich teilen.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="contactConsent"
                            name="contactConsent"
                            type="checkbox"
                            checked={formData.contactConsent}
                            onChange={handleChange}
                            className={`h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded ${formErrors.contactConsent ? 'border-red-500' : ''}`}
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="contactConsent" className={`font-medium ${formErrors.contactConsent ? 'text-red-500' : 'text-gray-700'}`}>
                            Ich bin damit einverstanden, dass ihr mich kontaktiert *
                          </label>
                          {formErrors.contactConsent && (
                            <p className="text-red-500 text-xs mt-1">{formErrors.contactConsent}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded-md font-lexend font-medium transition-all"
                    >
                      Geschichte einreichen
                    </button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      * Pflichtfelder
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default StoryPage; 