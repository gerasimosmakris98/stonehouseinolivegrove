
import { useLanguage } from '../LanguageContext';

export type GalleryCategory = 'all' | 'exterior' | 'interior' | 'views';

interface GalleryCategoriesProps {
  activeCategory: GalleryCategory;
  onCategoryChange: (category: GalleryCategory) => void;
  totalImages: number;
  filteredCount: number;
}

const GalleryCategories = ({ 
  activeCategory, 
  onCategoryChange,
  totalImages,
  filteredCount
}: GalleryCategoriesProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="gallery-categories">
      <button
        onClick={() => onCategoryChange('all')}
        className={`gallery-category-button ${
          activeCategory === 'all'
            ? 'bg-villa-blue text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        {t('All', 'Όλα')} ({totalImages})
      </button>
      <button
        onClick={() => onCategoryChange('exterior')}
        className={`gallery-category-button ${
          activeCategory === 'exterior'
            ? 'bg-villa-blue text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        {t('Exterior', 'Εξωτερικό')}
      </button>
      <button
        onClick={() => onCategoryChange('interior')}
        className={`gallery-category-button ${
          activeCategory === 'interior'
            ? 'bg-villa-blue text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        {t('Interior', 'Εσωτερικό')}
      </button>
      <button
        onClick={() => onCategoryChange('views')}
        className={`gallery-category-button ${
          activeCategory === 'views'
            ? 'bg-villa-blue text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        {t('Views', 'Θέα')}
      </button>
    </div>
  );
};

export default GalleryCategories;
