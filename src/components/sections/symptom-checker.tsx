
'use client';

import { useState } from 'react';
import { aiSymptomAssessment, type AISymptomAssessmentOutput } from '@/ai/flows/ai-symptom-assessment';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Loader2, AlertTriangle, Stethoscope, Info } from 'lucide-react';

export function SymptomChecker() {
  const [symptoms, setSymptoms] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AISymptomAssessmentOutput | null>(null);

  const handleAssessment = async () => {
    if (!symptoms.trim()) return;
    setLoading(true);
    try {
      const output = await aiSymptomAssessment({ symptoms });
      setResult(output);
    } catch (error) {
      console.error('Assessment failed', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-primary/5">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">AI Dental Symptom Assessment</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Describe your symptoms to receive preliminary information. This tool is powered by AI and provides general guidance, not a medical diagnosis.
          </p>
        </div>

        <Card className="border-primary/20 shadow-xl">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <CardTitle className="flex items-center gap-2 text-primary">
              <Stethoscope className="h-6 w-6" />
              Quick Symptom Checker
            </CardTitle>
            <CardDescription>
              Describe what you're feeling (e.g., "Sharp pain when drinking cold water in upper molar")
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <Textarea
                  placeholder="Tell us about your dental symptoms..."
                  className="min-h-[120px] text-base resize-none"
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                />
              </div>
              
              <Button 
                onClick={handleAssessment} 
                disabled={loading || !symptoms.trim()}
                className="w-full bg-primary hover:bg-primary/90 h-12 text-lg"
              >
                {loading ? (
                  <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Analyzing Symptoms...</>
                ) : (
                  'Get Preliminary Advice'
                )}
              </Button>

              {result && (
                <div className="mt-8 space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
                  <Alert className="bg-white border-primary/20">
                    <Info className="h-5 w-5 text-primary" />
                    <AlertTitle className="text-primary font-bold">Preliminary Advice</AlertTitle>
                    <AlertDescription className="text-muted-foreground leading-relaxed mt-2">
                      {result.preliminaryAdvice}
                    </AlertDescription>
                  </Alert>

                  {result.shouldConsult && (
                    <Alert variant="destructive" className="bg-destructive/5 border-destructive/20">
                      <AlertTriangle className="h-5 w-5" />
                      <AlertTitle className="font-bold">Consultation Recommended</AlertTitle>
                      <AlertDescription className="mt-2">
                        {result.consultationReason}
                        <div className="mt-4">
                          <Button size="sm" variant="destructive">Book Urgent Appointment</Button>
                        </div>
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
