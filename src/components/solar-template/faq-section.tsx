
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How much money can I save with solar panels?',
    answer: 'The amount you can save depends on your electricity consumption, local utility rates, and the size of your solar system. Most homeowners see a significant reduction in their monthly bills, often saving tens of thousands of dollars over the lifetime of the system.',
  },
  {
    question: 'Are there any government incentives or tax credits available?',
    answer: 'Yes, there are several federal, state, and local incentives available for installing solar panels. The most significant is the federal Solar Investment Tax Credit (ITC), which allows you to deduct a percentage of the cost of your system from your federal taxes. We will help you identify all the incentives you qualify for.',
  },
  {
    question: 'How long do solar panels last?',
    answer: 'Our high-quality solar panels are built to last. They come with a 25-year performance warranty, but they can continue to generate power efficiently for 30 years or more with proper maintenance.',
  },
  {
    question: 'What happens on cloudy days or at night?',
    answer: 'Solar panels can still produce energy on cloudy days, though their output is reduced. At night, or during periods of low production, you will draw power from the utility grid. You can also add a battery storage system to store excess energy generated during the day for use at any time, providing energy independence.',
  },
  {
    question: 'How long does the installation process take?',
    answer: 'A typical residential installation takes just 1-3 days. The entire process, from initial consultation and design to final inspection, usually takes a few weeks. We handle all the permits and paperwork to make it as smooth as possible for you.',
  },
];

export const FaqSection = () => (
  <section id="faq" className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Have questions? We have answers. Here are some of the most common inquiries we receive.
        </p>
      </div>
      <div className="mt-12 max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);
