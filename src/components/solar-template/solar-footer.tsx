
import { Sun, Twitter, Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';

export const SolarFooter = ({ companyName }: { companyName: string }) => (
  <footer className="bg-gray-900 text-gray-300">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <div className="col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2">
            <Sun className="w-7 h-7 text-primary" />
            <span className="text-xl font-bold text-white">{companyName}</span>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            Your partner in clean, renewable energy solutions.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white tracking-wider">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white tracking-wider">Services</h3>
          <ul className="mt-4 space-y-2">
            <li><Link href="/services" className="hover:text-white transition-colors">Residential Solar</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Commercial Solar</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Battery Storage</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Maintenance</Link></li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1">
          <h3 className="font-semibold text-white tracking-wider">Contact Us</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="text-gray-400">123 Solar Way, Austin, TX 78701</li>
            <li className="text-gray-400">contact@radiantsolar.com</li>
            <li className="text-gray-400">(512) 555-0123</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-gray-400 order-2 sm:order-1 mt-4 sm:mt-0">
          &copy; {new Date().getFullYear()} {companyName}. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-4 order-1 sm:order-2">
          <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
          <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
        </div>
      </div>
    </div>
  </footer>
);
