
'use client';

import { HeroSection } from '@/components/solar-template/hero-section';
import { TestimonialsSection } from '@/components/solar-template/testimonials-section';
import { AboutSection } from '@/components/solar-template/about-section';
import { ServicesSection } from '@/components/solar-template/services-section';
import { GallerySection } from '@/components/solar-template/gallery-section';
import { FaqSection } from '@/components/solar-template/faq-section';
import { QuoteSection } from '@/components/solar-template/quote-section';
import type { GenerateWebsiteContentOutput } from '@/lib/types';
import { FeaturedProducts } from '@/components/solar-template/featured-products';
import { RunningText } from '@/components/solar-template/running-text';

const defaultContent: GenerateWebsiteContentOutput = {
  homepageHeadline: 'Power Your Future with Clean, Affordable Solar Energy',
  homepageSubtext: 'We provide top-tier solar/inverter installation, CCTV, DSTV, and security solutions for homes and businesses.',
  aboutUsContent: 'We are a passionate team of certified professionals dedicated to helping our community with sustainable energy and security solutions. With over a decade of experience, we guarantee quality installations, use only the highest-rated materials, and provide exceptional customer service from start to finish. Our mission is to make solar and security accessible and affordable for everyone.',
  servicesDescriptions: {
    'Solar/Inverter Installation': 'Custom solar and inverter solutions for your home or business. We handle everything from design to installation, ensuring a seamless process to help you reduce energy bills and your carbon footprint.',
    'CCTV Cameras Installation': 'Secure your property with our professional CCTV camera installation services. We offer high-quality cameras and expert setup for residential and commercial clients.',
    'Intercom Installation': 'Enhance communication and security within your property with our reliable intercom system installations. We provide solutions for both homes and offices.',
    'DSTV/Satellite Installation': 'Get the best entertainment with our DSTV and satellite installation services. We ensure optimal signal and a clean setup for your viewing pleasure.',
    'Automatic Remote Gate': 'Add convenience and security to your property with an automatic remote-controlled gate. We offer professional installation and maintenance services.',
    'Electric Fence Installation': 'Protect your perimeter with a high-voltage electric fence. Our installations are safe, reliable, and a powerful deterrent against intruders.',
  },
};

export default function Home() {
  const content = defaultContent;

  return (
    <main>
      <HeroSection headline={content.homepageHeadline} subtext={content.homepageSubtext} />
      <RunningText />
      <AboutSection content={content.aboutUsContent} />
      <ServicesSection services={content.servicesDescriptions} />
      <FeaturedProducts />
      <GallerySection />
      <TestimonialsSection />
      <FaqSection />
      <QuoteSection />
    </main>
  );
}
