
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
  }
];
