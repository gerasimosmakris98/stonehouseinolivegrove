
import { GalleryImage, GalleryCategory, GalleryCategoryInfo } from '../../types/gallery';
import { generateId } from '../../utils/galleryUtils';

// Define gallery categories with translations
export const galleryCategories: GalleryCategoryInfo[] = [
  {
    id: 'all',
    label: { en: 'All', el: 'Όλα' }
  },
  {
    id: 'exterior',
    label: { en: 'Exterior', el: 'Εξωτερικό' }
  },
  {
    id: 'interior',
    label: { en: 'Interior', el: 'Εσωτερικό' }
  },
  {
    id: 'views',
    label: { en: 'Views', el: 'Θέα' }
  }
];

// Define the gallery images with categories
export const galleryImagesList: GalleryImage[] = [
  // Villa exterior images
  {
    id: generateId('/lovable-uploads/b54e2e66-40fc-40f2-9a7c-17506864c107.png'),
    src: '/lovable-uploads/b54e2e66-40fc-40f2-9a7c-17506864c107.png',
    category: 'exterior',
    alt: 'Villa exterior view',
    featured: true
  },
  {
    id: generateId('/lovable-uploads/af813c2d-9ed4-421a-8d6a-f46049261a47.png'),
    src: '/lovable-uploads/af813c2d-9ed4-421a-8d6a-f46049261a47.png',
    category: 'exterior',
    alt: 'Villa front view'
  },
  {
    id: generateId('/lovable-uploads/98ed3863-65a4-4abc-bd37-a7abff180a15.png'),
    src: '/lovable-uploads/98ed3863-65a4-4abc-bd37-a7abff180a15.png',
    category: 'exterior',
    alt: 'Villa entrance'
  },
  {
    id: generateId('/lovable-uploads/8697c770-37db-40fb-8bb1-146a7b64d54d.png'),
    src: '/lovable-uploads/8697c770-37db-40fb-8bb1-146a7b64d54d.png',
    category: 'exterior',
    alt: 'Villa side view'
  },
  {
    id: generateId('/lovable-uploads/8f602ce4-afed-4e10-98e8-74778772b0f1.png'),
    src: '/lovable-uploads/8f602ce4-afed-4e10-98e8-74778772b0f1.png',
    category: 'exterior',
    alt: 'Stone villa exterior'
  },
  {
    id: generateId('/lovable-uploads/71ce9552-faab-494b-bfd7-ee3dece74b1c.png'),
    src: '/lovable-uploads/71ce9552-faab-494b-bfd7-ee3dece74b1c.png',
    category: 'exterior',
    alt: 'Villa garden view'
  },
  
  // Villa interior images  
  {
    id: generateId('/lovable-uploads/8806d132-5d7c-4d39-9fce-47c14f27b9bf.png'),
    src: '/lovable-uploads/8806d132-5d7c-4d39-9fce-47c14f27b9bf.png',
    category: 'interior',
    alt: 'Villa living room',
    featured: true
  },
  {
    id: generateId('/lovable-uploads/bcad7f1d-7089-4902-918d-421995eb84da.png'),
    src: '/lovable-uploads/bcad7f1d-7089-4902-918d-421995eb84da.png',
    category: 'interior',
    alt: 'Villa bedroom',
    featured: true
  },
  {
    id: generateId('/lovable-uploads/af82005c-3ea6-4f6f-8235-17569cb92b9e.png'),
    src: '/lovable-uploads/af82005c-3ea6-4f6f-8235-17569cb92b9e.png',
    category: 'interior',
    alt: 'Villa kitchen'
  },
  {
    id: generateId('/lovable-uploads/11279858-2807-4b46-a72a-a793f30ca860.png'),
    src: '/lovable-uploads/11279858-2807-4b46-a72a-a793f30ca860.png',
    category: 'interior',
    alt: 'Villa dining area'
  },
  
  // More interior images
  {
    id: generateId('/lovable-uploads/43f5aa13-a5d8-4dd0-8b87-0083b44ba181.png'),
    src: '/lovable-uploads/43f5aa13-a5d8-4dd0-8b87-0083b44ba181.png',
    category: 'interior',
    alt: 'Villa bathroom'
  },
  {
    id: generateId('/lovable-uploads/16e67de8-1bcc-47f1-84aa-48195c51721b.png'),
    src: '/lovable-uploads/16e67de8-1bcc-47f1-84aa-48195c51721b.png',
    category: 'interior',
    alt: 'Villa bedroom with view'
  },
  {
    id: generateId('/lovable-uploads/16fc82a6-3a69-4111-a5e0-474d20e75f9d.png'),
    src: '/lovable-uploads/16fc82a6-3a69-4111-a5e0-474d20e75f9d.png',
    category: 'interior',
    alt: 'Villa cozy corner'
  },
  
  // Villa views
  {
    id: generateId('/lovable-uploads/9db7df3e-b429-4c6c-bd60-b22c66e1561a.png'),
    src: '/lovable-uploads/9db7df3e-b429-4c6c-bd60-b22c66e1561a.png',
    category: 'views',
    alt: 'Sea view from villa',
    featured: true
  },
  {
    id: generateId('/lovable-uploads/c8f02aef-a62c-479e-a7ca-fcc86732927c.png'),
    src: '/lovable-uploads/c8f02aef-a62c-479e-a7ca-fcc86732927c.png',
    category: 'views',
    alt: 'Pool view',
    featured: true
  },
  {
    id: generateId('/lovable-uploads/3987dbcc-263e-4c90-b150-f834f709c248.png'),
    src: '/lovable-uploads/3987dbcc-263e-4c90-b150-f834f709c248.png',
    category: 'views',
    alt: 'Olive grove view'
  },
  
  // More exterior and views
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
    id: generateId('/lovable-uploads/612c1d98-8b72-4689-8a34-6fa456555350.png'),
    src: '/lovable-uploads/612c1d98-8b72-4689-8a34-6fa456555350.png',
    category: 'views',
    alt: 'Mountain view from villa'
  },
  {
    id: generateId('/lovable-uploads/a2a22002-6f4e-425b-8d79-5a3457deeacf.png'),
    src: '/lovable-uploads/a2a22002-6f4e-425b-8d79-5a3457deeacf.png',
    category: 'views',
    alt: 'Garden view'
  },
  
  // Second batch of images (selected, removing duplicates)
  {
    id: generateId('/lovable-uploads/3a44917f-b318-4bbe-be2b-a21f6fa70c3c.png'),
    src: '/lovable-uploads/3a44917f-b318-4bbe-be2b-a21f6fa70c3c.png',
    category: 'exterior',
    alt: 'Villa front approach'
  },
  {
    id: generateId('/lovable-uploads/090a7495-4fe0-480f-99d2-ceb0ae316faa.png'),
    src: '/lovable-uploads/090a7495-4fe0-480f-99d2-ceb0ae316faa.png',
    category: 'exterior',
    alt: 'Villa entrance pathway'
  },
  {
    id: generateId('/lovable-uploads/8a1a84b8-5443-4b63-b384-0312aea2eece.png'),
    src: '/lovable-uploads/8a1a84b8-5443-4b63-b384-0312aea2eece.png',
    category: 'exterior',
    alt: 'Villa stone facade'
  },
  {
    id: generateId('/lovable-uploads/0102d33e-4ef1-4c82-948b-502346224569.png'),
    src: '/lovable-uploads/0102d33e-4ef1-4c82-948b-502346224569.png',
    category: 'exterior',
    alt: 'Villa garden path'
  },
  {
    id: generateId('/lovable-uploads/3e9853e9-5c3a-479b-a317-2de60b84bca2.png'),
    src: '/lovable-uploads/3e9853e9-5c3a-479b-a317-2de60b84bca2.png',
    category: 'views',
    alt: 'Panoramic view'
  },
  {
    id: generateId('/lovable-uploads/564e29c0-2451-44c8-bf1a-65585724703d.png'),
    src: '/lovable-uploads/564e29c0-2451-44c8-bf1a-65585724703d.png',
    category: 'views',
    alt: 'Sunset view'
  },
  {
    id: generateId('/lovable-uploads/23581271-5d81-4d29-a0d9-505687de7e48.png'),
    src: '/lovable-uploads/23581271-5d81-4d29-a0d9-505687de7e48.png',
    category: 'exterior',
    alt: 'Villa exterior night'
  },
  {
    id: generateId('/lovable-uploads/c6823457-3962-48f1-99fd-5f2d01317c04.png'),
    src: '/lovable-uploads/c6823457-3962-48f1-99fd-5f2d01317c04.png',
    category: 'interior',
    alt: 'Kitchen view'
  },
  {
    id: generateId('/lovable-uploads/385ed79a-3f0a-4e8a-9c74-ec37ff012957.png'),
    src: '/lovable-uploads/385ed79a-3f0a-4e8a-9c74-ec37ff012957.png',
    category: 'interior',
    alt: 'Bathroom detail'
  },
  {
    id: generateId('/lovable-uploads/e60814c2-d815-4380-a1df-84396a4e7657.png'),
    src: '/lovable-uploads/e60814c2-d815-4380-a1df-84396a4e7657.png',
    category: 'interior',
    alt: 'Master bedroom'
  },
  
  // New images from recent upload
  {
    id: generateId('/lovable-uploads/39eadac5-a82b-43af-a1c8-9bf519f59013.png'),
    src: '/lovable-uploads/39eadac5-a82b-43af-a1c8-9bf519f59013.png',
    category: ['exterior', 'views'],
    alt: 'Villa terrace with sea view'
  },
  {
    id: generateId('/lovable-uploads/c4539a6b-ad08-4c05-98b8-36221fdc261b.png'),
    src: '/lovable-uploads/c4539a6b-ad08-4c05-98b8-36221fdc261b.png',
    category: 'exterior',
    alt: 'Stone house exterior'
  },
  {
    id: generateId('/lovable-uploads/bdda7e22-3dad-458c-b3e2-312a7e5761d0.png'),
    src: '/lovable-uploads/bdda7e22-3dad-458c-b3e2-312a7e5761d0.png',
    category: 'interior',
    alt: 'Bathroom with stone walls'
  },
  {
    id: generateId('/lovable-uploads/b0c5b804-a6d1-40ab-a1d2-b60df91c597c.png'),
    src: '/lovable-uploads/b0c5b804-a6d1-40ab-a1d2-b60df91c597c.png',
    category: 'interior',
    alt: 'Bedroom with stone walls'
  },
  {
    id: generateId('/lovable-uploads/95cd23e3-ee35-4350-898a-629273af6e7b.png'),
    src: '/lovable-uploads/95cd23e3-ee35-4350-898a-629273af6e7b.png',
    category: 'interior',
    alt: 'Kitchen and dining area'
  },
  {
    id: generateId('/lovable-uploads/e9f7e4d5-d789-42ab-b53d-539ff7c5daa0.png'),
    src: '/lovable-uploads/e9f7e4d5-d789-42ab-b53d-539ff7c5daa0.png',
    category: 'interior',
    alt: 'Bedroom with stone walls'
  },
  {
    id: generateId('/lovable-uploads/65cdc989-1477-4b3a-8b25-6f848f8057ef.png'),
    src: '/lovable-uploads/65cdc989-1477-4b3a-8b25-6f848f8057ef.png',
    category: 'interior',
    alt: 'Framed artwork on stone wall'
  },
  {
    id: generateId('/lovable-uploads/2e35d24b-1586-41b7-90aa-0fae8e3fedb6.png'),
    src: '/lovable-uploads/2e35d24b-1586-41b7-90aa-0fae8e3fedb6.png',
    category: 'interior',
    alt: 'Kitchen with dining space'
  },
  {
    id: generateId('/lovable-uploads/bb9617bb-92c7-42d5-ae3a-34cd82ef39a3.png'),
    src: '/lovable-uploads/bb9617bb-92c7-42d5-ae3a-34cd82ef39a3.png',
    category: 'interior',
    alt: 'Living room with stone walls'
  },
  {
    id: generateId('/lovable-uploads/b65135e8-0b01-4ef1-838d-8d84d8498145.png'),
    src: '/lovable-uploads/b65135e8-0b01-4ef1-838d-8d84d8498145.png',
    category: 'interior',
    alt: 'Living and dining room with stone walls'
  },
  {
    id: generateId('/lovable-uploads/b8e23783-ea31-43d5-a8f4-c8bb945444d2.png'),
    src: '/lovable-uploads/b8e23783-ea31-43d5-a8f4-c8bb945444d2.png',
    category: 'interior',
    alt: 'Dining area with stone walls'
  },
  {
    id: generateId('/lovable-uploads/5d438ed6-d9b6-4a8c-903a-4e32b5337925.png'),
    src: '/lovable-uploads/5d438ed6-d9b6-4a8c-903a-4e32b5337925.png',
    category: 'interior',
    alt: 'Bedroom with balcony view'
  },
  {
    id: generateId('/lovable-uploads/2f5c0188-1501-4e2e-95d0-671d743a5ef6.png'),
    src: '/lovable-uploads/2f5c0188-1501-4e2e-95d0-671d743a5ef6.png',
    category: 'interior',
    alt: 'Artwork on stone wall'
  },
  {
    id: generateId('/lovable-uploads/a1ed7d00-8c44-4805-9f77-858e8c25b1c0.png'),
    src: '/lovable-uploads/a1ed7d00-8c44-4805-9f77-858e8c25b1c0.png',
    category: 'interior',
    alt: 'Bedroom with garden view'
  },
  {
    id: generateId('/lovable-uploads/7fa7684d-09e4-43c1-90eb-f5551da1dcfb.png'),
    src: '/lovable-uploads/7fa7684d-09e4-43c1-90eb-f5551da1dcfb.png',
    category: 'interior',
    alt: 'Lounge area with bookshelf'
  },
  {
    id: generateId('/lovable-uploads/e9fd203b-eb70-4f2f-bd7a-843199524f0d.png'),
    src: '/lovable-uploads/e9fd203b-eb70-4f2f-bd7a-843199524f0d.png',
    category: 'interior',
    alt: 'Living room with fireplace'
  },
  {
    id: generateId('/lovable-uploads/bcdaee6a-0e3c-4fc8-ac66-a3afd924fb0c.png'),
    src: '/lovable-uploads/bcdaee6a-0e3c-4fc8-ac66-a3afd924fb0c.png',
    category: 'interior',
    alt: 'Bedroom with garden access'
  },
  {
    id: generateId('/lovable-uploads/704e8ea1-78ae-4a48-aec9-f32cdd847d96.png'),
    src: '/lovable-uploads/704e8ea1-78ae-4a48-aec9-f32cdd847d96.png',
    category: 'interior',
    alt: 'Living room with dining area'
  },
  {
    id: generateId('/lovable-uploads/ee13752c-4f26-4728-9993-201b20a5e847.png'),
    src: '/lovable-uploads/ee13752c-4f26-4728-9993-201b20a5e847.png',
    category: 'interior',
    alt: 'Bedroom with garden view'
  },
  {
    id: generateId('/lovable-uploads/84d1dd00-12ad-4b8e-b51b-60e8325f8f95.png'),
    src: '/lovable-uploads/84d1dd00-12ad-4b8e-b51b-60e8325f8f95.png',
    category: 'exterior',
    alt: 'Terrace dining area with view'
  }
];
