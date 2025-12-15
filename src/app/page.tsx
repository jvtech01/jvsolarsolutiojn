
'use client';

import { useState } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { Sun } from 'lucide-react';
import type { GenerateWebsiteContentOutput } from '@/lib/types';
import ContentGeneratorForm from '@/components/content-generator-form';
import WebsitePreview from '@/components/website-preview';

export type WebsiteSection = 'gallery' | 'testimonials' | 'quoteForm';

export default function Home() {
  const [data, setData] = useState<{
    content: GenerateWebsiteContentOutput;
    companyName: string;
  } | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [visibleSections, setVisibleSections] = useState<Record<WebsiteSection, boolean>>({
    gallery: true,
    testimonials: true,
    quoteForm: true,
  });

  const handleContentGenerated = (content: GenerateWebsiteContentOutput, companyName: string) => {
    setData({ content, companyName });
  };

  return (
    <div className="flex h-screen w-full bg-background font-sans">
      <aside className="w-full max-w-md h-full flex flex-col border-r bg-card shadow-lg z-10">
        <header className="p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Sun className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold font-headline text-foreground">
                SolarSite Showcase
              </h1>
              <p className="text-sm text-muted-foreground">
                AI-powered website generator for solar companies.
              </p>
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-6">
          <ContentGeneratorForm
            onContentGenerated={handleContentGenerated}
            setIsLoading={setIsLoading}
            setError={setError}
            isLoading={isLoading}
            visibleSections={visibleSections}
            setVisibleSections={setVisibleSections}
          />
        </div>
      </aside>
      <main className="flex-1 h-screen overflow-y-auto">
        {error && <div className="p-4 text-destructive-foreground bg-destructive">{error}</div>}
        <WebsitePreview data={data} visibleSections={visibleSections} />
      </main>
      <Toaster />
    </div>
  );
}
