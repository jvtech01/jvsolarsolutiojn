
import type { GenerateWebsiteContentOutput } from '@/lib/types';
import type { WebsiteSection } from '@/app/page';

import { SolarHeader } from './solar-template/solar-header';
import { HeroSection } from './solar-template/hero-section';
import { AboutSection } from './solar-template/about-section';
import { ServicesSection } from './solar-template/services-section';
import { GallerySection } from './solar-template/gallery-section';
import { TestimonialsSection } from './solar-template/testimonials-section';
import { QuoteSection } from './solar-template/quote-section';
import { SolarFooter } from './solar-template/solar-footer';

type WebsitePreviewProps = {
  data: {
    content: GenerateWebsiteContentOutput;
    companyName: string;
  } | null;
  visibleSections: Record<WebsiteSection, boolean>;
};

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

export default function WebsitePreview({ data, visibleSections }: WebsitePreviewProps) {
  const companyName = data?.companyName || 'Radiant Solar Solutions';
  const content = data?.content || defaultContent;

  return (
    <div className="bg-white text-gray-800 font-sans">
      <SolarHeader companyName={companyName} />
      <main>
        <HeroSection headline={content.homepageHeadline} subtext={content.homepageSubtext} />
        <AboutSection content={content.aboutUsContent} />
        <ServicesSection services={content.servicesDescriptions} />
        {visibleSections.gallery && <GallerySection />}
        {visibleSections.testimonials && <TestimonialsSection />}
        {visibleSections.quoteForm && <QuoteSection />}
      </main>
      <SolarFooter companyName={companyName} />
    </div>
  );
}
