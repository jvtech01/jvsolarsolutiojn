
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Sun, Building, Wrench, BatteryCharging, Power } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const serviceIcons: Record<string, React.ElementType> = {
  residential: Sun,
  commercial: Building,
  maintenance: Wrench,
  battery: BatteryCharging,
  inverter: Power,
};

const getIconForService = (serviceTitle: string): React.ElementType => {
  const title = serviceTitle.toLowerCase();
  if (title.includes('residential')) return serviceIcons.residential;
  if (title.includes('commercial')) return serviceIcons.commercial;
  if (title.includes('maintenance') || title.includes('repair')) return serviceIcons.maintenance;
  if (title.includes('battery')) return serviceIcons.battery;
  if (title.includes('inverter')) return serviceIcons.inverter;
  return Power;
};

const getImageForService = (serviceTitle: string): ImagePlaceholder | undefined => {
  const title = serviceTitle.toLowerCase();
  if (title.includes('residential')) return PlaceHolderImages.find(img => img.id === 'residential');
  if (title.includes('commercial')) return PlaceHolderImages.find(img => img.id === 'commercial');
  if (title.includes('maintenance') || title.includes('repair')) return PlaceHolderImages.find(img => img.id === 'maintenance');
  if (title.includes('battery')) return PlaceHolderImages.find(img => img.id === 'battery');
  if (title.includes('inverter')) return PlaceHolderImages.find(img => img.id === 'inverter');
  return undefined;
};

export const ServicesSection = ({ services }: { services: Record<string, string> }) => {
    const phoneNumber = '+2347045396856';
    const getWhatsAppLink = (serviceName: string) => {
        const message = `Hello, I would like to learn more about your ${serviceName} service.`;
        return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    }
  return (
  <section id="services" className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
          Comprehensive Solar Services
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          From consultation to installation and beyond, we offer a full suite of services to meet your energy needs.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(services).map(([title, description]) => {
          const image = getImageForService(title);
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
                <CardTitle>{title}</CardTitle>
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
