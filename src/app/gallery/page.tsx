
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const allGalleryImages = [
  { src: '/images/gallery-1.jpg', alt: 'Close up of solar panels.' },
  { src: '/images/gallery-2.jpg', alt: 'Family in front of their house with solar panels.' },
  { src: '/images/gallery-3.jpg', alt: 'Drone shot of solar farm.' },
  { src: '/images/gallery-4.jpg', alt: 'Technician installing panels on a roof.' },
  { src: '/images/gallery-5.jpg', alt: 'A smiling homeowner with a tablet showing energy savings.' },
  { src: '/images/gallery-6.jpg', alt: 'Sunset over a field of solar panels.' },
  { src: '/images/gallery-7.jpg', alt: 'Solar panels on a commercial building.' },
  { src: '/images/gallery-8.jpg', alt: 'A modern solar inverter mounted on a wall.' },
  { src: '/images/gallery-9.jpg', alt: 'A sleek home battery storage unit.' },
];

export default function GalleryPage() {
  return (
    <main>
       <section className="relative h-[400px] text-white">
          <Image
            src="/images/gallery-hero.jpg"
            alt="Sunset over a field of solar panels."
            fill
            className="object-cover"
            priority
          />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold">Project Gallery</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">A Showcase of Our Quality Craftsmanship</p>
        </div>
      </section>
      <section id="gallery" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {allGalleryImages.map((image, index) => (
              <div key={index} className="relative aspect-square rounded-xl overflow-hidden group shadow-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center p-4">
                   <p className="text-white text-center text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
           <div className="text-center mt-16">
                <Button asChild size="lg">
                    <Link href="/contact">Get Your Project Started</Link>
                </Button>
            </div>
        </div>
      </section>
    </main>
  );
}
