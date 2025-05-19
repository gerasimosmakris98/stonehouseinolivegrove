
import { GalleryImage, GalleryCategory } from '../types/gallery';

// Remove duplicate images
export const deduplicateImages = (images: string[]): string[] => {
  return [...new Set(images)];
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
