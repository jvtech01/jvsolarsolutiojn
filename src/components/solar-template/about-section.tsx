
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export const AboutSection = ({ content }: { content: string }) => {
  const sellingPoints = [
    'Locally Owned & Operated',
    'Certified Installers',
    '25-Year Warranty',
    'Transparent Pricing',
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/images/about.jpg"
              alt="A diverse team of smiling engineers in hard hats."
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
              Your Trusted Local Solar Experts
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {content}
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-4">
              {sellingPoints.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-foreground" />
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
