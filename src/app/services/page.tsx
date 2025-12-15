
import { ServicesSection } from '@/components/solar-template/services-section';
import type { GenerateWebsiteContentOutput } from '@/lib/types';
import { QuoteSection } from '@/components/solar-template/quote-section';
import { FaqSection } from '@/components/solar-template/faq-section';
import Image from 'next/image';

const defaultContent: GenerateWebsiteContentOutput = {
  homepageHeadline: '',
  homepageSubtext: '',
  aboutUsContent: '',
  servicesDescriptions: {
    'Solar/Inverter Installation': 'Custom solar and inverter solutions for your home or business. We handle everything from design to installation, ensuring a seamless process to help you reduce energy bills and your carbon footprint.',
    'CCTV Cameras Installation': 'Secure your property with our professional CCTV camera installation services. We offer high-quality cameras and expert setup for residential and commercial clients.',
    'Intercom Installation': 'Enhance communication and security within your property with our reliable intercom system installations. We provide solutions for both homes and offices.',
    'DSTV/Satellite Installation': 'Get the best entertainment with our DSTV and satellite installation services. We ensure optimal signal and a clean setup for your viewing pleasure.',
    'Automatic Remote Gate': 'Add convenience and security to your property with an automatic remote-controlled gate. We offer professional installation and maintenance services.',
    'Electric Fence Installation': 'Protect your perimeter with a high-voltage electric fence. Our installations are safe, reliable, and a powerful deterrent against intruders.',
  },
};

export default function ServicesPage() {
  return (
    <main>
      <section className="relative h-[400px] text-white">
        <Image
          src="/images/services-hero.jpg"
          alt="Drone shot of a solar farm."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold">Our Services</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">Full-Suite Solar & Security Solutions Tailored For You</p>
        </div>
      </section>
      <ServicesSection services={defaultContent.servicesDescriptions} />
      <FaqSection />
      <QuoteSection />
    </main>
  );
}
