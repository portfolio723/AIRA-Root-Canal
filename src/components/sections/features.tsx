import { CheckCircle2, AlertCircle, Sparkles, ShieldCheck, HeartPulse } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Features() {
  const procImage = PlaceHolderImages.find(img => img.id === 'root-canal-procedure');

  return (
    <div className="space-y-20 py-24">
      {/* Why Root Canal? */}
      <section className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4 items-center">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why Root Canal Treatment?</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Root canal therapy removes infection from inside a damaged tooth and saves it from extraction. If left untreated, infections can spread, causing pain, swelling, and more complex health problems.
              </p>
              <p>
                Aira Dental Clinic offers precise and comfortable root canal treatment in Kokapet to protect your natural teeth and restore dental health using modern techniques.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-muted">
              {procImage?.imageUrl && (
                <Image
                  src={procImage.imageUrl}
                  alt={procImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint="dentist procedure"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs it? */}
      <section className="bg-white py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Who Needs a Root Canal?</h2>
              <p className="text-lg text-muted-foreground">Don’t ignore the pain — early treatment saves your tooth and prevents complications. You might benefit if you have:</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Severe toothache",
                "Pain when chewing",
                "Sensitivity to hot or cold",
                "Swollen gums",
                "Deep decay or cavity",
                "Darkening of the tooth"
              ].map((symptom, i) => (
                <div key={i} className="flex items-center p-4 bg-background rounded-lg border border-primary/5">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium text-primary">{symptom}</span>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg">
                Book Your Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Early Treatment Matters */}
      <section className="container px-4 mx-auto">
        <div className="bg-primary text-white rounded-3xl p-8 md:p-16 overflow-hidden relative">
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Early Treatment Matters</h2>
            <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
              Ignoring tooth pain leads to abscess formation, bone loss, and spread of infection. It also results in higher treatment costs later. Root canal treatment restores oral health before it's too late.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {["No Abscess", "Save Bone", "Halt Infection", "Lower Cost"].map((point, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">{point}</span>
                </div>
              ))}
            </div>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary h-14 px-8 font-bold border-none">
              Save My Tooth Now
            </Button>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/3 bg-white/5 skew-x-12 transform origin-top pointer-events-none" />
        </div>
      </section>
    </div>
  );
}
