
import { useLanguage } from './LanguageContext';
import { propertyData } from '../data/propertyData';
import { Star } from 'lucide-react';

const Reviews = () => {
  const { t } = useLanguage();
  const { reviews } = propertyData;

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating / 2 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          }`}
        />
      ));
  };

  return (
    <section className="py-16 px-4 bg-white" id="reviews">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">
            {t(reviews.title.en, reviews.title.el)}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t(reviews.subtitle.en, reviews.subtitle.el)}
          </p>
          
          <div className="inline-flex items-center mt-6 bg-blue-50 px-6 py-3 rounded-full">
            <span className="text-3xl font-bold text-villa-blue mr-2">{reviews.rating}</span>
            <div className="flex space-x-1">
              {renderStars(9.4)}
            </div>
            <span className="ml-2 text-sm font-medium text-villa-blue bg-blue-100 px-2 py-0.5 rounded">
              {t("EXCELLENT", "ΕΞΑΙΡΕΤΙΚΟ")}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.items.map((review, index) => (
            <div 
              key={index}
              className="bg-gray-50 border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-gray-800">{review.name}</h3>
                  <p className="text-sm text-gray-500">
                    {t(review.country.en, review.country.el)} • {review.date}
                  </p>
                </div>
                <div className="flex bg-villa-blue text-white px-2 py-1 rounded">
                  <span className="font-bold">{review.rating}</span>
                </div>
              </div>
              
              <p className="text-gray-600">"{t(review.comment.en, review.comment.el)}"</p>
              
              <div className="mt-4 flex space-x-1">
                {renderStars(review.rating)}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a
            href={t(
              "https://www.booking.com/hotel/gr/denis-stone-villa-trapezaki.en-gb.html?lang=en-gb&soz=1&lang_changed=1#tab-reviews",
              "https://www.booking.com/hotel/gr/denis-stone-villa-trapezaki.el.html?lang=el&soz=1&lang_changed=1#tab-reviews"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="text-villa-blue hover:text-blue-700 font-medium inline-flex items-center"
          >
            {t("Read all reviews on Booking.com", "Διαβάστε όλες τις κριτικές στο Booking.com")}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right ml-1"><path d="M7 7h10v10"/><path d="m7 17 10-10"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
