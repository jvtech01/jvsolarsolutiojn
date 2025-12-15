
import { Users, Target, Eye, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const aboutImage = PlaceHolderImages.find(img => img.id === 'about');
const teamImage = PlaceHolderImages.find(img => img.id === 'gallery5');

export default function AboutPage() {
  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '1,000+', label: 'Installations Done' },
    { value: '98%', label: 'Customer Satisfaction' },
    { value: '25-Year', label: 'Warranty' },
  ];

  return (
    <main>
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">About JV-SOLAR SOLUTIONS</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">Your Trusted Partner in Renewable Energy</p>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose lg:prose-lg max-w-none text-muted-foreground">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Who We Are</h2>
              <p>
                We are a passionate team of certified solar professionals dedicated to helping our community transition to sustainable energy. With over a decade of experience, we guarantee quality installations, use only the highest-rated materials, and provide exceptional customer service from start to finish. Our mission is to make solar accessible and affordable for everyone.
              </p>
              <p>
                Founded on the principles of integrity, innovation, and sustainability, JV-SOLAR SOLUTIONS has grown to become a leading solar provider in the region. We believe in the power of the sun to not only power our homes and businesses but also to power a brighter, cleaner future for generations to come.
              </p>
            </div>
             <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="p-8">
                    <Target className="w-12 h-12 mx-auto text-primary"/>
                    <h3 className="text-2xl font-bold mt-4">Our Mission</h3>
                    <p className="mt-2 text-muted-foreground">To accelerate the adoption of solar energy by providing high-quality, affordable, and reliable solar solutions that empower our customers and protect our planet.</p>
                  </div>
                   <div className="p-8">
                    <Eye className="w-12 h-12 mx-auto text-primary"/>
                    <h3 className="text-2xl font-bold mt-4">Our Vision</h3>
                    <p className="mt-2 text-muted-foreground">To be the most trusted and customer-centric solar company, leading the way towards a future where clean energy is accessible to everyone.</p>
                  </div>
                   <div className="p-8">
                    <Users className="w-12 h-12 mx-auto text-primary"/>
                    <h3 className="text-2xl font-bold mt-4">Our Team</h3>
                    <p className="mt-2 text-muted-foreground">Our success is driven by our dedicated team of certified engineers, installers, and energy consultants who share a passion for excellence and sustainability.</p>
                  </div>
               </div>
          </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Choose Us?</h2>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat) => (
                    <div key={stat.label} className="p-4 bg-card shadow-lg rounded-lg">
                        <p className="text-4xl font-bold text-primary">{stat.value}</p>
                        <p className="mt-2 text-muted-foreground">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

    </main>
  );
}
