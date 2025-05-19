
import { useEffect, useRef } from 'react';
import { useLanguage } from '../LanguageContext';
import { propertyData } from '../../data/propertyData';
import { useGallery } from './GalleryContext';
import GalleryFilters from './GalleryFilters';
import GalleryGrid from './GalleryGrid';
import GalleryModal from './GalleryModal';
import GalleryPreloader from './GalleryPreloader';

const GalleryContainer = () => {
  const { t } = useLanguage();
  const { gallery } = propertyData;
  const { images } = useGallery();
  const sectionRef = useRef<HTMLElement>(null);
  
  // Add scroll-based animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white animated-section opacity-0 transform translate-y-8 transition-all duration-1000"
      id="gallery"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animated-element">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-3 text-gray-800 fade-in-up">
            {t(gallery.title.en, gallery.title.el)}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4 fade-in-up animation-delay-100">
            {t(gallery.subtitle.en, gallery.subtitle.el)}
          </p>
          <p className="text-sm text-villa-blue mt-2 fade-in-up animation-delay-200">
            {t(
              `${images.length} photos available`,
              `${images.length} φωτογραφίες διαθέσιμες`
            )}
          </p>
        </div>

        {/* Gallery filters */}
        <GalleryFilters className="mb-8 animated-element" />

        {/* Loading indicator */}
        <GalleryPreloader />

        {/* Gallery grid */}
        <GalleryGrid />
      </div>

      {/* Lightbox modal */}
      <GalleryModal />
    </section>
  );
};

export default GalleryContainer;
