
import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-effect py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="text-lg md:text-xl font-playfair font-semibold text-villa-blue">
            <span className={scrolled ? 'text-villa-blue' : 'text-white drop-shadow-md'}>
              Stone House in Olive Grove
            </span>
          </div>
          
          <div className="flex items-center space-x-4 md:space-x-8">
            <a 
              href="#gallery" 
              className={`hidden md:block text-sm font-medium ${
                scrolled ? 'text-gray-700' : 'text-white drop-shadow-md'
              } hover:text-villa-blue transition-colors`}
            >
              {t('Gallery', 'Γκαλερί')}
            </a>
            <a 
              href="#details" 
              className={`hidden md:block text-sm font-medium ${
                scrolled ? 'text-gray-700' : 'text-white drop-shadow-md'
              } hover:text-villa-blue transition-colors`}
            >
              {t('Details', 'Λεπτομέρειες')}
            </a>
            <a 
              href="#reviews" 
              className={`hidden md:block text-sm font-medium ${
                scrolled ? 'text-gray-700' : 'text-white drop-shadow-md'
              } hover:text-villa-blue transition-colors`}
            >
              {t('Reviews', 'Κριτικές')}
            </a>
            <a 
              href="#contact" 
              className={`hidden md:block text-sm font-medium ${
                scrolled ? 'text-gray-700' : 'text-white drop-shadow-md'
              } hover:text-villa-blue transition-colors`}
            >
              {t('Contact', 'Επικοινωνία')}
            </a>
            
            <button 
              onClick={toggleLanguage}
              className={`text-sm font-medium px-3 py-1.5 rounded-full border ${
                scrolled 
                  ? 'border-villa-blue text-villa-blue hover:bg-villa-blue/10' 
                  : 'border-white text-white hover:bg-white/20'
              } transition-colors`}
            >
              {language === 'en' ? 'EL' : 'EN'}
            </button>
            
            <a 
              href={language === 'en' 
                ? 'https://www.booking.com/hotel/gr/denis-stone-villa-trapezaki.en-gb.html?lang=en-gb&soz=1&lang_changed=1' 
                : 'https://www.booking.com/hotel/gr/denis-stone-villa-trapezaki.el.html?lang=el&soz=1&lang_changed=1'}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-villa-blue text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-600 transition-colors shadow-md"
            >
              {t('Book Now', 'Κράτηση')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
