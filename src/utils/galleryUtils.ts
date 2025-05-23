
import { GalleryImage, GalleryCategory } from '../types/gallery';

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
