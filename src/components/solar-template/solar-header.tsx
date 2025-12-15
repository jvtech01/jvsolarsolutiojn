
'use client';
import { Button } from '@/components/ui/button';
import { Sun, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { ModeToggle } from '../ui/mode-toggle';

export const SolarHeader = ({ companyName }: { companyName: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/shop', label: 'Shop' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-20 bg-background/80 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <Sun className="w-7 h-7 text-primary group-hover:rotate-90 transition-transform duration-300" />
            <span className="text-xl font-bold tracking-tight text-foreground">
              {companyName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
             {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <ModeToggle />
          </nav>
          <div className="items-center gap-4 hidden md:flex">
            <Button asChild size="sm">
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
          </div>
          

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <ModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full bg-background">
                 <SheetHeader className='border-b pb-4 flex-row justify-between items-center'>
                    <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                     <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
                        <Sun className="w-7 h-7 text-primary"/>
                        <span className="text-xl font-bold tracking-tight text-foreground">{companyName}</span>
                      </Link>
                      <SheetClose asChild>
                         <Button variant="ghost" size="icon">
                            <X className="w-6 h-6" />
                         </Button>
                      </SheetClose>
                </SheetHeader>
                <div className="flex flex-col h-full">
                  <nav className="flex-grow flex flex-col items-center justify-center gap-6 text-lg">
                    {navLinks.map((link) => (
                      <SheetClose key={link.href} asChild>
                        <Link
                          href={link.href}
                          className="font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <SheetClose asChild>
                    <Button asChild size="lg" className="w-full">
                       <Link href="/contact">Get a Free Quote</Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
