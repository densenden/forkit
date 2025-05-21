import React from 'react';
import StoryTemplate from './StoryTemplate';
import { useTranslation } from 'react-i18next';

const CustomerStoryContent = () => (
  <>
    <p className="mb-4">
      Seit mehr als 15 Jahren führt Familie Meier ihr kleines italienisches Restaurant in der Altstadt. Mit hausgemachter Pasta und traditionellen Rezepten haben sie sich eine treue Stammkundschaft aufgebaut. Doch als die großen Lieferplattformen den Markt übernahmen, sahen sie sich mit einer schwierigen Entscheidung konfrontiert.
    </p>
    
    <p className="mb-4">
      "Die Gebühren waren enorm - bis zu 30% pro Bestellung. Das hat unsere Marge praktisch aufgefressen", erklärt Maria Meier. "Außerdem hatten wir keine Kontrolle mehr über die Kundendaten und konnten nicht direkt mit unseren Gästen kommunizieren."
    </p>
    
    <h2 className="text-2xl font-lexend font-semibold mt-8 mb-4">Die Herausforderung</h2>
    
    <p className="mb-4">
      Das Restaurant musste einen Weg finden, weiterhin Lieferungen anzubieten, ohne von den großen Plattformen abhängig zu sein. Gleichzeitig fehlten ihnen die technischen Kenntnisse und Ressourcen, um eine eigene Lösung zu entwickeln.
    </p>
    
    <h2 className="text-2xl font-lexend font-semibold mt-8 mb-4">Die Lösung</h2>
    
    <p className="mb-4">
      Mit Fork:it konnte Restaurant Meier eine eigene Website mit integriertem Bestellsystem aufbauen. Dank der einfachen Benutzeroberfläche kann die Familie das System selbst verwalten und aktualisieren.
    </p>
    
    <p className="mb-4">
      Besonders wichtig war ihnen die vollständige Kontrolle über ihre Kundendaten. "Jetzt können wir direkt mit unseren Stammkunden kommunizieren, Sonderangebote versenden und unsere Beziehung zu ihnen pflegen", sagt Maria.
    </p>
    
    <div className="my-8 bg-slate-50 dark:bg-slate-800 p-4 rounded-sm border-l-4 border-primary">
      <blockquote className="italic text-lg">
        "Zum ersten Mal haben wir das Gefühl, wirklich unabhängig zu sein. Wir entscheiden selbst über unsere Preise, Angebote und wie wir mit unseren Kunden kommunizieren."
      </blockquote>
      <p className="mt-2 text-right font-medium">- Maria Meier</p>
    </div>
    
    <h2 className="text-2xl font-lexend font-semibold mt-8 mb-4">Die Ergebnisse</h2>
    
    <ul className="list-disc pl-5 mb-4 space-y-2">
      <li>30% niedrigere Kosten pro Bestellung im Vergleich zu den großen Plattformen</li>
      <li>Aufbau einer eigenen Kundendatenbank mit über 500 Stammkunden</li>
      <li>Umsatzsteigerung im Direktgeschäft um 25% innerhalb von 6 Monaten</li>
      <li>Bessere Kundenbindung durch persönliche Kommunikation</li>
    </ul>
    
    <p className="mb-4">
      Heute generiert Restaurant Meier mehr als 70% seiner Lieferbestellungen über die eigene Website. Die Familie nutzt die gewonnenen Kundendaten für gezielte Marketingaktionen und hat jetzt die vollständige Kontrolle über ihr digitales Geschäft.
    </p>
  </>
);

const CustomerStoryPage: React.FC = () => {
  const { t } = useTranslation();
  
  const relatedStories = [
    {
      id: "fotografin-ohne-instagram",
      title: "Fotografin findet Kunden ohne Instagram",
      image: "/images/content/customer-story3_hero_left.jpg",
      category: "Kreativbranche"
    },
    {
      id: "handwerk-statt-etsy",
      title: "Vom Etsy-Shop zur eigenen Plattform",
      image: "/images/content/restaurant_right.jpeg",
      category: "Handwerk"
    }
  ];

  return (
    <StoryTemplate 
      title="Vom Foodora-Lieferanten zum eigenen Shop"
      subtitle="Wie ein kleines Restaurant seine digitale Unabhängigkeit zurückgewann"
      heroImage="/images/content/customer-story_hero_left.jpg"
      heroPosition="left"
      category="Gastronomie"
      date="15. März 2024"
      content={<CustomerStoryContent />}
      author={{
        name: "Maria Meier",
        role: "Restaurantbesitzerin, Meier's Pasta",
        image: "/images/content/forkit_contact.jpg"
      }}
      relatedStories={relatedStories}
    />
  );
};

export default CustomerStoryPage; 