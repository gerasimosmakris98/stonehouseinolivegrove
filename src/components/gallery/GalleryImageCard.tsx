
import { useState, useEffect } from 'react';
import { useGallery } from './GalleryContext';
import { GalleryImage } from '../../types/gallery';
import { ImageOff } from 'lucide-react';

interface GalleryImageCardProps {
  image: GalleryImage;
  index: number;
  priority?: boolean;
}

const GalleryImageCard = ({ image, index, priority = false }: GalleryImageCardProps) => {
  const { openModal } = useGallery();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Reset states when image.id changes (component reuse for virtualized lists, etc.)
    setIsLoaded(false);
    setHasError(false);
    // isInView will be reset by the observer logic if it re-observes.

    const element = document.getElementById(`gallery-image-${image.id}`);
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Disconnect after first intersection.
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible.
    );
    
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [image.id]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false); 
  };

  const handleError = () => {
    setIsLoaded(true); // Treat as "processed" to stop placeholder animation.
    setHasError(true);
  };

  return (
    <div 
      id={`gallery-image-${image.id}`}
      className={`gallery-card group relative overflow-hidden rounded-xl transition-transform duration-500 aspect-square
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark
        ${isInView ? 'animate-fade-in' : 'opacity-0'}
        ${hasError ? 'cursor-default' : 'cursor-pointer'}`} // Update cursor based on error
      onClick={() => !hasError && openModal(image.src, index)} // Prevent openModal on error
      tabIndex={hasError ? -1 : 0} // Make focusable if not errored
      onKeyDown={(e) => { // Allow activation with Enter/Space for accessibility
        if (!hasError && (e.key === 'Enter' || e.key === ' ')) {
          openModal(image.src, index);
        }
      }}
    >
      {/* Error Display */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
          <ImageOff size={36} className="text-gray-400 dark:text-gray-500" />
        </div>
      )}

      {/* Image placeholder/skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
      )}

      {/* Actual image */}
      {(priority || isInView) && !hasError && (
        <img
          src={image.src}
          alt={image.alt || `Villa photo ${index + 1}`}
          loading={priority ? "eager" : "lazy"}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${hasError ? 'hidden' : ''}`}
          onLoad={handleLoad}
          onError={handleError} // Add onError handler
        />
      )}

      {/* Hover overlay without labels or categories - only show if no error */}
      {!hasError && (
         <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      )}
    </div>
  );
};

export default GalleryImageCard;
