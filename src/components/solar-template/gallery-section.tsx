
import Image from 'next/image';

const galleryImages = [
  { src: '/images/gallery-1.jpg', alt: 'Close up of solar panels.' },
  { src: '/images/gallery-2.jpg', alt: 'Family in front of their house with solar panels.' },
  { src: '/images/gallery-3.jpg', alt: 'Drone shot of solar farm.' },
  { src: '/images/gallery-4.jpg', alt: 'Technician installing panels on a roof.' },
  { src: '/images/gallery-5.jpg', alt: 'A smiling homeowner with a tablet showing energy savings.' },
  { src: '/images/gallery-6.jpg', alt: 'Sunset over a field of solar panels.' },
];

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
        {galleryImages.map((image, index) => (
          <div key={index} className="relative aspect-video rounded-lg overflow-hidden group shadow-lg">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}
      </div>
    </div>
  </section>
);
