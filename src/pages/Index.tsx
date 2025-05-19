
import { useEffect } from 'react';
import { LanguageProvider } from '../components/LanguageContext';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PropertyOverview from '../components/PropertyOverview';
import Gallery from '../components/Gallery';
import DetailsFAQ from '../components/DetailsFAQ';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.animated-section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        
        if (isVisible) {
          section.classList.add('animate');
        }
      });
    };

    // Call once to check elements in view on load
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.title = "Stone House in Olive Grove | Kefalonia, Greece";
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <PropertyOverview />
        <Gallery />
        <DetailsFAQ />
        <Reviews />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
