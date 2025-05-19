
import { useLanguage } from '../LanguageContext';
import { useGallery } from './GalleryContext';
import GalleryImageCard from './GalleryImageCard';

const GalleryGrid = () => {
  const { t } = useLanguage();
  const { filteredImages } = useGallery();

  if (filteredImages.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">
          {t('No images found in this category.', 'Δεν βρέθηκαν εικόνες σε αυτήν την κατηγορία.')}
        </p>
      </div>
    );
  }
  
  return (
    <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {filteredImages.map((img, index) => (
        <GalleryImageCard 
          key={img.id} 
          image={img} 
          index={index} 
          priority={index < 4} // prioritize first 4 images
        />
      ))}
    </div>
  );
};

export default GalleryGrid;
