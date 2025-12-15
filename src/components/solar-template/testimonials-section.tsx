
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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
];

export const TestimonialsSection = () => (
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
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="flex flex-col">
            <CardContent className="pt-6 flex-grow flex flex-col">
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-5 h-5" />)}
              </div>
              <p className="text-muted-foreground flex-grow">"{testimonial.quote}"</p>
              <div className="mt-4 flex items-center gap-4">
                <Avatar>
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
