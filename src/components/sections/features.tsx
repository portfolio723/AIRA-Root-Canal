import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Features() {
  const procImage = PlaceHolderImages.find(img => img.id === 'root-canal-procedure');
  const smileImage = PlaceHolderImages.find(img => img.id === 'patient-smile');

  return (
    <div className="space-y-20 py-24">
      {/* Why Root Canal? */}
      <section className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4 items-center">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-headline">Why Root Canal Treatment?</h2>
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

      {/* Who Needs it? - Redesigned section with image layout and vertical list */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4 items-center">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0 lg:order-1 order-2">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5] bg-muted">
                {smileImage?.imageUrl && (
                  <Image
                    src={smileImage.imageUrl}
                    alt={smileImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint="happy patient"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent pointer-events-none" />
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 px-4 lg:order-2 order-1">
              <div className="lg:pl-12">
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight font-headline">
                  Who Needs a Root Canal?
                </h2>
                <p className="text-xl text-muted-foreground mb-10">
                  You might benefit from a root canal if you have:
                </p>

                <ul className="space-y-5 mb-12">
                  {[
                    "Severe toothache",
                    "Pain when chewing",
                    "Sensitivity to hot or cold",
                    "Swollen gums",
                    "Deep decay or cavity",
                    "Darkening of the tooth"
                  ].map((symptom, i) => (
                    <li key={i} className="flex items-center gap-4 group">
                      <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-xl font-medium text-primary/80 group-hover:text-primary transition-colors">
                        {symptom}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="bg-primary/5 rounded-[32px] p-8 border border-primary/10">
                  <p className="text-lg text-primary/80 mb-8 font-medium leading-relaxed">
                    Don’t ignore the pain — early treatment saves your tooth and prevents complications.
                  </p>
                  <Button size="lg" className="bg-[#ff6b3d] hover:bg-[#e85a2d] text-white h-16 px-10 text-xl font-bold rounded-2xl shadow-xl transition-all hover:scale-105">
                    Book Your Free Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Early Treatment Matters */}
      <section className="container px-4 mx-auto pb-24">
        <div className="bg-primary text-white rounded-[40px] p-8 md:p-16 overflow-hidden relative">
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-headline">Why Early Treatment Matters</h2>
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
