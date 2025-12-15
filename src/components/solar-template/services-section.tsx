
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sun, Building, Wrench, BatteryCharging, Power } from 'lucide-react';

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

export const ServicesSection = ({ services }: { services: Record<string, string> }) => (
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
          const Icon = getIconForService(title);
          return (
            <Card key={title} className="text-center hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="pt-2">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  </section>
);
