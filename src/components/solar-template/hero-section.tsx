
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';

const heroImage1 = PlaceHolderImages.find(img => img.id === 'hero');
const heroImage2 = PlaceHolderImages.find(img => img.id === 'gallery6');
const heroImages = [heroImage1, heroImage2].filter(Boolean);


type HeroSectionProps = {
  headline: string;
  subtext: string;
};

export const HeroSection = ({ headline, subtext }: HeroSectionProps) => {
   const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  return (
    <section className="relative h-[600px] text-white">
       <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        opts={{
            align: 'start',
            loop: true,
        }}
        >
        <CarouselContent className='h-full'>
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className='h-full'>
              {image && (
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover"
                  data-ai-hint={image.imageHint}
                  priority={index === 0}
                />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold font-headline leading-tight drop-shadow-lg">
          {headline}
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-200 drop-shadow-md">
          {subtext}
        </p>
        <Button size="lg" className="mt-8" asChild>
          <Link href="/contact">Request a Free Consultation</Link>
        </Button>
      </div>
    </section>
  );
};
