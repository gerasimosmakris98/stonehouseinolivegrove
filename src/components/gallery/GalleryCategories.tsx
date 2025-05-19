
import { useLanguage } from '../LanguageContext';
import { galleryCategories } from './data/galleryCategories';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { countImagesByCategory } from '../../utils/galleryUtils';
import { useGallery } from './GalleryContext';

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
  const { images } = useGallery();
  
  // Get dynamic counts for each category
  const categoryCounts = {
    all: totalImages,
    exterior: countImagesByCategory(images, 'exterior'),
    interior: countImagesByCategory(images, 'interior'),
    views: countImagesByCategory(images, 'views')
  };
  
  return (
    <div className="gallery-categories">
      <Tabs defaultValue={activeCategory} onValueChange={(value) => onCategoryChange(value as GalleryCategory)} className="w-full">
        <TabsList className="w-full flex justify-between bg-transparent gap-2 p-1">
          {galleryCategories.map((category) => {
            const count = categoryCounts[category.id as keyof typeof categoryCounts] || 0;
            
            return (
              <TabsTrigger 
                key={category.id}
                value={category.id}
                className={`flex-1 relative px-4 py-3 text-sm md:text-base rounded-lg transition-all
                  ${activeCategory === category.id 
                    ? 'bg-villa-blue text-white shadow-md' 
                    : 'bg-gray-100/70 hover:bg-gray-200/80 text-gray-700'
                  }`}
              >
                <span className="block">
                  {t(category.label.en, category.label.el)}
                </span>
                <span className="text-xs opacity-70 mt-1 block">
                  {`(${count})`}
                </span>
              </TabsTrigger>
            );
          })}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default GalleryCategories;
