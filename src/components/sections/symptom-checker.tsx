'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { assessSymptoms, type SymptomAssessmentOutput } from '@/ai/flows/ai-symptom-assessment';
import { AlertCircle, Loader2, CheckCircle2 } from 'lucide-react';

export function SymptomChecker() {
  const [symptoms, setSymptoms] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SymptomAssessmentOutput | null>(null);

  async function handleAssess() {
    if (!symptoms.trim()) return;
    setLoading(true);
    try {
      const output = await assessSymptoms({ symptoms });
      setResult(output);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-24 bg-slate-50">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-primary mb-6 font-headline tracking-tight">
            AI Symptom Assessment Tool
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Feeling dental discomfort? Describe your symptoms below for a preliminary guide.
          </p>
        </div>

        <Card className="rounded-[32px] overflow-hidden border-primary/10 shadow-xl bg-white">
          <CardHeader className="bg-primary p-8 text-white">
            <CardTitle className="text-2xl font-medium">How are you feeling?</CardTitle>
            <CardDescription className="text-white/80 text-base">
              Enter your symptoms (e.g., "throbbing pain in the upper molar when drinking cold water")
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <Textarea
              placeholder="Describe your pain or symptoms here..."
              className="min-h-[120px] rounded-2xl border-primary/20 focus:ring-primary text-lg"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
            />
            
            <div className="flex justify-center">
              <Button
                onClick={handleAssess}
                disabled={loading || !symptoms.trim()}
                className="bg-primary hover:bg-primary/90 text-white h-14 px-12 text-lg font-medium rounded-full shadow-lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Analyzing Symptoms...
                  </>
                ) : (
                  'Check Symptoms'
                )}
              </Button>
            </div>

            {result && (
              <div className="mt-12 p-8 rounded-[24px] bg-primary/5 border border-primary/10 animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                    result.urgencyLevel === 'High' ? 'bg-red-100 text-red-600' : 'bg-primary/10 text-primary'
                  }`}>
                    <AlertCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Urgency Level</p>
                    <p className={`text-xl font-bold ${
                      result.urgencyLevel === 'High' ? 'text-red-600' : 'text-primary'
                    }`}>
                      {result.urgencyLevel}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Preliminary Analysis</h4>
                    <p className="text-slate-600 leading-relaxed text-lg">{result.preliminaryAnalysis}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Recommendation</h4>
                    <p className="text-slate-600 leading-relaxed text-lg">{result.recommendation}</p>
                  </div>

                  <div className="pt-6 border-t border-primary/10">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg font-medium rounded-2xl">
                      Book Your Free Consultation Now
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
