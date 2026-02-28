'use server';
/**
 * @fileOverview AI Symptom Assessment Flow for Aira Dental Clinic.
 *
 * - assessSymptoms - A function that provides preliminary dental advice based on symptoms.
 * - SymptomAssessmentInput - The input schema for symptoms.
 * - SymptomAssessmentOutput - The structured output for the assessment.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const SymptomAssessmentInputSchema = z.object({
  symptoms: z.string().describe('The dental symptoms or pain described by the user.'),
});
export type SymptomAssessmentInput = z.infer<typeof SymptomAssessmentInputSchema>;

const SymptomAssessmentOutputSchema = z.object({
  preliminaryAnalysis: z.string().describe('A brief, professional analysis of the symptoms.'),
  urgencyLevel: z.enum(['Low', 'Medium', 'High']).describe('How urgent the situation appears to be.'),
  recommendation: z.string().describe('A friendly recommendation, always encouraging a professional consultation.'),
});
export type SymptomAssessmentOutput = z.infer<typeof SymptomAssessmentOutputSchema>;

export async function assessSymptoms(input: SymptomAssessmentInput): Promise<SymptomAssessmentOutput> {
  return symptomAssessmentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'symptomAssessmentPrompt',
  input: { schema: SymptomAssessmentInputSchema },
  output: { schema: SymptomAssessmentOutputSchema },
  prompt: `You are an expert dental assistant at Aira Dental Clinic, Kokapet. 
  A user has provided the following symptoms: "{{{symptoms}}}".
  
  Provide a professional, caring, and preliminary analysis. 
  Determine the urgency level.
  Always emphasize that this is not a diagnosis and that they MUST see a professional.
  Encourage them to book their FREE consultation at Aira Dental Clinic, especially mentioning our 30% discount on root canals if applicable.
  
  Keep the tone calm, clean, and clinical.`,
});

const symptomAssessmentFlow = ai.defineFlow(
  {
    name: 'symptomAssessmentFlow',
    inputSchema: SymptomAssessmentInputSchema,
    outputSchema: SymptomAssessmentOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) throw new Error('Failed to generate assessment');
    return output;
  }
);
