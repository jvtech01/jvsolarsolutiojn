
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Loader2, GalleryHorizontal, MessageSquareQuote, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { handleGenerateContent } from '@/app/actions';
import type { GenerateWebsiteContentOutput } from '@/lib/types';
import type { WebsiteSection } from '@/app/page';

const formSchema = z.object({
  companyName: z.string().min(2, { message: 'Company name is required.' }),
  servicesOffered: z.string().min(10, { message: 'Please list some services (comma-separated).' }),
  targetCity: z.string().min(2, { message: 'Target city is required.' }),
  uniqueSellingPoints: z.string().min(10, { message: 'Please list some selling points (comma-separated).' }),
});

type ContentGeneratorFormProps = {
  onContentGenerated: (content: GenerateWebsiteContentOutput, companyName: string) => void;
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  isLoading: boolean;
  visibleSections: Record<WebsiteSection, boolean>;
  setVisibleSections: (sections: Record<WebsiteSection, boolean>) => void;
};

export default function ContentGeneratorForm({
  onContentGenerated,
  setIsLoading,
  setError,
  isLoading,
  visibleSections,
  setVisibleSections,
}: ContentGeneratorFormProps) {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: 'Radiant Solar Solutions',
      servicesOffered: 'Residential Solar, Commercial Solar, Inverter Installation, Maintenance & Repairs, Battery Storage',
      targetCity: 'Austin, TX',
      uniqueSellingPoints: '10+ Years Experience, NABCEP Certified, 25-Year Warranty, Locally Owned',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    const result = await handleGenerateContent(values);
    setIsLoading(false);

    if (result.success && result.data) {
      onContentGenerated(result.data, values.companyName);
      toast({
        title: 'Content Generated!',
        description: 'The website preview has been updated.',
      });
    } else {
      setError(result.error || 'An unknown error occurred.');
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: result.error,
      });
    }
  }

  const handleSectionToggle = (section: WebsiteSection) => {
    setVisibleSections({
      ...visibleSections,
      [section]: !visibleSections[section],
    });
  };

  return (
    <Form {...form}>
      <div className="space-y-8">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., SunPower Solutions" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="servicesOffered"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Services Offered</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Residential solar, commercial solar..."
                    className="h-20"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Comma-separated list of services.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="targetCity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Target City</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., San Francisco, CA" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="uniqueSellingPoints"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Unique Selling Points</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="25-year warranty, certified installers..."
                    className="h-20"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Comma-separated list of key benefits.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading} className="w-full !mt-6">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              'Generate Website Content'
            )}
          </Button>
        </form>

        <Separator />

        <div>
          <h3 className="text-lg font-medium mb-4">Customize Sections</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg border bg-background">
              <div className="flex items-center gap-3">
                <GalleryHorizontal className="w-5 h-5 text-primary" />
                <Label htmlFor="gallery-switch" className="cursor-pointer">Photo Gallery</Label>
              </div>
              <Switch
                id="gallery-switch"
                checked={visibleSections.gallery}
                onCheckedChange={() => handleSectionToggle('gallery')}
              />
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg border bg-background">
              <div className="flex items-center gap-3">
                <MessageSquareQuote className="w-5 h-5 text-primary" />
                <Label htmlFor="testimonials-switch" className="cursor-pointer">Testimonials</Label>
              </div>
              <Switch
                id="testimonials-switch"
                checked={visibleSections.testimonials}
                onCheckedChange={() => handleSectionToggle('testimonials')}
              />
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg border bg-background">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-primary" />
                <Label htmlFor="quote-form-switch" className="cursor-pointer">Quote Form</Label>
              </div>
              <Switch
                id="quote-form-switch"
                checked={visibleSections.quoteForm}
                onCheckedChange={() => handleSectionToggle('quoteForm')}
              />
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
}
