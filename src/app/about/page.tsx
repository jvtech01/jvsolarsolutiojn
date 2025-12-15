
import { AboutSection } from '@/components/solar-template/about-section';
import type { GenerateWebsiteContentOutput } from '@/lib/types';

const defaultContent: GenerateWebsiteContentOutput = {
  homepageHeadline: '',
  homepageSubtext: '',
  aboutUsContent: 'We are a passionate team of certified solar professionals dedicated to helping our community transition to sustainable energy. With over a decade of experience, we guarantee quality installations, use only the highest-rated materials, and provide exceptional customer service from start to finish. Our mission is to make solar accessible and affordable for everyone.',
  servicesDescriptions: {},
};

export default function AboutPage() {
  return (
    <main>
      <AboutSection content={defaultContent.aboutUsContent} />
    </main>
  );
}
