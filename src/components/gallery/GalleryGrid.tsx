
import { useLanguage } from '../LanguageContext';
import { GalleryImage } from '../../types/gallery';

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (img: string, index: number) => void;
  onImageLoad: () => void;
}

const GalleryGrid = ({ images, onImageClick, onImageLoad }: GalleryGridProps) => {
  const { t } = useLanguage();
  
  if (images.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">
          {t('No images found in this category.', 'Δεν βρέθηκαν εικόνες σε αυτήν την κατηγορία.')}
        </p>
      </div>
    );
  }
  
  return (
    <div className="gallery-grid">
      {images.map((img, index) => (
        <div
          key={img.id}
          onClick={() => onImageClick(img.src, index)}
          className="gallery-item"
        >
          <img
            src={img.src}
            alt={img.alt || `Villa photo ${index + 1}`}
            className="gallery-image"
            onLoad={onImageLoad}
            loading={index < 8 ? "eager" : "lazy"}
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
