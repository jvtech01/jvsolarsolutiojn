
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const galleryImages = [
  'gallery1', 'gallery2', 'gallery3', 'gallery4', 'gallery5', 'gallery6'
].map(id => PlaceHolderImages.find(img => img.id === id)).filter(Boolean);

export const GallerySection = () => (
  <section id="gallery" className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
          Our Work
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          A glimpse into the quality and craftsmanship we bring to every project.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => image && (
          <div key={index} className="relative aspect-video rounded-lg overflow-hidden group shadow-lg">
            <Image
              src={image.imageUrl}
              alt={image.description}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              data-ai-hint={image.imageHint}
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}
      </div>
    </div>
  </section>
);
