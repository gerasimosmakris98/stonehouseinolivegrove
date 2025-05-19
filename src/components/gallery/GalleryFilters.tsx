
import { useLanguage } from '../LanguageContext';
import { useGallery } from './GalleryContext';
import { GalleryCategory } from '../../types/gallery';
import { galleryCategories } from './data/galleryCategories';
import { countImagesByCategory } from '../../utils/galleryUtils';

interface GalleryFiltersProps {
  className?: string;
}

const GalleryFilters = ({ className = '' }: GalleryFiltersProps) => {
  const { t } = useLanguage();
  const { images, activeCategory, setActiveCategory } = useGallery();
  
  return (
    <div className={`gallery-filters ${className}`}>
      <div className="flex flex-wrap justify-center gap-3 mb-8 fade-in-up">
        {galleryCategories.map((category) => {
          const count = category.id === 'all' 
            ? images.length 
            : countImagesByCategory(images, category.id);
            
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`gallery-filter-btn transition-all duration-300 px-5 py-2.5 rounded-full text-sm font-medium 
                ${activeCategory === category.id ? 'scale-105 bg-villa-blue text-white shadow-lg' : 'bg-gray-100/80 backdrop-blur-sm text-gray-700 hover:bg-gray-200/90'}`}
              aria-label={t(`Show ${category.label.en} images`, `Εμφάνιση ${category.label.el} εικόνων`)}
            >
              {t(category.label.en, category.label.el)} 
              <span className="ml-1 opacity-70">({count})</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryFilters;
