
'use server';

import { generateWebsiteContent, type GenerateWebsiteContentInput } from '@/ai/flows/generate-website-content';

export async function handleGenerateContent(data: GenerateWebsiteContentInput) {
  try {
    const result = await generateWebsiteContent(data);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error generating website content:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { success: false, error: `Failed to generate content. ${errorMessage}` };
  }
}
