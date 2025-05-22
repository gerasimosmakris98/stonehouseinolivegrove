
import { GalleryImage, GalleryCategory } from '../types/gallery';

// Remove duplicate images
export const deduplicateImages = (images: GalleryImage[]): GalleryImage[] => {
  const seen = new Set();
  return images.filter(img => {
    if (seen.has(img.src)) {
      return false;
    }
    seen.add(img.src);
    return true;
  });
};

// Filter images by category
export const filterImagesByCategory = (
  images: GalleryImage[], 
  category: GalleryCategory
): GalleryImage[] => {
  if (category === 'all') {
    return images;
  }
  
  return images.filter(image => {
    if (Array.isArray(image.category)) {
      return image.category.includes(category);
    }
    return image.category === category;
  });
};

// Helper to generate an ID from a string
export const generateId = (str: string): string => {
  return str.split('/').pop() || str;
};

// Get featured images
export const getFeaturedImages = (images: GalleryImage[], limit = 5): GalleryImage[] => {
  return images
    .filter(img => img.featured)
    .slice(0, limit);
};

// Count images by category
export const countImagesByCategory = (
  images: GalleryImage[], 
  category: GalleryCategory
): number => {
  return filterImagesByCategory(images, category).length;
};

// Animate on scroll helper
export const animateOnScroll = (element: Element): void => {
  element.classList.add('animate');
};
