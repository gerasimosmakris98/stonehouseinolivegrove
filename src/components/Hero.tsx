
import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/lovable-uploads/9c914b97-c3b3-4d88-9d99-ec27d8673974.png',
  '/lovable-uploads/61e1f3c6-b6b4-4b94-a690-ef45a0fdb3e9.png',
  '/lovable-uploads/fe8d8ea8-689e-4b4e-8981-c0cf9cd10c76.png',
  '/lovable-uploads/2a97d715-442e-4557-b8e9-a6ad65d1d151.png'
];

const Hero = () => {
  const { t } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background image carousel */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={img}
            alt={`Stone House - Image ${index + 1}`}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg animate-fade-in">
          {t("Stone House in olive Grove", "Πέτρινο Σπίτι σε Ελαιώνα")}
        </h1>
        <p className="text-xl md:text-2xl font-light max-w-2xl mb-8 drop-shadow-md animate-slide-up">
          {t("A peaceful retreat in Trapezaki, Kefalonia", "Μια γαλήνια απόδραση στο Τραπεζάκι, Κεφαλονιά")}
        </p>
        <div className="flex gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="#gallery"
            className="px-6 py-3 bg-white text-villa-blue rounded-full font-medium hover:bg-villa-blue hover:text-white transition-colors shadow-lg"
          >
            {t("View Gallery", "Προβολή Γκαλερί")}
          </a>
          <a
            href={t(
              "https://www.booking.com/hotel/gr/denis-stone-villa-trapezaki.en-gb.html?lang=en-gb&soz=1&lang_changed=1",
              "https://www.booking.com/hotel/gr/denis-stone-villa-trapezaki.el.html?lang=el&soz=1&lang_changed=1"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-villa-blue text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg"
          >
            {t("Book Now", "Κράτηση Τώρα")}
          </a>
        </div>

        {/* Rating badge */}
        <div 
          className="absolute bottom-16 right-8 bg-white/90 text-villa-blue rounded-lg shadow-lg px-4 py-3 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          <div className="text-xs font-medium mb-1">{t("Booking.com Rating", "Βαθμολογία Booking.com")}</div>
          <div className="flex items-center">
            <span className="text-2xl font-bold">9.4</span>
            <span className="text-sm ml-1">/10</span>
            <span className="ml-2 px-2 py-0.5 bg-blue-100 text-villa-blue rounded text-xs font-medium">
              {t("Excellent", "Εξαιρετικό")}
            </span>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button 
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-20 transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-20 transition-colors"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentImage ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
