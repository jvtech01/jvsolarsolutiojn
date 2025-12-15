
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import React from 'react';

const heroImage = PlaceHolderImages.find(img => img.id === 'hero');

type HeroSectionProps = {
  headline: string;
  subtext: string;
};

export const HeroSection = ({ headline, subtext }: HeroSectionProps) => {
  return (
    <section className="relative h-[600px] text-white">
        {heroImage && (
            <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
            priority
            />
        )}
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
