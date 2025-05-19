
import { useLanguage } from './LanguageContext';
import { propertyData } from '../data/propertyData';
import { Wifi, MapPin, Home, Bed } from 'lucide-react';

const PropertyOverview = () => {
  const { t } = useLanguage();
  const { overview } = propertyData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'wifi':
        return <Wifi className="w-5 h-5 text-villa-blue" />;
      case 'map-pin':
        return <MapPin className="w-5 h-5 text-villa-blue" />;
      case 'home':
        return <Home className="w-5 h-5 text-villa-blue" />;
      case 'bed':
        return <Bed className="w-5 h-5 text-villa-blue" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-white" id="overview">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animated-section" data-aos="fade-right">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              {t(overview.title.en, overview.title.el)}
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {t(overview.description.en, overview.description.el)}
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {overview.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  {getIcon(feature.icon)}
                  <span className="text-gray-700">
                    {t(feature.name.en, feature.name.el)}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 animated-section" data-aos="fade-left">
            <div className="overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/94f38100-e08d-4a2b-979c-68cd57a4a907.png" 
                alt="Sea view from the villa" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/bd9207e5-0e02-4363-bb5b-f393b13b3591.png" 
                alt="Villa terrace" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/4e7131b7-0396-46d2-be4b-9c862cd7f181.png" 
                alt="Bedroom" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/edbf8042-3235-4834-99db-2729d229f8c0.png" 
                alt="Bathroom" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyOverview;
