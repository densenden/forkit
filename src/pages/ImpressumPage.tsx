import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ImpressumPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    document.title = `${currentLang === 'de' ? 'Impressum' : 'Legal Notice'} | Fork:it`;
  }, [currentLang]);

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-12 text-center">
          {currentLang === 'de' ? 'Impressum' : 'Legal Notice'}
        </h1>

        <div className="max-w-3xl mx-auto prose lg:prose-lg">
          <h2>{currentLang === 'de' ? 'Angaben gemäß § 5 TMG' : 'Information pursuant to § 5 TMG'}</h2>
          
          <p>
            SEN.CO UG (haftungsbeschränkt)<br />
            Paradiesgasse 53<br />
            60594 Frankfurt am Main<br />
            Germany
          </p>

          <h2>{currentLang === 'de' ? 'Vertreten durch' : 'Represented by'}</h2>
          <p>Denis Kreuzer</p>

          <h2>{currentLang === 'de' ? 'Kontakt' : 'Contact'}</h2>
          <p>
            {currentLang === 'de' ? 'Telefon' : 'Phone'}: +49 155 66179807<br />
            E-Mail: sound@sen.studio
          </p>

          <h2>{currentLang === 'de' ? 'Handelsregister' : 'Commercial Register'}</h2>
          <p>
            {currentLang === 'de' ? 'Eingetragen im Handelsregister' : 'Registered in the Commercial Register'}<br />
            {currentLang === 'de' ? 'Registergericht' : 'Register Court'}: Amtsgericht Frankfurt am Main<br />
            {currentLang === 'de' ? 'Registernummer' : 'Registration Number'}: HRB 129222
          </p>

          <h2>{currentLang === 'de' ? 'Umsatzsteuer-ID' : 'VAT ID'}</h2>
          <p>
            {currentLang === 'de' 
              ? 'Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz' 
              : 'VAT Identification Number pursuant to § 27a of the German VAT Act'}:<br />
            DE358821685
          </p>

          <h2>{currentLang === 'de' ? 'Inhaltlich Verantwortlicher' : 'Content Responsibility'}</h2>
          <p>
            {currentLang === 'de' 
              ? 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV' 
              : 'Responsible for content pursuant to § 55 Abs. 2 RStV'}:<br />
            Denis Kreuzer<br />
            Paradiesgasse 53<br />
            60594 Frankfurt am Main
          </p>
          
          <h2>{currentLang === 'de' ? 'EU-Streitschlichtung' : 'EU Dispute Resolution'}</h2>
          <p>
            {currentLang === 'de' 
              ? 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr. Unsere E-Mail-Adresse finden Sie oben im Impressum.' 
              : 'The European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr. You can find our email address in the imprint above.'}
          </p>
          
          <h2>{currentLang === 'de' ? 'Verbraucherstreitbeilegung/Universalschlichtungsstelle' : 'Consumer Dispute Resolution/Universal Arbitration Board'}</h2>
          <p>
            {currentLang === 'de' 
              ? 'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.' 
              : 'We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImpressumPage; 