
import React, { createContext, useContext, useState, useEffect } from 'react';
import { GalleryImage, GalleryCategory } from '../../types/gallery';
import { galleryImagesList } from './GalleryData';
import { deduplicateImages, filterImagesByCategory } from '../../utils/galleryUtils';

interface GalleryContextType {
  images: GalleryImage[];
  filteredImages: GalleryImage[];
  activeCategory: GalleryCategory;
  selectedImage: string | null;
  currentIndex: number;
  imagesLoaded: number;
  loading: boolean; // Added this property
  setActiveCategory: (category: GalleryCategory) => void;
  openModal: (img: string, index: number) => void;
  closeModal: () => void;
  nextImage: () => void;
  prevImage: () => void;
  handleImageLoad: () => void;
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
  // Get unique images
  const uniqueImages = deduplicateImages(galleryImagesList);
  
  const [images] = useState<GalleryImage[]>(uniqueImages);
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>(uniqueImages);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [loading, setLoading] = useState(true); // Added loading state

  // Set filtered images when category changes
  useEffect(() => {
    const filtered = filterImagesByCategory(images, activeCategory);
    setFilteredImages(filtered);
  }, [activeCategory, images]);

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
    const newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex].src);
  };

  const prevImage = () => {
    const newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex].src);
  };

  const handleImageLoad = () => {
    setImagesLoaded(prev => prev + 1);
    if (imagesLoaded >= images.length - 1) {
      setLoading(false); // Set loading to false when all images are loaded
    }
  };

  // Preload all gallery images for smoother experience
  useEffect(() => {
    const preloadImages = () => {
      setLoading(true); // Set loading to true when starting to load images
      images.forEach(img => {
        const image = new Image();
        image.src = img.src;
        image.onload = handleImageLoad;
      });
    };
    
    preloadImages();
  }, [images]);

  return (
    <GalleryContext.Provider
      value={{
        images,
        filteredImages,
        activeCategory,
        selectedImage,
        currentIndex,
        imagesLoaded,
        loading, // Added loading to the context value
        setActiveCategory,
        openModal,
        closeModal,
        nextImage,
        prevImage,
        handleImageLoad,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};
