
import { useGallery } from './GalleryContext';
import GalleryGrid from './GalleryGrid';
import GalleryModal from './GalleryModal';
import GalleryPreloader from './GalleryPreloader';
import GlassCard from '../GlassCard';
import { useLanguage } from '../LanguageContext';

const GalleryContainer = () => {
  const {
    t
  } = useLanguage();
  const {
    loading,
    imagesLoaded
  } = useGallery();
  
  return <section id="gallery" className="py-16 px-4 md:py-24 animated-section">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-6">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              {t("Gallery", "Γκαλερί")}
            </h2>
            <p className="text-gray-600 max-w-2xl">
              {t("Explore our beautiful villa through these carefully selected images. Experience the comfort and elegance of our interior spaces and the natural beauty surrounding the property.", "Εξερευνήστε την όμορφη βίλα μας μέσα από αυτές τις προσεκτικά επιλεγμένες εικόνες. Βιώστε την άνεση και την κομψότητα των εσωτερικών χώρων και τη φυσική ομορφιά που περιβάλλει το ακίνητο.")}
            </p>
          </div>
        </div>
        
        {/* Gallery content - Categories removed */}
        <GlassCard variant="default" className="mb-10">
          {loading && !imagesLoaded ? <GalleryPreloader /> : <GalleryGrid />}
        </GlassCard>
        
        <GalleryModal />
      </div>
    </section>;
};

export default GalleryContainer;
