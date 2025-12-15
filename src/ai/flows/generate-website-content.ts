'use server';

/**
 * @fileOverview A flow for generating website content for solar installation companies.
 *
 * - generateWebsiteContent - A function that generates website content for a solar installation company.
 * - GenerateWebsiteContentInput - The input type for the generateWebsiteContent function.
 * - GenerateWebsiteContentOutput - The return type for the generateWebsiteContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateWebsiteContentInputSchema = z.object({
  companyName: z.string().describe('The name of the solar installation company.'),
  servicesOffered: z
    .string()
    .describe(
      'A comma-separated list of services offered by the company, such as residential solar, commercial solar, inverter installation, and maintenance.'
    ),
  targetCity: z.string().describe('The city where the company primarily operates.'),
  uniqueSellingPoints: z
    .string()
    .describe(
      'A comma-separated list of the company`s unique selling points, such as years of experience, certifications, or special offers.'
    ),
});
export type GenerateWebsiteContentInput = z.infer<typeof GenerateWebsiteContentInputSchema>;

const GenerateWebsiteContentOutputSchema = z.object({
  homepageHeadline: z.string().describe('A compelling headline for the homepage.'),
  homepageSubtext: z.string().describe('Engaging subtext for the homepage.'),
  aboutUsContent: z.string().describe('Informative content for the About Us page.'),
  servicesDescriptions: z
    .record(z.string(), z.string())
    .describe('A map of service names to descriptions.'),
});

export type GenerateWebsiteContentOutput = z.infer<typeof GenerateWebsiteContentOutputSchema>;

export async function generateWebsiteContent(
  input: GenerateWebsiteContentInput
): Promise<GenerateWebsiteContentOutput> {
  return generateWebsiteContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateWebsiteContentPrompt',
  input: {schema: GenerateWebsiteContentInputSchema},
  output: {schema: GenerateWebsiteContentOutputSchema},
  prompt: `You are an expert copywriter specializing in creating website content for solar installation companies.

  Based on the information provided, generate compelling content for the website.

  Company Name: {{{companyName}}}
  Services Offered: {{{servicesOffered}}}
  Target City: {{{targetCity}}}
  Unique Selling Points: {{{uniqueSellingPoints}}}

  Instructions:
  *   Write a homepage headline that is attention-grabbing and clearly communicates the company's value proposition.
  *   Write engaging subtext for the homepage that expands on the headline and encourages visitors to learn more.
  *   Craft informative and persuasive content for the About Us page that highlights the company's expertise and commitment to customer satisfaction.
  *   Generate detailed descriptions for each service offered, emphasizing the benefits to the customer.

  Output the result in JSON format. The keys of the JSON are:
  * homepageHeadline
  * homepageSubtext
  * aboutUsContent
  * servicesDescriptions

  servicesDescriptions should be a JSON map that maps the service name to the description.

  Remember that the descriptions in the schema will be used as primary source of truth.
`,
});

const generateWebsiteContentFlow = ai.defineFlow(
  {
    name: 'generateWebsiteContentFlow',
    inputSchema: GenerateWebsiteContentInputSchema,
    outputSchema: GenerateWebsiteContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
