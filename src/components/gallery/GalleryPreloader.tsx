
import { useGallery } from './GalleryContext';
import { useLanguage } from '../LanguageContext';

const GalleryPreloader = () => {
  const { t } = useLanguage();
  const { images, imagesLoaded } = useGallery();
  
  // Show loading indicator until at least 30% of images are loaded
  const loadingThreshold = Math.floor(images.length * 0.3);
  const loadingPercentage = Math.min(Math.floor((imagesLoaded / images.length) * 100), 100);
  
  if (imagesLoaded >= loadingThreshold) return null;
  
  return (
    <div className="flex flex-col items-center justify-center py-8 animate-fade-in">
      <div className="relative h-2 w-48 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full bg-villa-blue rounded-full transition-all duration-300"
          style={{ width: `${loadingPercentage}%` }}
        ></div>
      </div>
      <p className="mt-3 text-gray-600 text-sm">
        {t(
          `Loading gallery... ${loadingPercentage}%`, 
          `Φόρτωση γκαλερί... ${loadingPercentage}%`
        )}
      </p>
    </div>
  );
};

export default GalleryPreloader;
