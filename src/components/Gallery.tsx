
import { GalleryProvider } from './gallery/GalleryContext';
import GalleryContainer from './gallery/GalleryContainer';

const Gallery = () => {
  return (
    <GalleryProvider>
      <GalleryContainer />
    </GalleryProvider>
  );
};

export default Gallery;
