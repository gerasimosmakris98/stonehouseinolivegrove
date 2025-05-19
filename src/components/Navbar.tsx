
import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'py-2' 
            : 'py-4'
        }`}
      >
        <div className={`container mx-auto px-4 md:px-6 rounded-full transition-all duration-500 ${
          scrolled 
            ? 'glass-effect shadow-lg' 
            : 'bg-transparent'
        }`}>
          <div className="flex justify-between items-center py-2">
            <div className="text-lg md:text-xl font-playfair font-semibold">
              <a href="#" className={`transition-colors ${
                scrolled ? 'text-gray-800' : 'text-white drop-shadow-md'
              }`}>
                Stone House in Olive Grove
              </a>
            </div>
            
            <div className="hidden md:flex items-center space-x-1 md:space-x-6">
              <a 
                href="#gallery" 
                className={`text-sm font-medium px-3 py-2 rounded-full transition-all duration-300 ${
                  scrolled 
                    ? 'text-gray-700 hover:bg-gray-100/70' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {t('Gallery', 'Γκαλερί')}
              </a>
              <a 
                href="#details" 
                className={`text-sm font-medium px-3 py-2 rounded-full transition-all duration-300 ${
                  scrolled 
                    ? 'text-gray-700 hover:bg-gray-100/70' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {t('Details', 'Λεπτομέρειες')}
              </a>
              <a 
                href="#reviews" 
                className={`text-sm font-medium px-3 py-2 rounded-full transition-all duration-300 ${
                  scrolled 
                    ? 'text-gray-700 hover:bg-gray-100/70' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {t('Reviews', 'Κριτικές')}
              </a>
              <a 
                href="#contact" 
                className={`text-sm font-medium px-3 py-2 rounded-full transition-all duration-300 ${
                  scrolled 
                    ? 'text-gray-700 hover:bg-gray-100/70' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {t('Contact', 'Επικοινωνία')}
              </a>
              
              <button 
                onClick={toggleLanguage}
                className={`text-sm font-medium px-3 py-1.5 rounded-full border transition-colors ${
                  scrolled 
                    ? 'border-villa-blue text-villa-blue hover:bg-villa-blue/10' 
                    : 'border-white text-white hover:bg-white/20'
                }`}
                aria-label={t('Change language', 'Αλλαγή γλώσσας')}
              >
                {language === 'en' ? 'EL' : 'EN'}
              </button>
              
              <a 
                href={language === 'en' 
                  ? 'https://www.booking.com/hotel/gr/denis-stone-villa-trapezaki.en-gb.html?lang=en-gb&soz=1&lang_changed=1' 
                  : 'https://www.booking.com/hotel/gr/denis-stone-villa-trapezaki.el.html?lang=el&soz=1&lang_changed=1'}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button bg-villa-blue text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-blue-600 transition-all shadow-sm hover:shadow-md"
              >
                {t('Book Now', 'Κράτηση')}
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-full bg-white/10 backdrop-blur-sm focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label={t('Open menu', 'Άνοιγμα μενού')}
            >
              <Menu className={scrolled ? 'text-gray-800' : 'text-white'} size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-[60] md:hidden bg-black/70 backdrop-blur-md transform transition-transform duration-300 ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full bg-white/95">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="font-playfair text-xl font-bold text-gray-800">
              Stone House
            </h2>
            <button 
              className="p-2 rounded-full hover:bg-gray-100"
              onClick={toggleMobileMenu}
              aria-label={t('Close menu', 'Κλείσιμο μενού')}
            >
              <X className="text-gray-800" size={24} />
            </button>
          </div>
          <div className="flex flex-col p-4 space-y-4">
            <a 
              href="#gallery" 
              className="text-gray-800 hover:text-villa-blue py-3 border-b border-gray-100 transition-colors"
              onClick={toggleMobileMenu}
            >
              {t('Gallery', 'Γκαλερί')}
            </a>
            <a 
              href="#details" 
              className="text-gray-800 hover:text-villa-blue py-3 border-b border-gray-100 transition-colors"
              onClick={toggleMobileMenu}
            >
              {t('Details', 'Λεπτομέρειες')}
            </a>
            <a 
              href="#reviews" 
              className="text-gray-800 hover:text-villa-blue py-3 border-b border-gray-100 transition-colors"
              onClick={toggleMobileMenu}
            >
              {t('Reviews', 'Κριτικές')}
            </a>
            <a 
              href="#contact" 
              className="text-gray-800 hover:text-villa-blue py-3 border-b border-gray-100 transition-colors"
              onClick={toggleMobileMenu}
            >
              {t('Contact', 'Επικοινωνία')}
            </a>

            <div className="flex items-center justify-between pt-4">
              <button 
                onClick={() => { toggleLanguage(); toggleMobileMenu(); }}
                className="text-sm font-medium px-4 py-2 rounded-lg border border-villa-blue text-villa-blue"
              >
                {language === 'en' ? 'EL' : 'EN'}
              </button>
              
              <a 
                href={language === 'en' 
                  ? 'https://www.booking.com/hotel/gr/denis-stone-villa-trapezaki.en-gb.html?lang=en-gb&soz=1&lang_changed=1' 
                  : 'https://www.booking.com/hotel/gr/denis-stone-villa-trapezaki.el.html?lang=el&soz=1&lang_changed=1'}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-villa-blue text-white text-sm font-medium px-4 py-2 rounded-lg"
                onClick={toggleMobileMenu}
              >
                {t('Book Now', 'Κράτηση')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
