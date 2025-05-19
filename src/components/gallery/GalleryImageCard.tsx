
import { useState, useEffect } from 'react';
import { useGallery } from './GalleryContext';
import { GalleryImage } from '../../types/gallery';

interface GalleryImageCardProps {
  image: GalleryImage;
  index: number;
  priority?: boolean;
}

const GalleryImageCard = ({ image, index, priority = false }: GalleryImageCardProps) => {
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

      {/* Hover overlay without labels or categories */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default GalleryImageCard;
