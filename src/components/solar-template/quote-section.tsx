
'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import React from 'react';

export const QuoteSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send data to an API
    
    toast({
      title: "Request Submitted!",
      description: "Thank you for your interest. We will get back to you shortly.",
    });

    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
              Ready to Go Solar?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Contact us today for a free, no-obligation consultation and quote. Our experts are ready to design the perfect solar solution for you.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary" />
                <span>09033662797 / 07045396856</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary" />
                <span>contact@jvsolarsolutions.com</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Rainoil Mall, 295 Nnebisi Road, Asaba, Delta State</span>
              </div>
            </div>
          </div>
          <div className="p-8 bg-card rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-card-foreground">Get a Free Quote</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input placeholder="Full Name" required />
              <Input type="email" placeholder="Email Address" required/>
              <Input placeholder="Phone Number" />
              <Textarea placeholder="Tell us about your project..." />
              <Button type="submit" className="w-full">Submit Request</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
