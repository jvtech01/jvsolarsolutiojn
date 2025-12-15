
import { Button } from '@/components/ui/button';
import { Sun } from 'lucide-react';
import Link from 'next/link';

export const SolarHeader = ({ companyName }: { companyName: string }) => (
  <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-lg shadow-sm">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2 group">
          <Sun className="w-7 h-7 text-primary group-hover:rotate-90 transition-transform duration-300" />
          <span className="text-xl font-bold tracking-tight text-foreground">{companyName}</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
          <Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </nav>
        <Button asChild size="sm" className="hidden md:inline-flex">
          <Link href="/contact">Get a Free Quote</Link>
        </Button>
      </div>
    </div>
  </header>
);
