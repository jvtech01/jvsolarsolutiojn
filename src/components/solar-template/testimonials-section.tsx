
'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';

const testimonials = [
  {
    name: 'John D.',
    location: 'Austin, TX',
    quote: "The team was professional, efficient, and clean. Our energy bills have dropped dramatically. Highly recommend!",
    avatar: 'JD',
  },
  {
    name: 'Sarah P.',
    location: 'Round Rock, TX',
    quote: "From the initial quote to the final inspection, the process was seamless. They answered all my questions and made me feel confident in my investment.",
    avatar: 'SP',
  },
  {
    name: 'Mike & Emily R.',
    location: 'Cedar Park, TX',
    quote: "We're so happy with our new solar panels! The installation was quick, and the aesthetic is fantastic. It's great to be producing our own clean energy.",
    avatar: 'ME',
  },
    {
    name: 'David L.',
    location: 'Georgetown, TX',
    quote: "Top-notch service and excellent communication. They handled everything, including the permits. I couldn't be happier with the result.",
    avatar: 'DL',
  },
  {
    name: 'Jessica H.',
    location: 'Pflugerville, TX',
    quote: "I was hesitant about the cost, but they showed me how the long-term savings and incentives made it a no-brainer. The best decision I've made for my home.",
    avatar: 'JH',
  },
];

export const TestimonialsSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
            What Our Customers Are Saying
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We pride ourselves on customer satisfaction. Here's what some of our clients have to share.
          </p>
        </div>
        <Carousel
          plugins={[plugin.current]}
          className="mt-12"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: 'start',
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex flex-col h-full">
                    <CardContent className="pt-6 flex-grow flex flex-col">
                      <p className="text-muted-foreground flex-grow">"{testimonial.quote}"</p>
                      <div className="mt-4 flex items-center justify-between">
                        <div className='flex items-center gap-4'>
                            <Avatar>
                                <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold text-foreground">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                            </div>
                        </div>
                         <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-5 h-5" />)}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
