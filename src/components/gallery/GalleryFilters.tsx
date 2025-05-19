import { useLanguage } from '../LanguageContext';
import { useGallery } from './GalleryContext';
import { GalleryCategory } from '../../types/gallery';
import { galleryCategories } from './data/galleryCategories';
import { countImagesByCategory } from '../../utils/galleryUtils';
interface GalleryFiltersProps {
  className?: string;
}
const GalleryFilters = ({
  className = ''
}: GalleryFiltersProps) => {
  const {
    t
  } = useLanguage();
  const {
    images,
    activeCategory,
    setActiveCategory
  } = useGallery();
  return <div className={`gallery-filters ${className}`}>
      
    </div>;
};
export default GalleryFilters;