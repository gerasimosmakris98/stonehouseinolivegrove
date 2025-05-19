
import { useLanguage } from './LanguageContext';
import { propertyData } from '../data/propertyData';
import { Mail, Phone, MapPin, Facebook, Instagram, ChevronRight } from 'lucide-react';

const Footer = () => {
  const { t, language } = useLanguage();
  const { contact, booking } = propertyData;

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden" id="contact">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/b54e2e66-40fc-40f2-9a7c-17506864c107.png')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/90 to-gray-900"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="glass-effect-dark p-6 rounded-xl transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-2xl font-playfair font-semibold mb-4 text-white">Stone House in Olive Grove</h3>
            <p className="text-gray-300 mb-4">
              {t(
                "Experience the beauty of Kefalonia in our traditional stone villa with modern comforts and breathtaking sea views.", 
                "Ζήστε την ομορφιά της Κεφαλονιάς στην παραδοσιακή πέτρινη βίλα μας με σύγχρονες ανέσεις και εκπληκτική θέα στη θάλασσα."
              )}
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-villa-blue transition-colors p-2 bg-white/10 rounded-full">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white hover:text-villa-blue transition-colors p-2 bg-white/10 rounded-full">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div className="glass-effect-dark p-6 rounded-xl transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-2xl font-playfair font-semibold mb-4 text-white">{t("Quick Links", "Γρήγοροι Σύνδεσμοι")}</h3>
            <ul className="space-y-2">
              {[
                { href: "#", label: t("Home", "Αρχική") },
                { href: "#gallery", label: t("Gallery", "Γκαλερί") },
                { href: "#details", label: t("Details", "Λεπτομέρειες") },
                { href: "#reviews", label: t("Reviews", "Κριτικές") }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <ChevronRight size={16} className="mr-1 text-villa-blue transition-transform group-hover:translate-x-1" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href={language === 'en' ? booking.links.en : booking.links.el} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors flex items-center group"
                >
                  <ChevronRight size={16} className="mr-1 text-villa-blue transition-transform group-hover:translate-x-1" />
                  <span>{t("Book Now", "Κράτηση Τώρα")}</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div className="glass-effect-dark p-6 rounded-xl transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-2xl font-playfair font-semibold mb-4 text-white">{t("Contact Us", "Επικοινωνήστε μαζί μας")}</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="text-villa-blue w-5 h-5 mr-3 flex-shrink-0" />
                <span className="text-gray-300">
                  {t(contact.address.en, contact.address.el)}
                </span>
              </li>
              <li className="flex">
                <Phone className="text-villa-blue w-5 h-5 mr-3 flex-shrink-0" />
                <a href={`tel:${contact.phone}`} className="text-gray-300 hover:text-white transition-colors">
                  {contact.phone}
                </a>
              </li>
              <li className="flex">
                <Mail className="text-villa-blue w-5 h-5 mr-3 flex-shrink-0" />
                <a href={`mailto:${contact.email}`} className="text-gray-300 hover:text-white transition-colors">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
          
          <div className="glass-effect-dark p-6 rounded-xl transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-2xl font-playfair font-semibold mb-4 text-white">{t("Book Your Stay", "Κάντε Κράτηση")}</h3>
            <p className="text-gray-300 mb-6">
              {t(
                "Book directly through Booking.com for the best rates and availability.", 
                "Κάντε κράτηση απευθείας μέσω του Booking.com για τις καλύτερες τιμές και διαθεσιμότητα."
              )}
            </p>
            <a 
              href={language === 'en' ? booking.links.en : booking.links.el}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-villa-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg"
            >
              {t(booking.buttonText.en, booking.buttonText.el)}
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800/70 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Stone House in Olive Grove. {t("All rights reserved.", "Όλα τα δικαιώματα διατηρούνται.")}
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              {t("Privacy Policy", "Πολιτική Απορρήτου")}
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              {t("Terms of Service", "Όροι Χρήσης")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
