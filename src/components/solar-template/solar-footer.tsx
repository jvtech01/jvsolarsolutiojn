
import { Sun, Twitter, Facebook, Instagram } from 'lucide-react';

export const SolarFooter = ({ companyName }: { companyName: string }) => (
  <footer className="bg-gray-900 text-gray-300">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2">
          <Sun className="w-6 h-6 text-primary" />
          <span className="font-bold">{companyName}</span>
        </div>
        <p className="text-sm mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} {companyName}. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="hover:text-white"><Facebook className="w-5 h-5" /></a>
          <a href="#" className="hover:text-white"><Instagram className="w-5 h-5" /></a>
        </div>
      </div>
    </div>
  </footer>
);
