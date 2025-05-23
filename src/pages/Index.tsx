
import { useEffect, useState } from 'react';
import { LanguageProvider } from '../components/LanguageContext';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PropertyOverview from '../components/PropertyOverview';
import Gallery from '../components/Gallery';
import DetailsFAQ from '../components/DetailsFAQ';
import Reviews from '../components/Reviews';
import ContactForm from '../components/ContactForm'; // Added import
import Footer from '../components/Footer';

const Index = () => {
  const [sectionsInitialized, setSectionsInitialized] = useState(false);

  useEffect(() => {
    // Initialize all sections to be visible immediately
    const initializeSections = () => {
      if (!sectionsInitialized) {
        const sections = document.querySelectorAll('.animated-section');
        sections.forEach(section => {
          section.classList.add('animate');
        });
        setSectionsInitialized(true);
      }
    };

    // Handle scroll animations for progressive reveal
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

    // Handle hash-based navigation to show the correct section
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            // Ensure the section is visible when directly navigated to
            if (element.classList.contains('animated-section')) {
              element.classList.add('animate');
            }
          }
        }, 100);
      }
    };

    // Initialize immediately and handle hash if present
    initializeSections();
    handleHashChange();
    handleScroll();
    
    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [sectionsInitialized]);

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
        <ContactForm /> {/* Added ContactForm component */}
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
