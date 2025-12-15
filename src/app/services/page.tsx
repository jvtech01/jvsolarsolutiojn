
import { ServicesSection } from '@/components/solar-template/services-section';
import type { GenerateWebsiteContentOutput } from '@/lib/types';
import { QuoteSection } from '@/components/solar-template/quote-section';
import { FaqSection } from '@/components/solar-template/faq-section';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const servicesHeroImage = PlaceHolderImages.find(img => img.id === 'gallery3');

const defaultContent: GenerateWebsiteContentOutput = {
  homepageHeadline: '',
  homepageSubtext: '',
  aboutUsContent: '',
  servicesDescriptions: {
    'Residential Solar': 'Custom solar solutions for your home. We handle everything from design to installation, ensuring a seamless process to help you reduce energy bills and your carbon footprint.',
    'Commercial Solar': 'Large-scale solar installations for businesses. Improve your company\'s sustainability profile and achieve significant savings on operational costs with our tailored commercial systems.',
    'Inverter Installation': 'Expert installation of high-efficiency inverters from leading brands. Maximize your solar energy conversion and ensure the reliability of your system.',
    'Maintenance & Repairs': 'Comprehensive maintenance plans and prompt repair services to keep your system running at peak performance for years to come. We protect your investment.',
    'Battery Storage': 'Integrate battery storage with your solar system to store excess energy for use during outages or at night. Achieve true energy independence.',
    'Solar Financing': 'We offer flexible financing options to make your transition to solar energy as affordable as possible. Our team can help you find a plan that fits your budget.'
  },
};

export default function ServicesPage() {
  return (
    <main>
      <section className="relative h-[400px] text-white">
        {servicesHeroImage && (
            <Image
            src={servicesHeroImage.imageUrl}
            alt={servicesHeroImage.description}
            fill
            className="object-cover"
            data-ai-hint={servicesHeroImage.imageHint}
            priority
            />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold">Our Services</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">Full-Suite Solar Solutions Tailored For You</p>
        </div>
      </section>
      <ServicesSection services={defaultContent.servicesDescriptions} />
      <FaqSection />
      <QuoteSection />
    </main>
  );
}
