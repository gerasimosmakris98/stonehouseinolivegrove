
import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { X } from 'lucide-react';
import { propertyData } from '../data/propertyData';

// Updated gallery images including all uploads
const images = [
  // New uploads
  '/lovable-uploads/b54e2e66-40fc-40f2-9a7c-17506864c107.png',
  '/lovable-uploads/af813c2d-9ed4-421a-8d6a-f46049261a47.png',
  '/lovable-uploads/98ed3863-65a4-4abc-bd37-a7abff180a15.png',
  '/lovable-uploads/8697c770-37db-40fb-8bb1-146a7b64d54d.png',
  '/lovable-uploads/8f602ce4-afed-4e10-98e8-74778772b0f1.png',
  '/lovable-uploads/71ce9552-faab-494b-bfd7-ee3dece74b1c.png',
  '/lovable-uploads/8806d132-5d7c-4d39-9fce-47c14f27b9bf.png',
  '/lovable-uploads/bcad7f1d-7089-4902-918d-421995eb84da.png',
  '/lovable-uploads/af82005c-3ea6-4f6f-8235-17569cb92b9e.png',
  '/lovable-uploads/11279858-2807-4b46-a72a-a793f30ca860.png',
  '/lovable-uploads/43f5aa13-a5d8-4dd0-8b87-0083b44ba181.png',
  '/lovable-uploads/16e67de8-1bcc-47f1-84aa-48195c51721b.png',
  '/lovable-uploads/16fc82a6-3a69-4111-a5e0-474d20e75f9d.png',
  '/lovable-uploads/9db7df3e-b429-4c6c-bd60-b22c66e1561a.png',
  '/lovable-uploads/c8f02aef-a62c-479e-a7ca-fcc86732927c.png',
  '/lovable-uploads/3987dbcc-263e-4c90-b150-f834f709c248.png',
  '/lovable-uploads/5b4a587d-ae2d-4ea7-9aba-b30075a2c0a5.png',
  '/lovable-uploads/d364fce3-8a2f-4b51-a11a-745daf757705.png',
  '/lovable-uploads/612c1d98-8b72-4689-8a34-6fa456555350.png',
  '/lovable-uploads/a2a22002-6f4e-425b-8d79-5a3457deeacf.png',
  
  // Original images
  '/lovable-uploads/9c914b97-c3b3-4d88-9d99-ec27d8673974.png',
  '/lovable-uploads/94f38100-e08d-4a2b-979c-68cd57a4a907.png',
  '/lovable-uploads/bd9207e5-0e02-4363-bb5b-f393b13b3591.png',
  '/lovable-uploads/61e1f3c6-b6b4-4b94-a690-ef45a0fdb3e9.png',
  '/lovable-uploads/fe8d8ea8-689e-4b4e-8981-c0cf9cd10c76.png',
  '/lovable-uploads/4e7131b7-0396-46d2-be4b-9c862cd7f181.png',
  '/lovable-uploads/f41f0c40-2fba-4def-9390-a80b7f3ba58b.png',
  '/lovable-uploads/edbf8042-3235-4834-99db-2729d229f8c0.png',
  '/lovable-uploads/5e5620c9-3a83-41dc-818f-4f1facee257e.png',
  '/lovable-uploads/8cc3a787-268f-4387-b79d-fd56ab3c67df.png',
  '/lovable-uploads/1f43120f-6270-45a8-b506-6afd4273842d.png',
  '/lovable-uploads/9a66b3ea-d387-4d9e-8b55-ad64f4a9fbbf.png',
  '/lovable-uploads/2a97d715-442e-4557-b8e9-a6ad65d1d151.png',
  
  // Additional placeholder images to reach 47 total
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1614108831359-e7c53e014fc5?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1610629651605-0b181ad69aaf?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=1600&auto=format&fit=crop'
];

const Gallery = () => {
  const { t } = useLanguage();
  const { gallery } = propertyData;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const totalImages = images.length;

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
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setSelectedImage(images[(currentIndex === images.length - 1 ? 0 : currentIndex + 1)]);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setSelectedImage(images[(currentIndex === 0 ? images.length - 1 : currentIndex - 1)]);
  };

  const handleImageLoad = () => {
    setImagesLoaded(prev => prev + 1);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  // Preload all gallery images for smoother experience
  useEffect(() => {
    const preloadImages = () => {
      images.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = handleImageLoad;
      });
    };
    
    preloadImages();
  }, []);

  return (
    <section className="py-16 px-4 bg-gray-50 animated-section" id="gallery">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">
            {t(gallery.title.en, gallery.title.el)}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t(gallery.subtitle.en, gallery.subtitle.el)}
          </p>
          <p className="text-sm text-villa-blue mt-2">
            {t(`${totalImages} photos available`, `${totalImages} φωτογραφίες διαθέσιμες`)}
          </p>
        </div>

        {/* Loading indicator */}
        {imagesLoaded < totalImages / 3 && (
          <div className="flex justify-center items-center mb-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-villa-blue"></div>
            <span className="ml-2 text-gray-600">
              {t("Loading gallery...", "Φόρτωση γκαλερί...")}
            </span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div 
              key={index}
              onClick={() => openModal(img, index)}
              className="overflow-hidden rounded-lg aspect-square cursor-pointer group bg-gray-100"
            >
              <img
                src={img}
                alt={`Villa photo ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onLoad={handleImageLoad}
                loading={index < 8 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button 
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
            aria-label="Close gallery"
          >
            <X size={24} />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-50"
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          
          <img
            src={selectedImage}
            alt="Enlarged villa view"
            className="max-h-[90vh] max-w-[90vw] object-contain animate-fade-in"
          />
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-50"
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
          </button>
          
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <span className="bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
