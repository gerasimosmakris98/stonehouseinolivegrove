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
  const {
    t
  } = useLanguage();
  return <div className="gallery-categories">
      
      
      
      
    </div>;
};
export default GalleryCategories;