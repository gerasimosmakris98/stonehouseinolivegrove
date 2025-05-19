
import { useLanguage } from '../LanguageContext';
import { useGallery } from './GalleryContext';
import GalleryImageCard from './GalleryImageCard';

const GalleryGrid = () => {
  const { t } = useLanguage();
  const { images } = useGallery();

  if (images.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">
          {t('No images found.', 'Δεν βρέθηκαν εικόνες.')}
        </p>
      </div>
    );
  }
  
  return (
    <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {images.map((img, index) => (
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
