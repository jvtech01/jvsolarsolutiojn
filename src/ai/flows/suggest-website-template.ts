'use server';

/**
 * @fileOverview A flow to suggest website templates based on the services offered by a solar company.
 *
 * - suggestWebsiteTemplate - A function that suggests a website template.
 * - SuggestWebsiteTemplateInput - The input type for the suggestWebsiteTemplate function.
 * - SuggestWebsiteTemplateOutput - The return type for the suggestWebsiteTemplate function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestWebsiteTemplateInputSchema = z.object({
  servicesOffered: z
    .string()
    .describe('A description of the services offered by the solar company.'),
});
export type SuggestWebsiteTemplateInput = z.infer<typeof SuggestWebsiteTemplateInputSchema>;

const SuggestWebsiteTemplateOutputSchema = z.object({
  templateSuggestion: z
    .string()
    .describe('A suggestion for a website template that suits the solar company.'),
});
export type SuggestWebsiteTemplateOutput = z.infer<typeof SuggestWebsiteTemplateOutputSchema>;

export async function suggestWebsiteTemplate(input: SuggestWebsiteTemplateInput): Promise<SuggestWebsiteTemplateOutput> {
  return suggestWebsiteTemplateFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestWebsiteTemplatePrompt',
  input: {schema: SuggestWebsiteTemplateInputSchema},
  output: {schema: SuggestWebsiteTemplateOutputSchema},
  prompt: `You are an expert website template recommender for solar installation companies.

  Based on the services offered by the company, suggest a website template that would be suitable for them.

  Services offered: {{{servicesOffered}}}
  `,
});

const suggestWebsiteTemplateFlow = ai.defineFlow(
  {
    name: 'suggestWebsiteTemplateFlow',
    inputSchema: SuggestWebsiteTemplateInputSchema,
    outputSchema: SuggestWebsiteTemplateOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
