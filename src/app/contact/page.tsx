
import { QuoteSection } from '@/components/solar-template/quote-section';
import { Map } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const contactHeroImage = PlaceHolderImages.find(img => img.id === 'gallery5');

export default function ContactPage() {
  return (
    <main>
      <section className="relative h-[400px] text-white">
        {contactHeroImage && (
            <Image
            src={contactHeroImage.imageUrl}
            alt={contactHeroImage.description}
            fill
            className="object-cover"
            data-ai-hint={contactHeroImage.imageHint}
            priority
            />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold">Contact Us</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">We're here to help you make the switch to solar. Reach out today!</p>
        </div>
      </section>
      <QuoteSection />
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">Visit Our Office</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                We welcome you to visit our office for a face-to-face consultation with one of our solar experts.
            </p>
            <div className="mt-8">
                 <div className="inline-flex items-center gap-4 text-lg">
                    <Map className="w-6 h-6 text-primary" />
                    <span>No 284 Nnebisi road Ekenem-Chukwu plaza, Asaba, Delta State</span>
                </div>
            </div>
            <div className="mt-8 h-80 w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.52923594833!2d6.721836815335035!3d6.193699328578649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043938562d47e5b%3A0x4f1784918a446366!2sRainoil%20Mall!5e0!3m2!1sen!2sng!4v1683808544837!5m2!1sen!2sng" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
      </section>
    </main>
  );
}
