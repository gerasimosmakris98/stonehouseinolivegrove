import { GalleryImage, GalleryCategory } from '../../../types/gallery'; // Ensure GalleryCategory is imported
import { consolidatedImages } from './consolidatedGalleryImages';
export { galleryCategories } from './galleryCategories'; // Keep this

// Export the consolidated and already deduplicated image list
export const galleryImagesList: GalleryImage[] = consolidatedImages;

// Re-create categorized exports from the single consolidated list
// This ensures these exports are consistent with the single source of truth.
export const exteriorImages: GalleryImage[] = consolidatedImages.filter(img => 
    img.category === 'exterior' || (Array.isArray(img.category) && img.category.includes('exterior'))
);
export const interiorImages: GalleryImage[] = consolidatedImages.filter(img => 
    img.category === 'interior' || (Array.isArray(img.category) && img.category.includes('interior'))
);
export const viewImages: GalleryImage[] = consolidatedImages.filter(img => 
    img.category === 'views' || (Array.isArray(img.category) && img.category.includes('views'))
);
// For sharedImages, we can define them as images that have more than one category,
// or list them if they were specifically in the old sharedImages and also in another (e.g. exterior and views)
// For simplicity, let's assume shared images are those with an array for category.
export const sharedImages: GalleryImage[] = consolidatedImages.filter(img => 
    Array.isArray(img.category) && img.category.length > 0
);
