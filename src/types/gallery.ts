
export type GalleryCategory = 'all' | 'exterior' | 'interior' | 'views';

export interface GalleryImage {
  id: string;
  src: string;
  alt?: string;
  category: GalleryCategory | GalleryCategory[];
}
