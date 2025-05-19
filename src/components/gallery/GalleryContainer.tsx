
import { useGallery } from './GalleryContext';
import GalleryFilters from './GalleryFilters';
import GalleryCategories from './GalleryCategories';
import GalleryGrid from './GalleryGrid';
import GalleryModal from './GalleryModal';
import GalleryPreloader from './GalleryPreloader';
import GlassCard from '../GlassCard';
import CircularImage from '../CircularImage';
import { useLanguage } from '../LanguageContext';

const GalleryContainer = () => {
  const { t } = useLanguage();
  const { loading, imagesLoaded, activeCategory, setActiveCategory, images, filteredImages } = useGallery();

  return (
    <section id="gallery" className="py-16 px-4 md:py-24 animated-section">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-6">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              {t("Gallery", "Γκαλερί")}
            </h2>
            <p className="text-gray-600 max-w-2xl">
              {t(
                "Explore our beautiful villa through these carefully selected images. Experience the comfort and elegance of our interior spaces and the natural beauty surrounding the property.",
                "Εξερευνήστε την όμορφη βίλα μας μέσα από αυτές τις προσεκτικά επιλεγμένες εικόνες. Βιώστε την άνεση και την κομψότητα των εσωτερικών χώρων και τη φυσική ομορφιά που περιβάλλει το ακίνητο."
              )}
            </p>
          </div>
          <div className="flex gap-3">
            <CircularImage 
              src="/lovable-uploads/c8f02aef-a62c-479e-a7ca-fcc86732927c.png" 
              alt="Villa exterior"
              size="md"
              hasBorder={true}
            />
            <CircularImage 
              src="/lovable-uploads/23581271-5d81-4d29-a0d9-505687de7e48.png" 
              alt="View from villa"
              size="md"
              hasGradient={true}
            />
          </div>
        </div>
        
        <GlassCard variant="default" className="mb-10">
          <GalleryCategories 
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            totalImages={30}
            filteredCount={filteredImages.length}
          />
          <div className="mt-6">
            <GalleryFilters />
          </div>
        </GlassCard>
          
        {loading && !imagesLoaded ? <GalleryPreloader /> : <GalleryGrid />}
        <GalleryModal />
      </div>
    </section>
  );
};

export default GalleryContainer;
