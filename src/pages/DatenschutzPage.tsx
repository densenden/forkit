import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const DatenschutzPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    document.title = `${currentLang === 'de' ? 'Datenschutz' : 'Privacy Policy'} | Fork:it`;
  }, [currentLang]);

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-12 text-center">
          {currentLang === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}
        </h1>

        <div className="max-w-3xl mx-auto prose lg:prose-lg">
          <h2>{currentLang === 'de' ? 'Datenschutz auf einen Blick' : 'Privacy at a Glance'}</h2>
          
          <h3>{currentLang === 'de' ? 'Allgemeine Hinweise' : 'General Information'}</h3>
          <p>
            {currentLang === 'de' 
              ? 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.' 
              : 'The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to identify you personally.'}
          </p>

          <h3>{currentLang === 'de' ? 'Datenerfassung auf dieser Website' : 'Data Collection on This Website'}</h3>
          <p>
            <strong>{currentLang === 'de' ? 'Wer ist verantwortlich für die Datenerfassung auf dieser Website?' : 'Who is responsible for data collection on this website?'}</strong><br />
            {currentLang === 'de' 
              ? 'Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.' 
              : 'Data processing on this website is carried out by the website operator. You can find their contact details in the legal notice of this website.'}
          </p>

          <h3>{currentLang === 'de' ? 'Wie erfassen wir Ihre Daten?' : 'How do we collect your data?'}</h3>
          <p>
            {currentLang === 'de' 
              ? 'Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).' 
              : 'Your data is collected when you share it with us. This could be data you enter into a contact form, for example. Other data is automatically collected by our IT systems when you visit the website. This is primarily technical data (e.g., internet browser, operating system, or time of page visit).'}
          </p>

          <h3>{currentLang === 'de' ? 'Wofür nutzen wir Ihre Daten?' : 'What do we use your data for?'}</h3>
          <p>
            {currentLang === 'de' 
              ? 'Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.' 
              : 'Some of the data is collected to ensure error-free provision of the website. Other data may be used to analyze your user behavior.'}
          </p>

          <h3>{currentLang === 'de' ? 'Welche Rechte haben Sie bezüglich Ihrer Daten?' : 'What rights do you have regarding your data?'}</h3>
          <p>
            {currentLang === 'de' 
              ? 'Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.' 
              : 'You have the right to receive free information about the origin, recipients, and purpose of your stored personal data at any time. You also have the right to request the correction or deletion of this data. If you have given consent to data processing, you can revoke this consent at any time for the future. You also have the right, under certain circumstances, to request the restriction of the processing of your personal data.'}
          </p>

          <h2>{currentLang === 'de' ? 'Hosting' : 'Hosting'}</h2>
          <p>
            {currentLang === 'de' 
              ? 'Wir hosten die Inhalte unserer Website bei folgendem Anbieter:' 
              : 'We host the contents of our website with the following provider:'}
          </p>
          
          <h3>Netlify</h3>
          <p>
            {currentLang === 'de' 
              ? 'Anbieter ist die Netlify, Inc., 610 22nd Street, Suite 315, San Francisco, CA 94107, USA. Details entnehmen Sie der Datenschutzerklärung von Netlify: https://www.netlify.com/privacy/.' 
              : 'The provider is Netlify, Inc., 610 22nd Street, Suite 315, San Francisco, CA 94107, USA. For details, please see Netlify\'s privacy policy: https://www.netlify.com/privacy/.'}
          </p>

          <h2>{currentLang === 'de' ? 'Cookies' : 'Cookies'}</h2>
          <p>
            {currentLang === 'de' 
              ? 'Wir verwenden auf unserer Website keine Cookies, die für Tracking- oder Analyse-Zwecke eingesetzt werden. Es werden nur technisch notwendige Cookies verwendet, die für die korrekte Funktionsweise der Website erforderlich sind.' 
              : 'We do not use cookies for tracking or analysis purposes on our website. Only technically necessary cookies are used, which are required for the correct functioning of the website.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DatenschutzPage; 