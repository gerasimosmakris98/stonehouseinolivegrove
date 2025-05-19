import React from 'react';
interface CircularImageProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  customClass?: string;
  hasBorder?: boolean;
  hasGradient?: boolean;
  shadow?: boolean;
}
const CircularImage = ({
  src,
  alt,
  size = 'md',
  customClass = '',
  hasBorder = false,
  hasGradient = false,
  shadow = false
}: CircularImageProps) => {
  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'circular-image-sm';
      case 'md':
        return 'circular-image-md';
      case 'lg':
        return 'circular-image-lg';
      case 'xl':
        return 'circular-image-xl';
      case 'custom':
        return '';
      default:
        return 'circular-image-md';
    }
  };
  const containerClasses = ['circular-container', size === 'custom' ? customClass : getSizeClass(), hasBorder ? 'circular-border' : '', shadow && !hasBorder ? 'shadow-lg' : ''].filter(Boolean).join(' ');
  if (hasGradient) {
    return <div className="circular-gradient">
        <div className={containerClasses}>
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        </div>
      </div>;
  }
  return <div className={containerClasses}>
      
    </div>;
};
export default CircularImage;