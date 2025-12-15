
import { CheckCircle } from 'lucide-react';

const highlights = [
    '25-Year Warranty',
    'Customer Satisfaction',
    '10+ Years Experience',
    'Certified Installers',
    'Affordable Pricing',
    'Sustainable Energy'
];

export const RunningText = () => {
  return (
    <div className="bg-accent text-accent-foreground py-4 overflow-hidden">
      <div className="animate-marquee-infinite">
        <div className="flex space-x-12 whitespace-nowrap">
          {highlights.concat(highlights).map((text, index) => (
            <div key={index} className="flex items-center gap-2 text-lg font-semibold">
                <CheckCircle className="w-5 h-5" />
                <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
