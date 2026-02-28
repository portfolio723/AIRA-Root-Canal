'use server';
/**
 * @fileOverview An AI-powered tool for preliminary dental symptom assessment.
 *
 * - aiSymptomAssessment - A function that allows users to describe dental symptoms
 *   and receive preliminary information or advice.
 * - AISymptomAssessmentInput - The input type for the aiSymptomAssessment function.
 * - AISymptomAssessmentOutput - The return type for the aiSymptomAssessment function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AISymptomAssessmentInputSchema = z.object({
  symptoms: z
    .string()
    .describe('A detailed description of the dental symptoms the user is experiencing.'),
});
export type AISymptomAssessmentInput = z.infer<typeof AISymptomAssessmentInputSchema>;

const AISymptomAssessmentOutputSchema = z.object({
  preliminaryAdvice: z
    .string()
    .describe(
      'General information and preliminary advice based on the provided symptoms. This should be encouraging but cautious, emphasizing that it is not a diagnosis.'
    ),
  shouldConsult: z
    .boolean()
    .describe('True if a professional dental consultation is highly recommended based on the symptoms.'),
  consultationReason: z
    .string()
    .describe(
      'A brief explanation of why a consultation is recommended, if shouldConsult is true. This should highlight potential issues or the need for professional examination.'
    )
    .optional(),
});
export type AISymptomAssessmentOutput = z.infer<typeof AISymptomAssessmentOutputSchema>;

export async function aiSymptomAssessment(
  input: AISymptomAssessmentInput
): Promise<AISymptomAssessmentOutput> {
  return aiSymptomAssessmentFlow(input);
}

const aiSymptomAssessmentPrompt = ai.definePrompt({
  name: 'aiSymptomAssessmentPrompt',
  input: { schema: AISymptomAssessmentInputSchema },
  output: { schema: AISymptomAssessmentOutputSchema },
  prompt: `You are an AI dental assistant for Aira Dental Clinic. Your goal is to provide helpful, preliminary information and advice to users describing their dental symptoms. You are not a diagnostician, and your advice should always emphasize the need for professional consultation for accurate diagnosis and treatment.

Based on the user's symptoms, determine if a professional consultation is recommended and provide a reason if it is.

User's dental symptoms: {{{symptoms}}}`,
});

const aiSymptomAssessmentFlow = ai.defineFlow(
  {
    name: 'aiSymptomAssessmentFlow',
    inputSchema: AISymptomAssessmentInputSchema,
    outputSchema: AISymptomAssessmentOutputSchema,
  },
  async (input) => {
    const { output } = await aiSymptomAssessmentPrompt(input);
    return output!;
  }
);
