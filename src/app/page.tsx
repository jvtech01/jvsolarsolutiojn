
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

const defaultContent: GenerateWebsiteContentOutput = {
  homepageHeadline: 'Power Your Future with Clean, Affordable Solar Energy',
  homepageSubtext: 'We provide top-tier solar panel installation and maintenance for homes and businesses. Get your free quote today and start saving on your energy bills!',
  aboutUsContent: 'We are a passionate team of certified solar professionals dedicated to helping our community transition to sustainable energy. With over a decade of experience, we guarantee quality installations, use only the highest-rated materials, and provide exceptional customer service from start to finish. Our mission is to make solar accessible and affordable for everyone.',
  servicesDescriptions: {
    'Residential Solar': 'Custom solar solutions for your home. We handle everything from design to installation, ensuring a seamless process to help you reduce energy bills and your carbon footprint.',
    'Commercial Solar': 'Large-scale solar installations for businesses. Improve your company\'s sustainability profile and achieve significant savings on operational costs with our tailored commercial systems.',
    'Inverter Installation': 'Expert installation of high-efficiency inverters from leading brands. Maximize your solar energy conversion and ensure the reliability of your system.',
    'Maintenance & Repairs': 'Comprehensive maintenance plans and prompt repair services to keep your system running at peak performance for years to come. We protect your investment.',
    'Battery Storage': 'Integrate battery storage with your solar system to store excess energy for use during outages or at night. Achieve true energy independence.',
  },
};

export default function Home() {
  const content = defaultContent;

  return (
    <main>
      <HeroSection headline={content.homepageHeadline} subtext={content.homepageSubtext} />
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
