
import React, { createContext, useContext, useState, useEffect } from 'react';
import { GalleryImage, GalleryCategory } from '../../types/gallery';
import { galleryImagesList } from './data';
import { filterImagesByCategory } from '../../utils/galleryUtils';

interface GalleryContextType {
  images: GalleryImage[];
  filteredImages: GalleryImage[];
  // activeCategory: GalleryCategory; // Removed
  selectedImage: string | null;
  currentIndex: number;
  imagesLoaded: number;
  loading: boolean;
  // setActiveCategory: (category: GalleryCategory) => void; // Removed
  openModal: (img: string, index: number) => void;
  closeModal: () => void;
  nextImage: () => void;
  prevImage: () => void;
  // handleImageLoad is no longer provided by the context directly for modification by children.
  // Its logic is now internal to the preloading effects.
  // New additions for "Show All" feature
  showAllImages: boolean;
  displayAllImages: () => void;
  imagesToDisplay: GalleryImage[];
  initialImageCount: number; // Exposing for potential use in consumers
}

const GalleryContext = createContext<GalleryContextType | null>(null);

export const useGallery = () => {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error('useGallery must be used within a GalleryProvider');
  }
  return context;
};

export const GalleryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const initialImageCount = 10; // Define initial image count

  const [images] = useState<GalleryImage[]>(galleryImagesList);
  // const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all'); // Removed
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>(images); // Initialize with full list from images state
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [loading, setLoading] = useState(true); // Initialize to true
  const [showAllImages, setShowAllImages] = useState(false); // New state for showing all images

  // Removed useEffect that depended on activeCategory
  // filteredImages is now initialized with `images` and does not change due to category.
  // If setShowAllImages(false) was critical for some other reset logic,
  // it might need to be re-evaluated. For now, it's removed as it was tied to category changes.

  // Function to set showAllImages to true
  const displayAllImages = () => {
    setShowAllImages(true);
    // Preloading for all images will be triggered by imagesToDisplay useEffect
  };

  // Derive images to display based on showAllImages state
  const imagesToDisplay = showAllImages
    ? filteredImages
    : filteredImages.slice(0, initialImageCount);

  const openModal = (img: string, index: number) => {
    setSelectedImage(img);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    // Use imagesToDisplay for modal navigation if only those are visible, or filteredImages if modal shows all
    // For simplicity, let's assume modal navigation should cycle through all filtered images, not just the initially visible ones.
    const newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex].src);
  };

  const prevImage = () => {
    // Similar to nextImage, modal navigation uses all filtered images.
    const newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex].src);
  };

  // This specific handleImageLoad is not strictly needed if using the new useEffect structure,
  // The old handleImageLoad function that incremented a global counter is removed.
  // Preloading and loaded status are now managed by the useEffect hooks below,
  // specifically tied to the images currently in imagesToDisplay.

  // Preload images based on imagesToDisplay
  useEffect(() => {
    setLoading(true); // Indicate loading has begun for the new set
    setImagesLoaded(0); // Reset count for the new set of images

    if (imagesToDisplay.length === 0) {
      setLoading(false); // No images to load
      return;
    }

    imagesToDisplay.forEach(img => {
      const image = new Image();
      image.src = img.src;
      const onImageDone = () => {
        setImagesLoaded(prev => prev + 1);
      };
      image.onload = onImageDone;
      image.onerror = onImageDone; // Count errors as "loaded" to prevent loader getting stuck
    });
  }, [imagesToDisplay]); // Re-run when imagesToDisplay changes

  // useEffect to set loading to false when all current imagesToDisplay are loaded
  useEffect(() => {
    if (imagesToDisplay.length > 0 && imagesLoaded >= imagesToDisplay.length) {
      setLoading(false);
    }
    // If imagesToDisplay.length is 0, the other useEffect handles setLoading(false)
  }, [imagesLoaded, imagesToDisplay.length]);


  return (
    <GalleryContext.Provider
      value={{
        images, 
        filteredImages, 
        // activeCategory, // Removed
        selectedImage,
        currentIndex,
        imagesLoaded, 
        loading, 
        // setActiveCategory, // Removed
        openModal,
        closeModal,
        nextImage,
        prevImage,
        // New context values
        showAllImages,
        displayAllImages, 
        imagesToDisplay,
        initialImageCount, 
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};
