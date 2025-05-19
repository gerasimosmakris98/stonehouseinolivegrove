
import { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { X } from 'lucide-react';
import { propertyData } from '../data/propertyData';

const images = [
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
  '/lovable-uploads/9a66b3ea-d387-4d9e-8b55-ad64f4a9fbbf.png'
];

const Gallery = () => {
  const { t } = useLanguage();
  const { gallery } = propertyData;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <section className="py-16 px-4 bg-gray-50" id="gallery">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animated-section" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">
            {t(gallery.title.en, gallery.title.el)}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t(gallery.subtitle.en, gallery.subtitle.el)}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animated-section" data-aos="zoom-in">
          {images.map((img, index) => (
            <div 
              key={index}
              onClick={() => openModal(img, index)}
              className="overflow-hidden rounded-lg aspect-square cursor-pointer group"
            >
              <img
                src={img}
                alt={`Villa photo ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
