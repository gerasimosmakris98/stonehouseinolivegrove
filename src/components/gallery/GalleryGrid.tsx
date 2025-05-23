
import { useLanguage } from '../LanguageContext';
import { useGallery } from './GalleryContext';
import GalleryImageCard from './GalleryImageCard';

const GalleryGrid = () => {
  const { t } = useLanguage();
  const { 
    imagesToDisplay, 
    displayAllImages, 
    showAllImages, 
    filteredImages, 
    initialImageCount 
  } = useGallery();

  if (imagesToDisplay.length === 0 && filteredImages.length === 0) { // Check if there are truly no images for the current filter
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">
          {t('No images found.', 'Δεν βρέθηκαν εικόνες.')}
        </p>
      </div>
    );
  }
  
  return (
    <>
      <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {imagesToDisplay.map((img, index) => (
          <GalleryImageCard 
            key={img.id} 
            image={img} 
            // The index for openModal needs to be the image's index within the complete filteredImages list
            // to ensure correct modal navigation when not all images are initially displayed.
            index={filteredImages.findIndex(filteredImg => filteredImg.id === img.id)}
            priority={index < 4} // Prioritize loading for the first few images in the current view.
          />
        ))}
      </div>
      {!showAllImages && filteredImages.length > initialImageCount && (
        <div className="text-center mt-8 mb-4">
          <button
            onClick={displayAllImages}
            className="px-8 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 transition-colors duration-150
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background-dark"
          >
            {t('View All', 'Εμφάνιση όλων')}
          </button>
        </div>
      )}
    </>
  );
};

export default GalleryGrid;
