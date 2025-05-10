import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';

const VotingPage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [voted, setVoted] = useState(false);
  const [errors, setErrors] = useState<{email?: string}>({});

  // Name options with descriptions
  const nameOptions = [
    {
      name: 'Forkit',
      description: 'Ein Name, der auf das Forking im Code-Bereich anspielt – einen neuen Weg einschlagen, basierend auf etwas Bestehendem, aber mit eigener Kontrolle.',
      votes: 64,
    },
    {
      name: 'Detour',
      description: 'Ein Begriff, der für einen alternativen Weg steht – einen Umweg, der weg von den Hauptstraßen (Plattformen) führt.',
      votes: 38,
    },
    {
      name: 'Slipnet',
      description: 'Ein Kunstwort aus "slip" (entkommen, entgleiten) und "net" (Netz). Das Entgleiten aus dem Netz der Abhängigkeiten.',
      votes: 27,
    }
  ];

  // Calculate total votes for percentages
  const totalVotes = nameOptions.reduce((sum, option) => sum + option.votes, 0);

  const handleVote = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setErrors({ email: 'Bitte gib eine gültige E-Mail-Adresse ein' });
      return;
    }
    
    if (!selectedName) {
      return;
    }
    
    // In a real application, you would submit the vote to a backend
    console.log('Voted for:', selectedName, 'Email:', email);
    
    // Show success
    setVoted(true);
  };

  return (
    <main className="pt-24 pb-16">
      {/* Header Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Namensabstimmung" 
            subtitle="Hilf uns, den perfekten Namen für unser Projekt zu finden"
            centered
          />
        </div>
      </section>

      {/* Voting Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            {voted ? (
              <div className="text-center bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-lexend font-bold text-2xl text-dark mb-4">
                  Danke für deine Stimme!
                </h3>
                <p className="text-gray-600 mb-6">
                  Deine Meinung ist wichtig für uns. Wir werden dich informieren, sobald wir eine Entscheidung getroffen haben.
                </p>
                <div className="mt-6">
                  <button 
                    onClick={() => setVoted(false)}
                    className="text-primary hover:underline font-medium"
                  >
                    Zurück zur Abstimmung
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <form onSubmit={handleVote}>
                  <h3 className="font-lexend font-bold text-xl text-dark mb-6">
                    Wähle deinen bevorzugten Namen:
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    {nameOptions.map((option) => (
                      <div 
                        key={option.name}
                        className={`border p-4 rounded-lg cursor-pointer transition-all ${
                          selectedName === option.name 
                            ? 'border-primary bg-primary/5' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setSelectedName(option.name)}
                      >
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="nameOption"
                            id={option.name}
                            value={option.name}
                            checked={selectedName === option.name}
                            onChange={() => setSelectedName(option.name)}
                            className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                          />
                          <label 
                            htmlFor={option.name} 
                            className="ml-3 block font-lexend font-semibold text-lg cursor-pointer"
                          >
                            {option.name}
                          </label>
                        </div>
                        <p className="text-gray-600 text-sm mt-2 ml-7">
                          {option.description}
                        </p>
                        <div className="ml-7 mt-3">
                          <div className="bg-gray-100 h-2 rounded-full w-full overflow-hidden">
                            <div 
                              className="bg-primary h-full rounded-full" 
                              style={{ width: `${(option.votes / totalVotes) * 100}%` }}
                            ></div>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            {option.votes} Stimmen ({Math.round((option.votes / totalVotes) * 100)}%)
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Deine E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({});
                      }}
                      className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary`}
                      placeholder="Für eine eindeutige Abstimmung"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={!selectedName}
                    className={`w-full py-3 px-4 rounded-md font-lexend font-medium transition-all ${
                      !selectedName
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-primary hover:bg-primary/90 text-white'
                    }`}
                  >
                    Abstimmen
                  </button>
                </form>
              </div>
            )}
            
            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="font-lexend font-semibold text-lg text-dark mb-3">
                Warum ist der Name wichtig?
              </h3>
              <p className="text-gray-600 text-sm">
                Der Name ist mehr als nur eine Bezeichnung – er ist ein Symbol für unsere Mission. Wir suchen einen Namen, der unsere Idee der digitalen Unabhängigkeit verkörpert und gleichzeitig eingängig und merkbar ist. Deine Stimme hilft uns, die richtige Wahl zu treffen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VotingPage; 