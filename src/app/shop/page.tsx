
import Image from 'next/image';
import Link from 'next/link';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { products } from '@/lib/products';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ShopPage() {
    const phoneNumber = '2347045396856';
    const getWhatsAppLink = (productName: string, productPrice: string) => {
        const message = `Hello, I'm interested in the ${productName} which costs ${productPrice}. Please provide more details.`;
        return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    }


  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <p className="text-muted-foreground">Showing 1–9 of {products.length} results</p>
        <Select defaultValue="price-asc">
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="price-asc">Sort by price: low to high</SelectItem>
            <SelectItem value="price-desc">Sort by price: high to low</SelectItem>
            <SelectItem value="popularity">Sort by popularity</SelectItem>
            <SelectItem value="rating">Sort by average rating</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => {
          const image = PlaceHolderImages.find((img) => img.id === product.imageSlug);
          return (
            <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              {image && (
                <div className="relative aspect-square">
                  <Image
                    src={image.imageUrl}
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
              )}
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
    </main>
  );
}
