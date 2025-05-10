import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';

const WaitlistPage: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    statement: '',
    consent: false,
    newsletter: false,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    console.log('Form data submitted:', formData);
    
    // Show success message
    setFormSubmitted(true);
    
    // Reset form after 5 seconds (optional)
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        statement: '',
        consent: false,
        newsletter: false,
      });
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <main className="pt-24 pb-16">
      {/* Header Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title={t('waitlist.title')} 
            subtitle="Sei von Anfang an dabei und hilf uns, die digitale Freiheit zu gestalten"
            centered
          />
        </div>
      </section>

      {/* Waitlist Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-lexend font-bold text-2xl text-dark mb-4">
                    Vielen Dank!
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Du stehst jetzt auf unserer Warteliste.
                  </p>
                  <p className="text-gray-600">
                    Wir werden dich benachrichtigen, sobald wir starten.
                  </p>
                </div>
              ) : (
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
                      <label htmlFor="statement" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('waitlist.whyJoin')} <span className="text-gray-500">(optional)</span>
                      </label>
                      <textarea
                        id="statement"
                        name="statement"
                        rows={4}
                        value={formData.statement}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                        placeholder="Erzähl uns, warum du an FORKIT interessiert bist..."
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
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="newsletter"
                          name="newsletter"
                          type="checkbox"
                          checked={formData.newsletter}
                          onChange={handleChange}
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="newsletter" className="font-medium text-gray-700">
                          Ich möchte Updates zu FORKIT erhalten
                        </label>
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded-md font-lexend font-medium transition-all"
                    >
                      {t('waitlist.submit')}
                    </button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      * Pflichtfelder. Wir geben deine Daten niemals an Dritte weiter.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-lexend font-bold text-2xl text-dark mb-6 text-center">
              Was passiert, wenn du auf der Warteliste stehst?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="font-lexend font-bold text-primary">1</span>
                </div>
                <h3 className="font-lexend font-semibold text-lg mb-2 text-dark">
                  Frühzeitiger Zugang
                </h3>
                <p className="text-gray-600 text-sm">
                  Du erhältst als Erstes Zugang zu unseren Tools und Lösungen, sobald sie verfügbar sind.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="font-lexend font-bold text-primary">2</span>
                </div>
                <h3 className="font-lexend font-semibold text-lg mb-2 text-dark">
                  Mitgestaltung
                </h3>
                <p className="text-gray-600 text-sm">
                  Du kannst aktiv mitentscheiden, welche Funktionen und Tools wir priorisieren sollten.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="font-lexend font-bold text-primary">3</span>
                </div>
                <h3 className="font-lexend font-semibold text-lg mb-2 text-dark">
                  Community
                </h3>
                <p className="text-gray-600 text-sm">
                  Werde Teil einer Gemeinschaft, die sich für digitale Freiheit und Selbstbestimmung einsetzt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WaitlistPage; 