
import type {Metadata} from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { SolarHeader } from '@/components/solar-template/solar-header';
import { SolarFooter } from '@/components/solar-template/solar-footer';
import { WhatsappButton } from '@/components/ui/whatsapp-button';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'JV-SOLAR SOLUTIONS',
  description: 'Your trusted partner for solar solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const companyName = 'JV-SOLAR SOLUTIONS';
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} antialiased bg-background text-foreground`}>
        <SolarHeader companyName={companyName} />
        {children}
        <WhatsappButton phoneNumber="2347045396856" />
        <SolarFooter companyName={companyName} />
        <Toaster />
      </body>
    </html>
  );
}
