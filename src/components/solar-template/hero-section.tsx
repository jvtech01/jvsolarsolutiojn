'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const heroImage = PlaceHolderImages.find(img => img.id === 'hero');

type HeroSectionProps = {
  headline: string;
  subtext: string;
};

const headlines = [
  'Power Your Future with Clean, Affordable Solar Energy',
  'Invest in a Brighter, Greener Future',
  'Unlock Savings with Sustainable Solar Power',
  'Your Partner for Reliable, Clean Energy',
];

export const HeroSection = ({ subtext }: HeroSectionProps) => {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [currentHeadline, setCurrentHeadline] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = headlines[headlineIndex];
      
      if (isDeleting) {
        setCurrentHeadline(prev => prev.substring(0, prev.length - 1));
      } else {
        setCurrentHeadline(prev => fullText.substring(0, prev.length + 1));
      }

      // If text is fully typed
      if (!isDeleting && currentHeadline === fullText) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 2000);
      } 
      // If text is fully deleted
      else if (isDeleting && currentHeadline === '') {
        setIsDeleting(false);
        setHeadlineIndex((prev) => (prev + 1) % headlines.length);
      }
    };

    const typingSpeed = isDeleting ? 50 : 150;
    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [currentHeadline, headlineIndex, isDeleting]);


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
        <h1 className="text-4xl md:text-6xl font-extrabold font-headline leading-tight drop-shadow-lg min-h-[144px] md:min-h-[192px]">
          {currentHeadline}
          <span className="animate-ping">|</span>
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
