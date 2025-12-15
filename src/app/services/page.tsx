
import { ServicesSection } from '@/components/solar-template/services-section';
import type { GenerateWebsiteContentOutput } from '@/lib/types';

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
  },
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesSection services={defaultContent.servicesDescriptions} />
    </main>
  );
}
