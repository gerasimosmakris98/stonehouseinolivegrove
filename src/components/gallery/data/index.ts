
import { GalleryImage } from '../../../types/gallery';
import { exteriorImages } from './galleryImagesExterior';
import { interiorImages } from './galleryImagesInterior';
import { viewImages } from './galleryImagesViews';
import { sharedImages } from './galleryImagesShared';
import { deduplicateImages } from '../../../utils/galleryUtils';

// Re-export categories
export { galleryCategories } from './galleryCategories';

// Combine all image lists (before deduplication)
const allImages: GalleryImage[] = [
  ...exteriorImages,
  ...interiorImages,
  ...viewImages,
  ...sharedImages
];

// Export deduplicated image list
export const galleryImagesList = deduplicateImages(allImages);

// Export individual category lists for direct access
export {
  exteriorImages,
  interiorImages,
  viewImages,
  sharedImages
};
