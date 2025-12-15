
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { products } from '@/lib/products';

export const FeaturedProducts = () => {
  const featured = products.slice(0, 2);
    const phoneNumber = '2347045396856';
    const getWhatsAppLink = (productName: string, productPrice: string) => {
        const message = `Hello, I'm interested in the ${productName} which costs ${productPrice}. Please provide more details.`;
        return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    }

  return (
    <section id="featured-products" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
            Featured Products
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Check out some of our best-selling solar products and equipment.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {featured.map((product) => {
            return (
              <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col bg-card">
                  <div className="relative aspect-square">
                    <Image
                      src={`/images/${product.imageSlug}.jpg`}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    {product.originalPrice && (
                       <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                          Sale!
                      </div>
                    )}
                  </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-semibold text-lg mb-2 flex-grow">{product.name}</h3>
                  <div className="flex items-center justify-between">
                      {product.originalPrice ? (
                          <div className="text-lg font-bold text-foreground">
                          <del className="text-sm font-normal text-muted-foreground">₦{product.originalPrice.toLocaleString()}</del>
                          <span className="ml-2">₦{product.currentPrice.toLocaleString()}</span>
                          </div>
                      ) : (
                          <p className="text-lg font-bold text-foreground">₦{product.currentPrice.toLocaleString()}</p>
                      )}
                  </div>
                   <Button asChild className="mt-4 w-full">
                      <Link href={getWhatsAppLink(product.name, `₦${product.currentPrice.toLocaleString()}`)} target="_blank" rel="noopener noreferrer">
                          Add to cart
                      </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
         <div className="text-center mt-12">
            <Button asChild size="lg">
                <Link href="/shop">View All Products</Link>
            </Button>
        </div>
      </div>
    </section>
  );
};
