
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const galleryHeroImage = PlaceHolderImages.find(img => img.id === 'gallery6');

const allGalleryImages = [
  'gallery1', 'gallery2', 'gallery3', 'gallery4', 'gallery5', 'gallery6',
  'hero', 'about', 'residential', 'commercial', 'maintenance', 'inverter'
].map(id => PlaceHolderImages.find(img => img.id === id)).filter(Boolean);


export default function GalleryPage() {
  return (
    <main>
       <section className="relative h-[400px] text-white">
        {galleryHeroImage && (
            <Image
            src={galleryHeroImage.imageUrl}
            alt={galleryHeroImage.description}
            fill
            className="object-cover"
            data-ai-hint={galleryHeroImage.imageHint}
            priority
            />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold">Project Gallery</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">A Showcase of Our Quality Craftsmanship</p>
        </div>
      </section>
      <section id="gallery" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {allGalleryImages.map((image, index) => image && (
              <div key={index} className="relative aspect-square rounded-xl overflow-hidden group shadow-lg">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={image.imageHint}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center p-4">
                   <p className="text-white text-center text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{image.description}</p>
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
