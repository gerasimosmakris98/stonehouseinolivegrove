
import { useLanguage } from '../LanguageContext';
import { useGallery } from './GalleryContext';
import { GalleryCategory } from '../../types/gallery';
import { galleryCategories } from './data/galleryCategories';
import { countImagesByCategory } from '../../utils/galleryUtils';
import GalleryCategories from './GalleryCategories';

interface GalleryFiltersProps {
  className?: string;
}

const GalleryFilters = ({
  className = ''
}: GalleryFiltersProps) => {
  const { t } = useLanguage();
  const {
    images,
    activeCategory,
    setActiveCategory,
    filteredImages
  } = useGallery();

  const handleCategoryChange = (category: GalleryCategory) => {
    setActiveCategory(category);
  };

  const totalImages = images.length;
  const filteredCount = filteredImages.length;

  return (
    <div className={`gallery-filters ${className}`}>
      <GalleryCategories
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        totalImages={totalImages}
        filteredCount={filteredCount}
      />
    </div>
  );
};

export default GalleryFilters;
