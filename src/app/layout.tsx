
import type {Metadata} from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { SolarHeader } from '@/components/solar-template/solar-header';
import { SolarFooter } from '@/components/solar-template/solar-footer';
import { WhatsappButton } from '@/components/ui/whatsapp-button';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Emmy-Digital telecom',
  description: 'Your trusted partner for solar and security solutions.',
  icons: {
    icon: '/images/favicon.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const companyName = 'Emmy-Digital telecom';
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${inter.variable} antialiased bg-background text-foreground`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
          <SolarHeader companyName={companyName} />
          {children}
          <WhatsappButton phoneNumber="2347045396856" />
          <SolarFooter companyName={companyName} />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
