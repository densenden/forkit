import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';

const PartnerPage: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
    partnerType: '',
    consent: false
  });
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const partnerTypes = [
    { 
      id: 'tech',
      name: 'Technologie-Partner',
      description: 'Du bietest selbst Open-Source-Lösungen an oder entwickelst Software, die unsere Mission unterstützt'
    },
    { 
      id: 'service',
      name: 'Service-Partner',
      description: 'Du bietest Dienstleistungen an, die unsere Lösungen ergänzen (Design, Beratung, Support)'
    },
    { 
      id: 'reseller',
      name: 'Vermittlungspartner',
      description: 'Du arbeitest mit kleinen Unternehmen und möchtest unsere Lösungen empfehlen/vermitteln'
    },
    { 
      id: 'NGO',
      name: 'NGO/Verband',
      description: 'Du vertrittst eine Organisation, die sich ebenfalls für digitale Unabhängigkeit einsetzt'
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
    
    if (!formData.organization.trim()) {
      errors.organization = 'Bitte gib den Namen deiner Organisation ein';
    }
    
    if (!formData.partnerType) {
      errors.partnerType = 'Bitte wähle eine Partnerschaftsart aus';
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
    console.log('Partner form data submitted:', formData);
    
    // Show success message
    setFormSubmitted(true);
  };

  return (
    <main className="pt-24 pb-16">
      {/* Header Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Partner werden" 
            subtitle="Werde Teil unserer Bewegung für digitale Unabhängigkeit"
            centered
          />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-lexend font-bold text-2xl text-dark mb-6">
              Gemeinsam erreichen wir mehr
            </h2>
            <p className="text-gray-600 mb-8">
              Wir suchen Partner, die unsere Vision teilen und mit uns zusammen an der digitalen Unabhängigkeit von kleinen Unternehmen arbeiten möchten.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 text-left">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-lexend font-semibold text-xl text-dark mb-4">
                  Was wir bieten
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Gemeinsame Projekte und Wissensaustausch
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Vermittlung von Kunden und Projekten
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Sichtbarkeit in unserem Netzwerk
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Zugang zu unseren Ressourcen und Tools
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-lexend font-semibold text-xl text-dark mb-4">
                  Was wir suchen
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Partner, die an digitale Selbstbestimmung glauben
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Organisationen mit komplementären Fähigkeiten
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Langfristige, nachhaltige Zusammenarbeit
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Fokus auf Open-Source und Transparenz
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-lexend font-bold text-2xl text-dark mb-10 text-center">
            Arten der Partnerschaft
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {partnerTypes.map((type) => (
              <div 
                key={type.id}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <h3 className="font-lexend font-semibold text-xl text-dark mb-3">
                  {type.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-lexend font-bold text-2xl text-dark mb-6 text-center">
              Interesse geweckt?
            </h2>
            
            {formSubmitted ? (
              <div className="text-center bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-lexend font-bold text-2xl text-dark mb-4">
                  Vielen Dank für dein Interesse!
                </h3>
                <p className="text-gray-600 mb-2">
                  Wir haben deine Anfrage erhalten und werden uns in Kürze mit dir in Verbindung setzen.
                </p>
                <p className="text-gray-600">
                  Wir freuen uns auf die Zusammenarbeit!
                </p>
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
                      <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                        Organisation/Unternehmen *
                      </label>
                      <input
                        id="organization"
                        name="organization"
                        type="text"
                        value={formData.organization}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border ${formErrors.organization ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary`}
                      />
                      {formErrors.organization && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.organization}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="partnerType" className="block text-sm font-medium text-gray-700 mb-1">
                        Art der Partnerschaft *
                      </label>
                      <select
                        id="partnerType"
                        name="partnerType"
                        value={formData.partnerType}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border ${formErrors.partnerType ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary`}
                      >
                        <option value="">Bitte wählen</option>
                        {partnerTypes.map((type) => (
                          <option key={type.id} value={type.id}>
                            {type.name}
                          </option>
                        ))}
                      </select>
                      {formErrors.partnerType && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.partnerType}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Nachricht <span className="text-gray-500">(optional)</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                        placeholder="Beschreibe kurz, wie du dir die Zusammenarbeit vorstellst..."
                      ></textarea>
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
                      Anfrage senden
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

export default PartnerPage; 