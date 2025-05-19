
import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { propertyData } from '../data/propertyData';
import { GalleryImage, GalleryCategory } from '../types/gallery';
import { deduplicateImages, filterImagesByCategory, generateId } from '../utils/galleryUtils';
import GalleryCategories from './gallery/GalleryCategories';
import GalleryGrid from './gallery/GalleryGrid';
import GalleryModal from './gallery/GalleryModal';

// Define the gallery images with categories
const galleryImagesList: GalleryImage[] = [
  // Villa exterior images
  {
    id: generateId('/lovable-uploads/b54e2e66-40fc-40f2-9a7c-17506864c107.png'),
    src: '/lovable-uploads/b54e2e66-40fc-40f2-9a7c-17506864c107.png',
    category: 'exterior',
    alt: 'Villa exterior view'
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
    alt: 'Villa living room'
  },
  {
    id: generateId('/lovable-uploads/bcad7f1d-7089-4902-918d-421995eb84da.png'),
    src: '/lovable-uploads/bcad7f1d-7089-4902-918d-421995eb84da.png',
    category: 'interior',
    alt: 'Villa bedroom'
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
    alt: 'Sea view from villa'
  },
  {
    id: generateId('/lovable-uploads/c8f02aef-a62c-479e-a7ca-fcc86732927c.png'),
    src: '/lovable-uploads/c8f02aef-a62c-479e-a7ca-fcc86732927c.png',
    category: 'views',
    alt: 'Pool view'
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
  
  // Second batch of images
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
  
  // More from second batch
  {
    id: generateId('/lovable-uploads/fa0472e9-2166-4733-a8b4-4ca7cbf4fb78.png'),
    src: '/lovable-uploads/fa0472e9-2166-4733-a8b4-4ca7cbf4fb78.png',
    category: 'interior',
    alt: 'Living area'
  },
  {
    id: generateId('/lovable-uploads/91be120b-7601-4d4a-ad02-66e918e7bd05.png'),
    src: '/lovable-uploads/91be120b-7601-4d4a-ad02-66e918e7bd05.png',
    category: 'interior',
    alt: 'Dining room'
  },
  {
    id: generateId('/lovable-uploads/db997512-a713-4cd9-909d-c0284a66975f.png'),
    src: '/lovable-uploads/db997512-a713-4cd9-909d-c0284a66975f.png',
    category: 'interior',
    alt: 'Bedroom with sea view'
  },
  {
    id: generateId('/lovable-uploads/af692637-e1e4-40c5-b448-3baee8fa39be.png'),
    src: '/lovable-uploads/af692637-e1e4-40c5-b448-3baee8fa39be.png',
    category: 'interior',
    alt: 'Study corner'
  },
  {
    id: generateId('/lovable-uploads/e5c725a3-7e45-4629-a25e-c3528a0f5d20.png'),
    src: '/lovable-uploads/e5c725a3-7e45-4629-a25e-c3528a0f5d20.png',
    category: 'interior',
    alt: 'Double bedroom'
  },
  
  // Remaining images from second batch
  {
    id: generateId('/lovable-uploads/7770dc9b-7cbf-4e13-9a4f-21615c61efa3.png'),
    src: '/lovable-uploads/7770dc9b-7cbf-4e13-9a4f-21615c61efa3.png',
    category: 'views',
    alt: 'Garden path with sea view'
  },
  {
    id: generateId('/lovable-uploads/8d644e4a-7eb0-4fb2-bcec-2d7b0264bf4a.png'),
    src: '/lovable-uploads/8d644e4a-7eb0-4fb2-bcec-2d7b0264bf4a.png',
    category: 'exterior',
    alt: 'Poolside lounge'
  },
  {
    id: generateId('/lovable-uploads/aa63e5a7-0ef0-4248-9165-c1290f940c66.png'),
    src: '/lovable-uploads/aa63e5a7-0ef0-4248-9165-c1290f940c66.png',
    category: 'exterior',
    alt: 'Villa aerial view'
  },
  {
    id: generateId('/lovable-uploads/e4c67d94-3d4a-40c5-86f6-81c031164b3a.png'),
    src: '/lovable-uploads/e4c67d94-3d4a-40c5-86f6-81c031164b3a.png',
    category: 'views',
    alt: 'Hillside view'
  },
  {
    id: generateId('/lovable-uploads/712d9536-6100-455a-9f00-1ccc5fdd810f.png'),
    src: '/lovable-uploads/712d9536-6100-455a-9f00-1ccc5fdd810f.png',
    category: 'views',
    alt: 'Landscape view'
  },
  
  // Original villa photos - adding these at the end to avoid duplicates
  {
    id: generateId('/lovable-uploads/9c914b97-c3b3-4d88-9d99-ec27d8673974.png'),
    src: '/lovable-uploads/9c914b97-c3b3-4d88-9d99-ec27d8673974.png',
    category: 'exterior',
    alt: 'Villa main view'
  },
  {
    id: generateId('/lovable-uploads/94f38100-e08d-4a2b-979c-68cd57a4a907.png'),
    src: '/lovable-uploads/94f38100-e08d-4a2b-979c-68cd57a4a907.png',
    category: 'exterior',
    alt: 'Villa with pool'
  },
  {
    id: generateId('/lovable-uploads/bd9207e5-0e02-4363-bb5b-f393b13b3591.png'),
    src: '/lovable-uploads/bd9207e5-0e02-4363-bb5b-f393b13b3591.png',
    category: 'exterior',
    alt: 'Villa outdoor area'
  },
  {
    id: generateId('/lovable-uploads/61e1f3c6-b6b4-4b94-a690-ef45a0fdb3e9.png'),
    src: '/lovable-uploads/61e1f3c6-b6b4-4b94-a690-ef45a0fdb3e9.png',
    category: 'interior',
    alt: 'Villa interior'
  },
  {
    id: generateId('/lovable-uploads/fe8d8ea8-689e-4b4e-8981-c0cf9cd10c76.png'),
    src: '/lovable-uploads/fe8d8ea8-689e-4b4e-8981-c0cf9cd10c76.png',
    category: 'interior',
    alt: 'Villa kitchen interior'
  },
  {
    id: generateId('/lovable-uploads/4e7131b7-0396-46d2-be4b-9c862cd7f181.png'),
    src: '/lovable-uploads/4e7131b7-0396-46d2-be4b-9c862cd7f181.png',
    category: 'views',
    alt: 'Villa garden view'
  },
  {
    id: generateId('/lovable-uploads/f41f0c40-2fba-4def-9390-a80b7f3ba58b.png'),
    src: '/lovable-uploads/f41f0c40-2fba-4def-9390-a80b7f3ba58b.png',
    category: 'views',
    alt: 'Villa sea view'
  }
];

const Gallery = () => {
  const { t } = useLanguage();
  const { gallery } = propertyData;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>(galleryImagesList);
  
  // Set filtered images when category changes
  useEffect(() => {
    const filtered = filterImagesByCategory(galleryImagesList, activeCategory);
    setFilteredImages(filtered);
  }, [activeCategory]);

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
  };

  // Handle category change
  const handleCategoryChange = (category: GalleryCategory) => {
    setActiveCategory(category);
  };

  // Preload all gallery images for smoother experience
  useEffect(() => {
    const preloadImages = () => {
      galleryImagesList.forEach(img => {
        const image = new Image();
        image.src = img.src;
        image.onload = handleImageLoad;
      });
    };
    
    preloadImages();
  }, []);

  return (
    <section className="py-16 px-4 bg-gray-50 animated-section" id="gallery">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 text-gray-800">
            {t(gallery.title.en, gallery.title.el)}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t(gallery.subtitle.en, gallery.subtitle.el)}
          </p>
          <p className="text-sm text-villa-blue mt-2">
            {t(`${galleryImagesList.length} photos available`, `${galleryImagesList.length} φωτογραφίες διαθέσιμες`)}
          </p>
        </div>

        {/* Gallery categories */}
        <GalleryCategories 
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          totalImages={galleryImagesList.length}
          filteredCount={filteredImages.length}
        />

        {/* Loading indicator */}
        {imagesLoaded < galleryImagesList.length / 3 && (
          <div className="flex justify-center items-center mb-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-villa-blue"></div>
            <span className="ml-2 text-gray-600">
              {t("Loading gallery...", "Φόρτωση γκαλερί...")}
            </span>
          </div>
        )}

        {/* Gallery grid */}
        <GalleryGrid 
          images={filteredImages}
          onImageClick={openModal}
          onImageLoad={handleImageLoad}
        />
      </div>

      {/* Lightbox modal */}
      <GalleryModal 
        selectedImage={selectedImage}
        currentIndex={currentIndex}
        images={filteredImages}
        onClose={closeModal}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </section>
  );
};

export default Gallery;
