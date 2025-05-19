
import { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { propertyData } from '../data/propertyData';

type FAQItem = {
  question: {
    en: string;
    el: string;
  };
  answer: {
    en: string;
    el: string;
  };
};

const DetailsFAQ = () => {
  const { t, language } = useLanguage();
  const { details } = propertyData;
  const [openTab, setOpenTab] = useState('amenities');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleTabClick = (tab: string) => {
    setOpenTab(tab);
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-gray-50" id="details">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animated-section">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">
            {t(details.title.en, details.title.el)}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t(details.subtitle.en, details.subtitle.el)}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap border-b border-gray-200 mb-8 animated-section">
          <button
            onClick={() => handleTabClick('amenities')}
            className={`mr-4 py-2 px-4 font-medium text-sm transition-colors ${
              openTab === 'amenities'
                ? 'border-b-2 border-villa-blue text-villa-blue'
                : 'text-gray-500 hover:text-villa-blue'
            }`}
          >
            {t('Amenities', 'Παροχές')}
          </button>
          <button
            onClick={() => handleTabClick('location')}
            className={`mr-4 py-2 px-4 font-medium text-sm transition-colors ${
              openTab === 'location'
                ? 'border-b-2 border-villa-blue text-villa-blue'
                : 'text-gray-500 hover:text-villa-blue'
            }`}
          >
            {t('Location', 'Τοποθεσία')}
          </button>
          <button
            onClick={() => handleTabClick('house-rules')}
            className={`mr-4 py-2 px-4 font-medium text-sm transition-colors ${
              openTab === 'house-rules'
                ? 'border-b-2 border-villa-blue text-villa-blue'
                : 'text-gray-500 hover:text-villa-blue'
            }`}
          >
            {t('House Rules', 'Κανόνες Σπιτιού')}
          </button>
          <button
            onClick={() => handleTabClick('faq')}
            className={`py-2 px-4 font-medium text-sm transition-colors ${
              openTab === 'faq'
                ? 'border-b-2 border-villa-blue text-villa-blue'
                : 'text-gray-500 hover:text-villa-blue'
            }`}
          >
            {t('FAQ', 'Συχνές Ερωτήσεις')}
          </button>
        </div>

        {/* Tab Content */}
        <div className="animated-section">
          {/* Amenities Tab */}
          {openTab === 'amenities' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {details.amenities.categories.map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-4">{t(category.name.en, category.name.el)}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="w-1.5 h-1.5 bg-villa-blue rounded-full mr-2"></span>
                        {t(item.en, item.el)}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Location Tab */}
          {openTab === 'location' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-4">{t('Nearby Attractions', 'Κοντινά Αξιοθέατα')}</h3>
                <ul className="space-y-3">
                  {details.location.attractions.map((attraction, idx) => (
                    <li key={idx} className="flex text-gray-600">
                      <span className="w-1.5 h-1.5 bg-villa-blue rounded-full mr-2 mt-2"></span>
                      <div>
                        <p className="font-medium">{t(attraction.name.en, attraction.name.el)}</p>
                        <p className="text-sm text-gray-500">{attraction.distance} km</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                  <h3 className="font-semibold text-gray-800 mb-4">{t('Nearby Beaches', 'Κοντινές Παραλίες')}</h3>
                  <ul className="space-y-3">
                    {details.location.beaches.map((beach, idx) => (
                      <li key={idx} className="flex text-gray-600">
                        <span className="w-1.5 h-1.5 bg-villa-blue rounded-full mr-2 mt-2"></span>
                        <div>
                          <p className="font-medium">{t(beach.name.en, beach.name.el)}</p>
                          <p className="text-sm text-gray-500">{beach.distance} km</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-4">{t('Restaurants & Cafés', 'Εστιατόρια & Καφέ')}</h3>
                  <ul className="space-y-3">
                    {details.location.dining.map((place, idx) => (
                      <li key={idx} className="flex text-gray-600">
                        <span className="w-1.5 h-1.5 bg-villa-blue rounded-full mr-2 mt-2"></span>
                        <div>
                          <p className="font-medium">{place.name}</p>
                          <p className="text-sm text-gray-500">{t(place.type.en, place.type.el)} • {place.distance} km</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* House Rules Tab */}
          {openTab === 'house-rules' && (
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-4">{t('Check-in/Check-out', 'Άφιξη/Αναχώρηση')}</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-600">
                      <span className="font-medium mr-2">{t('Check-in:', 'Άφιξη:')}</span>
                      {t('15:00 - 21:00', '15:00 - 21:00')}
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="font-medium mr-2">{t('Check-out:', 'Αναχώρηση:')}</span>
                      {t('08:00 - 11:00', '08:00 - 11:00')}
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-4">{t('General Rules', 'Γενικοί Κανόνες')}</h3>
                  <ul className="space-y-2">
                    {details.houseRules.general.map((rule, idx) => (
                      <li key={idx} className="flex items-start text-gray-600">
                        <span className="w-1.5 h-1.5 bg-villa-blue rounded-full mr-2 mt-2"></span>
                        {t(rule.en, rule.el)}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-4">{t('Additional Information', 'Επιπλέον Πληροφορίες')}</h3>
                  <ul className="space-y-2">
                    {details.houseRules.additional.map((info, idx) => (
                      <li key={idx} className="flex items-start text-gray-600">
                        <span className="w-1.5 h-1.5 bg-villa-blue rounded-full mr-2 mt-2"></span>
                        {t(info.en, info.el)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* FAQ Tab */}
          {openTab === 'faq' && (
            <div className="space-y-4">
              {details.faqs.map((faq: FAQItem, idx) => (
                <div 
                  key={idx} 
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex justify-between items-center p-4 text-left font-medium hover:bg-gray-50 transition-colors"
                  >
                    <span>{t(faq.question.en, faq.question.el)}</span>
                    {openFAQ === idx ? (
                      <ChevronUp className="h-5 w-5 text-villa-blue" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>

                  {openFAQ === idx && (
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-600">{t(faq.answer.en, faq.answer.el)}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DetailsFAQ;
