
import { useEffect } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { GalleryImage } from '../../types/gallery';

interface GalleryModalProps {
  selectedImage: string | null;
  currentIndex: number;
  images: GalleryImage[];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const GalleryModal = ({
  selectedImage,
  currentIndex,
  images,
  onClose,
  onNext,
  onPrev
}: GalleryModalProps) => {
  const { t } = useLanguage();
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, onClose, onNext, onPrev]);

  if (!selectedImage) return null;
  
  return (
    <div className="gallery-modal">
      <button 
        onClick={onClose}
        className="gallery-close-button"
        aria-label="Close gallery"
      >
        <X size={24} />
      </button>
      
      <button
        onClick={onPrev}
        className="gallery-nav-button left-4 top-1/2 -translate-y-1/2"
        aria-label="Previous image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      
      <img
        src={selectedImage}
        alt={images[currentIndex]?.alt || "Enlarged villa view"}
        className="gallery-modal-image"
      />
      
      <button
        onClick={onNext}
        className="gallery-nav-button right-4 top-1/2 -translate-y-1/2"
        aria-label="Next image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
      </button>
      
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <span className="bg-black/50 text-white px-4 py-2 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </span>
      </div>
    </div>
  );
};

export default GalleryModal;
