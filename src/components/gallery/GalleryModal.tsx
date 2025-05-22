
import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ImageOff } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { useGallery } from './GalleryContext';

const GalleryModal = () => {
  const { t } = useLanguage();
  const { 
    filteredImages, 
    selectedImage, 
    currentIndex, 
    closeModal, 
    nextImage, 
    prevImage 
  } = useGallery();
  
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [modalHasError, setModalHasError] = useState(false);
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, closeModal, nextImage, prevImage]);
  
  // Handle touch events for swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      nextImage();
    }
    
    if (isRightSwipe) {
      prevImage();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  const localHandleImageLoad = () => {
    setImageLoaded(true);
    setModalHasError(false);
  };

  const handleModalError = () => {
    setImageLoaded(true);
    setModalHasError(true);
  };

  useEffect(() => {
    setImageLoaded(false);
    setModalHasError(false);
  }, [selectedImage]);

  if (!selectedImage) return null;
  
  return (
    <div className="gallery-modal fixed inset-0 z-50 animate-fade-in bg-black/90 backdrop-blur-md flex items-center justify-center">
      <button 
        onClick={closeModal}
        className="gallery-close-btn absolute top-4 right-4 z-50 bg-black/30 hover:bg-black/50 p-3 rounded-full text-white transition-all
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/30"
        aria-label={t("Close gallery", "Κλείσιμο γκαλερί")}
      >
        <X size={24} />
      </button>
      
      <div 
        className="gallery-modal-content relative w-full h-full flex items-center justify-center px-4"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button
          onClick={prevImage}
          className="gallery-nav-button hidden md:flex absolute left-6 z-50 bg-black/30 hover:bg-black/50 p-3 rounded-full text-white transition-all hover:scale-110
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/30"
          aria-label={t("Previous image", "Προηγούμενη εικόνα")}
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="relative max-h-[85vh] max-w-[85vw]">
          {/* Spinner Display */}
          {!imageLoaded && !modalHasError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-white"></div>
            </div>
          )}

          {/* Error Display */}
          {modalHasError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/50 rounded-lg p-4">
              <ImageOff size={48} className="mb-2 text-gray-400" />
              <span>{t("Image cannot be displayed.", "Η εικόνα δεν μπορεί να εμφανιστεί.")}</span>
            </div>
          )}
          
          {/* Actual Image */}
          <img
            src={selectedImage}
            alt={t("Enlarged gallery image", "Μεγεθυμένη εικόνα γκαλερί")}
            className={`max-h-[85vh] max-w-[85vw] object-contain rounded-lg transition-opacity duration-500 
              ${imageLoaded ? 'opacity-100' : 'opacity-0'}
              ${modalHasError ? 'hidden' : ''}`}
            onLoad={localHandleImageLoad}
            onError={handleModalError}
          />
          
          {/* Counter indicator only - show if no error */}
          {!modalHasError && (
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <div className="flex justify-center">
                <span className="bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                  {currentIndex + 1} / {filteredImages.length}
                </span>
              </div>
            </div>
          )}
        </div>
        
        <button
          onClick={nextImage}
          className="gallery-nav-button hidden md:flex absolute right-6 z-50 bg-black/30 hover:bg-black/50 p-3 rounded-full text-white transition-all hover:scale-110
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/30"
          aria-label={t("Next image", "Επόμενη εικόνα")}
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      {/* Mobile swipe hint */}
      <div className="absolute bottom-4 left-0 right-0 text-center md:hidden">
        <span className="text-white/70 text-sm">
          {t("Swipe to navigate", "Σύρετε για πλοήγηση")}
        </span>
      </div>
    </div>
  );
};

export default GalleryModal;
