
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Sun, Building, Wrench, BatteryCharging, Power, Video, Wifi, KeyRound, Fence } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const serviceIcons: Record<string, React.ElementType> = {
  solar: Sun,
  cctv: Video,
  intercom: Wifi,
  dstv: Power,
  gate: KeyRound,
  fence: Fence,
};

const getIconForService = (serviceTitle: string): React.ElementType => {
  const title = serviceTitle.toLowerCase();
  if (title.includes('solar')) return serviceIcons.solar;
  if (title.includes('cctv')) return serviceIcons.cctv;
  if (title.includes('intercom')) return serviceIcons.intercom;
  if (title.includes('dstv')) return serviceIcons.dstv;
  if (title.includes('gate')) return serviceIcons.gate;
  if (title.includes('fence')) return serviceIcons.fence;
  return Power;
};

const getImageForService = (serviceTitle: string): ImagePlaceholder | undefined => {
  const title = serviceTitle.toLowerCase();
  if (title.includes('solar')) return PlaceHolderImages.find(img => img.id === 'residential');
  if (title.includes('cctv')) return PlaceHolderImages.find(img => img.id === 'commercial');
  if (title.includes('intercom')) return PlaceHolderImages.find(img => img.id === 'maintenance');
  if (title.includes('dstv')) return PlaceHolderImages.find(img => img.id === 'gallery1');
  if (title.includes('gate')) return PlaceHolderImages.find(img => img.id === 'gallery2');
  if (title.includes('fence')) return PlaceHolderImages.find(img => img.id === 'gallery3');
  return undefined;
};

export const ServicesSection = ({ services }: { services: Record<string, string> }) => {
    const phoneNumber = '2348087008364';
    const getWhatsAppLink = (serviceName: string) => {
        const message = `Hello, I would like to learn more about your ${serviceName} service.`;
        return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    }
  return (
  <section id="services" className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
          Comprehensive Solar & Security Services
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          From consultation to installation and beyond, we offer a full suite of services to meet your energy and security needs.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(services).map(([title, description]) => {
          const image = getImageForService(title);
          const Icon = getIconForService(title);
          return (
            <Card key={title} className="overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
              {image && (
                <div className="relative aspect-video">
                  <Image 
                    src={image.imageUrl} 
                    alt={image.description} 
                    fill 
                    className="object-cover"
                    data-ai-hint={image.imageHint} 
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon className="w-6 h-6 text-primary" />
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className='flex-grow'>
                <p className="text-muted-foreground">{description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={getWhatsAppLink(title)} target="_blank" rel="noopener noreferrer">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  </section>
)};
