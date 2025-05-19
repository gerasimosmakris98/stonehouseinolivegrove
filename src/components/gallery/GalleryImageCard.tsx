
import { useState, useEffect } from 'react';
import { useGallery } from './GalleryContext';
import { GalleryImage } from '../../types/gallery';
import { useLanguage } from '../LanguageContext';

interface GalleryImageCardProps {
  image: GalleryImage;
  index: number;
  priority?: boolean;
}

const GalleryImageCard = ({ image, index, priority = false }: GalleryImageCardProps) => {
  const { t } = useLanguage();
  const { openModal, handleImageLoad } = useGallery();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`gallery-image-${image.id}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [image.id]);

  const handleLoad = () => {
    setIsLoaded(true);
    handleImageLoad();
  };

  return (
    <div 
      id={`gallery-image-${image.id}`}
      className={`gallery-card group relative overflow-hidden rounded-xl transition-transform duration-500 cursor-pointer aspect-square
        ${isInView ? 'animate-fade-in' : 'opacity-0'}`}
      onClick={() => openModal(image.src, index)}
    >
      {/* Image placeholder/skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      {/* Actual image */}
      {(priority || isInView) && (
        <img
          src={image.src}
          alt={image.alt || `Villa photo ${index + 1}`}
          loading={priority ? "eager" : "lazy"}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={handleLoad}
        />
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white font-medium text-sm md:text-base">{image.alt}</h3>
        <div className="flex gap-2 mt-2">
          {Array.isArray(image.category) ? (
            image.category.map(cat => (
              <span key={cat} className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded-full">
                {t(
                  cat.charAt(0).toUpperCase() + cat.slice(1),
                  cat === 'exterior' ? 'Εξωτερικό' : cat === 'interior' ? 'Εσωτερικό' : 'Θέα'
                )}
              </span>
            ))
          ) : (
            <span className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded-full">
              {t(
                image.category.charAt(0).toUpperCase() + image.category.slice(1),
                image.category === 'exterior' ? 'Εξωτερικό' : image.category === 'interior' ? 'Εσωτερικό' : 'Θέα'
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryImageCard;
