
import { GalleryImage } from '../../../types/gallery';
import { generateId } from '../../../utils/galleryUtils';

// Define shared/mixed category images
export const sharedImages: GalleryImage[] = [
  // Images that belong to multiple categories
  {
    id: generateId('/lovable-uploads/5b4a587d-ae2d-4ea7-9aba-b30075a2c0a5.png'),
    src: '/lovable-uploads/5b4a587d-ae2d-4ea7-9aba-b30075a2c0a5.png',
    category: ['exterior', 'views'],
    alt: 'Villa terrace with sea view'
  },
  {
    id: generateId('/lovable-uploads/d364fce3-8a2f-4b51-a11a-745daf757705.png'),
    src: '/lovable-uploads/d364fce3-8a2f-4b51-a11a-745daf757705.png',
    category: 'exterior',
    alt: 'Villa sunset view'
  },
  {
    id: generateId('/lovable-uploads/39eadac5-a82b-43af-a1c8-9bf519f59013.png'),
    src: '/lovable-uploads/39eadac5-a82b-43af-a1c8-9bf519f59013.png',
    category: ['exterior', 'views'],
    alt: 'Villa terrace with sea view'
  }
];
